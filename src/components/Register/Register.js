import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                navigate('/');
                form.reset();
                handleUpdateUserProfile(name, photoURL);
                handleEmailVerification();
                toast.success('Your has been created successfully.Please Verify your email')
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
                toast.error(error.message);
            })
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => {
                console.error(error);
            })
    };

    const handleEmailVerification = () => {
        verifyEmail()
            .then(() => { })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className='w-5/6 md:w-1/2 lg:w-1/4 mx-auto my-10 py-5 shadow-lg px-5 rounded-lg border'>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 my-10">
                <p className='text-center text-3xl font-semibold'>Register</p>
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
                <p className='text-xl text-red-600'>{error}</p>
                <Button type="submit">
                    REGISTER
                </Button>
                <p className='text-lg font-semibold'>Already have an account?  <Link className='text-blue-400  items-center' to='/login'> Login Here. </Link> </p>
            </form>
        </div>
    );
};

export default Register;