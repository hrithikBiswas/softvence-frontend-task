'use client';
import { motion } from 'motion/react';
import { useState } from 'react';
import Link from 'next/link';
import Logo from '@/components/common/Logo';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { delay } from '@/utils/helper';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            remember_me: false,
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .required('Required')
                .email('Invalid email address')
                .matches(
                    /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/,
                    'Please enter a valid email address',
                ),
            password: Yup.string()
                .required('Required')
                .min(8, 'Must be at least 8 characters long'),
            remember_me: Yup.boolean(),
        }),

        onSubmit: async (values) => {
            try {
                setLoading(true);
                await delay(2000);

                const { data } = await axios.post('/api/login', values);

                if (!data.success) {
                    return setErrorMessage(data.message);
                }
                setErrorMessage(null);
                formik.resetForm();
                router.push('/');
            } catch (error) {
                console.log('Login error:', error.message);
            } finally {
                setLoading(false);
            }
        },
    });

    return (
        <div className="min-h-screen flex flex-col">
            <div className="pl-4.25 sm:pl-6.25 md:pr-6.25 pt-3.5">
                <Logo />
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
                                Welcome Back
                            </h1>
                            <p className="text-neutral-400 text-center text-base sm:text-lg mb-8 sm:mb-10">
                                Sign in to continue your fitness journey
                            </p>
                        </motion.div>

                        {errorMessage && (
                            <div className="text-red-600 bg-red-600/20 rounded-2xl p-4 text-center mb-5">
                                {errorMessage}
                            </div>
                        )}

                        <motion.form
                            onSubmit={formik.handleSubmit}
                            className="space-y-5"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-white font-medium text-lg mb-2"
                                >
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                    placeholder="Enter your email"
                                    className="w-full bg-transparent border-2 border-gray-600 rounded-[18px] px-5 py-4 text-white text-base sm:text-lg outline-none focus:border-primary-500 transition-colors placeholder:text-neutral-500"
                                />
                                {formik.touched.email && formik.errors.email ? (
                                    <div className="text-base text-red-500">
                                        {formik.errors.email}
                                    </div>
                                ) : null}
                            </div>

                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-white font-medium text-lg mb-2"
                                >
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        id="password"
                                        name="password"
                                        type={
                                            showPassword ? 'text' : 'password'
                                        }
                                        required
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.password}
                                        placeholder="Enter your password"
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
                                {formik.touched.password &&
                                formik.errors.password ? (
                                    <div className="text-base text-red-500">
                                        {formik.errors.password}
                                    </div>
                                ) : null}
                            </div>

                            <div className="flex items-start gap-3">
                                <input
                                    type="checkbox"
                                    id="remember_me"
                                    name="remember_me"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    checked={formik.values.remember_me}
                                    className="mt-1 w-5 h-5 accent-primary-500"
                                />
                                <label
                                    htmlFor="remember_me"
                                    className="text-neutral-400 text-base"
                                >
                                    Remember me
                                </label>
                            </div>

                            <div className="flex justify-end">
                                <Link
                                    href="/forgot-password"
                                    className="text-primary-500 hover:text-primary-400 text-base font-medium transition-colors"
                                >
                                    Forgot Password?
                                </Link>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className={`${loading ? 'bg-primary-500/60 text-gray-400 cursor-no-drop' : 'bg-primary-500 text-white hover:bg-primary-600 cursor-pointer'} rounded-[18px] px-4 py-4 w-full text-lg sm:text-xl font-heading transition`}
                            >
                                {loading ? 'Signing In...' : 'Sign In'}
                            </button>
                        </motion.form>

                        <motion.p
                            className="text-neutral-400 text-center mt-8 text-base"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            Don&apos;t have an account?{' '}
                            <Link
                                href="/registration"
                                className="text-primary-500 hover:text-primary-400 font-medium transition-colors"
                            >
                                Create Account
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

export default LoginPage;
