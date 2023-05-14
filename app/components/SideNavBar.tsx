'use client';
import Link from 'next/link'
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
import {
  MdOutlineSpaceDashboard,
  MdOutlineAnalytics,
  MdOutlineIntegrationInstructions,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdOutlineLogout,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaRegComments } from "react-icons/fa";
import { BiMessageSquareDots } from "react-icons/bi";

const Links = [{
  label: 'Home',
  route: '/'
  },{
    label: 'About',
    route: '/about'
  }
  ]

function SideNavbar() {
  return (
    <div>
      <Disclosure as="nav">
        <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
          <GiHamburgerMenu
            className="block md:hidden h-6 w-6"
            aria-hidden="true"
          />
        </Disclosure.Button>
        <div className="p-6 w-1/2 h-screen bg-black z-30 fixed top-0 -left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
          <div className="flex flex-col justify-start item-center">
            <h1 className="text-base text-center cursor-pointer font-bold text-white border-b border-gray-100 pb-4 w-full">
            <Link href={'/'}>
              Bastec Menu
               </Link>
            </h1>
            <div className=" my-4 border-b border-gray-100 pb-4">
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-orange-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineSpaceDashboard className="text-2xl text-white group-hover:text-white " />
                <h3 className="text-base text-white group-hover:text-white font-semibold ">
                <Link href={'/about'}>
              General
               </Link>
                </h3>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-orange-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <CgProfile className="text-2xl text-white group-hover:text-white " />
                <h3 className="text-base text-white group-hover:text-white font-semibold ">
                  Equipos
                </h3>
              </div>
              
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-orange-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineAnalytics className="text-2xl text-white group-hover:text-white " />
                <h3 className="text-base text-white group-hover:text-white font-semibold ">
                  Partidos
                </h3>
              </div>
              
            </div>
            {/* setting  */}
            <div className=" my-4 border-b border-gray-100 pb-4">
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-orange-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineSettings className="text-2xl text-white group-hover:text-white " />
                <h3 className="text-base text-white group-hover:text-white font-semibold ">
                  Configuracion
                </h3>
              </div>
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-orange-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineMoreHoriz className="text-2xl text-white group-hover:text-white " />
                <h3 className="text-base text-white group-hover:text-white font-semibold ">
                  Acerca de nosotros
                </h3>
              </div>
            </div>
            {/* logout */}
            <div className=" my-4">
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 border border-gray-200  hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineLogout className="text-2xl text-white group-hover:text-white " />
                <h3 className="text-base text-white group-hover:text-white font-semibold ">
                <Link href={'/login'}>
              Cerrar Sesion
               </Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </Disclosure>
    </div>
  );
}

export default SideNavbar;