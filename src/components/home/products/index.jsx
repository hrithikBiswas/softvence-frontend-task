import ProductCard from '@/components/common/ProductCard';
import Title from '@/components/shared/Title';
import { productData } from '@/constant/data';
import React from 'react';

const Products = () => {
    return (
        <div className="px-4.25 sm:px-6.25">
            <Title
                title={'Our Products'}
                subtitle={'Fuel Your Workouts with Protein-Packed Nutrition'}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {productData.map((product, i) => (
                    <ProductCard key={i} product={product} index={i} />
                ))}
            </div>
        </div>
    );
};

export default Products;
