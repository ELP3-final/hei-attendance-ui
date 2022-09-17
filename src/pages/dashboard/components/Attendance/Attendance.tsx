import { Box, Divider, HStack, IconButton, Stack, SystemStyleObject, Text, Tooltip } from '@chakra-ui/react';
import { FaCamera, FaTimes } from 'react-icons/fa';
import { Paper } from '../../../../components';

const ATTENDACE_VIEW_STYLE: SystemStyleObject = {
  bg: '#f7f7f7',
  h: '100%',
  width: 'full',
  position: 'fixed',
  top: 0,
  left: 0,
  p: 3
}

export const Attendance = ({ close }: { close: () => void }) => {
  return (
    <Paper sx={ATTENDACE_VIEW_STYLE}>
      <HStack justifyContent={'space-between'} px={4}>
        <Text fontSize="3xl" pb={2}>En mode présence</Text>
        <Tooltip label="Prendre en photo">
          <IconButton
            onClick={close}
            colorScheme='red'
            borderRadius={'full'}
            aria-label='Search database'
            icon={<FaTimes />}
          />
        </Tooltip>
      </HStack>
      <Divider />

      <Stack h={"full"} w="full" direction="row" p={5} spacing={5}>
        <Box w={'75%'} bg={'#f7f7f7'} h="93%" borderRadius={5} boxShadow="md" p={2}>
          <Box p={1}>
            <Tooltip label="Prendre en photo">
              <IconButton
                colorScheme='blue'
                borderRadius={'full'}
                aria-label='Search database'
                icon={<FaCamera />}
              />
            </Tooltip>
          </Box>
          <Divider />
        </Box>

        <Box w={'25%'} bg={'#f7f7f7'} h="93%" borderRadius={5} boxShadow="md" p={2}>
          <Text fontSize="2xl" pb={3}>Participant</Text>

          <Divider />
        </Box>
      </Stack>
    </Paper>
  )
}
