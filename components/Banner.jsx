"use client";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useState } from 'react'
import ObfuscateText from "@/components/obfuscateText";
import Link from "next/link";


const Banner = () => {
    const [isMouseOverIg, setIsMouseOverIg] = useState(false);

    useGSAP(() => {
        gsap.fromTo('#title_banner1', {
            y: 80,
        }, {
            y: 0,
            duration: 1,
            opacity: 100
        })

        gsap.fromTo('#title_banner2', {
            y: 80,
        }, {
            y: 0,
            duration: 1,
            delay: 0.2,
            opacity: 100
        })

        gsap.fromTo('#description_banner', {
            y: 40,
        }, {
            y: 0,
            delay: 1,
            duration: 1,
            opacity: 100
        })
    }, [])

    return (
        <div className="relative text-center md:text-left">
            <div className="overflow-hidden">
                <div className="font-minecraft relative inline-block text-4xl sm:text-5xl md:text-6xl">
                    <span className="overflow-hidden inline-block text-green-600">
                        <div id="title_banner1">
                            Minecraft
                        </div>
                    </span>
                    {" "}
                    <span className="overflow-hidden inline-block text-black hover:text-purple-700 transition">
                        <div id="title_banner2">
                            3D Preview
                        </div>
                    </span>
                </div>
            </div>

            <div className="overflow-hidden md:w-fit" onMouseOver={() => setIsMouseOverIg(true)} onMouseOut={() => setIsMouseOverIg(false)}>
                <p id="description_banner" className="pl-1 text-xs sm:text-base md:text-lg font-minecraft_text text-muted-foreground">
                    Lazy Project By{" "}
                    <span className="cursor-pointer">
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
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Banner