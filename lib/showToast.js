import Image from "next/image"
import { toast } from "sonner"
import { cn } from "./utils"

export const showToast = ({ title, description, iconSrc, alt, titleClassName, descriptionClassName }) => {
    toast(title || 'Advancement Made!', {
        description: description || 'Thanks for supporting me :)',
        icon: <Image alt={alt || 'icon'} className='scale-[2.0] sm:scale-[2.1] translate-x-3' quality={100} priority loading='eager' width={500} height={500} src={iconSrc || 'https://static.wikia.nocookie.net/hexxit/images/a/a7/Heart.svg'} />,
        style: {
            backgroundColor: 'transparent',
            boxShadow: 'none',
            border: 'none',
            backgroundRepeat: 'no-repeat'
        },
        classNames: {
            title: cn('text-base md:text-[1.100rem] md:leading-7 text-[#ffff00] translate-y-1 translate-x-6', titleClassName),
            description: cn('text-base md:text-[1.100rem] md:leading-7 text-white/80 -translate-y-1 translate-x-6', descriptionClassName),
        },
        className: 'font-minecraft_text bg-no-repeat bg-center h-16 bg-[length:100%_100%] bg-[url(https://i.loli.net/2020/09/27/zwIY6nVJRmqbHaL.png)]'
    })
}