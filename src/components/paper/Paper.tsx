import React from 'react';
import { Box, SystemStyleObject } from '@chakra-ui/react';
import { PaperProps } from '../../types/common';

export const DEFAULT_PAPER_STYLE: SystemStyleObject = {
  border: '1px solid rgb(0, 0, 0, 0.05)',
  borderRadius: 5,
  minHeight: '20vh',
  p: 5,
  boxShadow: '2px 1px 4px rgb(0, 0, 0, 0.05)',
  w: 'full'
}

export const Paper = ({ children, ...rest }: PaperProps) => (
  <Box sx={DEFAULT_PAPER_STYLE} {...rest}>
    {children}
  </Box>
);
