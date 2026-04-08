import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongoDB';

export async function GET(_req) {
    await connectDB();

    try {
        return NextResponse.json({
            message: 'Api is working',
            success: true,
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: 'Data base connecting error',
            success: false,
        });
    }
}
