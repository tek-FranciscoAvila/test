import React from 'react';
import styles from './styles.module.css';
import {Box, Title} from "@mantine/core";
import {CustomButton} from "@/components";

export const HomeView = () => {
  return (
    <Box className={styles.main}>
      <Title order={4}>Hello world</Title>
      <CustomButton variant={'filled'}>Click me!</CustomButton>
    </Box>
  );
};