import React from 'react';
import { Outlet } from 'react-router-dom';
import FooterContainer from '../components/FooterContainer/FooterContainer';
import Headers from '../components/Headers/Headers';

const Main = () => {
    return (
        <div>
            <Headers></Headers>
            <Outlet></Outlet>
            <FooterContainer></FooterContainer>
        </div>
    );
};

export default Main;