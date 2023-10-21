import React from 'react';
import founder from '../../Media/img/Tohin.JPG'
import { AiOutlineFileProtect, AiOutlineSolution } from 'react-icons/ai';
import { ImPriceTags } from 'react-icons/im';
import { LiaShippingFastSolid } from 'react-icons/lia';

const About = () => {
    return (
        <div className='md:mx-10 mx-3'>
            <div className='md:grid grid-cols-2 gap-10 mt-10'>
                <div>
                    <img src={founder} alt="" />
                </div>
                <div>
                    <h3 className='text-3xl font-medium capitalize mt-5'>Tohin ahmed</h3>
                    <h5 className='text-xl font-semibold capitalize'>co-founder</h5>
                    <p className='mt-5 italic'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, molestiae voluptatum? Magnam accusamus provident deleniti? Praesentium vero, doloremque incidunt sunt, saepe fuga voluptates suscipit, nemo exercitationem numquam perferendis nam aperiam.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, molestiae voluptatum? Magnam accusamus provident deleniti? Praesentium vero, doloremque incidunt sunt, saepe fuga voluptates suscipit, nemo exercitationem numquam perferendis nam aperiam.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, molestiae voluptatum? Magnam accusamus provident deleniti? Praesentium vero, doloremque incidunt sunt, saepe fuga voluptates suscipit, nemo exercitationem numquam perferendis nam aperiam.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, molestiae voluptatum? Magnam accusamus provident deleniti? Praesentium vero, doloremque incidunt sunt, saepe fuga voluptates suscipit, nemo exercitationem numquam perferendis nam aperiam.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, molestiae voluptatum? Magnam accusamus provident deleniti? Praesentium vero, doloremque incidunt sunt, saepe fuga voluptates suscipit, nemo exercitationem numquam perferendis nam aperiam.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, molestiae voluptatum? Magnam accusamus provident deleniti? Praesentium vero, doloremque incidunt sunt, saepe fuga voluptates suscipit, nemo exercitationem numquam perferendis nam aperiam.</p>
                </div>
            </div>
            <div className='mt-10'>
                <h3 className='text-3xl font-medium capitalize text-center'>our story</h3>
                <p className='mt-5 italic'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, molestiae voluptatum? Magnam accusamus provident deleniti? Praesentium vero, doloremque incidunt sunt, saepe fuga voluptates suscipit, nemo exercitationem numquam perferendis nam aperiam.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, molestiae voluptatum? Magnam accusamus provident deleniti? Praesentium vero, doloremque incidunt sunt, saepe fuga voluptates suscipit, nemo exercitationem numquam perferendis nam aperiam.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, molestiae voluptatum? Magnam accusamus provident deleniti? Praesentium vero, doloremque incidunt sunt, saepe fuga voluptates suscipit, nemo exercitationem numquam perferendis nam aperiam.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, molestiae voluptatum? Magnam accusamus provident deleniti? Praesentium vero, doloremque incidunt sunt, saepe fuga voluptates suscipit, nemo exercitationem numquam perferendis nam aperiam.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, molestiae voluptatum? Magnam accusamus provident deleniti? Praesentium vero, doloremque incidunt sunt, saepe fuga voluptates suscipit, nemo exercitationem numquam perferendis nam aperiam.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, molestiae voluptatum? Magnam accusamus provident deleniti? Praesentium vero, doloremque incidunt sunt, saepe fuga voluptates suscipit, nemo exercitationem numquam perferendis nam aperiam.</p>
            </div>
            <div className='mt-10 md:grid gap-5 grid-cols-2'>
                <div className='w-full'>
                    <img className='w-full' src="https://img.freepik.com/free-vector/delivery-service-with-masks-concept_23-2148509518.jpg" alt="" />
                </div>
                <div className='mt-5'>
                    <div className='flex items-center'>
                        <AiOutlineFileProtect className='text-5xl mr-3'></AiOutlineFileProtect>
                        <div>
                            <h4 className='capitalize text-xl font-medium'>full safety</h4>
                            <h6 className='italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, deleniti!</h6>
                        </div>
                    </div>
                    <div className='flex items-center mt-5'>
                        <AiOutlineSolution className='text-5xl mr-3'></AiOutlineSolution>
                        <div>
                            <h4 className='capitalize text-xl font-medium'>fast solution</h4>
                            <h6 className='italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, deleniti!</h6>
                        </div>
                    </div>
                    <div className='flex items-center mt-5'>
                        <ImPriceTags className='text-5xl mr-3'></ImPriceTags>
                        <div>
                            <h4 className='capitalize text-xl font-medium'>best price</h4>
                            <h6 className='italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, deleniti!</h6>
                        </div>
                    </div>
                    <div className='flex items-center mt-5'>
                        <LiaShippingFastSolid className='text-5xl mr-3'></LiaShippingFastSolid>
                        <div>
                            <h4 className='capitalize text-xl font-medium'>fast and safe delivery</h4>
                            <h6 className='italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, deleniti!</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-10'>
                <h4 className='text-3xl capitalize font-medium text-center mb-5'>contact us</h4>
                <form action="">
                    <input className='w-full bg-inherit outline-none border-b-2 border-slate-500 py-2 px-3' type="email" placeholder='Type Your Email' name='email' />
                    <input className='w-full bg-inherit outline-none border-b-2 border-slate-500 py-2 px-3 mt-2' type="text" placeholder='Subject' name='subject'/>
                    <textarea className='w-full bg-inherit outline-none border-b-2 border-slate-500 py-2 px-3 mt-2' name="message" placeholder='Type Your Message Here' id="message" cols="30" rows="10"></textarea>
                    <button className='cutom_button' type="submit">send message</button>
                </form>
            </div>
        </div>
    );
};

export default About;