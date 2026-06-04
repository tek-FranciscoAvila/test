//COMMON
import { ButtonProps } from '@mantine/core';

// @ts-expect-error
export interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, ButtonProps {
  text?: string;
  children?: React.ReactNode | string;
}