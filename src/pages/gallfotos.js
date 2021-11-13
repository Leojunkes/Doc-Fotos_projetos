/* eslint-disable @next/next/link-passhref */
import {
  Text,
  Flex,
  Button,
  Box,
  Image,
  Badge,
  Grid,
  GridItem,
  SimpleGrid,
} from '@chakra-ui/react';
import Link from 'next/link';

import { fotosGall } from '../componentes/gallStore';

export default function GallFotos() {
  return (
    <Grid templateColumns="repeat(5,1fr)" className="list">
      {fotosGall.map((d, index) => (
        <Box key={index} w="15rem" borderWidth="1px" borderRadius="lg">
          {/* {index === current && ( */}
          <Image
            transition="all ease 0.2s"
            _hover={{ transform: 'scale(1)' }}
            transform="scale(0.9)"
            w="15rem"
            src={d.imagem}
            alt={d.imagem}
          />
          {/* )} */}

          <Box p="6">
            <Box display="flex" alignItems="baseline"></Box>

            <Box>{d.title}</Box>
          </Box>
        </Box>
      ))}
      <Link href='/'>
        <Button>Home</Button>
      </Link>
    </Grid>
  );
}
