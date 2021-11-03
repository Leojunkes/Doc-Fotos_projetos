/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import {
  
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button
} from '@chakra-ui/react';

import { Fotos } from '../componentes/contentPage.js';

function Home() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
    <Button onClick={onOpen}>Open Modal</Button>

<Modal isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>Modal Title</ModalHeader>
    <ModalCloseButton />
    <ModalBody>
      <Text>Ola sou gay e adoro ser gay, pois ser gay é muito bom !!!</Text>
    </ModalBody>

    <ModalFooter>
      <Button colorScheme="blue" mr={3} onClick={onClose}>
        Close
      </Button>
      <Button variant="ghost">Secondary Action</Button>
    </ModalFooter>
  </ModalContent>
</Modal>
      <Fotos />
    </>
  );
}
export default Home;
