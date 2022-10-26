import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftSideNav from '../components/LeftSideNav/LeftSideNav';

const CourseLayout = () => {
    return (
        <div className='grid grid-cols-4'>
            <LeftSideNav></LeftSideNav>
            <div className='col-span-3'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default CourseLayout;