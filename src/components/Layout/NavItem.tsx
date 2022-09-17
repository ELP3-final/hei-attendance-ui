import { Link, Flex, Icon } from '@chakra-ui/react';
import { NavItemProps } from '../../types/props/layout';
import { Link as NavLink } from 'react-router-dom';

export const NavItem = ({ icon, to, children, ...rest }: NavItemProps) => {
  return (
    <Link style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }} as={NavLink} to={to}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: '#dfa408',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};
