"use client"
import React, { useState } from 'react';
import { MapPin, Plus, Edit, Trash2, Home, X } from 'lucide-react';

interface Address {
  id: number;
  name: string;
  street: string;
  cityStateZip: string;
  phone: string;
  isDefault: boolean;
}

const initialAddresses: Address[] = [
  { id: 1, name: 'Rohan Sharma', street: '123, MG Road, Sector 14', cityStateZip: 'Gurgaon, Haryana, 122001', phone: '+91 98765 43210', isDefault: true },
  { id: 2, name: 'Work Office', street: 'Cyber Hub, Building 5', cityStateZip: 'Gurgaon, Haryana, 122002', phone: '+91 98765 43211', isDefault: false },
];

const AddressModal = ({ isOpen, onClose, onSave, address }: { isOpen: boolean, onClose: () => void, onSave: (addressData: any) => void, address: Address | null }) => {
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const addressData = {
      id: address ? address.id : Date.now(),
      name: formData.get('name'),
      street: formData.get('street'),
      cityStateZip: formData.get('cityStateZip'),
      phone: formData.get('phone'),
      isDefault: address ? address.isDefault : false,
    };
    onSave(addressData);
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg">
        <header className="p-6 border-b border-slate-200 flex justify-between items-center">
          <h2 className="text-xl font-bold text-slate-800">{address ? 'Edit Address' : 'Add New Address'}</h2>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-slate-100"><X className="w-6 h-6 text-slate-600"/></button>
        </header>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
                <label htmlFor="name" className="text-sm font-semibold text-slate-600 mb-1 block">Full Name / Label</label>
                <input type="text" id="name" name="name" defaultValue={address?.name} required className="w-full bg-slate-100 rounded-lg p-3 outline-none focus:ring-2 focus:ring-amber-500" />
            </div>
            <div>
                <label htmlFor="street" className="text-sm font-semibold text-slate-600 mb-1 block">Street Address</label>
                <input type="text" id="street" name="street" defaultValue={address?.street} required className="w-full bg-slate-100 rounded-lg p-3 outline-none focus:ring-2 focus:ring-amber-500" />
            </div>
            <div>
                <label htmlFor="cityStateZip" className="text-sm font-semibold text-slate-600 mb-1 block">City, State, ZIP Code</label>
                <input type="text" id="cityStateZip" name="cityStateZip" defaultValue={address?.cityStateZip} required className="w-full bg-slate-100 rounded-lg p-3 outline-none focus:ring-2 focus:ring-amber-500" />
            </div>
             <div>
                <label htmlFor="phone" className="text-sm font-semibold text-slate-600 mb-1 block">Phone Number</label>
                <input type="tel" id="phone" name="phone" defaultValue={address?.phone} required className="w-full bg-slate-100 rounded-lg p-3 outline-none focus:ring-2 focus:ring-amber-500" />
            </div>
            <footer className="pt-4 flex justify-end gap-3">
                <button type="button" onClick={onClose} className="bg-slate-100 text-slate-700 font-semibold py-2.5 px-6 rounded-lg hover:bg-slate-200">Cancel</button>
                <button type="submit" className="bg-slate-900 text-white font-semibold py-2.5 px-6 rounded-lg hover:bg-slate-700">Save Address</button>
            </footer>
        </form>
      </div>
    </div>
  );
};

export default function SavedAddressesPage() {
    const [addresses, setAddresses] = useState<Address[]>(initialAddresses);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingAddress, setEditingAddress] = useState<Address | null>(null);

    const handleOpenModal = (address: Address | null = null) => {
        setEditingAddress(address);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingAddress(null);
    };

    const handleSaveAddress = (addressData: Address) => {
        if (editingAddress) {
            setAddresses(addresses.map(addr => addr.id === addressData.id ? addressData : addr));
        } else {
            setAddresses([...addresses, addressData]);
        }
        handleCloseModal();
    };
    
    const handleDelete = (id: number) => {
        if(window.confirm('Are you sure you want to delete this address?')) {
            setAddresses(addresses.filter(addr => addr.id !== id));
        }
    };

    const handleSetDefault = (id: number) => {
        setAddresses(addresses.map(addr => ({ ...addr, isDefault: addr.id === id })));
    };

    return (
        <div className="space-y-8">
            <AddressModal isOpen={isModalOpen} onClose={handleCloseModal} onSave={handleSaveAddress} address={editingAddress} />
            <div>
                <h1 className="text-3xl font-bold text-slate-800">Saved Addresses</h1>
                <p className="text-slate-500 mt-1">Manage your shipping addresses for a faster checkout experience.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {addresses.map(address => (
                    <div key={address.id} className={`bg-white p-6 rounded-2xl shadow-lg shadow-slate-200/50 flex flex-col border-2 ${address.isDefault ? 'border-amber-500' : 'border-transparent'}`}>
                        {address.isDefault && (
                            <div className="text-xs font-bold text-amber-700 bg-amber-100 px-3 py-1 rounded-full self-start mb-3 inline-flex items-center gap-1">
                                <Home className="w-3 h-3" /> Default
                            </div>
                        )}
                        <div className="flex-grow">
                            <h3 className="font-bold text-slate-800 text-lg">{address.name}</h3>
                            <address className="not-italic text-slate-600 mt-2">
                                {address.street}<br/>
                                {address.cityStateZip}<br/>
                                Phone: {address.phone}
                            </address>
                        </div>
                        <div className="flex gap-2 mt-6 pt-4 border-t border-slate-200">
                            <button onClick={() => handleOpenModal(address)} className="flex items-center gap-1 text-sm font-semibold text-slate-600 p-2 rounded-md hover:bg-slate-100"><Edit className="w-4 h-4"/> Edit</button>
                            <button onClick={() => handleDelete(address.id)} className="flex items-center gap-1 text-sm font-semibold text-red-600 p-2 rounded-md hover:bg-red-50"><Trash2 className="w-4 h-4"/> Delete</button>
                            {!address.isDefault && (
                                <button onClick={() => handleSetDefault(address.id)} className="ml-auto text-sm font-semibold text-amber-600 p-2 rounded-md hover:bg-amber-50">Set as Default</button>
                            )}
                        </div>
                    </div>
                ))}

                <button onClick={() => handleOpenModal(null)} className="flex flex-col items-center justify-center bg-white p-6 rounded-2xl border-2 border-dashed border-slate-300 text-slate-500 hover:border-amber-500 hover:text-amber-600 transition-colors">
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-3">
                       <Plus className="w-6 h-6"/>
                    </div>
                    <span className="font-semibold">Add New Address</span>
                </button>
            </div>
        </div>
    );
}