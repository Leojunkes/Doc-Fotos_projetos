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

import { fotosAlmofadas1 } from '../componentes/gallStore';

export default function GallAmofadas() {
  const length1 = fotosAlmofadas1.length;

  return (
    <>
      <Text fontSize="20px" fontWeight="bold">
        Almofadas 1 | {length1} |{' '}
        <Link href="/">
          <Button>Home</Button>
        </Link>
      </Text>
      <Grid templateColumns="repeat(2,1fr)">
        {fotosAlmofadas1.map((d, index) => (
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
              src={d.imagem}
              alt={d.imagem}
              blurDataURL={d.imagem}
              loading="lazy"
            />
            {/* )} */}
          </Box>
        ))}
      </Grid>
    </>
  );
}
