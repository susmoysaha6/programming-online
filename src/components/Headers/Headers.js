import { Button, DarkThemeToggle, Tooltip } from 'flowbite-react';
import { useContext, useState } from 'react';

import { Link } from 'react-router-dom';
import po from '../../assets/po.png'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const Headers = () => {
    const { user, logOut } = useContext(AuthContext);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div className="bg-slate-800 text-white">
            <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full  md:px-24 lg:px-8">
                <div className="relative flex items-center justify-between">
                    <Link
                        to="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                    >
                        <img
                            src={po}
                            className="mr-3 h-6 sm:h-9"
                            alt=""
                        />

                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                            Programming Online
                        </span>
                    </Link>
                    <ul className="flex items-center hidden space-x-8 lg:flex">
                        <li>
                            <Link className='my-2' to='/'
                            >
                                HOME
                            </Link>

                        </li>
                        <li>
                            <Link className='my-2' to="/courses">
                                COURSES
                            </Link>

                        </li>
                        <li>
                            <Link className='my-2' to="/faq">
                                FAQ
                            </Link>
                        </li>
                        <li>
                            <Link className='my-2' to="/blog">
                                BLOG
                            </Link>
                        </li>
                        {user?.uid ?
                            <>
                                <Tooltip content={user.displayName ? user.displayName : 'user'}>
                                    <img alt="" className="w-10 h-10  rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-sky-400 ring-offset-gray-800" src={user?.photoURL} />
                                </Tooltip>
                                <Button onClick={handleLogOut} >
                                    LOG OUT
                                </Button>
                            </>
                            :
                            <>
                                <li>
                                    <Link className='my-2' to="/login">
                                        LOG IN
                                    </Link>
                                </li>
                                <li>
                                    <Link className='my-2' to="/register">
                                        REGISTER
                                    </Link>
                                </li>
                            </>}
                        <DarkThemeToggle />
                    </ul>
                    <div className="lg:hidden">
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div className="absolute top-0 left-0 w-full z-50 h-fit">
                                <div className="p-5 bg-black border rounded shadow-sm">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <Link
                                                to="/"
                                                aria-label="Company"
                                                title="Company"
                                                className="inline-flex items-center"
                                            >
                                                <img
                                                    src={po}
                                                    className="mr-3 h-6 sm:h-9"
                                                    alt=""
                                                />

                                                <span className="ml-2 text-xl font-bold tracking-wide text-gray-400 uppercase">
                                                    Programming Online
                                                </span>
                                            </Link>
                                        </div>
                                        <div>
                                            <button
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                    <path
                                                        fill="currentColor"
                                                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav>
                                        <ul className="space-y-4 text-gray-500 flex flex-col items-center ">
                                            <li>
                                                <Link className='my-2' to='/'
                                                >
                                                    HOME
                                                </Link>

                                            </li>
                                            <li>
                                                <Link className='my-2' to="/courses">
                                                    COURSES
                                                </Link>

                                            </li>
                                            <li>
                                                <Link className='my-2' to="/faq">
                                                    FAQ
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className='my-2' to="/blog">
                                                    BLOG
                                                </Link>
                                            </li>
                                            {user?.uid ?
                                                <>
                                                    <Tooltip content={user.displayName ? user.displayName : 'user'}>
                                                        <img alt="" className="w-10 h-10  rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-sky-400 ring-offset-gray-800" src={user?.photoURL} />
                                                    </Tooltip>
                                                    <Button onClick={handleLogOut}  >
                                                        LOG OUT
                                                    </Button>
                                                </>
                                                :
                                                <>
                                                    <li>
                                                        <Link className='my-2' to="/login">
                                                            LOG IN
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link className='my-2' to="/register">
                                                            REGISTER
                                                        </Link>
                                                    </li>
                                                </>}
                                            <DarkThemeToggle />
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};



export default Headers;