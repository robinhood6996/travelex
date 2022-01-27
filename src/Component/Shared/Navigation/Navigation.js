import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import userIcon from '../../../Images/user.png';

const Navigation = () => {
    const { user, logOut, admin } = useAuth();
    return (
        <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center">

                                    <h3 className="block lg:hidden h-8 w-fit text-violet-300 font-bold text-2xl">Travelex</h3>
                                    {/* <img
                                        className="hidden lg:block h-8 w-fit"
                                        src={logo}
                                        alt="Workflow"
                                    /> */}
                                    <h3 className="hidden lg:block h-8 w-fit text-violet-300 font-bold text-2xl">Travelex</h3>
                                </div>
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-4">

                                        <Link to="/" className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'>Home</Link>
                                        <Link to="/blogs" className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'>Blogs</Link>
                                        {
                                            user.email ? ' ' : <Link to="/login" className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'>Login</Link>
                                        }

                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">


                                {/* Profile dropdown */}
                                {
                                    user.email && <Menu as="div" className="ml-3 relative z-50">
                                        <div>
                                            <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                                <span className="sr-only">Open user menu</span>
                                                <img
                                                    className="h-8 w-8 rounded-full"
                                                    src={userIcon}
                                                    alt=""
                                                />
                                            </Menu.Button>
                                        </div>

                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="z-50 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                {
                                                    admin && <Menu.Item>
                                                        <Link
                                                            to="/admin"
                                                            className='bg-gray-100 block px-4 py-2 text-sm text-gray-700'
                                                        >
                                                            Dashboard
                                                        </Link>
                                                    </Menu.Item>
                                                }
                                                <Menu.Item>
                                                    <Link
                                                        to="/addpost"
                                                        className='bg-gray-100 block px-4 py-2 text-sm text-gray-700'
                                                    >
                                                        Add Post
                                                    </Link>
                                                </Menu.Item>
                                                <Menu.Item>

                                                    <button

                                                        className='bg-gray-100 block px-4 py-2 text-sm text-gray-700'
                                                        onClick={logOut}
                                                    >
                                                        Logout
                                                    </button>

                                                </Menu.Item>


                                            </Menu.Items>
                                        </Transition>

                                    </Menu>}
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <Link to="/" className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'>Home</Link>
                            <Link to="/blogs" className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'>Blogs</Link>
                            <Link to="/login" className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'>Login</Link>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};
// 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//     'px-3 py-2 rounded-md text-sm font-medium'
export default Navigation;