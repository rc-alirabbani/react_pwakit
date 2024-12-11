/*
 * Copyright (c) 2023, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import React, { useEffect, useState } from 'react'
import { getAppOrigin } from '@salesforce/pwa-kit-react-sdk/utils/url'
import useMultiSite from '@salesforce/retail-react-app/app/hooks/use-multi-site'
import {useAccessToken,} from '@salesforce/commerce-sdk-react'
import {Button} from '@salesforce/retail-react-app/app/components/shared/ui'
import {useParams} from 'react-router-dom'

const Content = () => {

    const { getTokenWhenReady } = useAccessToken()
    const { site } = useMultiSite()
    const params = useParams()
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    console.log(params);

    useEffect(() => {
        // let shortCode = 'kv7kzm78'
        // let apiName = 'custom-preferences'
        // let organizationId = 'f_ecom_blmk_005'
        // let endpointPath = 'customPreferences'

        const fetchData = async () => {
            const authToken = await getTokenWhenReady()

            const apiEndpoint = `${getAppOrigin()}/mobify/proxy/ocapi/s/${site?.id}/dw/shop/v22_8/content/${params.id}`;
            // Constructing the URL with query parameters
            const url = new URL(apiEndpoint);

            try {
                // Perform an async operation (e.g., fetch data)
                const response = await fetch(url, {
                    method: 'GET', // Replace with the desired HTTP method
                    headers: {
                        'Authorization': `Bearer ${authToken}`,
                        'Content-Type': 'application/json', // Adjust content type if necessary
                    },
                });

                const result = await response.json();

                setData(result); // Update the state with the fetched data
            } catch (err) {
                setError(err); // Handle any errors
            }
        }

        fetchData(); // Call the async function
    })

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            {data ? <div dangerouslySetInnerHTML={{__html: data.c_body}} /> : <div>Loading...</div>}
        </div>
    );
}

export default Content