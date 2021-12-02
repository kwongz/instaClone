import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Story from './Story'

function Stories() {

    const apiKey = ['9C40D329-49F14A03-B80D1111-578BEF6D']

    const [suggestions, setSuggestions] = useState([])
    useEffect(() => {
        axios('https://uifaces.co/api', {
            method: 'GET',
            headers: {
                'X-API-KEY': apiKey,
                'Accept': 'application/json',
                'Cache-Control': 'no-cache',
            },
            params: {
                limit: 20
            }
            })
            .then(res => {
                setSuggestions(res.data)})
            .catch(error => {
                if (error.response.status === 429){
                    alert('Too many API attempts, please try again alter')
                } else {
                    console.log(error) 
                }
            })
    }, [])

    
    return (
        <div className='flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black'>
            {
                suggestions.map(profile => {    
                    return(
                        <Story 
                            key={profile.id} 
                            img={profile.photo} 
                            username={profile.name}
                        />
                    )           
                })
            }
        </div>
    )
}

export default Stories
