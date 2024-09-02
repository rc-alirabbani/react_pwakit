import React from "react";
import {
  ChakraProvider,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { Box, Image, VStack, Link, Text } from "../shared/ui/index";
import {getAssetUrl} from '@salesforce/pwa-kit-react-sdk/ssr/universal/utils'

function ShopModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ChakraProvider>
        <Button  colorScheme="teal" mt="20">
                Open Modal
        </Button>

        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    <Box mx='auto' textAlign='center'>
                        <Image src={getAssetUrl('static/img/brand-logo.jpg')} alt='Brand Logo' maxW="80px" objectFit='contain' mx='auto'/>
                    </Box>
                </ModalHeader>
                <ModalCloseButton />

                <ModalBody mx='-25px'>
                    <Box width="100%">
                        <Image objectFit='cover' src={getAssetUrl('static/img/jewelry.jpg')} alt='Brand Image' width='100%'/>
                    </Box>
                </ModalBody>

                <ModalFooter justifyContent="center">
                    <VStack>
                        <Button 
                            bg="#f75200" color="white" borderRadius="full" mr={3} 
                            onClick={onClose}
                            _hover={{ bg: "teal.500", color: "white" }}
                        >
                            Apply to Shop
                        </Button>

                        <Text as="b">
                            Already approved? <Link color="blue.300">Shop Now</Link>
                        </Text>
                    </VStack>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </ChakraProvider>
  );
}

export default ShopModal;
