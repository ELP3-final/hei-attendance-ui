import { Link, Flex, Icon } from '@chakra-ui/react';
import { NavItemProps } from '../../types/props/layout';
import { NavLink } from 'react-router-dom';
import { HEI_COLOR } from '../../utils/constant';

export const NavItem = ({ icon, to, children, _activeLink, ...rest }: NavItemProps) => {
  return (
    <Link style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }} as={NavLink} to={to} _activeLink={{ bg: HEI_COLOR.YELLOW }}>
      <Flex
        align="center"
        marginBlock='0.6rem'
        p="3"
        mx="4"
        bg="inherit"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: HEI_COLOR.BLUE_HOVER,
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
