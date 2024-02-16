import Link from 'next/link';
import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const MotionLink = motion(Link);

const Logo = () => {
    const controls = useAnimation();
    const [isHovered, setIsHovered] = useState(false);

    const handleHoverStart = async () => {
        setIsHovered(true);

        await controls.start({
            borderColor: ['#F5F5F5', 'rgba(131,58,180,1)', 'rgba(253,29,29,1)', 'rgba(252,176,69,1)', 'rgba(131,58,180,1)', '#F5F5F5'],
            borderWidth: ['3px', '3px', '3px', '3px', '3px', '3px'],
            borderRadius: ['50%', '50%', '50%', '50%', '50%', '50%'],
            rotate: [0, 0, 0, 0, 0, 360],
            transition: { duration: 2, ease: 'linear', repeat: Infinity },
        });
    };

    const handleHoverEnd = () => {
        setIsHovered(false);
        controls.stop(); // Stop the animation

        controls.start({
            borderColor: ['#F5F5F5'],
            borderWidth: '2px',
            borderRadius: '50%',
            rotate: 0, // Reset rotation
            transition: { duration: 0. },
        });
    };

    return (
        <div className='flex items-center justify-center mt-2'>
            <MotionLink
                href="/"
                className={`w-16 h-16 bg-dark text-light rounded-full text-2xl font-semibold flex items-center justify-center ${isHovered ? 'cursor-pointer' : ''}`}
                onMouseOver={handleHoverStart}
                onMouseOut={handleHoverEnd}
                initial={{ borderColor: '#F5F5F5', borderWidth: '3px', borderRadius: '50%' }}
                animate={controls}
            >
                SP
            </MotionLink>
        </div>
    );
};

export default Logo;
