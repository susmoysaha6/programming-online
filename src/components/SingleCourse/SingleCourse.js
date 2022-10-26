import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { FaDownload, FaGem, FaStar } from 'react-icons/fa';

// import ReactToPdf from '/react-to-pdf
import Pdf from "react-to-pdf";
import { Button } from 'flowbite-react';

const SingleCourse = () => {
    const singleCourseDetails = useLoaderData();
    console.log(singleCourseDetails);
    const { title, image_url, price, rating, instructor, instructor_thumbnail, details, category_id, _id } = singleCourseDetails;
    console.log(singleCourseDetails);
    const navigate = useNavigate();
    const ref = React.createRef();
    const handlePremiumAccess = () => {
        navigate(`/checkout/${_id}`, { state: { title, price } });
    }
    return (
        <div>
            <div className='flex items-center justify-evenly   shadow-lg'>
                <h3 className='md:text-4xl my-5  md:font-semibold'>Wanna doewnload this as pdf?</h3>
                <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => <Button onClick={toPdf}> Download Pdf <FaDownload className='mx-2' /></Button>}
                </Pdf>
            </div>
            <div ref={ref} className='w-11/12 mx-auto my:6 md:my-12 shadow-lg '>
                <h3 className='text-5xl my-5 text-center font-semibold'>THE COURSE IS ON {title}</h3>
                <div className='lg:w-1/2 mx-auto'>
                    <img className='mx-auto' src={image_url} alt="" />
                    <Button onClick={handlePremiumAccess} className='mx-auto my-5'><FaGem className='mx-2' /> Get Premium Access</Button>
                    <div className='flex  justify-evenly'>
                        <div className='flex items-center my-5'>
                            <p className='px-2 text-2xl font-semibold'>Instructor: </p>
                            <img width={50} className="rounded-full" src={instructor_thumbnail} alt="" />
                            <p className='pl-2 text-2xl font-semibold'>{instructor}</p>
                        </div>
                        <p className='text-yellow-400 flex items-center text-3xl font-semibold'>Rating: {rating}<FaStar /></p>
                    </div>
                </div>
                <ol style={{ listStyleType: 'decimal' }} className='w-3/4 mx-auto pl-2 text-3xl font-semibold'>
                    <li>Price:$ {price}</li>
                    <li>Category: {category_id === "01" ? "Front-End" : category_id === "02" ? "Back-end" : "Database"}</li>
                </ol>
                <p className='my-6 font-bold md:text-xl mx-5 px-4'><span className='text-blue-500'>Course Description:</span> {details}</p>
            </div>
        </div>

    );
};

export default SingleCourse;