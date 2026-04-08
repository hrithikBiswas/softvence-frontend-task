'use client';
import { motion } from 'motion/react';
import Link from 'next/link';
import Logo from '@/components/common/Logo';
import Button from '@/components/shared/Button';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { delay } from '@/utils/helper';
import { useRouter } from 'next/navigation';

const RegistrationPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            password_confirmation: '',
            terms: false,
        },
        validationSchema: Yup.object({
            first_name: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            last_name: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
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
            password_confirmation: Yup.string()
                .required('Required')
                .min(8, 'Must be at least 8 characters long')
                .oneOf([Yup.ref('password')], "Password's not match"),
            terms: Yup.string(),
        }),

        onSubmit: async (values) => {
            try {
                setLoading(true);
                await delay(2000);

                const { data } = await axios.post('/api/register', values);

                if (!data.success) {
                    return setErrorMessage(data.message);
                }
                setErrorMessage(null);
                formik.resetForm();
                router.push(`/verify-otp?email=${encodeURIComponent(values.email)}`);
            } catch (error) {
                console.log('register error: ', error.message);
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
                                Create Account
                            </h1>
                            <p className="text-neutral-400 text-center text-base sm:text-lg mb-8 sm:mb-10">
                                Join MuscleForge and start your fitness journey
                            </p>
                        </motion.div>
                        {errorMessage && (
                            <div className=" text-red-600 bg-red-600/20 rounded-2xl p-4 text-center mb-5">
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
                            <div className="flex gap-6">
                                <div>
                                    <label
                                        htmlFor="first_name"
                                        className="block text-white font-medium text-lg mb-2"
                                    >
                                        First Name
                                    </label>
                                    <input
                                        id="first_name"
                                        name="first_name"
                                        type="text"
                                        required
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.first_name}
                                        placeholder="Enter your first name"
                                        className="w-full bg-transparent border-2 border-gray-600 rounded-[18px] px-5 py-4 text-white text-base sm:text-lg outline-none focus:border-primary-500 transition-colors placeholder:text-neutral-500"
                                    />
                                    {formik.touched.first_name &&
                                    formik.errors.first_name ? (
                                        <div className="text-base text-red-500">
                                            {formik.errors.first_name}
                                        </div>
                                    ) : null}
                                </div>
                                <div>
                                    <label
                                        htmlFor="last_name"
                                        className="block text-white font-medium text-lg mb-2"
                                    >
                                        Last Name
                                    </label>
                                    <input
                                        id="last_name"
                                        name="last_name"
                                        type="text"
                                        required
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.last_name}
                                        placeholder="Enter your last name"
                                        className="w-full bg-transparent border-2 border-gray-600 rounded-[18px] px-5 py-4 text-white text-base sm:text-lg outline-none focus:border-primary-500 transition-colors placeholder:text-neutral-500"
                                    />
                                    {formik.touched.last_name &&
                                    formik.errors.last_name ? (
                                        <div className="text-base text-red-500">
                                            {formik.errors.last_name}
                                        </div>
                                    ) : null}
                                </div>
                            </div>

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
                                {formik.touched.password &&
                                formik.errors.password ? (
                                    <div className="text-base text-red-500">
                                        {formik.errors.password}
                                    </div>
                                ) : null}
                            </div>

                            <div>
                                <label
                                    htmlFor="password_confirmation"
                                    className="block text-white font-medium text-lg mb-2"
                                >
                                    Confirm Password
                                </label>
                                <div className="relative">
                                    <input
                                        id="password_confirmation"
                                        name="password_confirmation"
                                        type={
                                            showConfirmPassword
                                                ? 'text'
                                                : 'password'
                                        }
                                        required
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={
                                            formik.values.password_confirmation
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
                                {formik.touched.password_confirmation &&
                                formik.errors.password_confirmation ? (
                                    <div className="text-base text-red-500">
                                        {formik.errors.password_confirmation}
                                    </div>
                                ) : null}
                            </div>

                            <div className="flex items-start gap-3">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    name="terms"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.terms}
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
                            {/* 
                            <Button
                                type="submit"
                                text="Create Account"
                                className=""
                            /> */}

                            <button
                                type="submit"
                                disabled={loading}
                                className={`${loading ? 'bg-primary-500/60 text-gray-400 cursor-no-drop' : 'bg-primary-500 text-white hover:bg-primary-600 cursor-pointer'}  rounded-[18px] px-4 py-4 w-full text-lg sm:text-xl font-heading transition`}
                            >
                                {loading
                                    ? 'Createing Account...'
                                    : 'Create Account'}
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
