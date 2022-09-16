import React from 'react';
import { HStack, Icon, Text } from '@chakra-ui/react';
import { FiActivity } from 'react-icons/fi';
import { Paper, DEFAULT_PAPER_STYLE } from '../../../../components';
import { HEI_COLOR } from '../../../../utils/constant';

export const RecentActivity = () => (
  <Paper sx={{ ...DEFAULT_PAPER_STYLE, p: 0, bg: '#f7f7f7', mb: 5 }}>
    <HStack p={2} borderRadius={'4px 4px 0 0'} bg={HEI_COLOR.YELLOW}>
      <Icon as={FiActivity} color={HEI_COLOR.BLUE} />
      <Text fontSize="lg" fontWeight="medium" color="#fff">Liste de vos évenement récent</Text>
    </HStack>
  </Paper>
);
