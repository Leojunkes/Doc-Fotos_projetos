import { documentos } from '../componentes/propertyTest.js';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';
import { fotosGall } from '../componentes/gallStore.js';

import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

import {
  Box,
  Badge,
  Button,
  Flex,
  Input,
  Stack,
  Text,
  Image,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export function Fotos() {
  const [doc, setDoc] = useState([]);
  const [scrollx, setScrollx] = useState(-1);
  const [buscar, setBuscar] = useState('');
  const { isOpen, onClose, onOpen } = useDisclosure();
  const length = documentos.length;

  // const dados = documentos1.filter((d) => d.startsWith(buscar));
  // const dados1 = documentos.filter((f) => f.startsWith(buscar));
  console.log(length);
  console.log(buscar);

  function handleRightArrow() {
    let x = scrollx - Math.round(window.innerWidth / 2);
    let listw = length * 150;
    if (window.innerWidth - listw > x) {
      x = window.innerWidth - listw - 40;
    }
    setScrollx(x);
  }

  function handleLeftArrow() {
    let x = scrollx + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollx(x);
  }

  // function nextSlide() {
  //   setCurrent(current === length - 1 ? 0 : current + 1);
  //   console.log(current);
  // }
  // function previousSlide() {
  //   setCurrent(current === 0 ? length - 1 : current - 1);
  //   console.log(current);
  // }

  // if (length <= 0) {
  //   return null;
  //}

  return (
    <Flex
      flexDirection="column"

      // justifyContent="center"
      // alignItems="center"
    >
      <Text fontSize="22px">
        <b>Documentos Leonardo</b>
      </Text>
      {/* <Input
        value={buscar}
        type="text"
        onChange={(ev) => setBuscar(ev.target.value)}
      /> */}

      {/* {documentos.map((d, index) => (
        <Modal key={index} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{d.title}</ModalHeader>
            <ModalHeader>{d.id}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>
                Ola sou gay e adoro ser gay, pois ser gay é muito bom !!!
              </Text>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      ))} */}

      <Flex m="auto" w="100%" className="listArea" overflowX="hidden">
        <Button
          opacity="0.9"
          position="absolute"
          w="4rem"
          left="0"
          onClick={handleLeftArrow}
          mt="5rem"
        >
          <AiFillLeftCircle fontSize="20rem" />
        </Button>
        <Button
          overflow="hidden"
          opacity="0.9"
          right="0"
          position="absolute"
          width="4rem"
          onClick={handleRightArrow}
          mt="5rem"
        >
          <AiFillRightCircle fontSize="20rem" />
        </Button>
        <Flex transition="all ease 0.5s" ml={scrollx} className="list">
          {documentos.map((d, index) => (
            <Box key={index} maxW="100vh" borderWidth="1px" borderRadius="lg">
              <Flex w="150px" display="inline-block" className="item">
                {/* {index === current && ( */}
                <Image
                  transition="all ease 0.2s"
                  _hover={{ transform: 'scale(1)' }}
                  transform="scale(0.9)"
                  w="100%"
                  src={d.imageUrl}
                  alt={d.imageAlt}
                />
                {/* )} */}
              </Flex>

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
        </Flex>
      </Flex>
      <Text fontSize="22px">
        <Text mt='100px'>
          <b>Fotos Gall | Store</b>
        </Text>
        <Flex mt="15px" w="100%" className="listArea" overflowX="hidden">
          <Button
            overflow="hidden"
            opacity="0.9"
            position="absolute"
            w="2.5rem"
            left="0"
            onClick={handleLeftArrow}
            mt="-4px"
          >
            <AiFillLeftCircle fontSize="20rem" />
          </Button>
          <Button
            overflow="hidden"
            opacity="0.9"
            right="0"
            position="absolute"
            width="2.5rem"
            onClick={handleRightArrow}
            mt="-4px"
          >
            <AiFillRightCircle fontSize="20rem" />
          </Button>
          <Flex transition="all ease 0.5s" ml={scrollx} className="list">
            {fotosGall.map((d, index) => (
              <Box key={index} maxW="100vh" borderWidth="1px" borderRadius="lg">
                <Flex w="150px" display="inline-block" className="item">
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
                </Flex>

                <Box p="6">
                  <Box display="flex" alignItems="baseline"></Box>

                  <Box>{d.title}</Box>
                </Box>
              </Box>
            ))}
          </Flex>
        </Flex>
      </Text>
      <Flex>
        {/* {property.map((property, key) => ( */}
        <Box key="" maxW="sm" borderWidth="1px" borderRadius="lg">
          <Box p="6">
            <Box display="flex" alignItems="baseline"></Box>

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            ></Box>

            <Box>
              <Box as="span" color="gray.600" fontSize="sm"></Box>
            </Box>

            <Box display="flex" mt="2" alignItems="center">
              <Box as="span" ml="2" color="gray.600" fontSize="sm"></Box>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
}
