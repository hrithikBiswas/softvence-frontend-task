import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import connectDB from '@/lib/mongoDB';
import { User } from '@/models/user.model';

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

        const securedUserData = {
            ...userData,
            password: hashPassword,
        };

        const user = await User.create(securedUserData);

        return NextResponse.json({
            message: 'register successfully',
            success: true,
            user,
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: 'register unsuccessfully',
            success: false,
        });
    }
}
