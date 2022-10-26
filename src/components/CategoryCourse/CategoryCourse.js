import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetails from '../CourseDetails/CourseDetails';

const CategoryCourse = () => {
    const categoryCourses = useLoaderData();
    console.log(categoryCourses);
    return (
        <div>
            <p className='text-center text-3xl my-5 font-semibold'>This Category has {categoryCourses.length} Courses</p>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-12 w-11/12 mx-auto'>
                {
                    categoryCourses.map(course => <CourseDetails key={course._id} course={course}></CourseDetails>)
                }
            </div>

        </div>
    );
};

export default CategoryCourse;