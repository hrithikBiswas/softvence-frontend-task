import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import connectDB from '@/lib/mongoDB';
import { User } from '@/models/user.model';

function generateOTP() {
    return 858486;
}

export async function POST(req) {
    await connectDB();

    try {
        const userData = await req.json();
        const isExist = await User.findOne({ email: userData.email });
        if (isExist) {
            return NextResponse.json({
                message: 'User already exist!',
                success: false,
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(userData.password, salt);

        const otp = generateOTP();

        const securedUserData = {
            ...userData,
            password: hashPassword,
            otp: otp,
        };

        const user = await User.create(securedUserData);

        console.log(`OTP for ${userData.email}: ${otp}`);

        return NextResponse.json({
            message: 'register successfully',
            success: true,
            user: {
                id: user._id,
                email: user.email,
            },
            otp: otp,
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: 'register unsuccessfully',
            success: false,
        });
    }
}
