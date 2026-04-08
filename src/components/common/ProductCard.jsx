import Image from 'next/image';
import React from 'react';
import PlusIcon from '../svg/PlusIcon';
import Button from '../shared/Button';
import StarIcon from '../svg/StarIcon';
import Link from 'next/link';

const ProductCard = ({ product }) => {
    return (
        <div className="rounded-[45px] p-5 bg-black text-gray-100 max-w-[545px] max-h-[588px]">
            <div>
                <Image
                    src={product.image}
                    alt={product.image}
                    width={494}
                    height={425}
                    className="rounded-4xl w-full"
                />
            </div>
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
                <Button
                    text={<PlusIcon />}
                    className={
                        'rounded-[17px] bg-primary-600 hover:bg-primary-700 transition cursor-pointer'
                    }
                />
            </div>
        </div>
    );
};

export default ProductCard;
