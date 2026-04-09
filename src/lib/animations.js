'use client';
import {Variants} from 'motion/react';

export const springTransition = {
    type: 'spring',
    stiffness: 300,
    damping: 30,
};

export const smoothTransition = {
    duration: 0.5,
    ease: [0.22, 1, 0.36, 1],
};

export const fastTransition = {
    duration: 0.3,
    ease: [0.22, 1, 0.36, 1],
};

export const staggeredContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1,
        },
    },
};

export const fadeInUp = {
    hidden: {opacity: 0, y: 20},
    visible: {
        opacity: 1,
        y: 0,
        transition: smoothTransition,
    },
};

export const fadeInDown = {
    hidden: {opacity: 0, y: -20},
    visible: {
        opacity: 1,
        y: 0,
        transition: smoothTransition,
    },
};

export const fadeInLeft = {
    hidden: {opacity: 0, x: -30},
    visible: {
        opacity: 1,
        x: 0,
        transition: smoothTransition,
    },
};

export const fadeInRight = {
    hidden: {opacity: 0, x: 30},
    visible: {
        opacity: 1,
        x: 0,
        transition: smoothTransition,
    },
};

export const scaleIn = {
    hidden: {opacity: 0, scale: 0.95},
    visible: {
        opacity: 1,
        scale: 1,
        transition: {...smoothTransition, duration: 0.4},
    },
};

export const cardHover = {
    rest: {scale: 1, y: 0},
    hover: {
        scale: 1.02,
        y: -4,
        transition: {...springTransition, stiffness: 400},
    },
};

export const buttonTap = {
    rest: {scale: 1},
    hover: {scale: 1.02},
    tap: {scale: 0.98},
};

export const iconHover = {
    rest: {scale: 1},
    hover: {scale: 1.15},
};

export const linkHover = {
    rest: {opacity: 1},
    hover: {opacity: 0.7},
};

export const viewportSettings = {
    once: true,
    margin: '-50px',
};

export const getStaggerDelay = (index, base = 0.08) => {
    return Number.parseFloat((index * base).toFixed(2));
};

export const heroEntrance = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export const slideInFromRight = {
    hidden: {opacity: 0, x: 50},
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export const slideInFromBottom = {
    hidden: {opacity: 0, y: 30},
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export const gentleBounce = {
    hidden: {opacity: 0, y: 10},
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 200,
            damping: 20,
        },
    },
};
