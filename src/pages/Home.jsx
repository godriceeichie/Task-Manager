import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components';
import MainContent from './MainContent';

const Home = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}

export default Home;