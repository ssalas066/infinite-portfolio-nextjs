import Link from 'next/link';

const Footer = () => {
    return (
        <>
        <div className='fixed bottom-0 bg-indigo-600 text-white p-2 w-screen z-50'>
            <ul>
                <li className=''>
                    <Link href={''}>
                    </Link>
                </li>
                <p className='text-white'>
                    |
                </p>
                <li>
                    <Link href={''}>
                    </Link>
                </li>f
            </ul>
        </div>
        </>
    )
}

export default Footer;