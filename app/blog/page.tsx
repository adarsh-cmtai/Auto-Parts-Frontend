"use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { blogData, type Post } from '@/lib/blogData';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import TrustedBrandsSection from '@/components/TrustedBrandsSection';
import InstagramFeedSection from '@/components/InstagramFeedSection';

function BlogCard({ post }: { post: Post }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden group h-full flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
      <div className="overflow-hidden relative">
        <Link href={`/blog/${post.id}`} className="block">
          <Image
            src={post.image}
            alt={post.title}
            width={400}
            height={225}
            className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </Link>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-xs font-bold text-amber-700 bg-amber-100 px-3 py-1 rounded-full inline-block self-start mb-3">{post.category}</p>
        <h3 className="font-bold text-lg text-slate-800 flex-grow">
            <Link href={`/blog/${post.id}`} className="hover:text-amber-600 transition-colors">
                {post.title}
            </Link>
        </h3>
        <p className="text-sm text-slate-600 mt-2 line-clamp-2">{post.excerpt}</p>
        <div className="mt-auto pt-4">
            <div className="text-xs text-slate-500 mb-4">
                By {post.author} on {post.date}
            </div>
            <Link href={`/blog/${post.id}`}>
              <span className="inline-flex items-center gap-2 font-semibold text-sm text-amber-600">
                  Read More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default function BlogPage() {
  const router = useRouter();
  const featuredPost = blogData[0];
  const recentPosts = blogData.slice(1, 4);

  return (
    <main className="bg-slate-50">
      <div className="container mx-auto px-4 pt-8 sm:pt-8">
        
        <div className="mb-4">
            <button
                onClick={() => router.back()}
                className="flex items-center gap-2 text-slate-600 font-semibold hover:text-slate-900 transition-colors"
            >
                <ArrowLeft className="w-5 h-5" />
                <span>Back</span>
            </button>
        </div>
        
        <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                Our Blogs
            </h1>
            <p className="mt-5 text-lg text-slate-600 max-w-2xl mx-auto">
                Stay updated with the latest trends, guides, and stories from the automotive world.
            </p>
        </div>
        
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          <div className="lg:col-span-2">
            <Link href={`/blog/${featuredPost.id}`} className="block relative rounded-2xl overflow-hidden shadow-lg group">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  width={800}
                  height={450}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <span className="text-sm font-semibold bg-amber-600 px-3 py-1.5 rounded-full">{featuredPost.category}</span>
                  <h2 className="text-3xl font-bold mt-4">{featuredPost.title}</h2>
                  <p className="mt-2 text-slate-200 line-clamp-2">{featuredPost.excerpt}</p>
                </div>
            </Link>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-800 mb-2">Recent Posts</h3>
            {recentPosts.map(post => (
              <Link key={post.id} href={`/blog/${post.id}`} className="group block p-4 rounded-xl hover:bg-white hover:shadow-md transition-all">
                <div className="flex items-center space-x-4">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={100}
                    height={75}
                    className="w-24 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <h4 className="font-semibold text-slate-800 group-hover:text-amber-600">{post.title}</h4>
                    <p className="text-xs text-slate-500 mt-1">{post.date}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="pb-8 sm:pb-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">All Articles</h2>
            <p className="text-slate-600 mt-4 max-w-xl mx-auto">Browse our latest articles to find the best tips on replacement and performance auto parts.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogData.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
          <div className="text-center mt-16">
            <Link href="/blog/all">
              <span className="group inline-flex items-center gap-3 text-white font-semibold bg-slate-900 rounded-full px-8 py-4 hover:bg-slate-700 transition-all duration-300">
                  View All Posts
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </section>

        <WhyChooseUsSection />
        <TrustedBrandsSection />
        <InstagramFeedSection />
        
      </div>
    </main>
  );
}