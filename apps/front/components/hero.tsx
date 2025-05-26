import React from 'react'

function Hero() {
    return (
        <div className='bg-gradient-to-br from-sky-500 to-indigo-500 text-white'>
            <div className='container mx-auto flex flex-col md:flex-row items-center flex-wrap px-3'>
                {/* Left Col */}
                <div className='flex flex-col w-full justify-center items-start md:w-2/5 text-center md:text-left'>
                    <p className='capitalize tracking-wide w-full'>
                        Explore insights, tutorials and stories for curious minds like yours
                    </p>
                    <h2 className='my-5 text-5xl font-bold leading-tight'>Welcome To Azamat Coder Blog</h2>
                    <p className='capitalize leading-normal text-xl'>Join a community that thrives on learning, creating and growing together.</p>
                </div>
            </div>
            <div className='relative'></div>
        </div>
    )
}

export default Hero