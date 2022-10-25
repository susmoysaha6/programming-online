import React from 'react';
import { Outlet } from 'react-router-dom';

const Courses = () => {
    return (
        <div className='grid grid-cols-4'>
            <div>Side</div>

            <div className='col-span-3'>
                <p>a</p>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Courses;