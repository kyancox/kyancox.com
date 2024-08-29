import React from 'react'
import githublogo from '@/public/githublogo.svg'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className='mt-auto flex flex-col justify-center items-center mb-2'>
            <Link href={'https://github.com/kyancox/kyancox.com'} target='_blank' className='text-foreground hover:underline font-medium transition duration-100 cursor-pointer'>© Designed & Built by Kyan Cox · {currentYear}</Link>
            {/* <div className="bg-foreground pt-4 pb-3 px-6 text-center rounded-lg">
                <div className='flex items-center justify-center'>
                    <Link href={'https://github.com/kyancox/kyancox.com'} target='_blank' className='text-gray-600 font-semibold hover:underline'>Built with Next.js</Link>
                    {/* <div style={{ backgroundColor: '#2b3137' }} className='w-7 h-7 rounded-full flex items-center justify-center'>
                        <Image
                            src={githublogo}
                            alt='GitHub logo'
                            height={20}
                            width={20}
                        />
                    </div>
                </div>
                <p className='text-background font-bold'>© Designed & Built by Kyan Cox · {currentYear}</p>
            </div> */}
        </footer>
    )
}

export default Footer