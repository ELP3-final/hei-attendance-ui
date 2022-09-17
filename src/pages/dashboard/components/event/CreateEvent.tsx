import React from 'react';
import { FormControl, FormLabel, InputGroup, InputLeftElement, Input, FormHelperText, Select, MenuItem, SelectField, InputRightElement, InputLeftAddon, Button, Divider, HStack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { Paper } from '../../../../components';
import { FiVoicemail } from 'react-icons/fi';
import { FaHourglass, FaHourglassEnd, FaHourglassStart, FaKey, FaLocationArrow, FaMitten, FaPersonBooth, FaTimes, FaUser } from 'react-icons/fa';
import { HEI_COLOR } from '../../../../utils/constant';

export const CreateEvent = () => {
  const { register, handleSubmit } = useForm();

  return (
    <Paper bg={'#f7f7f7'}>
      <FormControl my={5}>
        <FormLabel>Identifiant</FormLabel>
        <InputGroup borderColor="#E0E1E7">
          <InputRightElement
            pointerEvents="none"
            children={<FaKey color="gray.800" />}
          />
          <Input type="text" size="md" disabled />
        </InputGroup>
        <FormHelperText>hint: don't edit this. It'll be generated automatically</FormHelperText>
      </FormControl>

      <FormControl my={5}>
        <FormLabel>Responsable</FormLabel>
        <InputGroup borderColor="#E0E1E7">
          <InputRightElement
            pointerEvents="none"
            children={<FaUser color="gray.800" />}
          />
          <Input type="text" size="md" disabled value={'Your name'} />
        </InputGroup>
      </FormControl>

      <FormControl my={5}>
        <FormLabel>Type</FormLabel>
        <InputGroup borderColor="#E0E1E7">
          <InputRightElement
            pointerEvents="none"
            children={<FaUser color="gray.800" />}
          />
          <Select>
            <option value="Course">Course</option>
            <option value="Event">Event</option>
          </Select>
        </InputGroup>
      </FormControl>

      <FormControl my={5}>
        <FormLabel>Lieu</FormLabel>
        <InputGroup borderColor="#E0E1E7">
          <InputRightElement
            pointerEvents="none"
            children={<FaLocationArrow color="gray.800" />}
          />
          <Select>
            <option value="Course">HEI Ivandry</option>
            <option value="Event">AF Andavamamba</option>
          </Select>
        </InputGroup>
      </FormControl>

      <FormControl my={5}>
        <FormLabel>Debut</FormLabel>
        <InputGroup borderColor="#E0E1E7">
          <InputRightElement
            pointerEvents="none"
            children={<FaHourglassStart color="gray.800" />}
          />
          <Input type="datetime-local" size="md" />
        </InputGroup>
      </FormControl>


      <FormControl my={5}>
        <FormLabel>Fin</FormLabel>
        <InputGroup borderColor="#E0E1E7">
          <InputRightElement
            pointerEvents="none"
            children={<FaHourglassEnd color="gray.800" />}
          />
          <Input type="datetime-local" size="md" />
        </InputGroup>
      </FormControl>

      <Divider />

      <HStack py={3} color="#fff">
        <Button bg={HEI_COLOR.YELLOW} _hover={{ bg: HEI_COLOR.YELLOW_HOVER }}>Enregistrer</Button>
        <Button bg="red.500">Annuler</Button>
      </HStack>
    </Paper >
  );
}
