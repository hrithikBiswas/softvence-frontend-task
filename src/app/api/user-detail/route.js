import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongoDB';
import { User } from '@/models/user.model';

export async function GET(req) {
    await connectDB();

    try {
        const user = await User.find();

        return NextResponse.json({
            message: 'user fetched successfully',
            success: true,
            user,
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: 'user fetched unsuccessfully',
            success: false,
        });
    }
}
