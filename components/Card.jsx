import React from 'react'

const Card = ({ children, title, description }) => {
    return (
        <div className="flex flex-col justify-center items-center gap-y-4 w-full sm:w-96">
            <div className="relative w-full h-96 sm:size-96">
                {children}
            </div>
            <h1 className="font-minecraft sm:text-4xl">{title}</h1>
            <p className="text-muted-foreground font-minecraft_text text-xs px-4 sm:px-0 sm:text-base text-justify">
                {description}
            </p>
        </div>
    )
}

export default Card