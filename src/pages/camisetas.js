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
  Input,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useState } from 'react';
import JSONDATA from '/Mocks/MOCK_DATA.json';

import { fotosCamisetas } from '../componentes/gallStore';

export default function GallAmofadas() {
  const [search, setSearch] = useState('');
  const length = fotosCamisetas.length;
  console.log(JSONDATA);
  console.log(fotosCamisetas);
  return (
    <>
      <Text fontSize="20px" fontWeight="bold">
        Camisetas | {length} |{' '}
        <Link href="/">
          <Button>Home</Button>
        </Link>
      </Text>
      <Input
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <Grid gap="8" templateColumns="repeat(2,1fr)">
        {JSONDATA.filter((val) => {
          if (search === '') {
            return val;
          } else if (val.title.toLowerCase().startsWith(search)) {
            return val;
          }
        }).map((d, index) => {
          return (
            <Box
              alignItems='center'
              m='auto'
              key={index}
              
            >
              <Image
                transition="all ease 0.2s"
                _hover={{ transform: 'scale(1)' }}
                transform="scale(0.9)"
                w="10s0%"
                src={d.imagem}
                alt={d.imagem}
                loading="lazy"
              />
              <Text textAlign='center'>{d.title}</Text>
            </Box>
          );
        })}
      </Grid>
    </>
  );
}
