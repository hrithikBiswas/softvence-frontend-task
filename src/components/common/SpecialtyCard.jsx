import Image from 'next/image';
import { motion } from 'motion/react';
import { getStaggerDelay, fadeInLeft, viewportSettings } from '@/lib/animations';

const SpecialtyCard = ({ item, index }) => {
    return (
        <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            transition={{ ...fadeInLeft.visible.transition, delay: getStaggerDelay(index, 0.15) }}
            whileHover={{ x: -4, transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] } }}
            className="w-[200px] lg:w-[290px] 2xl:w-[305px] flex gap-6 items-center rounded-[20px] lg:rounded-[30px] last:rounded-b-[40px] lg:last:rounded-b-[65px] border-[#FFFFFF26] border-2 p-3 lg:p-5 2xl:p-7"
        >
            <Image
                src={item.image}
                alt={item.title}
                width={62}
                height={62}
                className="rounded-[15px] p-2 border-[#FFFFFF26] border-2"
            />
            <h3 className="text-white font-bold text-lg">{item.title}</h3>
        </motion.div>
    );
};

export default SpecialtyCard;
