"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ModeToggle } from './DarkMode'
import { Menu, X } from 'lucide-react' // Add this import

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleScroll = () => {
        if (window.scrollY < lastScrollY) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
        setLastScrollY(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [lastScrollY])

    const buttons = [
        { name: 'Home', route: '#home' },
        { name: 'About', route: '#about' },
        { name: 'Skills', route: '#skills' },
        { name: 'Projects', route: '#projects' },
        { name: 'Experience', route: '#experience' },
        { name: 'Contact', route: '#contact' },
    ]

    return (
        <nav className={`p-4 border-b shadow-2xl sticky top-0 transition-transform duration-300 bg-background ${isVisible ? 'translate-y-0' : (isMenuOpen ? '' : '-translate-y-full')}`}>
            <div className='flex items-center justify-between'>
                <Link href='#home' className='ml-1 text-xl font-semibold hover:text-slate-400 transition duration-300'>Kyan Cox</Link>

                {/* Menu for medium screens and above */}
                <div className='md:flex items-center justify-center space-x-5 hidden'>
                    {buttons.map(({ name, route }) => (
                        <Link key={name} href={route} className='text-lg font-semibold hover:text-slate-400 hover:-translate-y-0.5 transition duration-200'>{name}</Link>
                    ))}
                    <ModeToggle />
                </div>

                {/* Hamburger menu for smaller screens */}
                <div className='flex md:hidden'>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='p-2'>
                        <Menu size={24} />
                    </button>
                </div>
            </div>

            {/* Side menu for smaller screens */}
            {isMenuOpen && (
                <div className='fixed inset-y-0 right-0 w-1/2 bg-slate-800 h-screen shadow-lg p-4 transform transition-transform duration-300 ease-in-out'>
                    <div className='flex flex-col items-end justify-between space-y-4 h-full'>
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='p-2'>
                            <X size={24} />
                        </button>
                        <div className='flex flex-col'>
                            {buttons.map(({ name, route }) => (
                                <Link key={name} href={route} className='text-lg font-semibold hover:text-slate-400 transition duration-200' onClick={() => setIsMenuOpen(false)}>{name}</Link>
                            ))}
                        </div>
                        {/* Spacer to push ModeToggle to the bottom */}
                        {/* <div className='flex-grow'></div>  */}
                        <div>
                            <ModeToggle />
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar