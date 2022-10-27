import React from 'react';
import prog from '../../assets/prog.png'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <section className="w-full lg:grid grid-cols-2 dark:bg-gray-800 dark:text-gray-100 my-12">
                <div className=''>
                    <img className='w-full' src={prog} alt="" />
                </div>
                <div className='p-12  lg:w-3/4'>
                    <h3 className='text-3xl font-bold'>Programming Online</h3>
                    <p className='py-10 md:text-xl font-semibld'>It is a online based programming or technology learning platform on verious technology/ programming languages by world famous instractor. We have many facilitics, like: student support, job placement. We provide certificates after completeing the course successfully.</p>
                    <div className='mt-10'>
                        <Link to='/courses' className='p-4 rounded bg-sky-400 text-slate-900'>Select from our courses</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;