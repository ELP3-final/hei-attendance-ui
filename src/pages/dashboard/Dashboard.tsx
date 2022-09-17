import React from 'react';
import { Box } from '@chakra-ui/react';
import { Overview } from './components/overview';
import { Layout } from '../../components';

export const Dashboard = () => (
  <Layout>
    <Box minH={'20vh'}>
      <Overview />
    </Box>
  </Layout>
);
