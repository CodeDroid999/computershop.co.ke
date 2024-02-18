import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import NavigationMenu from './NavMenu';
import MobileAvatar from './MobileAvatar';
import MobileAuthedAvatar from 'components/AuthedLayout/MobileAvatar';
import { UserAuth } from 'context/AuthContext';
import Cart from './ShoppingCartMobile';
import SearchBar from './commons/MobileSearchBar';



const MobileNavbar = () => {
  const { user } = UserAuth();
  // State variable to track the visibility of the menu
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  // Function to toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <div className="min-w-full items-center justify-between lg:hidden">
      <div className="flex min-w-full items-center justify-between">
        {/* Left div */}
        <div className="flex flex-row items-center space-x-1">
          <Link href="/" className="text-gray-700">
            <div className="mb-1">
              <Image
                src="https://i.postimg.cc/50St5mJ3/computershop-logo.png"
                alt="booking"
                width={130}
                height={60}
                className="h-[60px] w-[100%]"
                id="customfontsize"
              />
            </div>
          </Link>
        </div>

        {/* Right div (Sticky bar) */}
        <div className="flex items-center justify-end mr-3">
          {!user ? (
            <div className="flex">
              <MobileAvatar />
              <Cart />
            </div>
          ) : (
            <div className="flex space-x-1">
              <MobileAuthedAvatar />
              <Cart />
            </div>
          )}
        </div>
      </div>

      {/* Conditional rendering of the NavigationMenu based on isMenuVisible */}
      {isMenuVisible && (
        <div className="flex">
          <NavigationMenu />
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
function userAuth() {
  throw new Error('Function not implemented.');
}

