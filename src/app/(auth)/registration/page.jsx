'use client';
import { motion } from 'motion/react';
import Link from 'next/link';
import Logo from '@/components/common/Logo';
import Button from '@/components/shared/Button';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';

const RegistrationPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className="min-h-screen flex flex-col">
            <div className="pl-4.25 sm:pl-6.25 md:pr-6.25 pt-3.5">
                <Link href="/">
                    <Logo />
                </Link>
            </div>

            <div className="flex-1 flex items-center justify-center px-4.25 sm:px-6.25 py-10">
                <motion.div
                    className="w-full max-w-[500px]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="bg-black rounded-[45px] p-8 sm:p-12 md:p-16">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <h1 className="font-heading font-medium text-[28px] sm:text-[36px] md:text-[40px] text-white text-center mb-2">
                                Create Account
                            </h1>
                            <p className="text-neutral-400 text-center text-base sm:text-lg mb-8 sm:mb-10">
                                Join MuscleForge and start your fitness journey
                            </p>
                        </motion.div>

                        <motion.form
                            className="space-y-5"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <div>
                                <label className="block text-white font-medium text-lg mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your full name"
                                    className="w-full bg-transparent border-2 border-gray-600 rounded-[18px] px-5 py-4 text-white text-base sm:text-lg outline-none focus:border-primary-500 transition-colors placeholder:text-neutral-500"
                                />
                            </div>

                            <div>
                                <label className="block text-white font-medium text-lg mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full bg-transparent border-2 border-gray-600 rounded-[18px] px-5 py-4 text-white text-base sm:text-lg outline-none focus:border-primary-500 transition-colors placeholder:text-neutral-500"
                                />
                            </div>

                            <div>
                                <label className="block text-white font-medium text-lg mb-2">
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={
                                            showPassword ? 'text' : 'password'
                                        }
                                        placeholder="Create a password"
                                        className="w-full bg-transparent border-2 border-gray-600 rounded-[18px] px-5 py-4 pr-12 text-white text-base sm:text-lg outline-none focus:border-primary-500 transition-colors placeholder:text-neutral-500"
                                    />
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                        className="absolute right-5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white transition-colors"
                                    >
                                        {showPassword ? (
                                            <FaEyeSlash size={20} />
                                        ) : (
                                            <FaEye size={20} />
                                        )}
                                    </button>
                                </div>
                            </div>

                            <div>
                                <label className="block text-white font-medium text-lg mb-2">
                                    Confirm Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={
                                            showConfirmPassword
                                                ? 'text'
                                                : 'password'
                                        }
                                        placeholder="Confirm your password"
                                        className="w-full bg-transparent border-2 border-gray-600 rounded-[18px] px-5 py-4 pr-12 text-white text-base sm:text-lg outline-none focus:border-primary-500 transition-colors placeholder:text-neutral-500"
                                    />
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowConfirmPassword(
                                                !showConfirmPassword,
                                            )
                                        }
                                        className="absolute right-5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white transition-colors"
                                    >
                                        {showConfirmPassword ? (
                                            <FaEyeSlash size={20} />
                                        ) : (
                                            <FaEye size={20} />
                                        )}
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    className="mt-1 w-5 h-5 accent-primary-500"
                                />
                                <label
                                    htmlFor="terms"
                                    className="text-neutral-400 text-base"
                                >
                                    I agree to the{' '}
                                    <Link
                                        href="/terms"
                                        className="text-primary-500 hover:text-primary-400 transition-colors"
                                    >
                                        Terms of Service
                                    </Link>{' '}
                                    and{' '}
                                    <Link
                                        href="/privacy"
                                        className="text-primary-500 hover:text-primary-400 transition-colors"
                                    >
                                        Privacy Policy
                                    </Link>
                                </label>
                            </div>

                            <Button
                                text="Create Account"
                                className="w-full text-lg sm:text-xl font-heading hover:bg-primary-600 transition"
                            />

                            <div className="flex items-center gap-4 my-5">
                                <hr className="flex-1 border-gray-600" />
                                <span className="text-neutral-400 text-sm">
                                    or
                                </span>
                                <hr className="flex-1 border-gray-600" />
                            </div>

                            <button
                                type="button"
                                className="w-full bg-transparent border-2 border-gray-600 rounded-[18px] px-5 py-4 text-white text-base sm:text-lg font-medium flex items-center justify-center gap-3 hover:border-primary-500 transition-colors"
                            >
                                <svg
                                    className="w-6 h-6"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path
                                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                        fill="#4285F4"
                                    />
                                    <path
                                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                        fill="#34A853"
                                    />
                                    <path
                                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                        fill="#FBBC05"
                                    />
                                    <path
                                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                        fill="#EA4335"
                                    />
                                </svg>
                                Continue with Google
                            </button>
                        </motion.form>

                        <motion.p
                            className="text-neutral-400 text-center mt-8 text-base"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            Already have an account?{' '}
                            <Link
                                href="/login"
                                className="text-primary-500 hover:text-primary-400 font-medium transition-colors"
                            >
                                Sign In
                            </Link>
                        </motion.p>
                    </div>
                </motion.div>
            </div>

            <div className="px-4.25 sm:px-6.25 pb-10">
                <p className="text-neutral-600 text-center text-lg">
                    websitename.com©{new Date().getFullYear()} all right reserve
                </p>
            </div>
        </div>
    );
};

export default RegistrationPage;
