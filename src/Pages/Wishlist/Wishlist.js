import React from 'react';
import { TiDelete } from 'react-icons/ti';

const Wishlist = () => {
    return (
        <div className='md:mx-10 mx-3'>
            <div className='md:block hidden mt-10'>
                <h6 className='uppercase text-xl font-medium'>Home / wishlist</h6>
            </div>
            <div className="overflow-x-auto my-10">
                <table className="table">
                    <tbody>
                        {/* row 1 */}
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
                            <td>
                                <button className="btn btn-ghost btn-xs">add to cart</button>
                            </td>
                            <td>
                                <button className="btn btn-ghost btn-xs">order</button>
                            </td>
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
                            <td>
                                <button className="btn btn-ghost btn-xs">add to cart</button>
                            </td>
                            <td>
                                <button className="btn btn-ghost btn-xs">order</button>
                            </td>
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
                            <td>
                                <button className="btn btn-ghost btn-xs">add to cart</button>
                            </td>
                            <td>
                                <button className="btn btn-ghost btn-xs">order</button>
                            </td>
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
                            <td>
                                <button className="btn btn-ghost btn-xs">add to cart</button>
                            </td>
                            <td>
                                <button className="btn btn-ghost btn-xs">order</button>
                            </td>
                        </tr>

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Wishlist;