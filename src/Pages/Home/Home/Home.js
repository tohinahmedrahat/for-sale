import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import img from '../../../Media/img/electronic-store.jpg'
import img2 from '../../../Media/img/cloths.jpg'
import img3 from '../../../Media/img/car.jpg'
import img4 from '../../../Media/img/bike.jpg'
import img5 from '../../../Media/img/tv-fridge.jpg'
import man from '../../../Media/img/man.jpg'
import woman from '../../../Media/img/woman.jpg'
import mom from '../../../Media/img/mom.jpg'
import sport from '../../../Media/img/sports.jpg'
import fitness from '../../../Media/img/fitness.jpg'
import bike from '../../../Media/img/bikes.png'
import beauty from '../../../Media/img/beauty.webp'
import elecronics from '../../../Media/img/elecronics.png'
import home from '../../../Media/img/home-appliances.png'
import homelife from '../../../Media/img/home-life.png'
import tv from '../../../Media/img/tv.png'
import fridge from '../../../Media/img/fridge.png'
import oven from '../../../Media/img/oven.png'
import stove from '../../../Media/img/stove.png'
import shoe from '../../../Media/img/shoe.png'
import laptop from '../../../Media/img/laptop.png'
import { AiOutlineHeart } from 'react-icons/ai';
import { BsSearch, BsGift } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import { TbTruckDelivery } from 'react-icons/tb';
import "./Home.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Home = () => {

    return (
        <div className='md:mx-10 mx-3'>
            <div className='md:flex justify-between items-center mt-10'>
                <div className='md:block hidden'>
                    <h6 className='uppercase text-xl font-medium'>/Home</h6>
                </div>
                <div className='md:flex gap-x-5 items-center mb-2 md:mb-0 w-2/4'>
                    <select className="select select-info w-full max-w-xs">
                        <option disabled selected>Select language</option>
                        <option>English</option>
                        <option>Japanese</option>
                        <option>Italian</option>
                    </select>
                    <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" />
                </div>
            </div>
            <div className='md:grid grid-cols-3 gap-10 mt-10'>
                <div className='col-span-2'>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide><img className='rounded-xl' src={img} alt="" /></SwiperSlide>
                        <SwiperSlide><img className='rounded-xl' src={img2} alt="" /></SwiperSlide>
                        <SwiperSlide><img className='rounded-xl' src={img3} alt="" /></SwiperSlide>
                        <SwiperSlide><img className='rounded-xl' src={img4} alt="" /></SwiperSlide>
                        <SwiperSlide><img className='rounded-xl' src={img5} alt="" /></SwiperSlide>
                        
                    </Swiper>
                </div>
                <div className='md:text-center bg-[#29195e] p-5 rounded-xl md:mt-10 font-medium text-2xl uppercase'>
                    <ul className='md:mt-5'>
                        <li className='cursor-pointer border border-gray-400 hover:shadow-sm hover:shadow-slate-300 rounded-md py-2 px-2 hover:text-red-500'>Fashion</li>
                        <li className='cursor-pointer border hover:shadow-sm hover:shadow-slate-300 border-gray-400 rounded-md mt-1 py-2 px-2 hover:text-red-500'>electornicc</li>
                        <li className='cursor-pointer border hover:shadow-sm hover:shadow-slate-300 border-gray-400 rounded-md mt-1 py-2 px-2 hover:text-red-500'>jewlary</li>
                        <li className='cursor-pointer border hover:shadow-sm hover:shadow-slate-300 border-gray-400 rounded-md mt-1 py-2 px-2 hover:text-red-500'>shoe</li>
                        <li className='cursor-pointer border hover:shadow-sm hover:shadow-slate-300 border-gray-400 rounded-md mt-1 py-2 px-2 hover:text-red-500'>exacories</li>
                        <li className='cursor-pointer border hover:shadow-sm hover:shadow-slate-300 border-gray-400 rounded-md mt-1 py-2 px-2 hover:text-red-500'>cars</li>
                        <li className='cursor-pointer border hover:shadow-sm hover:shadow-slate-300 border-gray-400 rounded-md mt-1 py-2 px-2 hover:text-red-500'>toy</li>
                        <li className='cursor-pointer border hover:shadow-sm hover:shadow-slate-300 border-gray-400 rounded-md mt-1 py-2 px-2 hover:text-red-500'>clothes</li>
                    </ul>
                </div>
            </div>
            <div className='md:grid-cols-10 grid grid-cols-3 gap-5 my-10'>
                <div className='border border-gray-400 rounded-lg hover:shadow-lg hover:shadow-slate-300 cursor-pointer'>
                    <img className='rounded-lg w-full h-[80px]' src={man} alt="" />
                    <h6 className='capitalize mt-2 text-base pl-1 font-medium'>men fashion</h6>
                </div>
                <div className='border border-gray-400 rounded-lg hover:shadow-lg hover:shadow-slate-300 cursor-pointer'>
                    <img className='rounded-lg w-full h-[80px]' src={woman} alt="" />
                    <h6 className='capitalize mt-2 text-base pl-1 font-medium'>woman fashion</h6>
                </div>
                <div className='border border-gray-400 rounded-lg hover:shadow-lg hover:shadow-slate-300 cursor-pointer'>
                    <img className='rounded-lg w-full h-[80px]' src={mom} alt="" />
                    <h6 className='capitalize mt-2 text-base pl-1 font-medium'>mom & baby fashion</h6>
                </div>
                <div className='border border-gray-400 rounded-lg hover:shadow-lg hover:shadow-slate-300 cursor-pointer'>
                    <img className='rounded-lg w-full h-[80px]' src={sport} alt="" />
                    <h6 className='capitalize mt-2 text-base pl-1 font-medium'>sports</h6>
                </div>
                <div className='border border-gray-400 rounded-lg hover:shadow-lg hover:shadow-slate-300 cursor-pointer'>
                    <img className='rounded-lg w-full h-[80px]' src={fitness} alt="" />
                    <h6 className='capitalize mt-2 text-base pl-1 font-medium'>fitness</h6>
                </div>
                <div className='border border-gray-400 rounded-lg hover:shadow-lg hover:shadow-slate-300 cursor-pointer'>
                    <img className='rounded-lg w-full h-[80px]' src={beauty} alt="" />
                    <h6 className='capitalize mt-2 text-base pl-1 font-medium'>beauty</h6>
                </div>
                <div className='border border-gray-400 rounded-lg hover:shadow-lg hover:shadow-slate-300 cursor-pointer'>
                    <img className='rounded-lg w-full h-[80px]' src={elecronics} alt="" />
                    <h6 className='capitalize mt-2 text-base pl-1 font-medium'>elecronics</h6>
                </div>
                <div className='border border-gray-400 rounded-lg hover:shadow-lg hover:shadow-slate-300 cursor-pointer'>
                    <img className='rounded-lg w-full h-[80px]' src={home} alt="" />
                    <h6 className='capitalize mt-2 text-base pl-1 font-medium'>home appliances</h6>
                </div>
                <div className='border border-gray-400 rounded-lg hover:shadow-lg hover:shadow-slate-300 cursor-pointer'>
                    <img className='rounded-lg w-full h-[80px]' src={homelife} alt="" />
                    <h6 className='capitalize mt-2 text-base pl-1 font-medium'>home life</h6>
                </div>
                <div className='border border-gray-400 rounded-lg hover:shadow-lg hover:shadow-slate-300 cursor-pointer'>
                    <img className='rounded-lg w-full h-[80px]' src={bike} alt="" />
                    <h6 className='capitalize mt-2 text-base pl-1 font-medium'>bike</h6>
                </div>

            </div>
            <div className='border-b-2 border-gray-400 pb-3 flex justify-between'>
                <h3 className='font-medium uppercase text-3xl'>flash sale</h3>
                <button className="btn btn-outline btn-info capitalize">show more</button>
            </div>
            <div className='md:grid grid-cols-6 gap-10 my-10'>
                <div className='custom-card border border-slate-400 rounded-lg'>
                    <div className='relative'>
                        <img className='h-[200px] w-full rounded-lg' src={tv} alt="" />
                        <div className='custom-btn'>
                            <button className='absolute capitalize py-2 font-medium w-full bg-gray-200  bottom-0 text-gray-800'>add to cart</button>
                            <AiOutlineHeart className='absolute top-1 cursor-pointer right-2 text-4xl '></AiOutlineHeart>
                        </div>
                    </div>
                    <h5 className='capitalize text-lg mt-2 px-2'>smart tv</h5>
                    <h6 className='uppercase px-2 pb-2'>price : 20500</h6>
                </div>
                <div className='custom-card border border-slate-400 rounded-lg'>
                    <div className='relative'>
                        <img className='h-[200px] w-full rounded-lg' src={fridge} alt="" />
                        <div className='custom-btn'>
                            <button className='absolute capitalize py-2 font-medium w-full bg-gray-200  bottom-0 text-gray-800'>add to cart</button>
                            <AiOutlineHeart className='absolute top-1 cursor-pointer right-2 text-4xl '></AiOutlineHeart>
                        </div>
                    </div>
                    <h5 className='capitalize text-lg mt-2 px-2'>smart fridge</h5>
                    <h6 className='uppercase px-2 pb-2'>price : 30500</h6>
                </div>
                <div className='custom-card border border-slate-400 rounded-lg'>
                    <div className='relative'>
                        <img className='h-[200px] w-full rounded-lg' src={oven} alt="" />
                        <div className='custom-btn'>
                            <button className='absolute capitalize py-2 font-medium w-full bg-gray-200  bottom-0 text-gray-800'>add to cart</button>
                            <AiOutlineHeart className='absolute top-1 cursor-pointer right-2 text-4xl '></AiOutlineHeart>
                        </div>
                    </div>
                    <h5 className='capitalize text-lg mt-2 px-2'>oven</h5>
                    <h6 className='uppercase px-2 pb-2'>price : 7500</h6>
                </div>
                <div className='custom-card border border-slate-400 rounded-lg'>
                    <div className='relative'>
                        <img className='h-[200px] w-full rounded-lg' src={shoe} alt="" />
                        <div className='custom-btn'>
                            <button className='absolute capitalize py-2 font-medium w-full bg-gray-200  bottom-0 text-gray-800'>add to cart</button>
                            <AiOutlineHeart className='absolute top-1 cursor-pointer right-2 text-4xl '></AiOutlineHeart>
                        </div>
                    </div>
                    <h5 className='capitalize text-lg mt-2 px-2'>shoe</h5>
                    <h6 className='uppercase px-2 pb-2'>price : 1500</h6>
                </div>
                <div className='custom-card border border-slate-400 rounded-lg'>
                    <div className='relative'>
                        <img className='h-[200px] w-full rounded-lg' src={stove} alt="" />
                        <div className='custom-btn'>
                            <button className='absolute capitalize py-2 font-medium w-full bg-gray-200  bottom-0 text-gray-800'>add to cart</button>
                            <AiOutlineHeart className='absolute top-1 cursor-pointer right-2 text-4xl '></AiOutlineHeart>
                        </div>
                    </div>
                    <h5 className='capitalize text-lg mt-2 px-2'>smart stove</h5>
                    <h6 className='uppercase px-2 pb-2'>price : 4500</h6>
                </div>
                <div className='custom-card border border-slate-400 rounded-lg'>
                    <div className='relative'>
                        <img className='h-[200px] w-full rounded-lg' src={laptop} alt="" />
                        <div className='custom-btn'>
                            <button className='absolute capitalize py-2 font-medium w-full bg-gray-200  bottom-0 text-gray-800'>add to cart</button>
                            <AiOutlineHeart className='absolute top-1 cursor-pointer right-2 text-4xl'></AiOutlineHeart>
                        </div>
                    </div>
                    <h5 className='capitalize text-lg mt-2 px-2'>apple laptop</h5>
                    <h6 className='uppercase px-2 pb-2'>price : 30500</h6>
                </div>

            </div>
            <div className='md:flex items-center gap-10 mt-10  p-10'>
                <div>
                    <BsSearch className='text-8xl'></BsSearch>
                    <h3 className='mt-5 mb-2'>CLICK AND COLLECT</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                </div>
                <div>
                    <FiShoppingCart className='text-8xl'></FiShoppingCart>
                    <h3 className='mt-5 mb-2'>FAST DELIVERY</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                </div>
                <div>
                    <TbTruckDelivery className='text-8xl'></TbTruckDelivery>
                    <h3 className='mt-5 mb-2'>SAFE TRANSPORT</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                </div>
                <div>
                    <BsGift className='text-8xl'></BsGift>
                    <h3 className='mt-5 mb-2'>PERFECT GIFT</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                </div>
            </div>
            <div className='my-10'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide><div className='custom-card border border-slate-400 rounded-lg'>
                        <div className='relative'>
                            <img className='h-[200px] w-full rounded-lg' src={tv} alt="" />
                            <div className='custom-btn'>
                                <button className='absolute capitalize py-2 font-medium w-full bg-gray-200  bottom-0 text-gray-800'>add to cart</button>
                                <AiOutlineHeart className='absolute top-1 cursor-pointer right-2 text-4xl '></AiOutlineHeart>
                            </div>
                        </div>
                        <h5 className='capitalize text-lg mt-2 px-2'>smart tv</h5>
                        <h6 className='uppercase px-2 pb-2'>price : 20500</h6>
                    </div></SwiperSlide>
                    <SwiperSlide><div className='custom-card border border-slate-400 rounded-lg'>
                        <div className='relative'>
                            <img className='h-[200px] w-full rounded-lg' src={tv} alt="" />
                            <div className='custom-btn'>
                                <button className='absolute capitalize py-2 font-medium w-full bg-gray-200  bottom-0 text-gray-800'>add to cart</button>
                                <AiOutlineHeart className='absolute top-1 cursor-pointer right-2 text-4xl '></AiOutlineHeart>
                            </div>
                        </div>
                        <h5 className='capitalize text-lg mt-2 px-2'>smart tv</h5>
                        <h6 className='uppercase px-2 pb-2'>price : 20500</h6>
                    </div></SwiperSlide>
                    <SwiperSlide><div className='custom-card border border-slate-400 rounded-lg'>
                        <div className='relative'>
                            <img className='h-[200px] w-full rounded-lg' src={tv} alt="" />
                            <div className='custom-btn'>
                                <button className='absolute capitalize py-2 font-medium w-full bg-gray-200  bottom-0 text-gray-800'>add to cart</button>
                                <AiOutlineHeart className='absolute top-1 cursor-pointer right-2 text-4xl '></AiOutlineHeart>
                            </div>
                        </div>
                        <h5 className='capitalize text-lg mt-2 px-2'>smart tv</h5>
                        <h6 className='uppercase px-2 pb-2'>price : 20500</h6>
                    </div></SwiperSlide>
                    <SwiperSlide><div className='custom-card border border-slate-400 rounded-lg'>
                        <div className='relative'>
                            <img className='h-[200px] w-full rounded-lg' src={tv} alt="" />
                            <div className='custom-btn'>
                                <button className='absolute capitalize py-2 font-medium w-full bg-gray-200  bottom-0 text-gray-800'>add to cart</button>
                                <AiOutlineHeart className='absolute top-1 cursor-pointer right-2 text-4xl '></AiOutlineHeart>
                            </div>
                        </div>
                        <h5 className='capitalize text-lg mt-2 px-2'>smart tv</h5>
                        <h6 className='uppercase px-2 pb-2'>price : 20500</h6>
                    </div></SwiperSlide>
                    <SwiperSlide><div className='custom-card border border-slate-400 rounded-lg'>
                        <div className='relative'>
                            <img className='h-[200px] w-full rounded-lg' src={tv} alt="" />
                            <div className='custom-btn'>
                                <button className='absolute capitalize py-2 font-medium w-full bg-gray-200  bottom-0 text-gray-800'>add to cart</button>
                                <AiOutlineHeart className='absolute top-1 cursor-pointer right-2 text-4xl '></AiOutlineHeart>
                            </div>
                        </div>
                        <h5 className='capitalize text-lg mt-2 px-2'>smart tv</h5>
                        <h6 className='uppercase px-2 pb-2'>price : 20500</h6>
                    </div></SwiperSlide>
                    <SwiperSlide><div className='custom-card border border-slate-400 rounded-lg'>
                        <div className='relative'>
                            <img className='h-[200px] w-full rounded-lg' src={tv} alt="" />
                            <div className='custom-btn'>
                                <button className='absolute capitalize py-2 font-medium w-full bg-gray-200  bottom-0 text-gray-800'>add to cart</button>
                                <AiOutlineHeart className='absolute top-1 cursor-pointer right-2 text-4xl '></AiOutlineHeart>
                            </div>
                        </div>
                        <h5 className='capitalize text-lg mt-2 px-2'>smart tv</h5>
                        <h6 className='uppercase px-2 pb-2'>price : 20500</h6>
                    </div></SwiperSlide>

                </Swiper>
            </div>
        </div>
    );
};

export default Home;