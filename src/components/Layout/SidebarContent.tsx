import { useColorModeValue, Flex, CloseButton, Text, Box } from '@chakra-ui/react';
import { LinkItems } from './LinkItems';
import { NavItem } from './NavItem';
import { SidebarProps } from '../../types/props/Layout';

export const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={'#001948'}
      color={"#fff"}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
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
      {LinkItems.map((link) => (
        <NavItem key={link.label} icon={link.icon}>
          {link.label}
        </NavItem>
      ))}
    </Box>
  );
}; 
