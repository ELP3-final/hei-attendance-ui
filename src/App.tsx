import React from 'react';
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import { Auth } from './pages/auth';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Auth />
  </ChakraProvider >
);
