import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import connectDB from '@/lib/mongoDB';
import { User } from '@/models/user.model';
import { createToken } from '@/utils/helper';

export async function POST(req) {
    await connectDB();

    try {
        const { email, password, remember_me } = await req.json();

        if (!email || !password) {
            return NextResponse.json({
                message: 'Email and password are required',
                success: false,
            });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return NextResponse.json({
                message: 'Invalid email or password',
                success: false,
            });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return NextResponse.json({
                message: 'Invalid email or password',
                success: false,
            });
        }

        const tokenPayload = {
            userId: user._id,
            email: user.email,
        };

        const token = createToken(tokenPayload);

        const response = NextResponse.json({
            message: 'Login successfully',
            success: true,
            user: {
                id: user._id,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
            },
        });

        const cookieMaxAge = remember_me ? 7 * 24 * 60 * 60 : 24 * 60 * 60;

        response.cookies.set('auth_token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: cookieMaxAge,
            path: '/',
        });

        return response;
    } catch (error) {
        console.log('Login error:', error);
        return NextResponse.json({
            message: 'Login failed',
            success: false,
        });
    }
}
