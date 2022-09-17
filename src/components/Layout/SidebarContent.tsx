import { useColorModeValue, Flex, CloseButton, Text, Box } from '@chakra-ui/react';
import { SidebarProps } from '../../types/props/layout';
import { LinkItems } from './LinkItems';
import { NavItem } from './NavItem';

export const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('#001948', '#252525')}
      color={"#fff"}
      borderRightWidth="1px"
      borderRightColor={useColorModeValue('#fff', '#303030')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Attendance-UI
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map(({ label, ...rest }) => (
        <NavItem key={label} {...rest}>
          {label}
        </NavItem>
      ))}
    </Box>
  );
}; 
