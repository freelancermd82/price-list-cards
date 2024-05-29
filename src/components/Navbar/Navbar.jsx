import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
    const [open, setOpen] = useState([false]);


    const routes = [
        { id: 1, name: "Home", path: "/home" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Contact", path: "/contact" },
        { id: 4, name: "Services", path: "/services" },
        { id: 5, name: "Blog", path: "/blog" }
    ];




    return (
        <nav className='bg-purple-400 pt-3 px-4'>
            <div onClick={() => setOpen(!open)} className='md:hidden pl-12'>
                <span>
                    {
                        open === true ?
                            <XMarkIcon className="size-6 text-white" /> : <Bars3Icon className="size-6 text-white" />
                    }
                </span>


            </div>

            <ul className={`md:flex absolute md:static bg-purple-400 duration-500 pl-12 pb-4 ${open ? 'top-6' : '-top-36'}`}>
                {
                    routes.map(route => <Link
                        key={route.id}
                        route={route}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;