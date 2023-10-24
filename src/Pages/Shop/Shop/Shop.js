import React from 'react';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import "./Shop.css"

const Shop = () => {
    return (
        <div className='md:mx-10 mx-3'>
            <div className='md:flex justify-between items-center mt-10'>
                <div className='md:block hidden'>
                    <h6 className='uppercase text-xl font-medium'>/Home/Shop</h6>
                </div>
                <div className='md:flex gap-x-5 items-center mb-2 md:mb-0 w-2/4'>
                    <select className="select select-info capitalize w-full max-w-xs">
                        <option disabled selected>Sort by categorys</option>
                        <option>shoe</option>
                        <option>bike</option>
                        <option>clothes</option>
                    </select>
                    <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" />
                </div>
            </div>
            <div className='md:grid grid-cols-4 gap-10 my-10'>
                <div className='col-span-3 md:grid grid-cols-3 gap-5'>
                    <div className='capitalize custom-card relative'>
                        <img className='rounded-md' src="https://nairametrics.com/wp-content/uploads/2022/02/Laptop-.jpg" alt="" srcset="" />
                        <div className='custom-btn'>
                            <button className='top-2 text-3xl bg-white text-black rounded right-2 absolute'><AiOutlineHeart></AiOutlineHeart></button>
                            <button className='absolute capitalize py-2 font-medium w-full bg-white text-black bottom-7'>add to cart</button>
                        </div>
                        <div className='flex justify-between mt-1'>
                            <h5>hp laptop</h5>
                            <h6>price : 37500</h6>
                        </div>
                    </div>
                    <div className='capitalize custom-card relative'>
                        <img className='rounded-md' src="https://nairametrics.com/wp-content/uploads/2022/02/Laptop-.jpg" alt="" srcset="" />
                        <div className='custom-btn'>
                            <button className='top-2 text-3xl bg-white text-black rounded right-2 absolute'><AiOutlineHeart></AiOutlineHeart></button>
                            <button className='absolute capitalize py-2 font-medium w-full bg-white text-black bottom-7'>add to cart</button>
                        </div>
                        <div className='flex justify-between mt-1'>
                            <h5>hp laptop</h5>
                            <h6>price : 37500</h6>
                        </div>
                    </div>
                    <div className='capitalize custom-card relative'>
                        <img className='rounded-md' src="https://nairametrics.com/wp-content/uploads/2022/02/Laptop-.jpg" alt="" srcset="" />
                        <div className='custom-btn'>
                            <button className='top-2 text-3xl bg-white text-black rounded right-2 absolute'><AiOutlineHeart></AiOutlineHeart></button>
                            <button className='absolute capitalize py-2 font-medium w-full bg-white text-black bottom-7'>add to cart</button>
                        </div>
                        <div className='flex justify-between mt-1'>
                            <h5>hp laptop</h5>
                            <h6>price : 37500</h6>
                        </div>
                    </div>
                    <div className='capitalize custom-card relative'>
                        <img className='rounded-md' src="https://nairametrics.com/wp-content/uploads/2022/02/Laptop-.jpg" alt="" srcset="" />
                        <div className='custom-btn'>
                            <button className='top-2 text-3xl bg-white text-black rounded right-2 absolute'><AiOutlineHeart></AiOutlineHeart></button>
                            <button className='absolute capitalize py-2 font-medium w-full bg-white text-black bottom-7'>add to cart</button>
                        </div>
                        <div className='flex justify-between mt-1'>
                            <h5>hp laptop</h5>
                            <h6>price : 37500</h6>
                        </div>
                    </div>
                    <div className='capitalize custom-card relative'>
                        <img className='rounded-md' src="https://nairametrics.com/wp-content/uploads/2022/02/Laptop-.jpg" alt="" srcset="" />
                        <div className='custom-btn'>
                            <button className='top-2 text-3xl bg-white text-black rounded right-2 absolute'><AiOutlineHeart></AiOutlineHeart></button>
                            <button className='absolute capitalize py-2 font-medium w-full bg-white text-black bottom-7'>add to cart</button>
                        </div>
                        <div className='flex justify-between mt-1'>
                            <h5>hp laptop</h5>
                            <h6>price : 37500</h6>
                        </div>
                    </div>
                    <div className='capitalize custom-card relative'>
                        <img className='rounded-md' src="https://nairametrics.com/wp-content/uploads/2022/02/Laptop-.jpg" alt="" srcset="" />
                        <div className='custom-btn'>
                            <button className='top-2 text-3xl bg-white text-black rounded right-2 absolute'><AiOutlineHeart></AiOutlineHeart></button>
                            <button className='absolute capitalize py-2 font-medium w-full bg-white text-black bottom-7'>add to cart</button>
                        </div>
                        <div className='flex justify-between mt-1'>
                            <h5>hp laptop</h5>
                            <h6>price : 37500</h6>
                        </div>
                    </div>
                    <div className='capitalize custom-card relative'>
                        <img className='rounded-md' src="https://nairametrics.com/wp-content/uploads/2022/02/Laptop-.jpg" alt="" srcset="" />
                        <div className='custom-btn'>
                            <button className='top-2 text-3xl bg-white text-black rounded right-2 absolute'><AiOutlineHeart></AiOutlineHeart></button>
                            <button className='absolute capitalize py-2 font-medium w-full bg-white text-black bottom-7'>add to cart</button>
                        </div>
                        <div className='flex justify-between mt-1'>
                            <h5>hp laptop</h5>
                            <h6>price : 37500</h6>
                        </div>
                    </div>
                    <div className='capitalize custom-card relative'>
                        <img className='rounded-md' src="https://nairametrics.com/wp-content/uploads/2022/02/Laptop-.jpg" alt="" srcset="" />
                        <div className='custom-btn'>
                            <button className='top-2 text-3xl bg-white text-black rounded right-2 absolute'><AiOutlineHeart></AiOutlineHeart></button>
                            <button className='absolute capitalize py-2 font-medium w-full bg-white text-black bottom-7'>add to cart</button>
                        </div>
                        <div className='flex justify-between mt-1'>
                            <h5>hp laptop</h5>
                            <h6>price : 37500</h6>
                        </div>
                    </div>
                    <div className='capitalize custom-card relative'>
                        <img className='rounded-md' src="https://nairametrics.com/wp-content/uploads/2022/02/Laptop-.jpg" alt="" srcset="" />
                        <div className='custom-btn'>
                            <button className='top-2 text-3xl bg-white text-black rounded right-2 absolute'><AiOutlineHeart></AiOutlineHeart></button>
                            <button className='absolute capitalize py-2 font-medium w-full bg-white text-black bottom-7'>add to cart</button>
                        </div>
                        <div className='flex justify-between mt-1'>
                            <h5>hp laptop</h5>
                            <h6>price : 37500</h6>
                        </div>
                    </div>
           
                </div>
                <div className='col-span-1'>
                    <h5 className='text-xl font-medium uppercase mb-5'>categorys</h5>
                    <ul className='text-left uppercase font-medium text-xl'>
                        <li className='hover:text-red-500 cursor-pointer'>clothes</li>
                        <li className='hover:text-red-500 cursor-pointer mt-1'>laptop</li>
                        <li className='hover:text-red-500 cursor-pointer mt-1'>bike</li>
                        <li className='hover:text-red-500 cursor-pointer mt-1'>tv</li>
                        <li className='hover:text-red-500 cursor-pointer mt-1'>fridge</li>
                        <li className='hover:text-red-500 cursor-pointer mt-1'>shoe</li>
                        <li className='hover:text-red-500 cursor-pointer mt-1'>controler</li>
                    </ul>
                    <h5 className='mt-10 pb-5 border-b border-gray-500'>FOLLOW</h5>
                    <div className='flex justify-around mt-5 items-center text-3xl'>
                        <a className='hover:text-sky-400' href="http://" target="_blank" rel="noopener noreferrer"><BsFacebook></BsFacebook></a>
                        <a className='hover:text-sky-400' href="http://" target="_blank" rel="noopener noreferrer"><BsInstagram></BsInstagram></a>
                        <a className='hover:text-sky-400' href="http://" target="_blank" rel="noopener noreferrer"><BsLinkedin></BsLinkedin></a>
                        <a className='hover:text-sky-400' href="http://" target="_blank" rel="noopener noreferrer"><BsTwitter></BsTwitter></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;