'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import * as z from 'zod';

import { AuthLayout } from '@/components/layout/AuthLayout';

const loginSchema = z.object({
  email: z.string().email('Enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    if (data.email.includes('admin')) {
      router.push('/admin/dashboard');
    } else {
      router.push('/dashboard');
    }
  };

  return (
    <AuthLayout>
      <div className="mx-auto max-w-md pt-4">
        {/* Header */}
        <div className="mb-8 space-y-1.5">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Welcome Back
          </h2>
          <p className="text-sm text-gray-500">
            Sign in to access your dashboard and tracked agricultural initiatives.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <div className="space-y-1">
            <label className="text-xs font-medium text-gray-700">Email address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                placeholder="volunteer@greenerbasket.org"
                {...register('email')}
                className="w-full rounded-xl border border-gray-200 bg-gray-50/50 py-3 pl-9 pr-3 text-sm transition-colors focus:border-emerald-600 focus:bg-white focus:outline-none"
              />
            </div>
            {errors.email && (
              <p className="text-[11px] text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <label className="text-xs font-medium text-gray-700">Password</label>
              <a href="/forgot-password" className="text-xs font-semibold text-basket-darkgreen hover:underline">
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                {...register('password')}
                className="w-full rounded-xl border border-gray-200 bg-gray-50/50 py-3 pl-9 pr-10 text-sm transition-colors focus:border-emerald-600 focus:bg-white focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            {errors.password && (
              <p className="text-[11px] text-red-500">{errors.password.message}</p>
            )}
          </div>

          {/* Submit Button (Styled with primary brand green and gold accent hover) */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-3 w-full rounded-xl bg-[rgb(28,73,46)] py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-[rgb(22,58,37)] disabled:opacity-50"
          >
            {isSubmitting ? 'Signing in...' : 'Sign In to Portal'}
          </button>
        </form>
      </div>
    </AuthLayout>
  );
}