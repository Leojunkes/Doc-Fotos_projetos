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

import { fotosAlmofadas3 } from '../componentes/gallStore';

export default function GallAmofadas() {
  const length3 = fotosAlmofadas3.length;
  return (
    <>
      <Text fontSize="20px" fontWeight="bold">
        Almofadas 3 | {length3} |{' '}
        <Link href="/">
          <Button>Home</Button>
        </Link>
      </Text>
      <Grid templateColumns="repeat(2,1fr)">
        {fotosAlmofadas3.map((d, index) => (
          <Box
            textAlign="center"
            key={index}
            borderWidth="1px"
            borderRadius="lg"
          >
            {/* {index === current && ( */}
            <Image
              transition="all ease 0.2s"
              _hover={{ transform: 'scale(1)' }}
              transform="scale(0.9)"
              w='25rem'
              src={d.imagem}
              alt={d.imagem}
              loading="lazy"
            />
            {/* )} */}
          </Box>
        ))}
      </Grid>
    </>
  );
}
