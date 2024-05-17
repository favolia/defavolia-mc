import Link from 'next/link'

const Nav = () => {

    return (
        <nav className="flex justify-between w-full sticky top-0 px-3 z-50">
            <div className='font-minecraft text-lg text-green-600'>
                <div id='logo' className='relative overflow-hidden'>
                    <Link href={'/'} className='text-xs sm:text-base font-enchant'>defavolia</Link>
                </div>
            </div>

            <div className="text-lg font-minecraft text-zinc-500 hover:text-purple-600 transition">
                <Link href={'#'}>
                    3D
                </Link>
            </div>
        </nav>
    )
}

export default Nav