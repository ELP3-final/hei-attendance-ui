import React from 'react';
import { Text } from '@chakra-ui/react';
import { DEFAULT_PAPER_STYLE, Paper } from '../../../../components';

export const About = () => (
  <Paper bg={'#f7f7f7'} sx={{ ...DEFAULT_PAPER_STYLE, p: 5 }}>
    <Text fontWeight={'bold'} pb={2}>HEI ADMIN</Text> est une application
  </Paper>
);
