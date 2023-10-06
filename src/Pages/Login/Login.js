import React from 'react';
import login from '../../Media/img/login.png'
import { Link } from 'react-router-dom';
import { AiOutlineGooglePlus, AiFillInstagram } from 'react-icons/ai';
const Login = () => {
    return (
        <div className='md:mx-10 mx-3'>
            <div className='my-10 grid md:grid-cols-2 gap-5 items-center'>
                <div>
                    <img src={login} alt="" />
                </div>
                <div>
                    <h4 className='capitalize text-3xl font-medium text-center mb-10'>please login your account</h4>
                    <form action="">
                        <input type="email" name='email' className='w-full outline-none bg-inherit border-b px-3 py-2' placeholder='Type Your Email' />
                        <input type="password" name='password' className='w-full outline-none bg-inherit border-b px-3 py-2 mt-2' placeholder='Type Your Password' />
                        <input className='btn btn-neutral mt-5' type="submit" value="login" />
                        <Link className='btn btn-accent ml-5' to="/registration">create account</Link>
                    </form>
                    <div className='flex'>
                        <button className='flex mt-10 items-center lowercase btn btn-accent'><AiOutlineGooglePlus className='text-2xl -mr-1'></AiOutlineGooglePlus>oogle</button>
                        <button className='flex mt-10 items-center ml-5 btn btn-accent'><AiFillInstagram className='text-2xl -mr-1'></AiFillInstagram>instagram</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;