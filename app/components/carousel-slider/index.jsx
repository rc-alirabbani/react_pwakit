import React from 'react';
import { 
    Box, Text, 
    Image, ChakraProvider,
    Flex, Heading,
    VStack,
    Button, 
    IconButton,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure 
} from '@chakra-ui/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {getAssetUrl} from '@salesforce/pwa-kit-react-sdk/ssr/universal/utils'
import Slider from 'react-slick';
import Link from '../link/index';

const CarouselSlider = () => {

  //Custom Arrow slick slider
  const CustomPrevArrow = ({ onClick }) => (
    <IconButton
        icon={<FontAwesomeIcon icon={faArrowLeft} />}
        onClick={onClick}
        aria-label="Previous Slide"
        position="absolute"
        right="50px"
        top="-60px"
        bg="#f75200"
        color="white"
        boxShadow="md"
        borderRadius="full"
        _hover={{ bg: "gray.200" }}
        zIndex="1"
    />
  );
  
  const CustomNextArrow = ({ onClick }) => (
    <IconButton
        icon={<FontAwesomeIcon icon={faArrowRight} />}
        onClick={onClick}
        aria-label="Next Slide"
        position="absolute"
        right="0"
        top="-60px"
        bg="#f75200"
        color="white"
        boxShadow="md"
        borderRadius="full"
        _hover={{ bg: "gray.200" }}
        zIndex="1"
    />
  );

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const categories = [
    { title: 'Ashley Furniture', imageUrl: `${getAssetUrl('static/img/boximg1.jpg')}`},
    { title: 'PC & Richard Sons', imageUrl: `${getAssetUrl('static/img/boximg2.jpg')}`},
    { title: 'Mattress Firm', imageUrl: `${getAssetUrl('static/img/boximg3.jpg')}`},
    { title: 'PC & Richard Sons', imageUrl: `${getAssetUrl('static/img/boximg2.jpg')}`},
    { title: 'IKEA', imageUrl: `${getAssetUrl('static/img/boximg4.jpg')}`}
  ];

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ChakraProvider>
        <Box maxWidth="1200px" margin="auto" p="4" width="100%">
            <Box maxWidth="100%" width="100%" mb={4}>
                <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    py={2}
                    px={4}
                    mb={4}
                >
                    {/* Left Heading */}
                    <Heading as="h1" size="md">
                        Furniture (14)
                    </Heading>
                </Flex>

                <Slider {...settings}>
                    {categories.map((category, index) => (
                        <Box
                            key={index}
                            px="4"
                            textAlign="center"
                            width="25%"
                            mb={4}
                        >
                            <Box onClick={onOpen} cursor="pointer">
                                <Box
                                    bg="gray.100"
                                    borderRadius="md"
                                    boxShadow="lg"
                                    mb="2"
                                    width="100%"
                                >
                                    <Image
                                        src={category.imageUrl}
                                        alt={category.title}
                                        boxSize="200px"
                                        width="100%"
                                        maxH="100%"
                                        objectFit="cover"
                                        margin="auto"
                                        borderRadius="md"
                                        mb="2"
                                    />
                                </Box>
                                <Text fontSize="md" fontWeight="medium" color="gray.600">
                                    {category.title}
                                </Text>
                            </Box>
                        </Box>
                    ))} 
                </Slider>
            </Box>

            <Box maxWidth="100%"  width="100%" mb={4}>
                <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    py={2}
                    px={4}
                    mb={4}
                >
                    {/* Left Heading */}
                    <Heading as="h1" size="md">
                        Mattresses (13)
                    </Heading>
                </Flex>

                <Slider {...settings}>
                    {categories.map((category, index) => (
                        <Box
                            key={index}
                            px="4"
                            textAlign="center"
                            width="25%"
                            mb={4}
                        >
                            <Box onClick={onOpen} cursor="pointer">
                                <Box
                                    bg="gray.100"
                                    borderRadius="md"
                                    boxShadow="lg"
                                    mb="2"
                                    width="100%"
                                >
                                    <Image
                                        src={category.imageUrl}
                                        alt={category.title}
                                        boxSize="200px"
                                        width="100%"
                                        maxH="100%"
                                        objectFit="cover"
                                        margin="auto"
                                        borderRadius="md"
                                        mb="2"
                                    />
                                </Box>
                                <Text fontSize="md" fontWeight="medium" color="gray.600">
                                    {category.title}
                                </Text>
                            </Box>
                        </Box>
                    ))} 
                </Slider>
            </Box>

            <Box maxWidth="100%"  width="100%" mb={4}>
                <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    py={2}
                    px={4}
                    mb={4}
                >
                    {/* Left Heading */}
                    <Heading as="h1" size="md">
                        Home Electronics (10)
                    </Heading>
                </Flex>

                <Slider {...settings}>
                    {categories.map((category, index) => (
                        <Box
                            key={index}
                            px="4"
                            textAlign="center"
                            width="25%"
                            mb={4}
                        >
                            <Box onClick={onOpen} cursor="pointer">
                                <Box
                                    bg="gray.100"
                                    borderRadius="md"
                                    boxShadow="lg"
                                    mb="2"
                                    width="100%"
                                >
                                    <Image
                                        src={category.imageUrl}
                                        alt={category.title}
                                        boxSize="200px"
                                        width="100%"
                                        maxH="100%"
                                        objectFit="cover"
                                        margin="auto"
                                        borderRadius="md"
                                        mb="2"
                                    />
                                </Box>
                                <Text fontSize="md" fontWeight="medium" color="gray.600">
                                    {category.title}
                                </Text>
                            </Box>
                        </Box>
                    ))} 
                </Slider>
            </Box>

            <Box maxWidth="100%" width="100%" mb={4}>
                <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    py={2}
                    px={4}
                    mb={4}
                >
                    {/* Left Heading */}
                    <Heading as="h1" size="md">
                        Computers & Mobile Electronics (9)
                    </Heading>
                </Flex>

                <Slider {...settings}>
                    {categories.map((category, index) => (
                        <Box
                            key={index}
                            px="4"
                            textAlign="center"
                            width="25%"
                            mb={4}
                        >
                            <Box onClick={onOpen} cursor="pointer">
                                <Box
                                    bg="gray.100"
                                    borderRadius="md"
                                    boxShadow="lg"
                                    mb="2"
                                    width="100%"
                                >
                                    <Image
                                        src={category.imageUrl}
                                        alt={category.title}
                                        boxSize="200px"
                                        width="100%"
                                        maxH="100%"
                                        objectFit="cover"
                                        margin="auto"
                                        borderRadius="md"
                                        mb="2"
                                    />
                                </Box>
                                <Text fontSize="md" fontWeight="medium" color="gray.600">
                                    {category.title}
                                </Text>
                            </Box>
                        </Box>
                    ))} 
                </Slider>
            </Box>
        </Box>

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
                            Already approved? <Link href="#" color="blue.300">Shop Now</Link>
                        </Text>
                    </VStack>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </ChakraProvider>
  );
};

export default CarouselSlider;