import Link from 'next/link';

const Footer = () => {
    return (
        <>
        <div className='fixed bottom-0 bg-indigo-600 text-white p-2 w-screen z-50'>
            <ul className='flex flex-wrap justify-center gap-6 lg:gap-12'>
                <li className=''>
                    <Link className='font-medium text-gray-400 no-underline hover:underline hover:text-white' href={''}>
                        userName IG
                    </Link>
                </li>
                <p className='text-white'>
                    |
                </p>
                <li>
                    <Link className='font-medium text-gray-400 no-underline hover:underline hover:text-white' href={''}>
                        blah@geemail.com
                    </Link>
                </li>
            </ul>
        </div>
        </>
    )
}

export default Footer;