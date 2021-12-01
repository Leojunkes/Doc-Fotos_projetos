/* eslint-disable @next/next/link-passhref */
import {
  Text,
  Flex,
  Button,
  Box,
  Badge,
  Grid,
  GridItem,
  SimpleGrid,
  Image,
} from '@chakra-ui/react';
import Link from 'next/link';
import { lazy } from 'react';

import { fotosAlmofadas } from '../componentes/gallStore';

export default function GallAmofadas() {
  const length = fotosAlmofadas.length;

  return (
    <>
      <Text fontSize="20px" fontWeight="bold">
        Almofadas | {length} |{' '}
        <Link href="/">
          <Button>Home</Button>
        </Link>
      </Text>

      <Grid templateColumns="repeat(3,1fr)" className="list">
        {fotosAlmofadas.map((d, index) => (
          <Box key={index} maxW="100vh" borderWidth="1px" borderRadius="lg">
            {/* {index === current && ( */}
            <Image
              transition="all ease 0.2s"
              _hover={{ transform: 'scale(1)' }}
              w='20rem'
              transform="scale(0.9)"
              src={d.imagem}
              alt={d.imagem}
              blurDataURL={d.imagem}
              loading='lazy'
            />
            {/* )} */}

            <Box p="6">
              <Box display="flex" alignItems="baseline"></Box>

              <Box>{d.title}</Box>
            </Box>
          </Box>
        ))}
      </Grid>

      <Link href="/">
        <Button>Home</Button>
      </Link>
    </>
  );
}
