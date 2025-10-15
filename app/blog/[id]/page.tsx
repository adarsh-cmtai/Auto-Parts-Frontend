'use client'
import React from 'react';
import { notFound } from 'next/navigation';
import { blogData } from '@/lib/blogData';
import BlogDetailClient from '@/components/BlogDetailClient';

export default function BlogDetailPage({ params }: { params: { id: string } }) {
  const post = blogData.find(p => p.id.toString() === params.id);
  
  if (!post) {
    notFound();
  }

  return <BlogDetailClient post={post} />;
}