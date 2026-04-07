import React from 'react';
import Polygon from '../shared/Polygon';

const SpecialtyPolygon = () => {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex gap-5">
                <span></span>
                <span></span>
                <span></span>
                <Polygon />
            </div>
            <div className="flex gap-4">
                <Polygon />
                <Polygon />
                <Polygon />
            </div>
            <div className="flex gap-4">
                <Polygon />
                <Polygon />
                <Polygon />
                <span></span>
                <Polygon />
                <span></span>
                <Polygon />
            </div>
            <div className="flex gap-4">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <Polygon />
                <Polygon />
                <span></span>
                <span></span>
                <Polygon />
            </div>
        </div>
    );
};

export default SpecialtyPolygon;
