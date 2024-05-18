"use client";
import Image from 'next/image'
import React from 'react'
import { toast } from 'sonner';
import { useRef, useState, useEffect } from "react";
import Link from 'next/link';
import ObfuscateText from './obfuscateText';
import { cn } from '@/lib/utils';

export const showToast = ({ title, description, iconSrc, alt, titleClassName, descriptionClassName }) => {
    toast(title || 'Advancement Made!', {
        description: description || 'Thanks for supporting me :)',
        icon: <Image alt={alt || 'icon'} className='scale-[2.0] sm:scale-[2.1] translate-x-3' quality={100} priority loading='eager' width={500} height={500} src={iconSrc || 'https://static.wikia.nocookie.net/hexxit/images/a/a7/Heart.svg'} />,
        style: {
            backgroundColor: 'transparent',
            backgroundImage: 'url(/images/background/minecraft-achievement-background.png)',
            boxShadow: 'none',
            border: 'none',
            backgroundRepeat: 'no-repeat'
        },
        classNames: {
            title: cn(`text-base md:text-[1.100rem] md:leading-7 text-[#ffff00] translate-y-1 translate-x-6`, titleClassName),
            description: cn('text-base md:text-[1.100rem] md:leading-7 text-white/80 -translate-y-1 translate-x-6', descriptionClassName),
        },
        className: `font-minecraft_text bg-no-repeat bg-center h-16 bg-[length:100%_100%]`
    })
}

const Support = () => {
    const [buttonFollowText, setButtonFollowText] = useState('Follow Me!');
    const [buttonSupportText, setButtonSupportText] = useState('Support Me!');
    const [score, setScore] = useState(0);

    const mcRareAchievementSound = useRef(
        typeof Audio !== "undefined" ? new Audio('/sounds/minecraft-rare-achievement.mp3') : undefined
    );

    const increase = () => setScore(score + 1);

    const onFollow = async () => {
        setButtonFollowText('Redirecting...')

        increase()
        setTimeout(() => {
            mcRareAchievementSound.current?.play();

            showToast({
                title: 'Advancement Made!',
                description: 'Thanks for following me :)',
            })
            setButtonFollowText('Follow Me!')
        }, 2000);
    }

    const onSupport = async () => {
        setButtonSupportText('Redirecting...')

        setTimeout(() => {
            mcRareAchievementSound.current?.play();

            increase()
            showToast({
                title: 'Advancement Made!',
                description: 'Thanks for supporting me :)',
            })
            setButtonSupportText('Support Me!')
        }, 2000);
    }

    const onTenScore = () => {
        mcRareAchievementSound.current?.play();

        increase()
        showToast({
            title: 'Advancement Made!',
            description: score > 10 ? `High score ${score + 1}` : `${score + 1} score`,
        })
    }

    return (
        <div className='px-4 w-full flex flex-col gap-y-16 justify-center items-center h-screen'>

            <h1 className='font-minecraft_text text-5xl text-shadow-minecraft'>
                You died!
            </h1>

            <div className='text-center'>
                <p className='font-minecraft_text text-muted-foreground'>
                    <ObfuscateText text={"defavolia"} interval={80} /> fell from a high place
                </p>

                <p className='font-minecraft_text text-lg font-bold'>
                    Score:{" "}<span className='text-yellow-400/80'>{score}</span>
                </p>
            </div>


            <div className='flex w-full flex-col lg:flex-row gap-y-4'>
                <Link href={'https://instagram.com/defavolia/'} target='_blank' className="minecraft-btn mx-auto w-full md:w-64 text-center text-white truncate p-1 border-2 border-b-4 hover:text-yellow-200"
                    onClick={() => score >= 9 ? onTenScore() : onFollow()}
                >
                    {buttonFollowText}
                </Link>

                <Link href={'https://trakteer.id/daisss/'} target='_blank' className="minecraft-btn mx-auto w-full md:w-64 text-center text-white truncate p-1 border-2 border-b-4 hover:text-yellow-200"
                    onClick={() => score >= 9 ? onTenScore() : onSupport()}
                >
                    {buttonSupportText}
                </Link>
            </div>

        </div >
    )
}

export default Support