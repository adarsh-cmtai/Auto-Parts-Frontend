// app/(public)/account/orders/[orderId]/page.tsx
"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, CheckCircle, FileText, Truck, Package, MapPin, CreditCard } from 'lucide-react';

const OrderDetail = {
  id: '12345',
  date: 'November 12, 2023',
  status: 'Shipped',
  total: 12500,
  shippingAddress: 'Rohan Sharma, 123, MG Road, Sector 14, Gurgaon, Haryana, 122001',
  paymentMethod: 'Credit Card ending in •••• 1234',
  items: [
    { id: 1, name: 'Giulia Carbon Fiber Spoiler', sku: 'ALF-GCS-01', quantity: 1, price: 12500, image: '/images/home/category1.png' }
  ]
};

const getStatusClass = (currentStatus: string, targetStatus: string) => {
    const statuses = ['Processing', 'Shipped', 'Delivered'];
    const currentIndex = statuses.indexOf(currentStatus);
    const targetIndex = statuses.indexOf(targetStatus);
    if (currentIndex >= targetIndex) return 'bg-amber-500';
    return 'bg-slate-200';
};

export default function OrderDetailPage({ params }: { params: { orderId: string } }) {
    const order = OrderDetail; // Yahan aap backend se real data fetch karenge params.orderId ke basis par
    const statusTracker = ['Processing', 'Shipped', 'Delivered'];

    return (
        <div className="space-y-8">
            <div>
                <Link href="/account/orders" className="flex items-center gap-2 text-slate-600 font-semibold hover:text-slate-900 mb-4">
                    <ArrowLeft className="w-5 h-5" />
                    Back to All Orders
                </Link>
                <h1 className="text-3xl font-bold text-slate-800">Order Details</h1>
                <p className="text-slate-500 mt-1">Order #{order.id} • Placed on {order.date}</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg shadow-slate-200/50">
                <div className="flex items-center justify-between px-4">
                   {statusTracker.map((status, index) => (
                       <React.Fragment key={status}>
                           <div className="flex flex-col items-center text-center">
                               <div className={`w-10 h-10 rounded-full flex items-center justify-center border-4 border-white shadow-md ${getStatusClass(order.status, status)}`}>
                                   <CheckCircle className="w-5 h-5 text-white"/>
                               </div>
                               <p className="mt-2 text-sm font-semibold text-slate-700">{status}</p>
                           </div>
                           {index < statusTracker.length - 1 && (
                               <div className={`flex-1 h-1.5 mx-2 ${getStatusClass(order.status, status)}`}></div>
                           )}
                       </React.Fragment>
                   ))}
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-lg shadow-slate-200/50">
                    <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2"><Package className="w-6 h-6 text-amber-600"/> Items in this order</h2>
                    <ul className="space-y-4">
                        {order.items.map(item => (
                            <li key={item.id} className="flex items-center gap-4 border-b border-slate-200 pb-4 last:border-b-0">
                                <Image src={item.image} alt={item.name} width={80} height={80} className="w-20 h-20 object-cover rounded-lg bg-slate-100 p-1" />
                                <div className="flex-grow">
                                    <p className="font-semibold text-slate-800">{item.name}</p>
                                    <p className="text-sm text-slate-500">SKU: {item.sku}</p>
                                    <p className="text-sm text-slate-500">Qty: {item.quantity}</p>
                                </div>
                                <p className="font-bold text-slate-800">₹{item.price.toLocaleString('en-IN')}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="space-y-8">
                    <div className="bg-white p-6 rounded-2xl shadow-lg shadow-slate-200/50">
                        <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2"><MapPin className="w-5 h-5 text-amber-600"/> Shipping Address</h3>
                        <address className="not-italic text-slate-600">{order.shippingAddress}</address>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-lg shadow-slate-200/50">
                        <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2"><CreditCard className="w-5 h-5 text-amber-600"/> Payment Summary</h3>
                        <div className="space-y-2">
                            <p className="flex justify-between text-slate-600"><span>Subtotal:</span> <span>₹{order.total.toLocaleString('en-IN')}</span></p>
                            <p className="flex justify-between text-slate-600"><span>Shipping:</span> <span>FREE</span></p>
                            <p className="flex justify-between font-bold text-slate-800 text-lg border-t border-slate-200 pt-2 mt-2"><span>Total:</span> <span>₹{order.total.toLocaleString('en-IN')}</span></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 flex items-center justify-center gap-2 bg-slate-900 text-white font-semibold py-3 px-6 rounded-lg hover:bg-slate-700">
                    <Truck className="w-5 h-5" /> Track Order
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 bg-white border-2 border-slate-300 text-slate-700 font-semibold py-3 px-6 rounded-lg hover:bg-slate-100">
                    <FileText className="w-5 h-5" /> Download Invoice
                </button>
            </div>
        </div>
    );
}