import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'motion/react';

const SocialIcon = ({ item, index = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ 
                duration: 0.4, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
            }}
            whileHover={{ scale: 1.2, y: -2 }}
        >
            <Link
                href={item.href}
                target="_blank"
                className="w-10 h-10 rounded-full flex items-center justify-center"
            >
                <Image
                    src={item.icon}
                    alt={item.name}
                    className=" w-[24px] sm:w-[28px] h-[24px] sm:h-[28px]"
                    width={28}
                    height={28}
                />
            </Link>
        </motion.div>
    );
};

export default SocialIcon;
