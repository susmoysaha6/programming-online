import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetails from '../CourseDetails/CourseDetails';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const CourseComponent = () => {
    const courses = useLoaderData();
    // console.log(courses);
    return (
        <div>
            <h1 className='text-center text-3xl my-5 font-semibold'>Please Select Course From below</h1>
            <div className='grid grid-cols-3 gap-4'>
                {
                    courses.map(course => <CourseDetails key={course._id} course={course}></CourseDetails>)
                }

            </div>

        </div>
    );
};

export default CourseComponent;