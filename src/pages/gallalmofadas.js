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

import {
  fotosAlmofadas,
  fotosAlmofadas1,
  fotosAlmofadas2,
} from '../componentes/gallStore';

export default function GallAmofadas() {
  const length = fotosAlmofadas.length;
  const length1 = fotosAlmofadas1.length;
  const length2 = fotosAlmofadas2.length;
  return (
    <>
      <Text fontSize="20px" fontWeight="bold">
        Almofadas | {length} | <Link href="/"><Button>Home</Button></Link>
      </Text>

      <Grid templateColumns="repeat(5,1fr)" className="list">
        {fotosAlmofadas.map((d, index) => (
          <Box key={index} maxW="100vh" borderWidth="1px" borderRadius="lg">
            {/* {index === current && ( */}
            <Image
              transition="all ease 0.2s"
              _hover={{ transform: 'scale(1)' }}
              transform="scale(0.9)"
              w="100%"
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
      </Grid>
      <Text fontSize="20px" fontWeight="bold">
        Almofadas 1 | {length1} | <Link href="/"><Button>Home</Button></Link>
      </Text>
      <Grid templateColumns='repeat(5,1fr)'>
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
              w="100%"
              src={d.imagem}
              alt={d.imagem}
            />
            {/* )} */}
          </Box>
        ))}
      </Grid>
      <Text fontSize="20px" fontWeight="bold">
        Almofadas 2 | {length2} | <Link href="/"><Button>Home</Button></Link>
      </Text>
      <Grid templateColumns='repeat(5,1fr)'>
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
              w="100%"
              src={d.imagem}
              alt={d.imagem}
            />
            {/* )} */}
          </Box>
        ))}
      </Grid>
    </>
  );
}
