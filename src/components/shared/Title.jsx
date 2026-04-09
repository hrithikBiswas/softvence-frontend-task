'use client';
import { motion } from 'motion/react';
import { fadeInDown, viewportSettings } from '@/lib/animations';

const Title = ({ title, subtitle }) => {
    return (
        <motion.div
            variants={fadeInDown}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="mb-8 md:mb-12"
        >
            <h1 className="font-bold text-4xl mb-2 md:mb-3">{title}</h1>
            <h4 className="font-medium text-2xl">{subtitle}</h4>
        </motion.div>
    );
};

export default Title;
