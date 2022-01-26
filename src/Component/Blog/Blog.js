import React from 'react';
import image from '../../Images/carousel/2.jpg';
const Blog = () => {
    return (
        <>
            <div className="blog container mx-auto p-4 mt-5">
                <div className="blog-title">
                    <h1 className='font-bold text-3xl'>World Longest Sea Beach Cox's Bazar</h1>
                </div>
                <div className="blog-img mt-4">
                    <img className='' src={image} alt="" />
                </div>
                <div className="author grid grid-cols-2 mt-5">
                    <h2 className='font-semibold text-md text-gray-500'>Road Trips</h2>
                    <h2 className='font-bold text-md text-black'>By: <span className='text-violet-500'>Robinhood</span></h2>
                </div>
                <div className="budget grid grid-cols-2 mt-5">
                    <h2 className='font-semibold text-md text-gray-500'>Budget: <span className='font-bold text-lg text-violet-500'>$250</span></h2>
                    <h2 className='font-bold text-md text-black'>Location: <span className='text-violet-500'>London,UK</span></h2>
                </div>
                <div className="budget grid grid-cols-2 mt-5">
                    <h2 className='font-semibold text-md text-gray-500'>Date: <span className='font-semibold text-lg'>27/07/2021</span></h2>
                    {/* <h2 className='font-bold text-md text-black'>Location: <span className='text-violet-500'>London,UK</span></h2> */}
                </div>
                <div className="blog-details mt-10">
                    <p className='text-xl font-base'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae sint modi, dolores odit quisquam magni nisi repellat impedit. Voluptatibus est itaque maxime soluta, tenetur, iusto molestiae minus esse quas inventore earum dignissimos dolorem modi pariatur? Iusto quod eveniet officia vitae. Cumque fuga et facilis ut facere tenetur officia! Facere quisquam eveniet deserunt assumenda quo laudantium perferendis perspiciatis consectetur eum ea qui iure molestias corporis, libero laboriosam facilis aut accusantium est repudiandae, incidunt mollitia aspernatur. Veniam incidunt ratione praesentium. Provident dolorum deleniti iure. Quas reiciendis ab doloremque blanditiis autem officiis excepturi illo ducimus! Modi magni rem voluptatem cumque excepturi tenetur, tempora quam reiciendis tempore iste cupiditate, illo, corporis ratione nisi? Maxime, unde voluptas numquam itaque cupiditate suscipit magni reiciendis iure nesciunt tenetur doloremque placeat! Eius sequi aut minus dolor tenetur delectus laudantium ducimus necessitatibus, nostrum suscipit fugit a ad facilis sunt, aliquam laborum alias. Quo, eius sed. Molestiae aliquam animi nemo!
                        <br />
                        <br />

                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae sint modi, dolores odit quisquam magni nisi repellat impedit. Voluptatibus est itaque maxime soluta, tenetur, iusto molestiae minus esse quas inventore earum dignissimos dolorem modi pariatur? Iusto quod eveniet officia vitae. Cumque fuga et facilis ut facere tenetur officia! Facere quisquam eveniet deserunt assumenda quo laudantium perferendis perspiciatis consectetur eum ea qui iure molestias corporis, libero laboriosam facilis aut accusantium est repudiandae, incidunt mollitia aspernatur. Veniam incidunt ratione praesentium. Provident dolorum deleniti iure. Quas reiciendis ab doloremque blanditiis autem officiis excepturi illo ducimus! Modi magni rem voluptatem cumque excepturi tenetur, tempora quam reiciendis tempore iste cupiditate, illo, corporis ratione nisi? Maxime, unde voluptas numquam itaque cupiditate suscipit magni reiciendis iure nesciunt tenetur doloremque placeat! Eius sequi aut minus dolor tenetur delectus laudantium ducimus necessitatibus, nostrum suscipit fugit a ad facilis sunt, aliquam laborum alias. Quo, eius sed. Molestiae aliquam animi nemo!
                    </p>
                </div>
            </div>
        </>
    );
};

export default Blog;