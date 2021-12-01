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

import { fotosAlmofadas2 } from '../componentes/gallStore';

export default function GallAmofadas() {
  const length2 = fotosAlmofadas2.length;
  return (
    <>
      <Text fontSize="20px" fontWeight="bold">
        Almofadas 2 | {length2} |{' '}
        <Link href="/">
          <Button>Home</Button>
        </Link>
      </Text>
      <Grid templateColumns="repeat(2,1fr)">
        {fotosAlmofadas2.map((d, index) => (
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
              w='20rem'
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
