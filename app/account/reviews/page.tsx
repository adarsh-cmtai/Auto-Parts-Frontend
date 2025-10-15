"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star, MessageSquare, Edit, X } from 'lucide-react';

const publishedReviewsData = [
  { id: 1, productName: 'M4 Competition Exhaust', productImage: '/images/home/category1.png', rating: 5, date: 'November 15, 2023', reviewText: "Absolutely phenomenal sound! My M4 now sounds like a proper beast. The build quality is top-notch. Highly recommended for any enthusiast." },
  { id: 2, productName: '20-Inch Forged Wheels', productImage: '/images/home/category1.png', rating: 4, date: 'October 20, 2023', reviewText: "These wheels completely transformed the look of my car. They are lightweight and look amazing. Lost one star because they were a bit tricky to balance." },
];

const productsToReviewData = [
  { id: 3, productName: 'Giulia Carbon Spoiler', productImage: '/images/home/category1.png', purchaseDate: 'December 01, 2023' },
  { id: 4, productName: 'Performance Brake Pads', productImage: '/images/home/category1.png', purchaseDate: 'November 28, 2023' },
];

const TabButton = ({ active, onClick, children }: { active: boolean, onClick: () => void, children: React.ReactNode }) => (
    <button
        onClick={onClick}
        className={`px-5 py-2.5 text-sm font-semibold rounded-lg transition-colors 
            ${active ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-200'}
        `}
    >
        {children}
    </button>
);

const ReviewModal = ({ isOpen, onClose, product }: { isOpen: boolean, onClose: () => void, product: any }) => {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg">
                <header className="p-6 border-b border-slate-200 flex justify-between items-center">
                    <h2 className="text-xl font-bold text-slate-800">Write a Review</h2>
                    <button onClick={onClose} className="p-2 rounded-full hover:bg-slate-100"><X className="w-6 h-6 text-slate-600"/></button>
                </header>
                <div className="p-6">
                    <div className="flex items-center gap-4 mb-6">
                        <Image src={product.productImage} alt={product.productName} width={80} height={80} className="w-20 h-20 rounded-lg bg-slate-100 object-contain p-1" />
                        <div>
                            <p className="text-slate-500">You are reviewing:</p>
                            <h3 className="font-bold text-slate-800 text-lg">{product.productName}</h3>
                        </div>
                    </div>
                    <form className="space-y-4">
                        <div>
                            <label className="text-sm font-semibold text-slate-600 mb-2 block">Your Rating</label>
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, index) => (
                                    <Star
                                        key={index}
                                        className={`w-8 h-8 cursor-pointer transition-colors ${ (hoverRating || rating) > index ? 'text-amber-400' : 'text-slate-300'}`}
                                        fill="currentColor"
                                        onMouseEnter={() => setHoverRating(index + 1)}
                                        onMouseLeave={() => setHoverRating(0)}
                                        onClick={() => setRating(index + 1)}
                                    />
                                ))}
                            </div>
                        </div>
                        <div>
                            <label htmlFor="reviewText" className="text-sm font-semibold text-slate-600 mb-1 block">Your Review</label>
                            <textarea id="reviewText" rows={5} placeholder="What did you like or dislike?" className="w-full bg-slate-100 rounded-lg p-3 outline-none focus:ring-2 focus:ring-amber-500"></textarea>
                        </div>
                        <footer className="pt-4 flex justify-end">
                            <button type="submit" className="bg-slate-900 text-white font-semibold py-2.5 px-6 rounded-lg hover:bg-slate-700">Submit Review</button>
                        </footer>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default function MyReviewsPage() {
    const [activeTab, setActiveTab] = useState('published');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [reviewingProduct, setReviewingProduct] = useState(null);

    const handleOpenModal = (product: any) => {
        setReviewingProduct(product);
        setIsModalOpen(true);
    };

    return (
        <div className="space-y-8">
            <ReviewModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} product={reviewingProduct} />
            <div>
                <h1 className="text-3xl font-bold text-slate-800">My Reviews</h1>
                <p className="text-slate-500 mt-1">View your past reviews and share your thoughts on recent purchases.</p>
            </div>

            <div className="flex items-center gap-2">
                <TabButton active={activeTab === 'published'} onClick={() => setActiveTab('published')}>Published Reviews ({publishedReviewsData.length})</TabButton>
                <TabButton active={activeTab === 'to_review'} onClick={() => setActiveTab('to_review')}>Products to Review ({productsToReviewData.length})</TabButton>
            </div>

            {activeTab === 'published' && (
                <div className="space-y-6">
                    {publishedReviewsData.length > 0 ? publishedReviewsData.map(review => (
                        <div key={review.id} className="bg-white p-6 rounded-2xl shadow-lg shadow-slate-200/50">
                            <div className="flex items-start gap-6">
                                <Image src={review.productImage} alt={review.productName} width={100} height={100} className="w-24 h-24 rounded-lg bg-slate-100 object-contain p-2 hidden sm:block"/>
                                <div className="flex-grow">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="font-bold text-lg text-slate-800">{review.productName}</h3>
                                            <div className="flex items-center mt-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className={`w-5 h-5 ${i < review.rating ? 'text-amber-400' : 'text-slate-300'}`} fill="currentColor"/>
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-sm text-slate-500">{review.date}</p>
                                    </div>
                                    <p className="text-slate-600 mt-4">{review.reviewText}</p>
                                </div>
                            </div>
                        </div>
                    )) : (
                        <div className="text-center py-16 bg-white rounded-2xl">
                            <h3 className="text-xl font-semibold text-slate-800">No Reviews Published Yet</h3>
                            <p className="text-slate-500 mt-2">Your feedback helps other customers. Review your purchases!</p>
                        </div>
                    )}
                </div>
            )}

            {activeTab === 'to_review' && (
                <div className="space-y-6">
                    {productsToReviewData.length > 0 ? productsToReviewData.map(product => (
                        <div key={product.id} className="bg-white p-6 rounded-2xl shadow-lg shadow-slate-200/50 flex items-center justify-between">
                            <div className="flex items-center gap-6">
                                <Image src={product.productImage} alt={product.productName} width={80} height={80} className="w-20 h-20 rounded-lg bg-slate-100 object-contain p-2"/>
                                <div>
                                    <h3 className="font-bold text-lg text-slate-800">{product.productName}</h3>
                                    <p className="text-sm text-slate-500">Purchased on {product.purchaseDate}</p>
                                </div>
                            </div>
                            <button onClick={() => handleOpenModal(product)} className="flex items-center justify-center gap-2 bg-slate-900 text-white font-semibold py-2.5 px-5 rounded-lg hover:bg-slate-700">
                                <Edit className="w-4 h-4" />
                                Write a Review
                            </button>
                        </div>
                    )) : (
                        <div className="text-center py-16 bg-white rounded-2xl">
                            <MessageSquare className="w-16 h-16 text-slate-300 mx-auto mb-4"/>
                            <h3 className="text-xl font-semibold text-slate-800">You're All Caught Up!</h3>
                            <p className="text-slate-500 mt-2">You have reviewed all your recent purchases. Thank you!</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}