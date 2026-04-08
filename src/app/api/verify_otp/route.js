import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongoDB';
import { User } from '@/models/user.model';

export async function POST(req) {
    await connectDB();

    try {
        const { email, otp } = await req.json();

        if (!email || !otp) {
            return NextResponse.json({
                message: 'Email and OTP are required',
                success: false,
            });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return NextResponse.json({
                message: 'User not found',
                success: false,
            });
        }

        if (user.otp !== parseInt(otp)) {
            return NextResponse.json({
                message: 'Invalid OTP',
                success: false,
            });
        }

        user.otp = null;
        await user.save();

        return NextResponse.json({
            message: 'OTP verified successfully',
            success: true,
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: 'OTP verification failed',
            success: false,
        });
    }
}
