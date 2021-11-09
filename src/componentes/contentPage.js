import { documentos } from '../componentes/propertyTest.js';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';
import {
  fotosGall,
  fotosAlmofadas,
  fotosAlmofadas1,
} from '../componentes/gallStore.js';

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

import { Grid, GridItem } from '@chakra-ui/react';

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
  const totalAl = fotosAlmofadas.length;
  const totalAl1 = fotosAlmofadas1.length;
  console.log(totalAl);
  console.log(fotosAlmofadas);

  // const dados = documentos1.filter((d) => d.startsWith(buscar));
  // const dados1 = documentos.filter((f) => f.startsWith(buscar));

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
    <div>
      <Text fontSize="1.3rem">
        <b>Documentos Leonardo</b>
      </Text>

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
        <Text mt="100px">
          <b>Fotos Gall | Store</b>
        </Text>
        <Flex mt="15px" w="100%" className="listArea" overflowX="hidden">
          <Flex className="list">
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
      <Text mt="20px" fontSize="1.5rem" fontWeight="bold">
        Fotos Gall | Store | Almofadas | Total {totalAl}
      </Text>
      <div mt="15px" w="100%" className="listArea" overflowX="hidden">
        <Grid templateColumns="repeat(5,1fr)" className="list">
          {fotosAlmofadas.map((d, index) => (
            <Box key={index} maxW="100vh" borderWidth="1px" borderRadius="lg">
              <Flex w="16rem" display="inline-block" className="item">
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
        </Grid>
      </div>
      <Text mt="20px" fontSize="1.5rem" fontWeight="bold">
        Fotos Gall | Store | Almofadas 1 | Total {totalAl1}
      </Text>
      <div mt="15px" w="100%" className="listArea" overflowX="hidden">
        <Grid templateColumns="repeat(5,1fr)" className="list">
          {fotosAlmofadas1.map((d, index) => (
            <Box key={index} maxW="100vh" borderWidth="1px" borderRadius="lg">
              <Flex w="16rem" display="inline-block" className="item">
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
        </Grid>
      </div>
    </div>
  );
}
