/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Alert from './Alert';
import CustomNavbar from './Navbar';
import SearchBar from './commons/MobileSearchBar';
import Image from 'next/image';





const HeroArea: React.FC = () => {
    return (
        <header id="home" className="header_section pb-4">
            <div className="hero_bg_box">
                <div className="img-box">
                    <Image
                        src="https://i.postimg.cc/vmmJcHKm/laptop.jpg"
                        width={1440}
                        height={600}
                        alt=""
                    />
                </div>
            </div>
            <div className="flex bg-gray-100 mx-auto justify center align-center">
                <CustomNavbar />
            </div>
            <div className="overText mx-auto max-w-c-1390 my-12 z-3">
                <div className="container flex lg:items-center lg:gap-8 xl:gap-32.5 pl-10">
                    <div className=" md:w-2/3">
                        <h4 className="mb-4.5 text-lg font-medium text-gray-100">
                            🔥 Computershop - Shop with comfort.
                        </h4>
                        <h1 className="mb-1 pr-16 text-3xl font-bold text-amber-500 xl:text-hero ">
                            Comfortable. Efficient. Affordable .
                        </h1>
                        <p className="text-gray-800">
                            Welcome to North Express, the brainchild of a group
                            of veteran logisticians redefining luxury transport on the
                            "Kenyan Landscape"; with unmatched customer experience and top-tier services.
                            At North Express, we are redefining the luxury transport, and setting new standards of excellence and reliability.
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeroArea;
