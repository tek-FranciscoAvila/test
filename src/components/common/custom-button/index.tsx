import {FC} from 'react';
import {Box, Button} from "@mantine/core";
import {CustomButtonProps} from "@/interfaces";

export const CustomButton:FC<CustomButtonProps> = (props) => {
  const { children} = props;
  return (
    <Box>
      <Button
            variant={'filled'}
          {...props}>{children}</Button>
    </Box>
  );
};