import React from 'react';
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import { Routes, Route, Navigate } from 'react-router-dom';
import { Auth } from './pages/auth';
import { Overview } from './pages/dashboard/components/overview';
import { Dashboard } from './pages/dashboard';

const AttendanceAdmin = () => (
  <Routes>
    <Route path="/" element={<Dashboard />}>
      <Route index element={<Navigate to="/dashboard/overview" />} />
      <Route path="/overview" element={<Overview />} />
      <Route path="*" element={<Navigate to="/dashboard/overview" />} />
    </Route>
  </Routes>
)

export const App = () => (
  <ChakraProvider theme={theme}>
    <Routes>
      <Route index element={<Navigate to="/auth" />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/dashboard/*" element={<AttendanceAdmin />} />
    </Routes>
  </ChakraProvider >
);
