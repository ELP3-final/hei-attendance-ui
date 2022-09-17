import React from 'react';
import { EventAction } from './EventAction';
import { RecentActivity } from './RecentActivity';

export const Overview = () => (
  <>
    <RecentActivity />
    <EventAction />
  </>
);
