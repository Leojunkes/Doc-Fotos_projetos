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

import { fotosCamisetas } from '../componentes/gallStore';

export default function GallAmofadas() {
  const [search, setSearch] = useState();
  const length = fotosCamisetas.length;
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
      <Grid templateColumns="repeat(3,1fr)">
        {fotosCamisetas
          .filter((val) => {
            if (search == '') {
              return val;
            }
          })
          .map((d, index) => (
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
