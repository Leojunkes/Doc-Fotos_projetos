/* eslint-disable @next/next/link-passhref */
/* eslint-disable react/jsx-no-undef */
import { documentos } from '../componentes/documentos_leo';
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

export default function GallProdutos() {
  return (
    <SimpleGrid
      textAlign="center"
      templateColumns="repeat(2,1fr)"
      spacing=""
      alignItems="center"
      justifyContent="center"
      minH="100vh"
    >
      <Box>
        <Link href="/gallfotos">
          <Button>
            <Text>Gall Fotos</Text>
          </Button>
        </Link>
      </Box>
      <Box>
        <Link href="/gallalmofadas">
          <Button>
            <Text>Gall Almofadas</Text>
          </Button>
        </Link>
      </Box>
      <Box>
        <Text>Gall Camisetas</Text>
      </Box>
      <Box>
        <Text>Gall Bolsas</Text>
      </Box>
    </SimpleGrid>
  );
}
