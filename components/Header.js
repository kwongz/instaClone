import React from 'react'
import Image from 'next/image'
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon,
} from '@heroicons/react/outline';
import { HomeIcon } from '@heroicons/react/solid'
import { signIn, signOut, useSession } from 'next-auth/react'

function Header() {

    const {data: session} = useSession();

    console.log(session)
    return (
        <div className='shadow-sm border-b bg-white sticky top-0 z-50'>
            <div className='flex justify-between items-center max-w-6xl mx-5 xl:mx-auto'>
                {/* left */}
                <div className='relative hidden lg:inline-grid w-24 h-24'>
                    <Image src='https://links.papareact.com/ocw'
                        layout='fill'
                        objectFit='contain'
                    />
                </div>

                <div className='relative w-10 h-10 lg:hidden flex-shrink-0 cursor-pointer'>
                    <Image src='https://links.papareact.com/jjm'
                        layout='fill'
                        objectFit='contain'
                    />
                </div>
                {/* middle - search input field*/}
                <div className='max-w-xs'>
                    <div className='relative mt-1 p-3 rounded-md'>
                        <div className='absolute inset-y-5 pl-3 flex item-center pointer-events-none'>
                            <SearchIcon className='h-5 w-5 text-gray-500'/>
                        </div>
                        <input 
                            className='bg-grey-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus: border-black' 
                            type='text' 
                            placeholder="Search"/>
                    </div>
                </div>

                {/* right */}
                <div className="flex items-center justify-end space-x-4">
                    <HomeIcon className='btn'/>
                    <MenuIcon className='h-6 md:hidden'/>

                    {session ? (
                        <>
                            <div className='relative btn'>
                                <PaperAirplaneIcon className='btn rotate-45'/>
                                <div className='absolute -top-1 -right-2 text-xs w-5 h-5 rounded-full flex items-center justify-center bg-red-500 animate-pulse text-white'>3</div>
                            </div>
                            <PlusCircleIcon className='btn'/>
                            <UserGroupIcon className='btn'/>
                            <HeartIcon className='btn'/>
        
                            <img 
                                onClick={signOut}
                                src={session.user.image} 
                                alt='profile pic'
                                className='h-10 w-10 cursor-pointer rounded-full object-cover'/>
                        </>                        
                    ) : (
                        // <button><a href='/auth/signin'>Sign in</a></button>
                        <button onClick={signIn}>Sign in</button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Header