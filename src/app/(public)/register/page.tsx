"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import {
  User,
  Mail,
  Phone,
  // Globe,
  // HelpCircle,
  ShieldCheck,
  Lock,
  Eye,
  EyeOff,
  // ChevronDown,
} from "lucide-react";

import { registerSchema, RegisterFormValues } from "@/lib/validation/auth";
import { AuthLayout } from "@/components/layout/AuthLayout";
import { PasswordStrengthMeter } from "@/components/ui/password-strength";

export default function RegisterPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      // country: 'NG',
      // securityQuestion: 'school',
      // securityAnswer: '',
      password: "",
      confirmPassword: "",
      // terms: true,
    },
  });

  // eslint-disable-next-line react-hooks/incompatible-library
  const passwordValue = watch("password");

  const onSubmit = async (data: RegisterFormValues) => {
    console.log("Registration Submitted:", data);
    // Redirect to volunteer dashboard on successful sign-up demo
    router.push("/dashboard");
  };

  return (
    <AuthLayout>
      <div className="mx-auto max-w-xl">
        {/* Header */}
        <div className="mb-6 space-y-1">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
            Empower Communities with Us
          </h2>
          <p className="text-xs text-gray-500 md:text-sm">
            Create your volunteer account to join our network of nutrition and
            agriculture champions.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3.5">
          {/* First & Last Name */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="space-y-1">
              <label className="text-xs font-medium text-gray-700">
                First name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  placeholder="Enter first name"
                  {...register("firstName")}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50/50 py-2.5 pl-9 pr-3 text-sm placeholder:text-gray-400 transition-colors focus:border-emerald-600 focus:bg-white focus:outline-none"
                />
              </div>
              {errors.firstName && (
                <p className="text-[11px] text-red-500">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-gray-700">
                Last name
              </label>
              <input
                placeholder="Enter last name"
                {...register("lastName")}
                className="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-3 py-2.5 text-sm placeholder:text-gray-400 transition-colors focus:border-emerald-600 focus:bg-white focus:outline-none"
              />
              {errors.lastName && (
                <p className="text-[11px] text-red-500">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          {/* Phone & Country */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="space-y-1">
              <label className="text-xs font-medium text-gray-700">
                Email address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  placeholder="name@example.com"
                  {...register("email")}
                  className="w-full rounded-xl border border-gray-200 bg-emerald-50/30 py-2.5 pl-9 pr-3 text-sm placeholder:text-gray-400 transition-colors focus:border-emerald-600 focus:bg-white focus:outline-none"
                />
              </div>
              {errors.email && (
                <p className="text-[11px] text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-gray-700">Phone</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  placeholder="+234..."
                  {...register("phone")}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50/50 py-2.5 pl-9 pr-3 text-sm placeholder:text-gray-400 transition-colors focus:border-emerald-600 focus:bg-white focus:outline-none"
                />
              </div>
              {errors.phone && (
                <p className="text-[11px] text-red-500">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* <div className="space-y-1">
              <label className="text-xs font-medium text-gray-700">Country</label>
              <div className="relative">
                <Globe className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <select
                  {...register('country')}
                  className="w-full appearance-none rounded-xl border border-gray-200 bg-gray-50/50 py-2.5 pl-9 pr-8 text-sm transition-colors focus:border-emerald-600 focus:bg-white focus:outline-none"
                >
                  <option value="NG">Nigeria (NG)</option>
                  <option value="GH">Ghana (GH)</option>
                  <option value="KE">Kenya (KE)</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              </div>
            </div> */}
          </div>

          {/* Security Question */}
          {/* <div className="space-y-1">
            <label className="text-xs font-medium text-gray-700">
              Security Question <span className="text-gray-400 font-normal">(for password recovery)</span>
            </label>
            <div className="relative">
              <HelpCircle className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <select
                {...register('securityQuestion')}
                className="w-full appearance-none rounded-xl border border-gray-200 bg-gray-50/50 py-2.5 pl-9 pr-8 text-sm transition-colors focus:border-emerald-600 focus:bg-white focus:outline-none"
              >
                <option value="school">What was the name of your first elementary school?</option>
                <option value="pet">What was the name of your first pet?</option>
                <option value="city">In what city were you born?</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            </div>
            <p className="text-[11px] text-gray-400">
              This will be used to reset your password if forgotten. Keep it safe and memorable.
            </p>
          </div>

          {/* Security Answer */}
          {/* <div className="space-y-1">
            <label className="text-xs font-medium text-gray-700">Security Answer</label>
            <div className="relative">
              <ShieldCheck className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                placeholder="Your answer to the security question"
                {...register('securityAnswer')}
                className="w-full rounded-xl border border-gray-200 bg-gray-50/50 py-2.5 pl-9 pr-3 text-sm placeholder:text-gray-400 transition-colors focus:border-emerald-600 focus:bg-white focus:outline-none"
              />
            </div>
          </div> */}

          {/* Password */}
          <div className="space-y-1">
            <label className="text-xs font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                {...register("password")}
                className="w-full rounded-xl border border-gray-200 bg-emerald-50/20 py-2.5 pl-9 pr-10 text-sm placeholder:text-gray-400 transition-colors focus:border-emerald-600 focus:bg-white focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
            {/* <PasswordStrengthMeter password={passwordValue || ""} /> */}
            {/* {errors.password && (
              <p className="text-[11px] text-red-500">
                {errors.password.message}
              </p>
            )} */}
          </div>

          {/* Confirm Password */}
          <div className="space-y-1">
            <label className="text-xs font-medium text-gray-700">
              Confirm password
            </label>
            <div className="relative">
              <ShieldCheck className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="••••••••"
                {...register("confirmPassword")}
                className="w-full rounded-xl border border-gray-200 bg-emerald-50/20 py-2.5 pl-9 pr-10 text-sm placeholder:text-gray-400 transition-colors focus:border-emerald-600 focus:bg-white focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-[11px] text-red-500">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Terms Checkbox */}
          {/* <div className="flex items-center gap-2 pt-1">
            <input
              type="checkbox"
              id="terms"
              {...register("terms")}
              className="h-4 w-4 rounded border-gray-300 text-emerald-700 focus:ring-emerald-600"
            />
            <label htmlFor="terms" className="text-xs text-gray-600">
              I agree to the{" "}
              <a
                href="#"
                className="font-semibold text-gray-900 hover:underline"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="font-semibold text-gray-900 hover:underline"
              >
                Privacy Policy
              </a>
            </label>
          </div>
          {errors.terms && (
            <p className="text-[11px] text-red-500">{errors.terms.message}</p>
          )} */}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-3 w-full rounded-xl bg-[#004D25] py-3 text-sm font-semibold text-white transition-opacity hover:opacity-95 disabled:opacity-50"
          >
            {isSubmitting ? "Creating account..." : "Create Account"}
          </button>
        </form>
      </div>
    </AuthLayout>
  );
}
