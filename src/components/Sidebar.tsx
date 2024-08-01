'use client'

import Items, { ItemsList } from "./dashboard/Items";
import Logoutpage from "./logoutpage";
import { usePathname } from 'next/navigation'
import { IoCar, IoIdCard, IoPerson } from "react-icons/io5";



export default function Sidebar() {


    const menuItems: ItemsList[] = [
        {
            path: '/dashboard',
            icon: <IoIdCard size={40} />,
            title: 'Dashboard',
            subtitle: ''
        },
        {
            path: '/dashboard/users',
            icon: <IoPerson size={40} />,
            title: 'Users',
            subtitle: ''
        },
        {
            path: '/dashboard/activities',
            icon: <IoPerson size={40} />,
            title: 'Activities',
            subtitle: ''
        },
        {
            path: '/dashboard/cars',
            icon: <IoCar size={40} />,
            title: 'Cars',
            subtitle: ''
        },
    ]


    return (
        <main>
            {/* {JSON.stringify(current)} */}
            <div className="left-0 top-0 w-64 h-full bg-[#f8f4f3] p-4 z-50 sidebar-menu transition-transform">
                <a href="#" className="flex items-center pb-4 border-b border-b-gray-800">

                    <h2 className="font-bold text-2xl">LOREM <span className="bg-[#f84525] text-white px-2 rounded-md">IPSUM</span></h2>
                </a>
                <ul className="mt-4">
                    <span className="text-gray-400 font-bold">ADMIN</span>

                    <div>
                        {menuItems.map((e) =>
                            <Items key={e.path} icon={e.icon} path={e.path} title={e.title} subtitle={e.subtitle} />
                        )}
                    </div>


                  
                    <span className="text-gray-400 font-bold">BLOG</span>
                    <li className="mb-1 group">
                        <a href="" className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle">
                            <i className='bx bxl-blogger mr-3 text-lg' ></i>
                            <span className="text-sm">Post</span>
                            <i className="ri-arrow-right-s-line ml-auto group-[.selected]:rotate-90"></i>
                        </a>
                        <ul className="pl-7 mt-2 hidden group-[.selected]:block">
                            <li className="mb-4">
                                <a href="" className="text-gray-900 text-sm flex items-center hover:text-[#f84525] before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">All</a>
                            </li>
                            <li className="mb-4">
                                <a href="" className="text-gray-900 text-sm flex items-center hover:text-[#f84525] before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Categories</a>
                            </li>
                        </ul>
                    </li>
                    <li className="mb-1 group">
                        <a href="" className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100">
                            <i className='bx bx-archive mr-3 text-lg'></i>
                            <span className="text-sm">Archive</span>
                        </a>
                    </li>
                    <span className="text-gray-400 font-bold">PERSONAL</span>
                    <li className="mb-1 group">
                        <a href="" className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100">
                            <i className='bx bx-bell mr-3 text-lg' ></i>
                            <span className="text-sm">Notifications</span>
                            <span className=" md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-600 bg-red-200 rounded-full">5</span>
                        </a>
                    </li>
                    <li className="mb-1 group">
                        <a href="" className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100">
                            <i className='bx bx-envelope mr-3 text-lg' ></i>
                            <span className="text-sm">Messages</span>
                            <span className=" md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-green-600 bg-green-200 rounded-full">2 New</span>
                        </a>
                    </li>
                    <Logoutpage />
                </ul>
            </div>
            <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40 md:hidden sidebar-overlay"></div>

        </main>
    );
}