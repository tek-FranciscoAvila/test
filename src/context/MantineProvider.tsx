import React from "react";
import { MantineProvider, MantineThemeOverride } from "@mantine/core";
import { createTheme } from "@mantine/core";
import { useTenant } from "./TenantContext";
import { getCustomTheme } from "../../utils";

export const MantineProviderBase: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const tenant = useTenant();

  const customTheme = tenant ? getCustomTheme(tenant) : {};
  const theme = createTheme(customTheme as MantineThemeOverride);

  return <MantineProvider theme={theme}>{children}</MantineProvider>;
};
