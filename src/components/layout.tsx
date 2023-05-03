import React, { PropsWithChildren } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Layout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <Navbar />
            { children }
            <Footer />
        </>
    )
}

export default Layout;