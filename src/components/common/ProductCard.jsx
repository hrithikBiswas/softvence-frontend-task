'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';
import PlusIcon from '../svg/PlusIcon';
import Button from '../shared/Button';
import StarIcon from '../svg/StarIcon';
import Link from 'next/link';
import { getStaggerDelay, smoothTransition, viewportSettings } from '@/lib/animations';

const ProductCard = ({ product, index }) => {
    return (
        <motion.div
            className="rounded-[45px] p-5 bg-black text-gray-100 max-w-[545px] max-h-[588px]"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportSettings}
            transition={{ ...smoothTransition, delay: getStaggerDelay(index, 0.1) }}
            whileHover={{ y: -6 }}
            layout
        >
            <motion.div
                className="overflow-hidden rounded-4xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
                <Image
                    src={product.image}
                    alt={product.image}
                    width={494}
                    height={425}
                    className="rounded-4xl w-full"
                />
            </motion.div>
            <div className="flex justify-between items-end mt-10">
                <div className="flex flex-col gap-2">
                    <Link href={'#'} className="font-medium text-2xl">
                        {product.name}
                    </Link>
                    <div className="flex gap-4 items-center">
                        <h3 className="font-medium text-[24px]">
                            {product.currency} {product.price.toFixed(2)}
                        </h3>
                        <div className="flex gap-1">
                            {Array.from({ length: 5 }).map((_, i) => {
                                if (i < product.review) {
                                    return (
                                        <StarIcon
                                            key={i}
                                            color="text-primary-600"
                                        />
                                    );
                                }
                                return <StarIcon key={i} />;
                            })}
                        </div>
                    </div>
                </div>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                >
                    <Button
                        text={<PlusIcon />}
                        className={
                            'rounded-[17px] bg-primary-600 hover:bg-primary-700 cursor-pointer'
                        }
                    />
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ProductCard;
