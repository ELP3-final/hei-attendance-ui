import React from 'react';
import { Box } from '@chakra-ui/react';
import { Layout } from '../../components';
import { Outlet } from 'react-router-dom';

export const Dashboard = () => (
  <Layout>
    <Box minH={'20vh'}>
      <Outlet />
    </Box>
  </Layout>
);
