import React from 'react';
import { TiDelete } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import Program from '../../Shear/Program/Program';

const Cart = () => {
    const {getItemToLocatstore} = Program()
   const cart = getItemToLocatstore()
   console.log(cart)
    
    return (
        <div className='md:mx-10 mx-3'>
            <div className='md:block hidden mt-10'>
                <h6 className='uppercase text-xl font-medium'>Home / cart</h6>
            </div>
            <div className="overflow-x-auto my-10">
                <table className="table">
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th className='w-[20px]'>
                                <button className="text-3xl"><TiDelete></TiDelete></button>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="https://cdn.thewirecutter.com/wp-content/media/2023/05/running-shoes-2048px-9718.jpg" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="capitalize text-xl font-medium">shoe</div>
                                    </div>
                                </div>
                            </td>
                            <td className='capitalize text-xl font-medium'>
                                $56
                            </td>
                            <td className='capitalize text-xl font-medium'>in stock</td>
                            <th>
                                <Link to={`/order/${1}`} className="btn btn-ghost btn-xs">order</Link>
                            </th>
                        </tr>
                        <tr>
                            <th>
                                <button className="text-3xl"><TiDelete></TiDelete></button>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="https://cdn.thewirecutter.com/wp-content/media/2023/05/running-shoes-2048px-9718.jpg" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="capitalize text-xl font-medium">shoe</div>
                                    </div>
                                </div>
                            </td>
                            <td className='capitalize text-xl font-medium'>
                                $56
                            </td>
                            <td className='capitalize text-xl font-medium'>in stock</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">order</button>
                            </th>
                        </tr>
                        <tr>
                            <th>
                                <button className="text-3xl"><TiDelete></TiDelete></button>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="https://cdn.thewirecutter.com/wp-content/media/2023/05/running-shoes-2048px-9718.jpg" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="capitalize text-xl font-medium">shoe</div>
                                    </div>
                                </div>
                            </td>
                            <td className='capitalize text-xl font-medium'>
                                $56
                            </td>
                            <td className='capitalize text-xl font-medium'>in stock</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">order</button>
                            </th>
                        </tr>
                        <tr>
                            <th>
                                <button className="text-3xl"><TiDelete></TiDelete></button>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="https://cdn.thewirecutter.com/wp-content/media/2023/05/running-shoes-2048px-9718.jpg" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="capitalize text-xl font-medium">shoe</div>
                                    </div>
                                </div>
                            </td>
                            <td className='capitalize text-xl font-medium'>
                                $56
                            </td>
                            <td className='capitalize text-xl font-medium'>in stock</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">order</button>
                            </th>
                        </tr>
                    </tbody>
                    <tfoot className='border-t capitalize text-xl font-medium'>
                        <tr>
                            <th>total product</th>
                            <th>4</th>
                            <th>$123</th>
                            <th><Link to="/checkout" >Checkout</Link></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default Cart;