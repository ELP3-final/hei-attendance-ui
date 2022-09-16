import React from 'react';
import { GroupList } from './GroupList';
import { RecentActivity } from './RecentActivity';

export const Overview = () => (
  <>
    <RecentActivity />
    <GroupList />
  </>
);
