import { Badge, Divider, Table, TableCaption, TableContainer, Tag, Tbody, Text, Th, Thead, Tr } from '@chakra-ui/react';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Paper } from '../../../../components';
import { MockProvider } from '../../../../providers/mocks';
import { HEI_COLOR } from '../../../../utils/constant';
import { useToggle } from '../../../../utils/hooks';
import { Attendance } from '../Attendance';

export const EventList = () => {
  const [rekoView, toggleRekoView] = useToggle();
  const navigate = useNavigate();


  return (
    <Paper bg={'#f7f7f7'}>
      <Text fontSize="3xl" pb={2}>List des évènements</Text>

      <Divider />

      <TableContainer py={5}>
        <Table variant='simple' align="center">
          <TableCaption>La liste des évènements qui vont venir</TableCaption>
          <Thead>
            <Tr>
              <Th>Responsable</Th>
              <Th>Type</Th>
              <Th>Lieu</Th>
              <Th>Debut</Th>
              <Th>Fin</Th>
            </Tr>
          </Thead>

          <Tbody>
            {MockProvider.Event.map((event) => {
              const { id, responsible, type, place, startDateTime, endDateTime } = event;
              return (
                <Tr onClick={toggleRekoView} cursor="pointer" _hover={{ bg: '#f3f3f3' }}>
                  <Th>{responsible}</Th>
                  <Th>
                    <Badge colorScheme='purple'>{type}</Badge>
                  </Th>
                  <Th>
                    <Tag bg={HEI_COLOR.YELLOW} color="#fff">
                      {place}
                    </Tag>
                  </Th>
                  <Th color={'green.400'}>{startDateTime.toLocaleDateString()}</Th>
                  <Th color={'red.400'}>{endDateTime.toLocaleDateString()}</Th>
                </Tr>
              )
            })
            }
          </Tbody>
        </Table>
      </TableContainer>

      {
        rekoView && (
          <Attendance close={toggleRekoView} />
        )
      }
    </Paper >
  )
};
