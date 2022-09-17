import { HStack, Divider, Box, SystemCSSProperties, Link, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { Paper, DEFAULT_PAPER_STYLE } from '../../../../components';
import { HEI_COLOR } from '../../../../utils/constant';

const ACTION_BOX_STYLE: SystemCSSProperties = {
  w: 'full',
  justifyContent: 'center',
  alignItems: 'center',
  h: 40,
  display: 'flex',
  cursor: 'pointer'
}

export const EventAction = () => (
  <Paper sx={{ ...DEFAULT_PAPER_STYLE, p: 0, bg: '#f7f7f7', minH: '3vh' }}>
    <HStack divider={<Divider orientation='vertical' />} p={1} color={'#fff'}>

      <Link to="/dashboard/event/create-event" style={{ width: '100%', textDecoration: 'none' }} as={NavLink}>
        <Box
          sx={ACTION_BOX_STYLE}
          bg={HEI_COLOR.BLUE}
          _hover={{ bg: HEI_COLOR.BLUE_HOVER }}
          as={Paper}
        >
          <Text color={HEI_COLOR.YELLOW}>
            Créer un nouvel évènement
          </Text>
        </Box>
      </Link>

      <Link to="/dashboard/event/list" style={{ width: '100%', textDecoration: 'none' }} as={NavLink}>
        <Box
          sx={ACTION_BOX_STYLE}
          bg={HEI_COLOR.YELLOW}
          _hover={{ bg: HEI_COLOR.YELLOW_HOVER }}
          as={Paper}
        >
          <Text textDecorationColor="none">
            Voir tous les évènement
          </Text>
        </Box>
      </Link>

    </HStack>
  </Paper>
);
