import { Button, Label, TextInput } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='w-3/4 md:w-1/2 lg:w-1/4 mx-auto my-5 py-5 shadow-lg px-5 rounded-lg border'>
            <form className="flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="name1"
                            value="Your Name"
                        />
                    </div>
                    <TextInput
                        id="name1"
                        type="text"
                        name='name'
                        placeholder="Enter Your Name"
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="photoURL1"
                            value="Your Photo URL "
                        />
                    </div>
                    <TextInput
                        id="photoURL1"
                        type="text"
                        name='photoURL'
                        placeholder="Enter Your Photo URL"
                        required={true}
                    />
                </div>
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
                    REGISTER
                </Button>
            </form>


            <p className=''>Already have an account?  <Link className='text-blue-500  items-center' to='/login'> Login Here. </Link> </p>
        </div>
    );
};

export default Register;