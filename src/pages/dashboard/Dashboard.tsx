import React from 'react';
import { Box } from '@chakra-ui/react';
import { HEI_COLOR } from '../../utils/constant';
import { Overview } from './components/overview';

export const Dashboard = () => (
  <Box minH={'20vh'}>
    <Overview />
  </Box>
);
