import React from 'react';
import login from '../../Media/img/login.png'
import { Link } from 'react-router-dom';
import { AiFillInstagram, AiOutlineGooglePlus } from 'react-icons/ai';
const Ragistration = () => {
    return (
        <div className='md:mx-10 mx-3'>
            <div className='my-10 grid md:grid-cols-2 gap-5 items-center'>
                <div>
                    <img src={login} alt="" />
                </div>
                <div>
                    <h4 className='capitalize text-3xl font-medium text-center mb-10'>please create your account</h4>
                    <form action="">
                        <input type="text" name='name' className='w-full outline-none bg-inherit border-b px-3 py-2' placeholder='Type Your Name' />
                        <input type="email" name='email' className='w-full mt-2 outline-none bg-inherit border-b px-3 py-2' placeholder='Type Your Email' />
                        <input type="password" name='password' className='w-full outline-none bg-inherit border-b px-3 py-2 mt-2' placeholder='Type Your Password' />
                        <input className='btn btn-neutral mt-5' type="submit" value="sing up" />
                        <Link className='btn btn-accent ml-5' to="/login">login</Link>
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

export default Ragistration;