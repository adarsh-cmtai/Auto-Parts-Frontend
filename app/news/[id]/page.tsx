import React from 'react';
import { notFound } from 'next/navigation';
import { newsData, carsData, partsData, type NewsArticle } from '@/lib/newsData';
import NewsDetailClient from '@/components/NewsDetailClient';

export default function NewsDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const article = newsData.find((a: NewsArticle) => a.id.toString() === id);
  
  if (!article) {
    notFound();
  }

  const car = carsData.find(c => c.id === article.carId);
  const part = partsData.find(p => p.id === article.partId);
  const relatedNews = newsData.filter(a => a.id !== article.id && (a.carId === article.carId || a.partId === article.partId)).slice(0, 3);
  
  return <NewsDetailClient article={article} car={car} part={part} relatedNews={relatedNews} allCars={carsData} />;
}