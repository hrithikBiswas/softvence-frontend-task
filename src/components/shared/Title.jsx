'use client';
import { motion } from 'motion/react';

const Title = ({ title, subtitle }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 md:mb-12"
        >
            <h1 className="font-bold text-4xl mb-2 md:mb-3">{title}</h1>
            <h4 className="font-medium text-2xl">{subtitle}</h4>
        </motion.div>
    );
};

export default Title;
