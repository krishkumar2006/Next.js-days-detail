"use client"
import dynamic from 'next/dynamic';

const CheckoutPage = dynamic(() => import('../../components/CheckoutPage').then(mod => mod.default), { 
    ssr: false 
});

const Checkoutt  = ({ amount }: { amount: number }) => {
    return <CheckoutPage amount={amount} />;
};

export default Checkoutt;
