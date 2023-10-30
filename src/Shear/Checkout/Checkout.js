import React from 'react';

const Checkout = () => {

    return (
        <div className='md:mx-10 mx-3'>
            <div className='md:flex gap-10'>
                <div>
                    <h3 className='font-medium uppercase text-3xl'>add your address</h3>
                    <form action="" className='my-10'>
                        <input type="text" name="first-name" id="first-name" className='w-full outline-none border-b py-2 px-3 bg-inherit' placeholder='Add Your First-Name' />
                        <input type="text" name="last-name" id="last-name" className='w-full outline-none border-b py-2 px-3 bg-inherit' placeholder='Add Your Last-Name' />
                        <select className="w-full outline-none border-b py-2 px-3  text-inherit">
                            <option disabled selected>Select Your Divisions</option>
                            <option className='bg-inherit'>Barishal</option>
                            <option>Chattogram</option>
                            <option>Dhaka</option>
                            <option>Khulna</option>
                            <option>Rajshahi</option>
                            <option>Rangpur</option>
                            <option>Mymensingh</option>
                            <option>Sylhet</option>
                        </select>
                        <input type="text" name="city" id="city" className='w-full outline-none border-b py-2 px-3 bg-inherit' placeholder='Add Your City-Name' />
                        <input type="text" name="address" id="address" className='w-full outline-none border-b py-2 px-3 bg-inherit' placeholder='Add Your Address' />
                        <input type="text" name="number" id="number" className='w-full outline-none border-b py-2 px-3 bg-inherit' placeholder='Add Your Contract Number' />
                        <input type="email" name="email" id="email" className='w-full outline-none border-b py-2 px-3 bg-inherit' placeholder='Add Your Email' />

                        <div className='my-10'>
                            <h3 className='font-medium uppercase text-3xl'>add payment method</h3>
                            <div className="collapse bg-base-200 mt-10">
                                <input type="checkbox" />
                                <div className="collapse-title text-xl font-medium capitalize">
                                    bank transfer
                                </div>
                                <div className="collapse-content">
                                    <p>hello</p>
                                </div>
                            </div>
                            <div className="collapse bg-base-200 mt-5">
                                <input type="checkbox" />
                                <div className="collapse-title text-xl font-medium capitalize">
                                    mobile banking
                                </div>
                                <div className="collapse-content">
                                    <p>hello</p>
                                </div>
                            </div>
                            <div className="collapse bg-base-200 mt-5">
                                <input type="checkbox" />
                                <div className="collapse-title text-xl capitalize font-medium">
                                    cash on delivery
                                </div>
                                <div className="collapse-content">
                                    <div className="form-control">
                                        <label className="label cursor-pointer">
                                            <span className="label-text capitalize">cash on delivery</span>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className='cutom_button' type="submit">place your order</button>
                    </form>
                </div>
                <div className='w-3/4 mt-10'>
                    <div className="overflow-x-auto mt-10">
                        <table className="table">
                            <tbody className='text-xl font-medium capitalize'>
                                {/* row 1 */}
                                <tr>
                                    <td>total Item</td>
                                    <td>10</td>
                                </tr>
                                {/* row 2 */}
                                <tr>
                                    <td>sub-total</td>
                                    <td>$150</td>
                                </tr>
                                {/* row 3 */}
                                <tr>
                                    <td>shiping charge</td>
                                    <td>$20</td>
                                </tr>
                                {/* row 3 */}
                                <tr>
                                    <td>tax charge</td>
                                    <td>$20</td>
                                </tr>
                                <tr>
                                    <td className='font-semibold'>total-coast</td>
                                    <td className='font-semibold'>$190</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Checkout;