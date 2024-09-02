/*
 * Copyright (c) 2022, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import React from 'react';
import { Box, Heading, Text, Button, VStack, Link } from '@chakra-ui/react';
import CarouselSlider from "../../components/carousel-slider";
import CustomCollapsibleSection from "../../components/collapsible";

function MarketPlaceStore() {
    return (
        <>
            <Box data-testid="marketplace-page" layerStyle="page" textAlign="center" fontSize="xl" p={5}>
                <VStack spacing={4} maxWidth="800px" mx='auto'>
                    <Heading>Shop your favorite online retailers – without using credit*.</Heading>
                    <Text fontSize="md">Apply and go shopping with your approved lease amount</Text>
                </VStack>
            </Box>

            <CarouselSlider/>

            <Box className="shop_btn" textAlign="center" maxWidth="1000px" mx="auto" py={4}>
                <Text as="p" fontSize="20px" fontWeight="noraml" color="black" mb={4}>
                    Acima is a participant in affiliate advertising and marketing programs that pay fees to sites that advertise and link to retailer websites listed above.
                </Text>

                <Button 
                    bg="#f75200"
                    color="white"
                    boxShadow="md"
                    borderRadius="full"
                    _hover={{ bg: "gray.900" }}
                    variant='solid'
                    my={4}
                >
                    Shop Nearby Stores
                </Button>
            </Box>

            <CustomCollapsibleSection/>

            <Box bg= {'#f5f5f5'} p={8}>
                <Box className="contentBlock" maxWidth="1200px" p={1} mx="auto" borderBottom="1px solid #ddd">
                    <Text as="p" color="#696871" py={2} fontSize="12px" fontWeight="medium">
                        *The advertised service is a rental or lease purchase agreement provided by Acima. It is not a loan, credit or financing. While no credit history is required, Acima obtains information from consumer reporting agencies in connection with a lease application. We consider multiple data points in reviewing your application and regularly approve customers with less than perfect credit history. Acima Cash Price includes a markup over invoice price. Acquiring ownership by leasing costs more than the retailer’s cash price. Not available in MN, NJ, WI, or WY. Merchant participating locations only. See lease for details. “Get Approved to Lease up to $5,000 in Merchandise” refers to maximum amount Acima Leasing will spend to acquire goods from a retailer for lease to you. Maximum amount may require in-store application ; approval and amount subject to review and verification of your application. Not all applicants are approved.
                        *“Get started for $1” is available for applications in select stores only from 8/28/24 - 9/2/24 and does not include taxes and refers to the rental period from agreement start date to first scheduled renewal payment. On your first renewal date, regular rental rates, taxes, and fees will apply. Regular rate, term and total cost vary by item selected. This is not a promotion for a specific transaction or item. Please see lease for payment amounts and rental terms. Offer will not reduce the number of payments, total amount necessary to acquire ownership, or purchase option amount.
                        ^Disclaimer: Standard agreement offers 12 months to ownership if you choose to make each lease renewal payment, which may cost more than double the cash price. You are not automatically enrolled in any early purchase options and additional payments will be required to purchase early. To purchase early call (801) 297-1980 or go to <Link href="#">https://customer.acima.com.</Link> Refer to your lease for specific terms and conditions.
                    </Text>

                    <Text as="p" color="#696871" py={2} fontSize="12px" fontWeight="medium">
                        † Acima Private CreditTM is a private label revolving line of credit product issued by The Bank of Missouri and serviced by Concora® Credit Inc. Applications are subject to issuer review (which may include obtaining your credit report) and approval. The Bank of Missouri and Concora® Credit Inc. are not affiliated with Acima Digital, or its affiliates. 
                    </Text>
                </Box>
            </Box>
        </>
    );
}


MarketPlaceStore.getTemplateName = () => 'marketplace'

export default MarketPlaceStore
