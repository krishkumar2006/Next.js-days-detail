'use client';

import React, { useState, useEffect } from 'react';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import convertToSubCurrency from '../../lib/ConvertToSubCurrency';

const CheckoutPage: React.FC<{ amount: number }> = ({ amount }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [errorMessage, setError] = useState<string>('');
    const [clientSecret, setClientSecret] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch('/api/payment-intent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount: convertToSubCurrency(amount) })
        })
        .then(res => res.json())
        .then(data => setClientSecret(data.clientSecret ?? '')) // ✅ Fix: Prevents undefined clientSecret
        .catch(err => {
            console.error("Error fetching client secret:", err);
            setClientSecret(''); // ✅ Fix: Ensures clientSecret is always a string
        });
    }, [amount]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        if (!stripe || !elements) return;

        const { error: submitErrors } = await elements.submit();
        if (submitErrors) {
            setError(submitErrors.message ?? 'An unknown error occurred.'); // ✅ Fix: Ensures errorMessage is always a string
            setLoading(false);
            return;
        }

        const { error } = await stripe.confirmPayment({
            elements,
            clientSecret,
            confirmParams: { return_url: `/payment-success?amount=${amount}` }
        });

        setError(error?.message ?? ''); // ✅ Fix: Ensures errorMessage is always a string
        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit} className='p-8'>
            {clientSecret && <PaymentElement />}
            <button className='w-full bg-black text-white py-2 mt-5' disabled={loading}>
                {loading ? 'Processing...' : 'Pay Now'}
            </button>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </form>
    );
};

// ✅ Ensure it has a proper default export
export default CheckoutPage;
