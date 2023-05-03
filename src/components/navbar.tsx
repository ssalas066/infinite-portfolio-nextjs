import {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import Image from 'next/image';

const Navbar = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <>
        <nav className='flex items-center flex-wrap fixed w-full z-10 top-0 shadow-2xl bg-cyan-800'>
            <div className='inline-flex items-center p-2 mr-4'>
                <Image className='block rounded fill-current text-white h-10 w-10 mr-2'
                src={}
                alt=''
                />
            </div>
            <button
            className='inline-flex p-3 hover:bg-gray-300 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
            onClick={handleClick}
            >
                <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M4 6h16M4 12h16M4 18h16'
                            />
                    </svg>
            </button>
            <div
                className={`${
                    active ? '' : 'hidden'
                } w-full lg:inline-flex lg:flex-grow lg:w-auto`}
                >
                    <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto'>
                        <Link href='/' className='lg:inline-flex lg:w-auto w-full bg-gray-900/50 text-white no-underline hover:underline rounded-md px-3 py-2 text-sm font-medium '>
                        Home
                        </Link>
                        <Link href={}>
                        </Link>
                    </div>
                </div>
        </nav>
        
        </>
    )
}

export default Navbar;