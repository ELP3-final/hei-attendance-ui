import React, { useEffect, useState } from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { HEI_COLOR } from '../../../utils/constant';
import { Shape } from './Shape';
import { fakeLogin } from '../../../providers/mocks/auth-provider';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  let id = 0;

  const handleSubmit = () => {
    const logIn = async () => {
      setLoading(true)
      await fakeLogin();
      setLoading(false);
      navigate('/dashboard');
    }

    logIn()
  }


  useEffect(() => {
    return () => clearInterval(id);
  })

  return (
    <>
      <Shape />
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        zIndex={-2}
        bg={HEI_COLOR.BLUE}>
        <Stack mx={'auto'} maxW={'lg'} py={12} px={6} w={'30rem'} zIndex={2}>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Identifiant</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Mot de passe</FormLabel>
                <Input type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Button
                  bg={HEI_COLOR.YELLOW}
                  isLoading={loading}
                  color={'white'}
                  onClick={handleSubmit}
                  _hover={{
                    bg: HEI_COLOR.YELLOW_HOVER,
                  }}>
                  Se connécter
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex >
    </>
  );
}
