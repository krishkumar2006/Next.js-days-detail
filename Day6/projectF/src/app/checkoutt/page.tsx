"use client";

import dynamic from 'next/dynamic';

// Dynamically import CheckoutPage without SSR
const CheckoutPage = dynamic(() => import('../../components/CheckoutPage'), {
    ssr: false,
});

// Checkout Component
const Checkout = ({ amount }: { amount: number }) => {
    return <CheckoutPage amount={amount} />;
};

export default function CheckoutPageWrapper() {
    return <Checkout amount={100} />; // Replace 100 with actual amount if needed
}
