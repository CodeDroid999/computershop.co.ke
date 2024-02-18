import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { useState } from 'react';

import MobileNavbar from './MobileNav';
import Avatar from './Avatar';
import { UserAuth } from 'context/AuthContext';
import AuthedAvatar from 'components/AuthedLayout/AuthedAvatar';


const CustomNavbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { user } = UserAuth();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <div className="m-auto flex w-11/12 items-center justify-between p-2 lg:p-3 ">
      <MobileNavbar />
      {/**Desktop */}
      <div className="md:flex flex-grow  w-full  justify-between font-semibold lg:flex hidden">
        <div className="flex flex-row items-center">
          <div className="mr-1">
            <h1 className="text-4xl font-bold">
              <Link href="/" className="text-gray-700">
                <div className="mb-1">
                  <Image src="https://i.postimg.cc/50St5mJ3/computershop-logo.png" width="70" height="70" alt={''}></Image>
                </div>
              </Link>
            </h1>
          </div>


        </div>

        {/* Right-side links */}
        <div className="flex items-center space-x-3">
          <Link
            href="/"
            className="md:text-lg font-medium text-xs text-gray-800 hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            href="/bus-hire"
            className="md:text-lg font-medium text-xs text-gray-800 hover:text-blue-600 whitespace-nowrap"
          >
            Bus Hire
          </Link>
          <Link
            href="/parcels"
            className="md:text-lg font-medium text-xs text-gray-800 hover:text-blue-600"
          >
            Parcels
          </Link>

          {!user ? (

            <Avatar />
          ) : (
            <AuthedAvatar />
          )}
        </div>
      </div>

    </div>
  );
};

export default CustomNavbar;
