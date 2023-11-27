import React from 'react';
import loginPic from '../../Media/img/login.png'
import { Link } from 'react-router-dom';
import { AiOutlineGooglePlus, AiFillInstagram } from 'react-icons/ai';
import UseAuth from '../../Shear/UseAuth/UseAuth';
const Login = () => {
    const {singInWithEmail,SetUser} = UseAuth()
    const login = (event) =>{
        event.preventDefault();
        const from = event.target
        const email = from.email.value
        const password = from.password.value
        if (password.length < 6){
            console.log("please input atlest 6 chereters")
        }else{
            singInWithEmail(email,password)
            .then((userCredential) => {
                const user = userCredential.user;
                // setError("");
                SetUser(user)
                from.reset();
              })
              .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
                // setError(errorMessage);
                from.reset();
              })
        }
        
    }
    return (
        <div className='md:mx-10 mx-3'>
            <div className='my-10 grid md:grid-cols-2 gap-5 items-center'>
                <div>
                    <img src={loginPic} alt="" />
                </div>
                <div>
                    <h4 className='capitalize text-3xl font-medium text-center mb-10'>please login your account</h4>
                    <form action="" onSubmit={login}>
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