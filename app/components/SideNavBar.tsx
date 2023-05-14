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
}, {
  label: 'About',
  route: '/about'
}
]

function SideNavbar() {
  return (
    <div className="inline-flex flex-col justify-start item-center bg-black py-12 px-4">
      <h1 className="text-base text-center cursor-pointer font-bold text-white mb-10">
        <Link href={'/'}>
          Bastec Menu
        </Link>
      </h1>
      <div>
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
      <div className='h-full'></div>
      {/* setting  */}
      <div className="mb-12">
        <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-orange-500 p-2 rounded-md group cursor-pointer hover:shadow-lg">
          <MdOutlineSettings className="text-2xl text-white group-hover:text-white " />
          <h3 className="text-base text-white group-hover:text-white font-semibold ">
            Configuracion
          </h3>
        </div>
        <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-orange-500 p-2 rounded-md group cursor-pointer hover:shadow-lg w-[200px]">
          <MdOutlineMoreHoriz className="text-2xl text-white group-hover:text-white " />
          <h3 className="text-base text-white group-hover:text-white font-semibold ">
            Acerca de nosotros
          </h3>
        </div>
      </div>
      {/* logout */}
      <div className="flex justify-start items-center gap-4 pl-5 border border-gray-200  hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg">
        <MdOutlineLogout className="text-2xl text-white group-hover:text-white " />
        <h3 className="text-base text-white group-hover:text-white font-semibold ">
          <Link href={'/login'}>
            Cerrar Sesion
          </Link>
        </h3>
      </div>

    </div>
  );
}

export default SideNavbar;