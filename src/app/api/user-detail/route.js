import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongoDB';
import { User } from '@/models/user.model';
import { verifyToken } from '@/utils/helper';

export async function GET(req) {
    await connectDB();

    try {
        const token = req.cookies.get('auth_token')?.value;

        if (!token) {
            return NextResponse.json({
                message: 'Not authenticated',
                success: false,
            });
        }

        const decoded = verifyToken(token);

        if (!decoded || !decoded.userId) {
            return NextResponse.json({
                message: 'Invalid token',
                success: false,
            });
        }

        const user = await User.findById(decoded.userId).select('-password -otp -password_forget_otp');

        if (!user) {
            return NextResponse.json({
                message: 'User not found',
                success: false,
            });
        }

        return NextResponse.json({
            message: 'User fetched successfully',
            success: true,
            user,
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: 'User fetched unsuccessfully',
            success: false,
        });
    }
}
