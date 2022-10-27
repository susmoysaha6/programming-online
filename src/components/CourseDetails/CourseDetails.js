import { Button, Card } from 'flowbite-react';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CourseDetails = ({ course }) => {
    const { title, image_url, _id, price, rating, instructor } = course;
    return (
        <div className="max-w-sm h-full ">
            <Card imgSrc={image_url}>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
                </h5>
                <h6 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">Instructor: {instructor}</h6>
                <div className='flex justify-between'>
                    <p className="font-semibold text-gray-700 dark:text-gray-400 text-lg">
                        Price: ${price}
                    </p>
                    <p className='text-yellow-400 flex items-center'>Rating: {rating} <FaStar /> </p>
                </div>
                <Link to={`/course/${_id}`}>
                    <Button className='w-full'>Course Details</Button>
                </Link>
            </Card>
        </div >
    );
};

export default CourseDetails;