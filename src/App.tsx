import React from 'react';
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import { Routes, Route, Navigate } from 'react-router-dom';
import { Auth } from './pages/auth';
import { Overview } from './pages/dashboard/components/overview';
import { Dashboard } from './pages/dashboard';
import { CreateEvent, EventAction, EventList } from './pages/dashboard/components/event';
import { About } from './pages/dashboard/components/about';
import { Attendance } from './pages/dashboard/components/Attendance';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Routes>
      <Route index element={<Navigate to="/auth" />} />
      <Route path="/auth" element={<Auth />} />

      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<Navigate to="/dashboard/overview" />} />
        <Route path="/dashboard/overview" element={<Overview />} />

        <Route path="/dashboard/about" element={<About />} />

        <Route path="/dashboard/event" element={<EventAction />} />
        <Route path="/dashboard/event/create-event" element={<CreateEvent />} />
        <Route path="/dashboard/event/list" element={<EventList />} />

        {/* no match route will be redirected to the dashboard */}
        <Route path="*" element={<Navigate to="/dashboard/overview" />} />
      </Route>
    </Routes>
  </ChakraProvider >
);
