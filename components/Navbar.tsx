"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ModeToggle } from './DarkMode'
import { Menu, X } from 'lucide-react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleScroll = () => {
        const homeSection = document.querySelector('#home')
        const homeSectionBottom = homeSection ? homeSection.getBoundingClientRect().bottom : 0
        
        console.log('window.scrollY: ', window.scrollY)
        console.log('lastScrollY: ', lastScrollY)

        if (window.scrollY < lastScrollY || homeSectionBottom > 500) {
            setIsVisible(true)
            console.log('setIsVisible(true)')
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
        <>
            <nav className={`hidden md:block z-50 p-4 border-b shadow-2xl sticky top-0 transition-transform duration-300 bg-background ${isVisible ? 'translate-y-0' : (isMenuOpen ? '' : '-translate-y-full')}`}>
                <div className='flex items-center justify-between'>
                    <Link href='#home' className=' text-2xl font-semibold hover:text-slate-400 transition duration-300'>Kyan Cox</Link>

                    {/* Menu for medium screens and above */}
                    <div className='md:flex items-center justify-center space-x-5 hidden'>
                        {buttons.map(({ name, route }) => (
                            <Link key={name} href={route} className='text-lg font-semibold hover:text-slate-400 hover:-translate-y-0.5 transition duration-200'>{name}</Link>
                        ))}
                        <ModeToggle />
                    </div>

                </div>
            </nav>
            <Sheet>
                <nav className={`flex md:hidden items-center justify-between z-50 p-4 border-b ${isVisible && 'shadow-2xl'} sticky top-0 transition-transform duration-300 bg-background ${isVisible ? 'translate-y-0' : (isMenuOpen ? '' : '-translate-y-full')}`}>
                    <Link href='#home' className=' text-2xl font-semibold hover:text-slate-400 transition duration-300'>Kyan Cox</Link>
                    <SheetTrigger>
                        <Menu size={24} />
                    </SheetTrigger>
                </nav>
                <SheetContent className="w-1/2 flex flex-col justify-between">

                    <div className='flex items-center justify-end'>
                        <SheetClose className='border p-1 rounded-md' >
                            <X size={24} />
                        </SheetClose>
                    </div>

                    <div className='flex flex-col items-center justify-center space-y-4'>
                        {buttons.map(({ name, route }) => (
                            <Link key={name} href={route} className='text-xl font-semibold hover:text-slate-400 transition duration-200' onClick={() => setIsMenuOpen(false)}>
                                <SheetClose >
                                    {name}
                                </SheetClose>
                            </Link>
                        ))}
                    </div>

                    <div className=' flex items-center justify-end'>
                        <ModeToggle />
                    </div>
                </SheetContent>


            </Sheet>
        </>
    )
}

export default Navbar