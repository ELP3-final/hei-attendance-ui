import React from 'react';
import { Box } from '@chakra-ui/react';
import { HEI_COLOR } from '../../../utils/constant';

export const Shape = () => (
  <>
    <Box top={50} left={60} w={50} bg={HEI_COLOR.YELLOW} position="fixed" h={50} />
    <Box top={80} left={80} w={50} bg={HEI_COLOR.YELLOW} position="fixed" h={50} />
    <Box top={0} right={80} w={80} bg={HEI_COLOR.YELLOW} position="fixed" h={'container.sm'} zIndex={0} />
  </>
)
