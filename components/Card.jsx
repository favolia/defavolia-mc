import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

const Card = ({ children, title, description, className, id }) => {
    return (
        <div id={id} className={cn("flex flex-col justify-center items-center gap-y-4 w-full", className)}>
            <div className="relative w-full h-96 lg:w-96">
                {children}
            </div>
            <Link href={"#" + id} className="font-minecraft sm:text-4xl">{title}</Link>
            <p className="text-muted-foreground font-minecraft_text text-xs px-4 lg:px-0 sm:text-base text-justify">
                {description}
            </p>
        </div>
    )
}

export default Card