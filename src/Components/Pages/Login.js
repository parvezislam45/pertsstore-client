import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { useForm } from 'react-hook-form';
import Loading from './Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../Hook/UseToken';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [token] = useToken(user || gUser)

    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, user, gUser, from, navigate])

    if (loading || gLoading) {
        return <Loading></Loading>
    }

    if (error || gError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    }

    return (
        <div>
            <div className='flex justify-center items-center h-screen'>
                <div class="relative sm:flex sm:flex-row bg-transparent rounded-3xl">
                    <div class="self-center">
                        <div class="p-12 bg-gradient-to-b from-orange-800 via-orange-900 to-cyan-700 mx-auto rounded-3xl w-96 ">
                            <h3 class="font-semibold text-2xl text-gray-300 text-center">Login </h3>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div class="space-y-6">
                                    <div class="mt-6">
                                        <input class=" w-full text-sm  px-4 py-3 bg-gray-900 border text-white  border-white rounded-lg focus:outline-none focus:border-purple-400" type="" placeholder="Email"
                                            {...register("email", {
                                                required: {
                                                    value: true,
                                                    message: 'Email is Required'
                                                },
                                                pattern: {
                                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                    message: 'Provide a valid Email'
                                                }
                                            })}
                                        />
                                        <label className="label">
                                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                        </label>
                                    </div>
                                    <div class="relative">
                                        <input type="text" placeholder="Password" class="input input-bordered input-secondary max-w-xs text-sm text-gray-200 px-4 py-3 rounded-lg w-full bg-gray-900 border focus:outline-none focus:border-purple-400"
                                            {...register("password", {
                                                required: {
                                                    value: true,
                                                    message: 'Password is Required'
                                                },
                                                minLength: {
                                                    value: 6,
                                                    message: 'Must be 6 characters or longer'
                                                }
                                            })} />
                                        <label className="label">
                                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                        </label>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <div class="text-sm ml-auto">
                                            <a href="/" class="text-purple-700 hover:text-purple-600"><span className='text-white'>Forgot your password?</span></a>
                                        </div>
                                    </div>
                                </div>
                                {signInError}
                                <input className="btn btn-outline btn-secondary w-full flex justify-center bg-gray-900  hover:bg-purple-700 text-gray-100 p-3  rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-500 mt-3" type="submit" value="Login" />
                            </form>
                            <div class="mb-7 mt-3">
                                <Link to='/signup'><p class="text-sm text-white hover:text-purple-600">Don't have an account?Sign Up</p></Link>
                            </div>
                            <div class="flex items-center justify-center space-x-2 my-5">
                                <span class="h-px w-16 bg-gray-700"></span>
                                <span class="text-gray-400 font-normal">or</span>
                                <span class="h-px w-16 bg-gray-700"></span>
                            </div>
                            <div class="flex justify-center gap-5 w-full ">

                                <button onClick={() => signInWithGoogle()} class="w-full flex items-center justify-center mb-6 md:mb-0 border border-white hover:border-gray-900 hover:bg-gray-900 text-sm text-gray-300 p-3  rounded-lg tracking-wide font-medium  cursor-pointer transition ease-in duration-500">
                                    <svg class="w-4 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#EA4335" d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115Z" /><path fill="#34A853" d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 0 1-6.723-4.823l-4.04 3.067A11.965 11.965 0 0 0 12 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987Z" /><path fill="#4A90E2" d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21Z" /><path fill="#FBBC05" d="M5.277 14.268A7.12 7.12 0 0 1 4.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 0 0 0 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067Z" /></svg>
                                    <span>Google</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        </div>
    );
};

export default Login;