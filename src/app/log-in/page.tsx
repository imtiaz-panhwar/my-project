"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation"; // ✅ Import useRouter for Next.js 13+
// import { useRouter } from "next/router"; // ✅ Use this for Next.js 12 and below
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

// Validation Schema using Zod
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter(); // ✅ Initialize useRouter

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormInputs) => {
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Invalid email or password");
      }

      setMessage("Login successful!");

      // ✅ Redirect to homepage after successful login
      setTimeout(() => {
        router.push("/"); // Redirects to the main page
      }, 1000);

    } catch (error: any) {
      setMessage(error?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="items-center max-w-[1440px] mx-auto bg-white">
      <Navbar />
      <div className="bg-white w-[450px] h-auto mx-auto p-8">
        <div className="flex justify-center mb-6">
          <Image src="/Vector1.png" width={60} height={60} alt="Nike Shoe Logo" />
        </div>

        <h2 className="text-center text-[24px] font-semibold text-gray-800 mb-6">
          YOUR ACCOUNT FOR EVERYTHING NIKE
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <input
              {...register("email")}
              type="email"
              placeholder="Email address"
              className="w-full h-[50px] px-4 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div className="mb-4">
            <input
              {...register("password")}
              type="password"
              placeholder="Password"
              className="w-full h-[50px] px-4 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          <div className="flex justify-between items-center mb-6">
            <label className="flex items-center cursor-pointer">
              <input type="checkbox" className="mr-2" />
              <span className="text-[15px] text-gray-600">Keep me signed in</span>
            </label>
            <a href="#" className="text-[14px] text-gray-400 hover:underline">
              Forgot your password?
            </a>
          </div>

          {message && <p className={`text-center text-sm ${message.includes("success") ? "text-green-500" : "text-red-500"}`}>{message}</p>}

          <div className="mb-6">
            <button
              type="submit"
              disabled={loading}
              className={`w-full h-[50px] rounded-sm ${loading ? "bg-gray-500" : "bg-black hover:bg-gray-900"} text-white text-[14px]`}
            >
              {loading ? "Signing In..." : "SIGN IN"}
            </button>
          </div>
        </form>

        <div className="text-center text-sm text-gray-600">
          <span>Not a member? </span>
          <a href="#" className="text-blue-600 hover:underline font-medium">Join Us</a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
