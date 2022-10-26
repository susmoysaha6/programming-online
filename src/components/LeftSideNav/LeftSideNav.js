import { Button } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://e-learning-server-mauve.vercel.app/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='my-20 py-5 w-11/12 mx-auto  rounded-lg shadow-2xl h-fit '>
            <h3 className='text-2xl text-center font-semibold'>Course Categories</h3>
            {
                categories.map(category => <Button className='my-5 w-11/12 mx-auto shadow-lg' key={category.id}><Link to={`/courses/category/${category.id}`}>{category.name}</Link> </Button>)
            }
        </div>

    );
};

export default LeftSideNav;