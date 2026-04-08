'use client';
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export const useAuth = () => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    const checkAuth = useCallback(async () => {
        setLoading(true);
        try {
            const { data } = await axios.get('/api/user-detail');

            if (data.success && data.user) {
                setUser(data.user);
                setIsAuthenticated(true);
                if (typeof window !== 'undefined') {
                    localStorage.setItem('user', JSON.stringify(data.user));
                }
            } else {
                setUser(null);
                setIsAuthenticated(false);
                if (typeof window !== 'undefined') {
                    localStorage.removeItem('user');
                }
            }
        } catch (error) {
            console.error('Auth check failed:', error);
            setUser(null);
            setIsAuthenticated(false);
            if (typeof window !== 'undefined') {
                localStorage.removeItem('user');
            }
        } finally {
            setLoading(false);
        }
    }, []);

    const login = async (email, password, remember_me = false) => {
        try {
            setLoading(true);
            const { data } = await axios.post('/api/login', {
                email,
                password,
                remember_me,
            });

            if (data.success) {
                setUser(data.user);
                setIsAuthenticated(true);
                if (typeof window !== 'undefined') {
                    localStorage.setItem('user', JSON.stringify(data.user));
                }
                return { success: true, message: data.message };
            }

            return { success: false, message: data.message };
        } catch (error) {
            console.error('Login failed:', error);
            return {
                success: false,
                message: error.response?.data?.message || 'Login failed',
            };
        } finally {
            setLoading(false);
        }
    };

    const logout = async () => {
        try {
            await axios.post('/api/logout');
            router.push('/registration');
        } catch (error) {
            console.error('Logout API failed:', error);
        } finally {
            setUser(null);
            setIsAuthenticated(false);
            if (typeof window !== 'undefined') {
                localStorage.removeItem('user');
            }
        }
    };

    useEffect(() => {
        checkAuth();
    }, [checkAuth]);

    return {
        user,
        setUser,
        isAuthenticated,
        loading,
        login,
        logout,
        checkAuth,
    };
};

export default useAuth;
