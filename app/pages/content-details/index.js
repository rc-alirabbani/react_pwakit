import React from 'react'
import fetch from 'cross-fetch'
import {useQuery} from '@tanstack/react-query'
import {useParams} from 'react-router-dom'
import {HTTPError} from '@salesforce/pwa-kit-react-sdk/ssr/universal/errors'

const ContentDetails = () => {
    const params = useParams()
    
    const {data, error, isLoading} = useQuery({
        queryKey: [params.id],
        queryFn: () => { return fetch(`http://localhost:3000/mobify/proxy/ocapi/s/acima/dw/shop/v20_2/content/${params.id}?client_id=71223a47-827b-4bee-9b89-64a046063f50`).then(res=>res.json()).then((json) => {
            console.log(json)
            return json
          })
        },
        cacheTime: 0
    })
    
    if (isLoading) {
        return <div>Loading...</div>
    }
    else if (error) {
        return <div>Error query hit: {error}</div>
    } else if (data.fault) {
        throw new HTTPError(404, data.fault.message)
    } else {
        return <div dangerouslySetInnerHTML={{__html: data.c_body}} />
    }
}

ContentDetails.getTemplateName = () => 'content-details'

export default ContentDetails