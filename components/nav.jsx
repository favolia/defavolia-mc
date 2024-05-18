"use client";
import Link from 'next/link'
import ObfuscateText from './obfuscateText';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { showToast } from '@/lib/showToast';
import { useRef } from "react";

const Nav = () => {

    const mcInfoSound = useRef(
        typeof Audio !== "undefined" ? new Audio('/sounds/minecraft-info.mp3') : undefined
    );

    const alertUser = () => {
        mcInfoSound.current?.play()
        showToast({
            title: 'Information',
            description: 'This page is not available',
            iconSrc: 'https://static.wikia.nocookie.net/hexxit/images/7/79/Grid_Crafting_Table.png',
            titleClassName: 'text-blue-600',
        })
    }

    useGSAP(() => {
        gsap.fromTo('#logo', {
            y: 80,
        }, {
            y: 0,
            delay: 2.3,
            duration: 1,
            opacity: 100
        })

        gsap.fromTo('#three3d', {
            x: 80,
        }, {
            x: 0,
            delay: 2.5,
            duration: 1,
            opacity: 100
        })
    }, [])

    return (
        <nav className="flex justify-between w-full sticky top-0 px-4 pt-1 z-50">
            <div className='font-minecraft text-lg text-green-600'>
                <div className='relative overflow-hidden'>
                    <Link id='logo' href={'/'} className='block text-xs sm:text-base font-enchant'>
                        <ObfuscateText text={'Defavolia'} className={'font-enchant'} duration={1000} />
                    </Link>
                </div>
            </div>

            <div className="text-lg overflow-hidden font-minecraft text-muted-foreground hover:text-purple-700 transition">
                <button id='three3d' className='block' onClick={alertUser}>
                    3D
                </button>
            </div>
        </nav>
    )
}

export default Nav