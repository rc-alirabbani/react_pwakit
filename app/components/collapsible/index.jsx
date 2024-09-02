import React from "react";
import {
  ChakraProvider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";

function CustomCollapsibleSection() {
    return (
        <ChakraProvider>
            <Box maxW="800px" mx="auto" my="50px" p="4" width="100%">
                <Heading as="h1" size="lg" fontWeight="bold" mb={8} textAlign="center">
                    Frequently asked questions
                </Heading>
    
                <Accordion defaultIndex={[0]} allowMultiple>
                    <AccordionItem bg="white" border="1px solid #eee"  outline="none" mb={4}>
                        <Box>
                            <AccordionButton p={4} _expanded={{ bg: "white", color: "grey.900" }}>
                                <Box flex="1" textAlign="left">
                                    <Heading size="md" fontWeight="bold">What items are eligible to lease from Acima Leasing?</Heading>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </Box>
                        <AccordionPanel mb={4}>
                            <Text as="p">
                                All kinds! We lease merchandise for personal, family, or household use to consumers. Our merchandise categories include furniture, mattresses, appliances, auto wheels and tires, as well as, home and mobile electronics, car audio, eyewear, power tools, jewelry, and more!
                                <br />
                                Generally, you may lease durable goods that are for personal or household use and can be returned. Items must cost at least $300 each to be eligible for lease.
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem bg="white" border="1px solid #eee" outline="none" mb={4}>
                        <Box>
                            <AccordionButton p={4} _expanded={{ bg: "white", color: "grey.900" }}>
                                <Box flex="1" textAlign="left">
                                    <Heading size="md" fontWeight="bold">How do I use my lease line with online retailers?</Heading>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </Box>
                        <AccordionPanel mb={4}>
                            <Text as="p">
                                If we partner with a retailer you selected, just look for the Acima option at checkout. Get approved in the Acima mobile app or online with the retailer of your choice in our store locator, and shop at any of the retailers featured on Acima MarketPlace™.
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem bg="white" border="1px solid #eee" outline="none" mb={4}>
                        <Box>
                            <AccordionButton p={4} _expanded={{ bg: "white", color: "grey.900" }}>
                                <Box flex="1" textAlign="left">
                                    <Heading size="md" fontWeight="bold">What is Acima Leasing's relationship with these retailers?</Heading>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </Box>
                        <AccordionPanel mb={4}>
                            <Text as="p">
                                We partner directly with some retailers you find here on Acima MarketPlace™ to offer a more integrated checkout experience. Once you review your lease agreement and sign, we’ll purchase any eligible products you selected and lease them to you.
                                <br />
                                After you get your products, you can obtain ownership by making the required payments or choosing early purchase savings. If things change, you can return the products to us.
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem bg="white" border="1px solid #eee" outline="none" mb={4}>
                        <Box>
                            <AccordionButton p={4} _expanded={{ bg: "white", color: "grey.900" }}>
                                <Box flex="1" textAlign="left">
                                    <Heading size="md" fontWeight="bold">How will I receive my items?</Heading>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </Box>
                        <AccordionPanel mb={4}>
                            <Text as="p">
                                que tengas las mismas opciones de entrega de productos que cualquier otro cliente cuando realiza una compra en línea con Acima. Cuando realices la compra después de completar tu contrato de arrendamiento, por lo general tienes dos opciones: puedes recibir el producto en tu domicilio o puedes recogerlo en la tienda (si se encuentra disponible en tu estado y si es ofrecido por el minorista).
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem bg="white" border="1px solid #eee" outline="none" mb={4}>
                        <Box>
                            <AccordionButton p={4} _expanded={{ bg: "white", color: "grey.900" }}>
                                <Box flex="1" textAlign="left">
                                    <Heading size="md" fontWeight="bold">Can I add services like installation or extended warranties?</Heading>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </Box>
                        <AccordionPanel mb={4}>
                            <Text as="p">
                            Not at this time. These types of services are not eligible to be added to your lease agreement. You’ll need to arrange any installations, such as for appliances on your own.
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Box>
        </ChakraProvider>
    );
}

export default CustomCollapsibleSection;