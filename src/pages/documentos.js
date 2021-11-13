/* eslint-disable @next/next/link-passhref */
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
} from '@chakra-ui/react';
import Link from 'next/link';

export default function Documentos() {
  return (
    <div>
      <Text fontSize="1.3rem">
        <b>Documentos Leonardo</b>
      </Text>

      <Grid templateColumns="repeat(4,1fr)" m="auto" w="100%">
        {documentos.map((d, index) => (
          <Box
            m="auto"
            w="15rem"
            key={index}
            borderWidth="1px"
            borderRadius="lg"
          >
            {/* {index === current && ( */}
            <Image
              transition="all ease 0.2s"
              _hover={{ transform: 'scale(1)' }}
              transform="scale(0.9)"
              w="15rem"
              src={d.imageUrl}
              alt={d.imageAlt}
              m="auto"
            />
            {/* )} */}

            <Box p="6">
              <Box display="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  New
                </Badge>
              </Box>

              <Box>{d.title}</Box>
            </Box>
          </Box>
        ))}
      </Grid>
      <Link href='/'>
        <Button>Home</Button>
      </Link>
    </div>
  );
}
