import { Fotos } from '../componentes/contentPage.js';
import { Flex } from '@chakra-ui/react';

export default function Home() {
  return (
    <Flex flexDirection='column'>
      <Fotos />
    </Flex>
  );
}
