/* eslint-disable @next/next/link-passhref */

import { Flex, Text, Button } from '@chakra-ui/react';
import Link from 'next/link';

export default function Home() {
  return (
    <Flex alignItems="center" justifyContent="center" minH="100vh">
      <fLex>
        <Link href="/documentos">
          <Button>Documentos_Leo</Button>
        </Link>
        <Link href="/gallprodutos">
          <Button>Gall-Store</Button>
        </Link>
      </fLex>
    </Flex>
  );
}
