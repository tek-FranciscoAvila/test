//COMMON
import { ButtonProps } from "@mantine/core";

// @ts-ignore
export interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonProps {
  text?: string;
  children?: React.ReactNode | string;
}

export interface TenantConfig {
  name: string;
  title: string;
  colors: {
    primary: string;
    secondary: string;
    highlight: string;
    contrast: string;
    shadow: string;
    background: string;
  };
  breakpoints: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  headings: {
    h1: {
      fontSize: string;
      fontWeight: string;
    };
    h2: {
      fontSize: string;
      fontWeight: string;
    };
    h3: {
      fontSize: string;
      fontWeight: string;
    };
    h6: {
      fontSize: string;
      fontWeight: string;
    };
  };
}
