import axios from 'axios';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState(null);
    const user = { email };
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put('https://travelexss.herokuapp.com/users/admin', user)
            .then(res => {
                if (res.data.modifiedCount) {
                    alert('You made an admin! Congrats')
                }
            })
    }
    return (
        <div className='container mx-auto py-10'>
            <h1 className='text-center font-bold text-3xl text-violet-500'>Make Admi</h1>
            <div className=''>
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <form action="#" onSubmit={handleSubmit}>
                            <div className="shadow sm:rounded-md sm:overflow-hidden">
                                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                            Email
                                        </label>
                                        <input
                                            type="text"
                                            name="email"
                                            id="email"
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md sm:text-sm border-gray-800 rounded-md p-2"
                                            onBlur={e => setEmail(e.target.value)}
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

export default MakeAdmin;