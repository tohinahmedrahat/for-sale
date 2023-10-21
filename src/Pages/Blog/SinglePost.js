import React from 'react';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const SinglePost = () => {
    return (
        <div className='mx-3 md:mx-10 my-10'>
            <div className='md:flex justify-between'>
                <div className='mr-5'>
                    <img src="https://gaelle.qodeinteractive.com/wp-content/uploads/2023/01/blog-img-1.jpg" alt="" />
                    <h6 className='capitalize my-2'><span className='custom_border'>23 january</span> / <span className='custom_border'>shoe , sports-shoe</span></h6>
                    <h3 className='font-medium uppercase text-3xl'>YOUR ROOM TO PERFECTION</h3>
                    <p className='mb-5 mt-2 italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, aliquam inventore ex iure vero modi in delectus voluptatibus reprehenderit, cumque enim sit recusandae est, fugit cupiditate maxime voluptatem. Accusantium, unde eveniet! Eaque placeat esse dolorem facilis commodi rem, exercitationem nulla reiciendis recusandae modi nesciunt quia, laboriosam perspiciatis accusamus neque? Animi maxime necessitatibus quo saepe quia, laborum vel labore ullam, repudiandae iste eveniet dolorem maiores fugiat! Eligendi tempora fuga neque alias!</p>
                    <p className='mb-5 mt-2 italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, aliquam inventore ex iure vero modi in delectus voluptatibus reprehenderit, cumque enim sit recusandae est, fugit cupiditate maxime voluptatem. Accusantium, unde eveniet! Eaque placeat esse dolorem facilis commodi rem, exercitationem nulla reiciendis recusandae modi nesciunt quia, laboriosam perspiciatis accusamus neque? Animi maxime necessitatibus quo saepe quia, laborum vel labore ullam, repudiandae iste eveniet dolorem maiores fugiat! Eligendi tempora fuga neque alias!</p>
                    <div>
                        <h3 className='text-3xl font-medium capitalize my-10'>3 COMMENTS</h3>
                        <div className='md:flex gap-5'>
                            <div>
                                <img src="https://images.pexels.com/photos/2625122/pexels-photo-2625122.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                            </div>
                            <div className='relative'>
                                <h3 className='text-3xl font-medium capitalize mb-5'>jane</h3>
                                <p className='w-3/4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna consectetur adipiscing elit, sed do consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna consectetur adipiscing elit, sed do consectetur adipiscing elit</p>
                                <h6 className='text-lg font-medium absolute bottom-1'>31. January</h6>
                            </div>
                        </div>
                        <div className='md:flex gap-5 mt-5'>
                            <div>
                                <img src="https://images.pexels.com/photos/2625122/pexels-photo-2625122.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                            </div>
                            <div className='relative'>
                                <h3 className='text-3xl font-medium capitalize mb-5'>jane</h3>
                                <p className='w-3/4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna consectetur adipiscing elit, sed do consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna consectetur adipiscing elit, sed do consectetur adipiscing elit</p>
                                <h6 className='text-lg font-medium absolute bottom-1'>31. January</h6>
                            </div>
                        </div>
                        <div className='md:flex gap-5 mt-5'>
                            <div>
                                <img src="https://images.pexels.com/photos/2625122/pexels-photo-2625122.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                            </div>
                            <div className='relative'>
                                <h3 className='text-3xl font-medium capitalize mb-5'>jane</h3>
                                <p className='w-3/4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna consectetur adipiscing elit, sed do consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna consectetur adipiscing elit, sed do consectetur adipiscing elit</p>
                                <h6 className='text-lg font-medium absolute bottom-1'>31. January</h6>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className='font-medium uppercase text-3xl my-10'>Leave a reply</h3>
                        <form action="">
                            <textarea className='bg-inherit border outline-none w-full py-5 px-5' name="" placeholder='Write You Comment' id="" cols="30" rows="10"></textarea>
                            <input type="text" name="name" id="name" className='bg-inherit my-3 border outline-none w-full py-5 px-5' placeholder='Please Type Your Name' />
                            <input type="email" name="email" id="email" className='bg-inherit border outline-none w-full py-5 px-5' placeholder='Please Type Your Email' />
                            <button type="submit" className='cutom_button'>submit</button>
                        </form>
                    </div>
                </div>
                <div>
                    <img className='w-full' src="https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=" alt="" />
                    <h3 className='font-medium uppercase text-3xl my-3'>jhon</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae accusantium consequatur dolorem maxime eos voluptas perspiciatis autem nemo, laudantium voluptatem!</p>
                    <h5 className='mt-5 pb-5 border-b border-gray-500'>FOLLOW</h5>
                    <div className='flex justify-around uppercase font-medium mt-2'>
                    <Link className='hover:border-b'>fb</Link>
                    <Link className='hover:border-b'>tw</Link>
                    <Link className='hover:border-b'>li</Link>
                    <Link className='hover:border-b'>in</Link>
                    </div>
                    <div className='mt-10'>
                        <h3 className='font-medium uppercase text-3xl mb-3'>categorys</h3>
                        <ul className='text-left uppercase font-medium text-xl'>
                            <li className='hover:text-red-500 cursor-pointer'>clothes</li>
                            <li className='hover:text-red-500 cursor-pointer mt-1'>laptop</li>
                            <li className='hover:text-red-500 cursor-pointer mt-1'>bike</li>
                            <li className='hover:text-red-500 cursor-pointer mt-1'>tv</li>
                            <li className='hover:text-red-500 cursor-pointer mt-1'>fridge</li>
                            <li className='hover:text-red-500 cursor-pointer mt-1'>shoe</li>
                            <li className='hover:text-red-500 cursor-pointer mt-1'>controler</li>
                        </ul>
                        <div className='mt-10'>
                            <h3 className='font-medium uppercase text-3xl mb-3'>recent post</h3>
                            <div className='flex gap-5'>
                                <img className='w-[120px]' src="https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.webp?b=1&s=170667a&w=0&k=20&c=liUSgX6SafJ7HWvefFqR9-pnf3KuH6v1lwQ6iEpePWc=" alt="" />
                                <div>
                                <h6 className='capitalize'>8. February</h6>
                                <h5 className='capitalize font-medium text-lg'>shoe</h5>
                                </div>
                            </div>
                            <div className='flex gap-5 mt-5'>
                                <img className='w-[120px]' src="https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.webp?b=1&s=170667a&w=0&k=20&c=liUSgX6SafJ7HWvefFqR9-pnf3KuH6v1lwQ6iEpePWc=" alt="" />
                                <div>
                                <h6 className='capitalize'>8. February</h6>
                                <h5 className='capitalize font-medium text-lg'>shoe</h5>
                                </div>
                            </div>
                            <div className='flex gap-5 mt-5'>
                                <img className='w-[120px]' src="https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.webp?b=1&s=170667a&w=0&k=20&c=liUSgX6SafJ7HWvefFqR9-pnf3KuH6v1lwQ6iEpePWc=" alt="" />
                                <div>
                                <h6 className='capitalize'>8. February</h6>
                                <h5 className='capitalize font-medium text-lg'>shoe</h5>
                                </div>
                            </div>
                            <div className='flex gap-5 mt-5'>
                                <img className='w-[120px]' src="https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.webp?b=1&s=170667a&w=0&k=20&c=liUSgX6SafJ7HWvefFqR9-pnf3KuH6v1lwQ6iEpePWc=" alt="" />
                                <div>
                                <h6 className='capitalize'>8. February</h6>
                                <h5 className='capitalize font-medium text-lg'>shoe</h5>
                                </div>
                            </div>
                        </div>
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
        </div>
    );
};

export default SinglePost;