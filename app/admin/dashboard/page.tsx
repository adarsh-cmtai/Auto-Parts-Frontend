// app/admin/dashboard/page.tsx
"use client"
import React from 'react';
import {
  MoreVertical, DollarSign, ArrowUpRight, ArrowDownRight,
  ShoppingCart, Users, ChevronDown
} from 'lucide-react';

const statsCards = [
  { title: "Today's Revenue", value: "₹4,05,300", change: "+12.5%", isUp: true, icon: DollarSign },
  { title: "Today's Orders", value: "1,280", change: "+8.2%", isUp: true, icon: ShoppingCart },
  { title: "New Customers", value: "85", change: "-2.1%", isUp: false, icon: Users },
];

const recentOrders = [
  { id: '#12345', customer: 'Rohan Sharma', date: '12 Nov 2023', amount: '₹12,500', status: 'Shipped' },
  { id: '#12344', customer: 'Priya Verma', date: '12 Nov 2023', amount: '₹8,200', status: 'Processing' },
  { id: '#12343', customer: 'Ankit Patel', date: '11 Nov 2023', amount: '₹25,000', status: 'Delivered' },
  { id: '#12342', customer: 'Sneha Reddy', date: '11 Nov 2023', amount: '₹3,500', status: 'Cancelled' },
  { id: '#12341', customer: 'Vikram Singh', date: '10 Nov 2023', amount: '₹18,900', status: 'Delivered' },
];

const topProducts = [
  { name: 'M4 Competition Exhaust', sold: 120, revenue: '₹1,50,000' },
  { name: 'Giulia Carbon Spoiler', sold: 95, revenue: '₹95,000' },
  { name: '20-Inch Forged Wheels', sold: 80, revenue: '₹2,80,000' },
];

const getStatusClass = (status: string) => {
    switch (status) {
        case 'Shipped': return 'bg-blue-200 text-blue-800';
        case 'Processing': return 'bg-yellow-200 text-yellow-800';
        case 'Delivered': return 'bg-green-200 text-green-800';
        case 'Cancelled': return 'bg-red-200 text-red-800';
        default: return 'bg-slate-200 text-slate-800';
    }
};

export default function DashboardPage() {
  return (
    <div className="p-6 sm:p-10">
      <header className="mb-10">
          <h1 className="text-4xl font-extrabold text-slate-800">Admin Dashboard</h1>
          <p className="text-slate-500 mt-2">Welcome back! Here's a quick overview of your store today.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {statsCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg shadow-slate-200/50">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-slate-500 font-medium">{card.title}</p>
                  <p className="text-3xl font-bold text-slate-900 mt-1">{card.value}</p>
                </div>
                <div className={`p-2 rounded-full ${card.isUp ? 'bg-green-100' : 'bg-red-100'}`}>
                  <Icon className={`w-6 h-6 ${card.isUp ? 'text-green-600' : 'text-red-600'}`} />
                </div>
              </div>
              <div className={`flex items-center mt-4 text-sm ${card.isUp ? 'text-green-600' : 'text-red-600'}`}>
                {card.isUp ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                <span>{card.change} vs yesterday</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-lg shadow-slate-200/50">
          <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-slate-800">Sales Analytics</h3>
              <button className="flex items-center gap-2 text-sm text-slate-600 font-semibold border rounded-lg px-3 py-1.5 hover:bg-slate-50">
                  Last 30 Days <ChevronDown className="w-4 h-4"/>
              </button>
          </div>
          <div className="h-80 bg-slate-100 rounded-lg flex items-center justify-center">
            <p className="text-slate-400">Chart will be displayed here</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg shadow-slate-200/50">
          <h3 className="text-xl font-bold text-slate-800 mb-4">Top Selling Products</h3>
          <ul className="space-y-4">
            {topProducts.map((product, index) => (
              <li key={index} className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-slate-700">{product.name}</p>
                  <p className="text-sm text-slate-500">{product.sold} units sold</p>
                </div>
                <p className="font-bold text-slate-800">{product.revenue}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-lg shadow-slate-200/50 mt-10">
        <h3 className="text-xl font-bold text-slate-800 mb-4">Recent Orders</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-sm text-slate-500 font-semibold border-b border-slate-200">
                <th className="p-4">Order ID</th>
                <th className="p-4">Customer</th>
                <th className="p-4">Date</th>
                <th className="p-4">Amount</th>
                <th className="p-4">Status</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map(order => (
                <tr key={order.id} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="p-4 font-semibold text-slate-700">{order.id}</td>
                  <td className="p-4">{order.customer}</td>
                  <td className="p-4 text-slate-600">{order.date}</td>
                  <td className="p-4 font-bold text-slate-800">{order.amount}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusClass(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="p-4">
                      <button><MoreVertical className="w-5 h-5 text-slate-500" /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}