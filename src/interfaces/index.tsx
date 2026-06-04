//COMMON
import { ButtonProps } from '@mantine/core';

// @ts-expect-error: Mantine ButtonProps types clash
export interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, ButtonProps {
  text?: string;
  children?: React.ReactNode | string;
}