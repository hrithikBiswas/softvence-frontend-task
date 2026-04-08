import { Schema, model, models } from 'mongoose';

const userSchema = new Schema(
    {
        first_name: {
            type: String,
            required: true,
        },
        last_name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        terms: {
            type: Boolean,
            default: false,
        },
        otp: {
            type: Number,
        },
        password_forget_otp: {
            type: Number,
        },
    },
    {
        timestamps: true,
    },
);

export const User = models.User || model('User', userSchema);
