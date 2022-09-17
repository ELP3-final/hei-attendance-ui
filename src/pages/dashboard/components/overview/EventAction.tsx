import { HStack, Icon, Button, Divider, useColorModeValue } from '@chakra-ui/react';
import { FaPlusCircle, FaVoicemail } from 'react-icons/fa'
import { FiLayout } from 'react-icons/fi';
import { Paper, DEFAULT_PAPER_STYLE } from '../../../../components';
import { HEI_COLOR } from '../../../../utils/constant';

export const EventAction = () => (
  <Paper sx={{ ...DEFAULT_PAPER_STYLE, p: 0, bg: '#f7f7f7', minH: '3vh' }}>
    <HStack divider={<Divider orientation='vertical' />}>
      <Icon as={FiLayout} fontSize={'7xl'} bg={'blackAlpha.100'} />

      <Button leftIcon={<FaPlusCircle />} colorScheme={'blackAlpha'} variant='solid'>
        Créer un nouvel évènement
      </Button>

      <Button leftIcon={<FaVoicemail />} bg={HEI_COLOR.YELLOW} color={useColorModeValue("#fff", '#000')} _hover={{ bg: '#DFA408' }} variant='solid'>
        Voir tous les évènement
      </Button>
    </HStack>
  </Paper>
);
