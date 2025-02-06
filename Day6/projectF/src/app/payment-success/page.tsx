"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function PaymentSuccessContent() {
    const searchParams = useSearchParams();
    const amount = searchParams.get("amount") || "0"; // Fallback to "0" if null

    return (
        <div className="flex items-center justify-center min-h-screen bg-black text-white px-6">
            <h1 className="text-4xl md:text-6xl font-bold text-center">
                Thank you for purchasing <span className="text-green-400">${amount}</span>!
            </h1>
        </div>
    );
}

export default function PaymentSuccess() {
    return (
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen bg-black text-white">Loading...</div>}>
            <PaymentSuccessContent />
        </Suspense>
    );
}