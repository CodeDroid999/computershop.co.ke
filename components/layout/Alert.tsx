import { motion } from 'framer-motion';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cn from 'classnames'
import { useEffect, useState } from 'react';


type Props = {
    preview?: boolean
}

const Alert = ({ preview }: Props) => {
    // Define a state to control the position of the marquee
    const [position, setPosition] = useState(0);

    // Function to continuously move the marquee
    const moveMarquee = () => {
        // Increment the position by a small value
        setPosition(prevPosition => prevPosition - 1);
    };

    // Start moving the marquee when component mounts
    useEffect(() => {
        // Call the moveMarquee function repeatedly at regular intervals
        const intervalId = setInterval(moveMarquee, 30);

        // Clear the interval when the component unmounts to avoid memory leaks
        return () => clearInterval(intervalId);
    }, []); // Run the effect only once on component mount

    // Reset the position to 0 when it reaches a certain threshold
    useEffect(() => {
        if (position <= -1000) {
            setPosition(0);
        }
    }, [position]);
    return (
        <div className="mx-auto bg-gray-100 "     >
            <div className="pt-1 pb-2 container w-11/12">
                <motion.div
                    className="flex justify-content-between"
                    initial={{ opacity: 0 }} // Initial animation properties
                    animate={{ opacity: 1 }} // Animation properties when component is mounted
                    transition={{ duration: 0.5, delay: 0.2 }} // Animation transition duration with delay
                >

                    <motion.span
                        className="w-[70vw] md:text-4xl font-bold text-lg text-blue-950 text-center"
                        style={{ translateX: position }} // Translate the position horizontally
                    >
                        Free Delivery for all orders above 1999.00 KES
                    </motion.span>

                    <motion.div
                        className="flex flex-col bg-indigo-400 px-1 py-1 shadow rounded"
                        initial={{ opacity: 0 }} // Initial animation properties
                        animate={{ opacity: 1 }} // Animation properties when component is mounted
                        transition={{ duration: 0.5, delay: 0.2 }} // Animation transition duration with delay
                        whileHover={{ scale: 1.1 }} // Animation properties on hover
                    >

                        <span className=" text-md font-bold text-blue-950 hover:text-blue-600 whitespace-nowrap uppercase">
                            call or whatsapp to order
                        </span>

                        <div className="flex justify-center align-center">
                            <span className="inline font-medium  text-blue-950 hover:text-blue-600 whitespace-nowrap">
                                0727 025050
                            </span>
                            <span className="inline font-medium  text-blue-950 hover:text-blue-600 whitespace-nowrap px-2">
                                /
                            </span>
                            <span className="inline font-medium  text-blue-950 hover:text-blue-600 whitespace-nowrap">
                                0757 7768262
                            </span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default Alert;
