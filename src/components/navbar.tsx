import {useState} from 'react';
import Image from 'next/image';

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
        </nav>
        
        </>
    )
}