import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

type ImageUrlAlt = {
    url: string;
    alt: string;
};

function CarouselItem({ i, index, width }: { i: ImageUrlAlt; index: number; width: number }) {
    const [position, setPosition] = useState(-index * width);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setPosition(prevPosition => prevPosition - width);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(intervalId);
    }, [index, width]);

    return (
        <motion.img
            src={i.url}
            height={500}
            width={500}
            alt={i.alt}
            className="rounded-lg drop-shadow-lg"
            style={{
                x: position,
                position: 'absolute',
                top: 0,
                left: 0,
            }}
        />
    );
}

function Carousel({ images }: { images: Array<ImageUrlAlt> }) {
    const width = 500; // Assuming image width is 500px

    return (
        <div className="relative" style={{ width: '500px', height: '500px', overflow: 'hidden' }}>
            {images.map((i, index) => (
                <CarouselItem key={index} i={i} index={index} width={width} />
            ))}
        </div>
    );
}

export default Carousel;
