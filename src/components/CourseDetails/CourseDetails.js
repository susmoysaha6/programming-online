import { Button, Card } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const CourseDetails = ({ course }) => {
    console.log(course);

    const { title, image_url, _id, price, rating } = course;
    return (
        <div className="max-w-sm h-full ">
            <Card imgSrc={image_url}>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
                </h5>
                <p className="font-semibold text-gray-700 dark:text-gray-400 text-lg">
                    ${price}
                </p>
                <p>{rating}</p>
                <Link to={`/course/${_id}`}>
                    <Button>Course Details</Button>
                </Link>

            </Card>
        </div>
    );
};

export default CourseDetails;