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
import { Button } from "@/components/ui/button"
import { useTheme } from 'next-themes'
import { Reveal } from './Reveal'

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [hasAnimated, setHasAnimated] = useState(false)

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
        // { name: 'Home', route: '#home' },
        { name: 'Projects', route: '#projects' },
        { name: 'About', route: '#about' },
        { name: 'Skills', route: '#skills' },
        { name: 'Experience', route: '#experience' },
        { name: 'Contact', route: '#contact' },
        { name: 'Resume', route: '/resume.pdf' },
    ]

    return (
        <>
            <nav className={`hidden md:block z-50 p-4 border-b shadow-2xl sticky top-0 transition-transform duration-300 bg-background ${isVisible ? 'translate-y-0' : (isMenuOpen ? '' : '-translate-y-full')}`}>
                <div className='flex items-center justify-between'>



                    {!hasAnimated ?

                        <Reveal
                            initial={{ opacity: 0, y: -30 }}
                            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
                            onAnimationComplete={() => setTimeout(() => setHasAnimated(true), 500)}
                        >
                            <Link href='#home' className=' text-2xl font-semibold hover:text-slate-400 transition duration-300'>Kyan Cox</Link>
                        </Reveal>
                        :
                        <Link href='#home' className=' text-2xl font-semibold hover:text-slate-400 transition duration-300'>Kyan Cox</Link>
                    }

                    {/* Menu for medium screens and above */}
                    <div className='md:flex items-center justify-center space-x-5 hidden'>
                        {buttons.map(({ name, route }, index) => (
                            !hasAnimated ? (
                                <Reveal
                                    key={name}
                                    initial={{ opacity: 0, y: -30 }}
                                    whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: index / 20 } }}
                                    onAnimationComplete={() => setTimeout(() => setHasAnimated(true), 500)}
                                >
                                    <Link key={name} href={route} className='text-lg font-semibold hover:text-slate-400 hover:-translate-y-0.5 transition duration-200'>{name}</Link>
                                </Reveal>
                            ) :
                                <Link key={name} href={route} className='text-lg font-semibold hover:text-slate-400 hover:-translate-y-0.5 transition duration-200'>{name}</Link>
                        ))}
                        {!hasAnimated ? (
                            <Reveal
                                initial={{ opacity: 0, y: -30 }}
                                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: 7 / 20 } }}
                                onAnimationComplete={() => setTimeout(() => setHasAnimated(true), 500)}
                            >
                                <ModeToggle />
                            </Reveal>
                        )
                            :
                            <ModeToggle />
                        }
                    </div>

                </div>
            </nav>
            {/* Mobile Nav */}
            <Sheet>
                <nav className={`flex md:hidden items-center justify-between z-50 p-4 border-b ${isVisible && 'shadow-2xl'} sticky top-0 transition-transform duration-300 bg-background ${isVisible ? 'translate-y-0' : (isMenuOpen ? '' : '-translate-y-full')}`}>
                    {!hasAnimated ? (
                        <Reveal
                            initial={{ opacity: 0, y: -30 }}
                            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.2 } }}
                            onAnimationComplete={() => setTimeout(() => setHasAnimated(true), 500)}
                        >
                            <Link href='#home' className=' text-2xl font-semibold hover:text-slate-400 transition duration-300'>Kyan Cox</Link>
                        </Reveal>
                    )
                        :
                        <Link href='#home' className=' text-2xl font-semibold hover:text-slate-400 transition duration-300'>Kyan Cox</Link>
                    }
                    {!hasAnimated ? (
                        <Reveal
                            initial={{ opacity: 0, y: -30 }}
                            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.4 } }}
                            onAnimationComplete={() => setTimeout(() => setHasAnimated(true), 500)}
                        >
                            <SheetTrigger>
                                <Menu size={24} />
                            </SheetTrigger>
                        </Reveal>
                    )
                        :
                        <SheetTrigger>
                            <Menu size={24} />
                        </SheetTrigger>
                    }
                </nav>
                <SheetContent className="w-1/2 flex flex-col justify-between">

                    <Reveal
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: 6 / 20 } }}
                    >
                        <div className='flex items-center justify-end'>
                            <SheetClose className='border p-1 rounded-md' >
                                <X size={24} />
                            </SheetClose>
                        </div>
                    </Reveal>

                    <div className='flex flex-col items-center justify-center space-y-4'>
                        {buttons.map(({ name, route }, index) => (
                            <Reveal
                                key={name}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4, delay: index / 20 } }}
                            >
                                <Link key={name} href={route} className='text-xl font-semibold hover:text-slate-400 transition duration-200' onClick={() => setIsMenuOpen(false)}>
                                    <SheetClose >
                                        {name}
                                    </SheetClose>
                                </Link>
                            </Reveal>
                        ))}
                    </div>

                    <Reveal
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: 6 / 20 } }}
                    >
                        <div className=' flex items-center justify-end'>
                            <ModeToggle />
                        </div>
                    </Reveal>
                </SheetContent>
            </Sheet>
        </>
    )
}

export default Navbar