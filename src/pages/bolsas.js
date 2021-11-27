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
  
  import { fotosBolsas } from '../componentes/gallStore';
  
  export default function GallAmofadas() {
    const length = fotosBolsas.length;
    return (
      <>
        <Text fontSize="20px" fontWeight="bold">
          Bolsas | {length} |{' '}
          <Link href="/">
            <Button>Home</Button>
          </Link>
        </Text>
        <Grid templateColumns="repeat(3,1fr)">
          {fotosBolsas.map((d, index) => (
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
                loading="lazy"
              />
              {/* )} */}
            </Box>
          ))}
        </Grid>
      </>
    );
  }
  