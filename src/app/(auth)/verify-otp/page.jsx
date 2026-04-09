'use client';
import { motion } from 'motion/react';
import { useState, useRef, useEffect, Suspense } from 'react';
import Link from 'next/link';
import Logo from '@/components/common/Logo';
import axios from 'axios';
import { delay } from '@/utils/helper';
import { useRouter, useSearchParams } from 'next/navigation';

const VerifyOtpContent = () => {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [resendLoading, setResendLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState(null);
    const inputRefs = useRef([]);
    const router = useRouter();
    const searchParams = useSearchParams();
    const email = searchParams.get('email');

    console.log(email);

    useEffect(() => {
        if (!email) {
            router.push('/registration');
        }
    }, [email, router]);

    const handleChange = (index, value) => {
        if (!/^\d*$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value.slice(-1);
        setOtp(newOtp);

        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    // const handlePaste = (e) => {
    //     e.preventDefault();
    //     const pastedData = e.clipboardData.getData('text').slice(0, 6);
    //     if (!/^\d+$/.test(pastedData)) return;

    //     const newOtp = [...otp];
    //     pastedData.split('').forEach((char, index) => {
    //         if (index < 6) {
    //             newOtp[index] = char;
    //         }
    //     });
    //     setOtp(newOtp);

    //     const lastFilledIndex = Math.min(pastedData.length - 1, 5);
    //     inputRefs.current[lastFilledIndex]?.focus();
    // };

    const handleVerify = async () => {
        const otpValue = otp.join('');

        if (otpValue.length !== 6) {
            setErrorMessage('Please enter all 6 digits');
            return;
        }

        try {
            setLoading(true);
            setErrorMessage(null);
            await delay(1000);

            const { data } = await axios.post('/api/verify_otp', {
                email,
                otp: otpValue,
            });

            if (!data.success) {
                setErrorMessage(data.message);
                return;
            }

            setSuccessMessage('OTP verified successfully!');
            await delay(1000);
            router.push('/login');
        } catch (error) {
            console.log('Verify OTP error:', error.message);
            setErrorMessage(
                error.response?.data?.message || 'Verification failed',
            );
        } finally {
            setLoading(false);
        }
    };

    // const handleResend = async () => {
    //     try {
    //         setResendLoading(true);
    //         setErrorMessage(null);
    //         await delay(1000);

    //         const { data } = await axios.post('/api/register', {
    //             email,
    //             password: 'temp',
    //             first_name: 'temp',
    //             last_name: 'temp',
    //         });

    //         if (data.success) {
    //             setSuccessMessage(`New OTP sent to ${email}`);
    //         } else {
    //             setErrorMessage(data.message);
    //         }
    //     } catch (error) {
    //         console.log('Resend OTP error:', error.message);
    //         setErrorMessage('Failed to resend OTP');
    //     } finally {
    //         setResendLoading(false);
    //     }
    // };

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
                                Verify Your Email
                            </h1>
                            <div className="text-neutral-400 text-center text-base sm:text-lg mb-8 sm:mb-10">
                                Enter the 6-digit code sent to
                                <br />
                                <span className="text-primary-500">
                                    {email}
                                </span>
                                <div className="text-gray-300">OTP: 858486</div>
                            </div>
                        </motion.div>

                        {errorMessage && (
                            <div className="text-red-600 bg-red-600/20 rounded-2xl p-4 text-center mb-5">
                                {errorMessage}
                            </div>
                        )}

                        {successMessage && (
                            <div className="text-green-500 bg-green-500/20 rounded-2xl p-4 text-center mb-5">
                                {successMessage}
                            </div>
                        )}

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <div
                                className="flex justify-center gap-3 mb-8"
                                // onPaste={handlePaste}
                            >
                                {otp.map((digit, index) => (
                                    <input
                                        key={index}
                                        ref={(el) =>
                                            (inputRefs.current[index] = el)
                                        }
                                        type="text"
                                        inputMode="numeric"
                                        maxLength={1}
                                        value={digit}
                                        onChange={(e) =>
                                            handleChange(index, e.target.value)
                                        }
                                        onKeyDown={(e) =>
                                            handleKeyDown(index, e)
                                        }
                                        className="w-12 h-14 sm:w-14 sm:h-16 bg-transparent border-2 border-gray-600 rounded-[18px] text-white text-2xl text-center outline-none focus:border-primary-500 transition-colors"
                                    />
                                ))}
                            </div>

                            <button
                                onClick={handleVerify}
                                disabled={loading}
                                className={`${loading ? 'bg-primary-500/60 text-gray-400 cursor-no-drop' : 'bg-primary-500 text-white hover:bg-primary-600 cursor-pointer'} rounded-[18px] px-4 py-4 w-full text-lg sm:text-xl font-heading transition`}
                            >
                                {loading ? 'Verifying...' : 'Verify OTP'}
                            </button>

                            {/* <div className="text-center mt-6">
                                <p className="text-neutral-400 text-base mb-2">
                                    Didn&apos;t receive the code?
                                </p>
                                <button
                                    onClick={handleResend}
                                    disabled={resendLoading}
                                    className="text-primary-500 hover:text-primary-400 font-medium transition-colors disabled:opacity-50"
                                >
                                    {resendLoading
                                        ? 'Sending...'
                                        : 'Resend OTP'}
                                </button>
                            </div> */}
                        </motion.div>

                        <motion.p
                            className="text-neutral-400 text-center mt-8 text-base"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            Remember your password?{' '}
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

const VerifyOtpPage = () => (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="text-white">Loading...</div></div>}>
        <VerifyOtpContent />
    </Suspense>
);

export default VerifyOtpPage;
