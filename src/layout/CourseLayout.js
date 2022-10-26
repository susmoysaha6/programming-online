import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftSideNav from '../components/LeftSideNav/LeftSideNav';

const CourseLayout = () => {
    return (
        <div className='grid md:grid-cols-4'>
            <LeftSideNav></LeftSideNav>
            <div className='mx-auto md:col-span-3'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default CourseLayout;