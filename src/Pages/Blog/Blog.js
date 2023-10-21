import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineDoubleRight } from 'react-icons/ai';

const Blog = () => {
    return (
        <div className='mx-3 md:mx-10 my-10'>
            <div className='mt-5'>
                <img src="https://cdn.thewirecutter.com/wp-content/media/2023/05/running-shoes-2048px-9718.jpg" alt="" />
                <h6 className='capitalize my-2'><span className='custom_border'>23 january</span> / <span className='custom_border'>shoe , sports-shoe</span></h6>
                <h3 className='font-medium uppercase text-3xl'>YOUR ROOM TO PERFECTION</h3>
                <p className='mb-5 mt-2 italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, aliquam inventore ex iure vero modi in delectus voluptatibus reprehenderit, cumque enim sit recusandae est, fugit cupiditate maxime voluptatem. Accusantium, unde eveniet! Eaque placeat esse dolorem facilis commodi rem, exercitationem nulla reiciendis recusandae modi nesciunt quia, laboriosam perspiciatis accusamus neque? Animi maxime necessitatibus quo saepe quia, laborum vel labore ullam, repudiandae iste eveniet dolorem maiores fugiat! Eligendi tempora fuga neque alias!</p>
                <Link to={`/post/${1}`} className='capitalize custom_border'>see more <AiOutlineDoubleRight className='inline'></AiOutlineDoubleRight> </Link>
            </div>
            <div className='mt-5'>
                <img src="https://gaelle.qodeinteractive.com/wp-content/uploads/2023/01/blog-img-1.jpg" alt="" />
                <h6 className='capitalize my-2'><span className='custom_border'>23 january</span> / <span className='custom_border'>shoe , sports-shoe</span></h6>
                <h3 className='font-medium uppercase text-3xl'>YOUR ROOM TO PERFECTION</h3>
                <p className='mb-5 mt-2 italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, aliquam inventore ex iure vero modi in delectus voluptatibus reprehenderit, cumque enim sit recusandae est, fugit cupiditate maxime voluptatem. Accusantium, unde eveniet! Eaque placeat esse dolorem facilis commodi rem, exercitationem nulla reiciendis recusandae modi nesciunt quia, laboriosam perspiciatis accusamus neque? Animi maxime necessitatibus quo saepe quia, laborum vel labore ullam, repudiandae iste eveniet dolorem maiores fugiat! Eligendi tempora fuga neque alias!</p>
                <Link to={`/post/${1}`} className='custom_border capitalize'>see more <AiOutlineDoubleRight className='inline'></AiOutlineDoubleRight> </Link>
            </div>
            <div className='mt-5'>
                <img src="https://gaelle.qodeinteractive.com/wp-content/uploads/2023/01/blog-img-1.jpg" alt="" />
                <h6 className='capitalize my-2'><span className='custom_border'>23 january</span> / <span className='custom_border'>shoe , sports-shoe</span></h6>
                <h3 className='font-medium uppercase text-3xl'>YOUR ROOM TO PERFECTION</h3>
                <p className='mb-5 mt-2 italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, aliquam inventore ex iure vero modi in delectus voluptatibus reprehenderit, cumque enim sit recusandae est, fugit cupiditate maxime voluptatem. Accusantium, unde eveniet! Eaque placeat esse dolorem facilis commodi rem, exercitationem nulla reiciendis recusandae modi nesciunt quia, laboriosam perspiciatis accusamus neque? Animi maxime necessitatibus quo saepe quia, laborum vel labore ullam, repudiandae iste eveniet dolorem maiores fugiat! Eligendi tempora fuga neque alias!</p>
                <Link to={`/post/${1}`} className='custom_border capitalize'>see more <AiOutlineDoubleRight className='inline'></AiOutlineDoubleRight> </Link>
            </div>
            <div className='mt-5'>
                <img src="https://gaelle.qodeinteractive.com/wp-content/uploads/2023/01/blog-img-1.jpg" alt="" />
                <h6 className='capitalize my-2'><span className='custom_border'>23 january</span> / <span className='custom_border'>shoe , sports-shoe</span></h6>
                <h3 className='font-medium uppercase text-3xl'>YOUR ROOM TO PERFECTION</h3>
                <p className='mb-5 mt-2 italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, aliquam inventore ex iure vero modi in delectus voluptatibus reprehenderit, cumque enim sit recusandae est, fugit cupiditate maxime voluptatem. Accusantium, unde eveniet! Eaque placeat esse dolorem facilis commodi rem, exercitationem nulla reiciendis recusandae modi nesciunt quia, laboriosam perspiciatis accusamus neque? Animi maxime necessitatibus quo saepe quia, laborum vel labore ullam, repudiandae iste eveniet dolorem maiores fugiat! Eligendi tempora fuga neque alias!</p>
                <Link to={`/post/${1}`} className='custom_border capitalize'>see more <AiOutlineDoubleRight className='inline'></AiOutlineDoubleRight> </Link>
            </div>
        </div>
    );
};

export default Blog;