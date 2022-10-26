import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleCourse = () => {
    const singleCourseDetails = useLoaderData();
    const { title, image_url, _id, price, rating, instructor } = singleCourseDetails;
    console.log(singleCourseDetails);
    return (
        <div>
            <h3>The Course is about {title}</h3>
        </div>
    );
};

export default SingleCourse;