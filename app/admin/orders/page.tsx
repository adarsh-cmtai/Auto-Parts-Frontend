"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { ShoppingCart, Search, ChevronDown, X, User, MapPin, Mail, Truck } from 'lucide-react';

// Sample Data (Ise aap backend se layenge)
const ordersData = [
  { 
    id: '#12345', 
    customer: { name: 'Rohan Sharma', email: 'rohan@example.com' }, 
    shippingAddress: '123, MG Road, Sector 14, Gurgaon, Haryana, 122001',
    date: '12 Nov 2023', 
    amount: 12500, 
    status: 'Shipped', 
    items: [
      { id: 1, name: 'Giulia Carbon Spoiler', sku: 'ALF-GCS-01', quantity: 1, price: 12500, image: '/images/home/category1.png' }
    ]
  },
  { 
    id: '#12344', 
    customer: { name: 'Priya Verma', email: 'priya@example.com' },
    shippingAddress: '45, Juhu Tara Road, Juhu, Mumbai, Maharashtra, 400049',
    date: '12 Nov 2023', 
    amount: 8200, 
    status: 'Processing',
    items: [
        { id: 2, name: 'Performance Brake Pads', sku: 'BRK-PBP-05', quantity: 2, price: 4100, image: '/images/home/category1.png' }
    ]
  },
  { 
    id: '#12343', 
    customer: { name: 'Ankit Patel', email: 'ankit@example.com' },
    shippingAddress: '789, 100 Feet Road, Indiranagar, Bengaluru, Karnataka, 560038',
    date: '11 Nov 2023', 
    amount: 25000, 
    status: 'Delivered',
    items: [
        { id: 3, name: 'X5 Luxury Floor Mats', sku: 'BMW-X5-FLM', quantity: 1, price: 25000, image: '/images/home/category1.png' }
    ]
  },
  { 
    id: '#12342', 
    customer: { name: 'Sneha Reddy', email: 'sneha@example.com' },
    shippingAddress: 'Plot No. 55, Road No. 3, Banjara Hills, Hyderabad, Telangana, 500034',
    date: '11 Nov 2023', 
    amount: 3500, 
    status: 'Cancelled',
    items: [
        { id: 4, name: 'OEM Air Filter', sku: 'GEN-AF-12', quantity: 1, price: 3500, image: '/images/home/category1.png' }
    ]
  },
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

const OrderDetailPanel = ({ order, onClose }: { order: any, onClose: () => void }) => {
    if (!order) return null;
    return (
        <div className="fixed top-0 right-0 h-full w-full md:w-1/2 lg:w-2/5 bg-white shadow-2xl z-50 transform transition-transform duration-500 ease-in-out" style={{ transform: 'translateX(0%)' }}>
            <div className="flex flex-col h-full">
                <header className="p-6 border-b border-slate-200 flex justify-between items-center">
                    <h2 className="text-xl font-bold text-slate-800">Order Details <span className="text-amber-600">{order.id}</span></h2>
                    <button onClick={onClose} className="p-2 rounded-full hover:bg-slate-100"><X className="w-6 h-6 text-slate-600"/></button>
                </header>
                
                <div className="flex-grow p-6 overflow-y-auto space-y-6">
                    <div className="border border-slate-200 rounded-lg p-4">
                        <h3 className="font-semibold text-slate-800 mb-3">Customer Information</h3>
                        <div className="space-y-2 text-slate-600">
                           <p className="flex items-center gap-2"><User className="w-4 h-4 text-slate-400"/> {order.customer.name}</p>
                           <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-slate-400"/> {order.customer.email}</p>
                           <p className="flex items-start gap-2"><MapPin className="w-4 h-4 text-slate-400 mt-1"/> {order.shippingAddress}</p>
                        </div>
                    </div>

                    <div className="border border-slate-200 rounded-lg p-4">
                        <h3 className="font-semibold text-slate-800 mb-3">Order Summary</h3>
                        <div className="space-y-2 text-slate-600">
                           <p className="flex justify-between"><span>Order Date:</span> <strong>{order.date}</strong></p>
                           <p className="flex justify-between items-center"><span>Status:</span> 
                                <select defaultValue={order.status} className={`text-xs font-bold p-1 rounded-md border-0 focus:ring-2 focus:ring-amber-500 ${getStatusClass(order.status)}`}>
                                    <option>Processing</option>
                                    <option>Shipped</option>
                                    <option>Delivered</option>
                                    <option>Cancelled</option>
                                </select>
                           </p>
                           <p className="flex justify-between text-lg font-bold text-slate-900 border-t border-slate-200 pt-2 mt-2"><span>Total:</span> <span>₹{order.amount.toLocaleString('en-IN')}</span></p>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold text-slate-800 mb-3">Items in Order ({order.items.length})</h3>
                        <ul className="space-y-3">
                            {order.items.map((item: any) => (
                                <li key={item.id} className="flex items-center gap-4 bg-slate-50 p-3 rounded-lg">
                                    <Image src={item.image} alt={item.name} width={64} height={64} className="w-16 h-16 object-cover rounded-md" />
                                    <div className="flex-grow">
                                        <p className="font-semibold text-slate-800">{item.name}</p>
                                        <p className="text-sm text-slate-500">SKU: {item.sku}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-slate-800">₹{item.price.toLocaleString('en-IN')}</p>
                                        <p className="text-sm text-slate-500">Qty: {item.quantity}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <footer className="p-6 border-t border-slate-200 bg-slate-50">
                    <button className="w-full bg-slate-900 text-white font-semibold py-3 rounded-lg hover:bg-slate-700 transition-colors">Save Changes</button>
                </footer>
            </div>
        </div>
    );
};

export default function OrdersPage() {
    const [selectedOrder, setSelectedOrder] = useState<any>(null);

    return (
        <div className="p-6 sm:p-10 relative">
            <header className="mb-8">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center">
                        <ShoppingCart className="w-7 h-7 text-white" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-extrabold text-slate-800">Order Management</h1>
                        <p className="text-slate-500 mt-1">View, track, and manage all customer orders.</p>
                    </div>
                </div>
            </header>

            <div className="bg-white p-6 rounded-2xl shadow-lg shadow-slate-200/50">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
                    <div className="relative w-full sm:max-w-xs">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input type="text" placeholder="Search by Order ID or Customer..." className="w-full bg-slate-100 border-slate-200 rounded-lg py-2.5 pl-10 pr-4 outline-none focus:ring-2 focus:ring-amber-500" />
                    </div>
                    <div className="relative sm:max-w-xs w-full">
                        <select className="w-full appearance-none bg-slate-100 border-slate-200 rounded-lg py-2.5 pl-4 pr-10 outline-none focus:ring-2 focus:ring-amber-500">
                            <option>Filter by status</option>
                            <option>Processing</option>
                            <option>Shipped</option>
                            <option>Delivered</option>
                            <option>Cancelled</option>
                        </select>
                         <ChevronDown className="w-5 h-5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="text-sm text-slate-500 font-semibold border-b border-slate-200">
                                <th className="p-4">Order ID</th>
                                <th className="p-4">Customer</th>
                                <th className="p-4">Date</th>
                                <th className="p-4">Amount</th>
                                <th className="p-4">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ordersData.map(order => (
                                <tr key={order.id} onClick={() => setSelectedOrder(order)} className="border-b border-slate-100 hover:bg-slate-50 cursor-pointer">
                                    <td className="p-4 font-bold text-slate-700">{order.id}</td>
                                    <td className="p-4 font-medium text-slate-800">{order.customer.name}</td>
                                    <td className="p-4 text-slate-600">{order.date}</td>
                                    <td className="p-4 font-bold text-slate-800">₹{order.amount.toLocaleString('en-IN')}</td>
                                    <td className="p-4">
                                        <span className={`px-3 py-1.5 rounded-full text-xs font-bold ${getStatusClass(order.status)}`}>
                                            {order.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {selectedOrder && <div className="fixed inset-0 bg-black/30 z-40" onClick={() => setSelectedOrder(null)}></div>}
            {selectedOrder && <OrderDetailPanel order={selectedOrder} onClose={() => setSelectedOrder(null)} />}
        </div>
    );
}