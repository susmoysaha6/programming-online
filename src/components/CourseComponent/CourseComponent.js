import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetails from '../CourseDetails/CourseDetails';

const CourseComponent = () => {
    const courses = useLoaderData();
    // console.log(courses);
    return (
        <div>
            <h1 className='text-center text-3xl my-5 font-semibold'>Please Select Course From below</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-12 w-11/12 mx-auto'>
                {
                    courses.map(course => <CourseDetails key={course._id} course={course}></CourseDetails>)
                }

            </div>

        </div>
    );
};

export default CourseComponent;