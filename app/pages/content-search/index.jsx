import React from 'react'
import fetch from 'cross-fetch'
import {List, ListItem} from '@chakra-ui/react'
import Link from '@salesforce/retail-react-app/app/components/link'

import { useState, useEffect } from 'react'


let clientID = '71223a47-827b-4bee-9b89-64a046063f50';
let siteID = 'acima';

const ContentSearch = () => {
    let [contentResult, setcontentResult] = useState(null);
    useEffect(() => {
        const getTransaction = async () => {
            var res = await fetch("/contentSearch",{method:"POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            })
                .then(response => response.json())
                .then(data => {
                    console.log("DATA IS:",data);
                    setcontentResult(data)
                })
                .catch(error => {
                    console.error(error);
                });
        }
       
        getTransaction();
    },[])

    if(!contentResult) {
        return <div> Loading..... </div>
    }
    const {hits = []} = contentResult;

    return (
        <div>
            {hits.length ? (
                <List>
                    {hits.map(({id, name}) => (
                        <Link key={id} to={`/content/${id}`}>
                            <ListItem>{name}</ListItem>
                        </Link>
                    ))}
                </List>
            ) : (
                <div>No Content Items Found!</div>
            )
            }
        </div>
    )
}

ContentSearch.getTemplateName = () => 'content-search'

export default ContentSearch
