import { Button } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const course = useLoaderData();
    const { title, price } = course;

    const handlePurchage = () => {
        toast.success('Congrats, Now you have the premium access')
    }
    return (
        <div>
            <section className="py-20 dark:bg-gray-800 dark:text-gray-100">
                <div className="container px-4 mx-auto">
                    <div className="max-w-2xl mx-auto mb-16 text-center">
                        <span className="font-bold tracking-wider uppercase dark:text-sky-400">Course On</span>
                        <h2 className="text-4xl font-bold lg:text-5xl">{title}</h2>
                    </div>
                    <div className="flex flex-wrap items-stretch -mx-4">
                        <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 mx-auto lg:mb-0">
                            <div className="flex flex-col p-6 space-y-6 mx-auto rounded shadow sm:p-8 dark:bg-gray-900">
                                <div className="space-y-2">
                                    <h4 className="text-2xl font-bold">Professional</h4>
                                    <span className="text-2xl lg:text-6xl font-bold">Price: $ {price}</span>
                                </div>
                                <p className="mt-3 leading-relaxed dark:text-gray-400">What will you get from this premium access?</p>
                                <ul className="flex-1 mb-6 dark:text-gray-400">
                                    <li className="flex mb-2 space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-sky-400">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Life time updated lesson an sms alart on course update</span>
                                    </li>
                                    <li className="flex mb-2 space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-sky-400">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Community Support</span>
                                    </li>
                                    <li className="flex mb-2 space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-sky-400">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>Live session on demand</span>
                                    </li>
                                </ul>
                                <button type="button" onClick={handlePurchage} className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded dark:bg-sky-400 dark:text-gray-900">Buy Now!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Button className='mx-auto py-2 my-2'>
                <Link to={'/courses'}> <p className='flex items-center text-xl' ><FaArrowLeft className='mx-2' />Back to courses</p> </Link>
            </Button>
        </div>
    );
};

export default CheckOut;