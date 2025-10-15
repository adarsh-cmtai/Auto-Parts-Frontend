// app/(public)/account/orders/page.tsx
"use client"
import React from 'react';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

// Sample Data (Ise aap backend se layenge)
const ordersData = [
  { id: '12345', date: 'November 12, 2023', status: 'Shipped', total: 12500 },
  { id: '12344', date: 'November 12, 2023', status: 'Processing', total: 8200 },
  { id: '12343', date: 'November 11, 2023', status: 'Delivered', total: 25000 },
  { id: '12342', date: 'November 11, 2023', status: 'Cancelled', total: 3500 },
  { id: '12341', date: 'October 28, 2023', status: 'Delivered', total: 18900 },
];

const getStatusClass = (status: string) => {
    switch (status) {
        case 'Shipped': return 'bg-blue-100 text-blue-800';
        case 'Processing': return 'bg-amber-100 text-amber-800';
        case 'Delivered': return 'bg-green-100 text-green-800';
        case 'Cancelled': return 'bg-red-100 text-red-800';
        default: return 'bg-slate-100 text-slate-800';
    }
};

export default function MyOrdersPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-slate-800">My Orders</h1>
                <p className="text-slate-500 mt-1">View your order history and check the status of your purchases.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg shadow-slate-200/50">
                {ordersData.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="hidden md:table-header-group">
                                <tr className="text-sm text-slate-500 font-semibold border-b border-slate-200">
                                    <th className="p-4">Order ID</th>
                                    <th className="p-4">Date</th>
                                    <th className="p-4">Total Amount</th>
                                    <th className="p-4">Status</th>
                                    <th className="p-4"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {ordersData.map(order => (
                                    <tr key={order.id} className="block md:table-row border-b border-slate-200 last:border-b-0">
                                        <td className="p-4 md:table-cell block font-bold text-slate-700">
                                            <span className="md:hidden text-slate-500 font-medium">Order ID: </span>
                                            #{order.id}
                                        </td>
                                        <td className="p-4 md:table-cell block">
                                            <span className="md:hidden text-slate-500 font-medium">Date: </span>
                                            {order.date}
                                        </td>
                                        <td className="p-4 md:table-cell block">
                                            <span className="md:hidden text-slate-500 font-medium">Total: </span>
                                            ₹{order.total.toLocaleString('en-IN')}
                                        </td>
                                        <td className="p-4 md:table-cell block">
                                            <span className={`px-3 py-1.5 rounded-full text-xs font-bold ${getStatusClass(order.status)}`}>
                                                {order.status}
                                            </span>
                                        </td>
                                        <td className="p-4 md:table-cell block text-right">
                                            <Link href={`/account/orders/${order.id}`}>
                                                <span className="font-semibold text-amber-600 hover:underline">
                                                    View Details
                                                </span>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <ShoppingCart className="w-16 h-16 text-slate-300 mx-auto mb-4"/>
                        <h3 className="text-xl font-semibold text-slate-800">No Orders Yet</h3>
                        <p className="text-slate-500 mt-2">You haven't placed any orders with us. Start shopping now!</p>
                        <Link href="/shop">
                            <span className="mt-6 inline-block bg-slate-900 text-white font-semibold py-3 px-6 rounded-lg hover:bg-slate-700">
                                Go to Shop
                            </span>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}