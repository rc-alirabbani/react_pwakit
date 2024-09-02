/*
 * Copyright (c) 2023, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import React, { useState } from 'react'
import { getAppOrigin } from '@salesforce/pwa-kit-react-sdk/utils/url'
import useMultiSite from '@salesforce/retail-react-app/app/hooks/use-multi-site'
import {
    useAccessToken,
} from '@salesforce/commerce-sdk-react'
import {
    Button
} from '@salesforce/retail-react-app/app/components/shared/ui'

const MyNewRoute = () => {

    const { getTokenWhenReady } = useAccessToken()
    const { site } = useMultiSite()

    async function handleClick() {
        // // let shortCode = 'kv7kzm78'
        // let apiName = 'custom-preferences'
        // let organizationId = 'f_ecom_blmk_005'
        // let endpointPath = 'customPreferences'
        const authToken = await getTokenWhenReady()

        const apiEndpoint = `${getAppOrigin()}/mobify/proxy/ocapi/s/${site?.id}/dw/shop/v22_8/content/about-us`;
        // Constructing the URL with query parameters
        const url = new URL(apiEndpoint);


        // Fetch request with authorization header
        fetch(url, {
            method: 'GET', // Replace with the desired HTTP method
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Content-Type': 'application/json', // Adjust content type if necessary
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                // Handle the data as needed
                console.log('Data received:', data);
               
            })
            .catch(error => {
                // Handle errors
                console.error('Fetch error:', error);
            });
    }


    return <div style={{ margin: 'auto', textAlign: 'center' }}>
        <Button variant="ghost" mr={3} onClick={handleClick}>
            Get ContentAsset
        </Button>

    </div>
}

export default MyNewRoute