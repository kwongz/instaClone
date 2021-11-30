import React, { useState, useEffect} from 'react'
import axios from 'axios'

function Suggestions() {

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
                limit: 5
            }
            })
            .then(res => {
                setSuggestions(res.data)})
    }, [])

    return (
        <div className='mt-4 ml-10'>
            <div className='flex justify-between text-sm mb-5'>
                <h3 className='text-sm font-bold'>Suggestions for you</h3>
                <button className='text-gray-600 font-semibold'>See All</button>
            </div>
            {
                suggestions.map(profile => {
                    return <div
                        key={profile.id}
                        className='flex items-center justify-between mt-3'>
                            <img className='w-10 h-10 rounded-full border p-[2px]' src={profile.photo} alt=''/>
                            <div className='flex-1 ml-4'>
                                <h2 className='font-semibold text-sm'>{profile.name}</h2>
                            </div>
                            <button className='text-blue-400 text-sm'>Follow</button>
                        </div>
                })
            }
        </div>
    )
}

export default Suggestions
