import { Button, Label, TextInput } from 'flowbite-react';
import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='w-3/4 md:w-1/2 lg:w-1/4 mx-auto my-5 py-5 shadow-lg px-5 rounded-lg border'>
            <form className="flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email1"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        id="email1"
                        type="email"
                        name='email'
                        placeholder="Enter Your Email"
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password1"
                            value="Your password"
                        />
                    </div>
                    <TextInput
                        id="password1"
                        type="password"
                        name='password'
                        placeholder="Enter Your Password"
                        required={true}
                    />
                </div>
                <Button type="submit">
                    LOG IN
                </Button>
            </form>
            <p className='text-center text-slate-500 my-5 font-bold text-lg'>Or</p>
            <Button color="dark" className='w-full my-5'> <FaGoogle /> <span className='ml-2'>Sign in with Google</span> </Button>
            <Button color="dark" className='w-full my-5'> <FaGithub /> <span className='ml-2'>Sign in with Github</span> </Button>
            <p className=''>Don't have Account?  <Link className='text-blue-500  items-center' to='/register'> Register here. </Link> </p>
        </div>
    );
};

export default Login;