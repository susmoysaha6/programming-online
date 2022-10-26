import { Button } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='my-5 py-5 mx-auto'>
            <h3 className='text-2xl'>Course Categories</h3>
            {
                categories.map(category => <Button className='my-5 w-full' key={category.id}><Link to={`/courses/category/${category.id}`}>{category.name}</Link> </Button>)
            }
        </div>

    );
};

export default LeftSideNav;