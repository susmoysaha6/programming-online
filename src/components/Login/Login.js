import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const [userEmail, setUserEmail] = useState('');
    const [error, setError] = useState('');
    const { providerLogin, signIn, setLoading, resetPassword } = useContext(AuthContext);
    // console.log(providerLogin);
    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider();

    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                navigate('/');
                toast.success('You have signed in with google');
                console.log(user);
            })
            .catch(error => console.error(error));
    }
    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
                navigate('/');
                toast.success('You have beem signed in with github')
                console.log(user);
            })
            .catch(error => console.error(error));
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate('/');
                toast.success("Your log in has been successful")
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
                toast.error(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }
    // reset password
    const handleReset = () => {
        resetPassword(userEmail)
            .then(() => {
                toast.success('Reset link has been sent, please check email')
            })
            .catch(error => toast.error(error.message))
    }

    return (
        <div className='w-5/6 md:w-1/2 lg:w-1/4 mx-auto my-10 py-5 shadow-lg px-5 rounded-lg border'>
            <p className='text-center text-3xl font-semibold'>Log in</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 my-10">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email1"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        onBlur={e => setUserEmail(e.target.value)}
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
                    LOG IN
                </Button>

            </form>
            <p className='mt-3 text-lg font-semibold'>Forget Password <button onClick={handleReset} className='text-blue-400'>Click Here </button></p>
            <p className='text-center text-slate-500 my-5 font-bold text-lg'>Or</p>
            <>
                <Button onClick={handleGoogleSignIn} color="dark" className='w-full my-5'> <FaGoogle className='text-lg' /> <span className='ml-2 text-lg'>Sign in with Google</span> </Button>
                <Button onClick={handleGithubSignIn} color="dark" className='w-full my-5'> <FaGithub className='text-lg' /> <span className='ml-2 text-lg'>Sign in with Github</span> </Button>
            </>

            <p className='text-lg font-semibold'>Don't have Account?  <Link className='text-blue-400  items-center' to='/register'> Register here. </Link> </p>
        </div>
    );
};

export default Login;