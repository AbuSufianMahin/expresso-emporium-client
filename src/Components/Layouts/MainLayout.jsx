import React from 'react';

import { Outlet } from 'react-router';
import Footer from '../Footer';
import LogoBar from '../LogoBar';

const MainLayout = () => {
    return (
        <>
            <LogoBar></LogoBar>

            <Outlet></Outlet>

            <Footer></Footer>
        </>
    );
};

export default MainLayout;