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
    <>
      <Link href="/">
        <Button>Home</Button>
      </Link>
      <SimpleGrid
        textAlign="center"
        templateColumns="repeat(2,1fr)"
        spacing=""
        alignItems="center"
        justifyContent="center"
        minH="100vh"
        cursor="pointer"
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
          <Link href="/almofadas1">
            <Button>
              <Text>Gall Almofadas1</Text>
            </Button>
          </Link>
          <Link href="/almofadas2">
            <Button>
              <Text>Gall Almofadas2</Text>
            </Button>
          </Link>
          <Link href="/almofadas3">
            <Button>
              <Text>Gall Almofadas3</Text>
            </Button>
          </Link>
        </Box>
        <Box>
          <Link href="/camisetas">
            <Text>Gall Camisetas</Text>
          </Link>
        </Box>
        <Link href='/bolsas'>
          <Box>
            <Text>Gall Bolsas</Text>
          </Box>
        </Link>
        <Box color='gray.900'><Link href='/bolsasSf'><Button><Text>Gall Bolsas sem Fundo</Text></Button></Link></Box>
      </SimpleGrid>
    </>
  );
}
