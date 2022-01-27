import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';
const CreatePost = () => {
    const { user, loading } = useAuth();
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [budget, setBudget] = useState('');
    const [date, setDate] = useState(null);
    const [category, setCategory] = useState(null);
    const [rating, setRating] = useState(0);
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [author, setAuthor] = useState(user.displayName);

    const handleAddBlog = (e) => {
        e.preventDefault();
        const blog = { title, location, budget, date, category, rating, description, author, image };
        axios.post('http://localhost:5099/blogs', blog)
            .then(res => {
                if (res.data.insertedId) {
                    e.target.value = '';
                    alert('Your blog has been submitted!')
                } else {
                    alert('Your blog cannot submitted due to some reason')
                }
            })
            .catch(error => {
                if (error.message) {
                    alert(error.message);
                }
            });

    }
    if (loading) {
        return '';
    }


    return (
        <div className='container mx-auto py-10'>
            <h1 className='text-center font-bold text-3xl text-violet-500'>Add Tour Blog</h1>
            <div className=''>
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <form onSubmit={handleAddBlog} action="#" name='blog-form'>
                            <div className="shadow sm:rounded-md sm:overflow-hidden">
                                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                Title
                                            </label>
                                            <input
                                                type="text"
                                                name="title"
                                                id="title"
                                                className="mt-1 block w-full shadow-md sm:text-sm border-gray-800 rounded-md p-2"
                                                onChange={e => setTitle(e.target.value)}
                                                required
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                Location
                                            </label>
                                            <input
                                                type="text"
                                                name="location"
                                                id="location"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md sm:text-sm border-gray-800 rounded-md p-2"
                                                onChange={e => setLocation(e.target.value)}
                                                required
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                Budget
                                            </label>
                                            <input
                                                type="number"
                                                name="budget"
                                                id="budget"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md sm:text-sm border-gray-800 rounded-md p-2"
                                                onChange={e => setBudget(e.target.value)}
                                                required
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                Date
                                            </label>
                                            <input
                                                type="date"
                                                name="date"
                                                id="date"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md sm:text-sm border-gray-800 rounded-md p-2"
                                                onChange={e => setDate(e.target.value)}
                                                required
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                Category
                                            </label>
                                            <select
                                                id="country"
                                                name="country"
                                                autoComplete="country-name"
                                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                onChange={e => setCategory(e.target.value)}
                                                required
                                            >
                                                <option selected value="None">Select a Category</option>
                                                <option value="Adventure Travel">Adventure Travel</option>
                                                <option value="Family Holidays">Family Holidays</option>
                                                <option value="Honeymoon & Romance">Honeymoon & Romance</option>
                                                <option value="Travel on Budget">Travel on Budget</option>
                                                <option value="Wildlife & Nature">Wildlife & Nature</option>
                                                <option value="Road Trips">Road Trips</option>
                                            </select>
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                Rating out of 5
                                            </label>
                                            <input
                                                type="number"
                                                name="rating"
                                                id="rating"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md sm:text-sm border-gray-800 rounded-md p-2"
                                                max={5}
                                                onChange={e => setRating(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                                            Description
                                        </label>
                                        <div className="mt-1">
                                            <textarea
                                                id="about"
                                                name="about"
                                                rows={3}
                                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-800 rounded-md p-2"
                                                placeholder="Description About Tour"
                                                defaultValue={''}
                                                onChange={e => setDescription(e.target.value)}
                                                required
                                            />
                                        </div>

                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                            Feature Image Link
                                        </label>
                                        <input
                                            type="url"
                                            name="image"
                                            id="image"
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md sm:text-sm border-gray-800 rounded-md p-2"
                                            required
                                            onChange={e => setImage(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CreatePost;