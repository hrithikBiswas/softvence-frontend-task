import ClientCard from '@/components/common/ClientCard';
import PolygonMolecules from '@/components/polygon/PolygonMoleCules';
import Title from '@/components/shared/Title';
import { clientData } from '@/constant/data';
import React from 'react';

const Client = () => {
    return (
        <div className="relative px-4.25 sm:px-6.25 mt-16 sm:mt-20 md:mt-28 z-10">
            <PolygonMolecules className="-top-16 sm:-top-20 md:-top-30 left-10 sm:left-44 rotate-252" />
            <PolygonMolecules className="-top-[50px] -right-[0px] rotate-90" />
            <Title
                title={'What Our Clients Are Saying'}
                subtitle={'Real Stories, Real Results – Hear From Our Athletes'}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-11 bg-[#ebebeb] rounded-[45px] p-6 sm:p-10">
                {clientData.map((client, i) => (
                    <ClientCard key={i} client={client} index={i} />
                ))}
            </div>
        </div>
    );
};

export default Client;
