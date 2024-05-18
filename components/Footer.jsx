"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import { Separator } from "@/components/ui/separator"
import ObfuscateText from './obfuscateText';

const Footer = () => {
    const [isMouseOverIg, setIsMouseOverIg] = useState(false);

    return (
        <footer className="">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className='font-minecraft text-lg text-green-600'>
                        <div id='logo' className='relative overflow-hidden'>
                            <Link href={'/'} className='text-xs sm:text-base font-enchant'>defavolia</Link>
                        </div>
                    </div>

                    <ul className="flex flex-wrap font-minecraft_text items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <Link href={"#"} className="hover:underline me-4 md:me-6">3D</Link>
                        </li>

                    </ul>
                </div>
                <Separator className="my-4 bg-muted-foreground/20" />
                <span className="block font-minecraft_text text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2024{" "}
                    <span className="cursor-pointer" onMouseOver={() => setIsMouseOverIg(true)} onMouseOut={() => setIsMouseOverIg(false)}>
                        {
                            isMouseOverIg
                                ? (
                                    <Link href={'https://instagram.com/defavolia/'}>
                                        <ObfuscateText text={'Defavolia'} className={'underline'} />
                                    </Link>
                                )
                                : (
                                    <Link href={'https://instagram.com/defavolia/'} target="_blank" className="underline">Defavolia</Link>
                                )}
                    </span>{" "}
                    All Rights Reserved.
                </span>
            </div>
        </footer>
    )
}

export default Footer