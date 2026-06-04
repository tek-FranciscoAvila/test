import React, { createContext, useContext, useState, useEffect } from "react";
import { TenantConfig } from "@/interfaces";
const DEFAULT_TENANT_CONFIG: TenantConfig = {
  name: "Default",
  title: "Default Title",
  colors: {
    primary: "#342DF0",
    secondary: "#060270",
    highlight: "#060270",
    contrast: "#060270",
    shadow: "#060270",
    background: "#FFFFFF",
  },
  breakpoints: {
    xs: "300px",
    sm: "600px",
    md: "990px",
    lg: "1450px",
    xl: "1600px ",
  },
  headings: {
    h1: {
      fontSize: "40px",
      fontWeight: "700",
    },
    h2: {
      fontSize: "20px",
      fontWeight: "500",
    },
    h3: {
      fontSize: "14px",
      fontWeight: "300",
    },
    h6: {
      fontSize: "11px",
      fontWeight: "500",
    },
  },
};

const TenantContext = createContext<TenantConfig | null>(null);

export const TenantProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [tenantConfig, setTenantConfig] = useState<TenantConfig | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTenantConfig = async () => {
      try {
        const cachedConfig = localStorage.getItem("tenantConfig");
        if (cachedConfig) {
          const { config, timestamp } = JSON.parse(cachedConfig);
          const isFresh = Date.now() - timestamp < 3600 * 12;
          if (isFresh) {
            setTenantConfig(config);
            setLoading(false);
            return;
          }
        }

        const url = window.location.hostname;
        const cloudFrontDomain = import.meta.env.VITE_CLOUDFRONT_DOMAIN;
        const configUrl = `https://${cloudFrontDomain}/${url}.json`;

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 2000);

        const response = await fetch(configUrl, {
          method: "GET",
          signal: controller.signal,
        });
        clearTimeout(timeoutId);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const configData = await response.json();
        setTenantConfig(configData);
        localStorage.setItem(
          "tenantConfig",
          JSON.stringify({ config: configData, timestamp: Date.now() })
        );
      } catch (error) {
        console.error("Error fetching tenant config:", error);
        setTenantConfig(DEFAULT_TENANT_CONFIG);
      } finally {
        setLoading(false);
      }
    };

    fetchTenantConfig();
  }, []);

  if (tenantConfig) {
    document.documentElement.style.setProperty(
      "--tenant-primary",
      tenantConfig.colors.primary
    );
    document.documentElement.style.setProperty(
      "--tenant-background",
      tenantConfig.colors.background
    );
    document.documentElement.style.setProperty(
      "--tenant-secondary",
      tenantConfig.colors.secondary
    );
  }

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <p>Loading configuration...</p>
      </div>
    );
  }

  if (!tenantConfig) {
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h2>Error loading configuration</h2>
        <p>Please try reloading the page or contact the technical support.</p>
      </div>
    );
  }

  return (
    <TenantContext.Provider value={tenantConfig}>
      {children}
    </TenantContext.Provider>
  );
};

export const useTenant = (): TenantConfig => {
  const context = useContext(TenantContext);
  if (!context) {
    throw new Error("useTenant must be used within a TenantProvider");
  }
  return context;
};
