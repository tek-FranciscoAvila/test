//COMMON
import { ButtonProps } from '@mantine/core';

// @ts-ignore
export interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, ButtonProps {
  text?: string;
  children?: React.ReactNode | string;
}