import React from 'react';
import Polygon from '../shared/Polygon';

const BannerrightPolygon = () => {
    return (
        <div className="flex flex-col gap-2 lg:gap-4">
            <div className="flex gap-2 lg:gap-5">
                <Polygon />
                <Polygon />
                <Polygon />
            </div>
            <div className="flex gap-2 lg:gap-4">
                <Polygon />
                <Polygon />
            </div>
            <div className="flex gap-2 lg:gap-4">
                <Polygon />
                <Polygon />
            </div>
            <div className="flex gap-2 lg:gap-4">
                <Polygon />
                <Polygon />
                <Polygon />
            </div>
        </div>
    );
};

export default BannerrightPolygon;
