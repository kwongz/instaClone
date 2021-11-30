import React from 'react'

function MiniProfile() {
    return (
        <div className='flex items-center justify-between'>
            <img 
                src='http://www.sherrida.com/divisions/photos/2315/bigs/p_118645_1727125192.jpg' 
                alt=''
                className='rounded-full border p-[2px] mt-14 ml-10 w-16 h-16 object-cover'
            />
            <div className='flex-1 mx-4'>
                <h2 className='font-bold'>Kwongz</h2>
                <h3 className='text-sm text-gray-400'>Welcome to Instagram</h3>
            </div>
            <button className='text-blue-400 text-sm font-semibold'>Sign out</button>
        </div>
    )
}

export default MiniProfile
