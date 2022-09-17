import { FormControl, FormLabel, InputGroup, Input, FormHelperText, Select, InputRightElement, Button, Divider, HStack, Alert, AlertIcon, AlertTitle } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { Paper } from '../../../../components';
import { FaHourglassEnd, FaHourglassStart, FaKey, FaLocationArrow, FaUser } from 'react-icons/fa';
import { HEI_COLOR } from '../../../../utils/constant';
import { useState } from 'react';

export const CreateEvent = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    mode: 'onChange'
  });

  // TODO: use the data-provider for this
  const onSubmit = (data: any) => {
    setLoading(true);
    setTimeout(() => setLoading(false), 4000);
  }

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
          <Input type="text" defaultValue={''} size="md" {...register('responsible', { required: 'Entrer le nom du responsable' })} isInvalid={errors.responsible && true} />
        </InputGroup>

        <FormHelperText>
          {errors.responsible ? (
            `${errors.responsible.message}`
          ) : 'hint: The creator of the event will be it\'s reponsible'}
        </FormHelperText>
      </FormControl>

      <FormControl my={5}>
        <FormLabel>Type</FormLabel>
        <InputGroup borderColor="#E0E1E7">
          <InputRightElement
            pointerEvents="none"
            children={<FaUser color="gray.800" />}
          />
          <Select {...register('type', { required: 'Entrer un type' })}>
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
          <Select {...register('place', { required: 'Entrer le lieu de l\'évènement' })}>
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
          <Input type="datetime-local" size="md" {...register('startDateTime', { required: 'cette champ est obligatoire' })} />
        </InputGroup>
      </FormControl>


      <FormControl my={5}>
        <FormLabel>Fin</FormLabel>
        <InputGroup borderColor="#E0E1E7">
          <InputRightElement
            pointerEvents="none"
            children={<FaHourglassEnd color="gray.800" />}
          />
          <Input type="datetime-local" size="md" {...register('endDateTime', { required: 'cette champ est obligatoire' })} />
        </InputGroup>
      </FormControl>

      <Divider />

      <HStack py={3} color="#fff">
        <Button
          bg={HEI_COLOR.YELLOW}
          _hover={{ bg: HEI_COLOR.YELLOW_HOVER }}
          type="submit"
          disabled={!isValid}
          onClick={handleSubmit(onSubmit)}
          isLoading={loading}
        >Enregistrer</Button>
        <Button bg="red.500">Annuler</Button>
      </HStack>
    </Paper>
  );
}
