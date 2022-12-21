import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { FaDownload, FaGem, FaStar } from 'react-icons/fa';

// import ReactToPdf from '/react-to-pdf
import Pdf from "react-to-pdf";
import { Button } from 'flowbite-react';

const SingleCourse = () => {
    const singleCourseDetails = useLoaderData();
    const { title, image_url, price, rating, instructor, instructor_thumbnail, details, category_id, _id, total_purchase } = singleCourseDetails;
    const navigate = useNavigate();
    const ref = React.createRef();
    const handlePremiumAccess = () => {
        navigate(`/checkout/${_id}`);
    }
    return (
        <div>
            <div className='flex items-center justify-evenly   shadow-lg'>
                <h3 className='md:text-4xl my-5  md:font-semibold'>Wanna download this as pdf?</h3>
                <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => <Button onClick={toPdf}> Download Pdf <FaDownload className='mx-2' /></Button>}
                </Pdf>
            </div>
            <div ref={ref} className='max-w-[800px] mx-auto my:6 md:my-12 shadow-lg '>
                <h3 className='text-5xl my-5 text-center font-semibold'>THE COURSE IS ON {title}</h3>
                <div className=' mx-auto'>
                    <img className='mx-auto' src={image_url} alt="" />
                    <div className='flex  justify-evenly'>
                        <div className='flex items-center my-5'>
                            <p className='px-2 md:text-2xl md:font-semibold'>Instructor: </p>
                            <img width={50} className="rounded-full" src={instructor_thumbnail} alt="" />
                            <p className='pl-2 md:text-2xl md:font-semibold'>{instructor}</p>
                        </div>
                        <p className='text-yellow-400 flex items-center md:text-3xl md:font-semibold'>Rating: {rating}<FaStar /></p>
                    </div>
                </div>
                <ol style={{ listStyleType: 'decimal' }} className='mx-auto p-10 md:w-3/4 md:text-2xl md:font-semibold shadow-2xl'>
                    <li>Price:$ {price}</li>
                    <li>Purchased By: {total_purchase} people</li>
                    <li>Category: {category_id === "01" ? "Front-End" : category_id === "02" ? "Back-end" : "Database"}</li>
                </ol>
                <p className='my-6 font-bold md:text-xl mx-5 px-4 pb-5'><span className='text-blue-500'>Course Description:</span> {details}</p>
            </div>
            <Button onClick={handlePremiumAccess} className='mx-auto my-5 py-5'><FaGem className='mx-2' /> Get Premium Access</Button>
        </div>

    );
};

export default SingleCourse;