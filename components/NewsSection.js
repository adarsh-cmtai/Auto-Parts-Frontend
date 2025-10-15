"use client"
import React, { useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'

const newsData = [
    {
        id: 1,
        category: 'Sound Systems',
        image: '/images/home/news1.jpg',
        author: 'Admin',
        date: 'November 22, 2023',
        title: 'The Ultimate Guide to Choosing the Right Brake Pads',
        link: '/blog/1',
    },
    {
        id: 2,
        category: 'Accessories',
        image: '/images/home/news2.jpg',
        author: 'Admin',
        date: 'November 22, 2023',
        title: "5 Easy Ways to Boost Your Car's Engine Performance",
        link: '/blog/2',
    },
    {
        id: 3,
        category: 'Exterior Mods',
        image: '/images/home/news3.jpg',
        author: 'Admin',
        date: 'November 22, 2023',
        title: "5 Easy Ways to Boost Your Car's Engine Performance",
        link: '/blog/3',
    },
    {
        id: 4,
        category: 'Interior Tech',
        image: '/images/home/news1.jpg',
        author: 'Admin',
        date: 'November 21, 2023',
        title: "5 Easy Ways to Boost Your Car's Engine Performance",
        link: '/blog/4',
    },
    {
        id: 5,
        category: 'Performance',
        image: '/images/home/news2.jpg',
        author: 'Admin',
        date: 'November 20, 2023',
        title: 'Audi RS e-tron GT: A glimpse into the future of electric speed',
        link: '/blog/5',
    },
];

export default function NewsSection() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'start',
    });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <section id="news" className="bg-slate-50 py-8 sm:py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">
                        Latest from Our <span className="text-teal-600">Blog</span>
                    </h2>
                    <p className="mt-5 text-lg text-slate-600 max-w-2xl mx-auto">
                        Stay updated with the newest trends, technologies, and stories from the automotive world.
                    </p>
                </div>

                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex -ml-5">
                        {newsData.map((article) => (
                            <div
                                key={article.id}
                                className="relative flex-shrink-0 flex-grow-0 basis-full sm:basis-1/2 lg:basis-1/3 pl-5"
                            >
                                <div className="bg-white rounded-2xl shadow-lg shadow-slate-200/50 overflow-hidden h-full flex flex-col group transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                                    <div className="relative overflow-hidden">
                                        <Link href={article.link}>
                                            <Image
                                                src={article.image}
                                                alt={article.title}
                                                width={400}
                                                height={250}
                                                className="w-full h-56 object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                                            />
                                        </Link>
                                        <span className="absolute top-4 left-4 bg-teal-100 text-teal-800 text-xs font-bold px-3 py-1.5 rounded-full">
                                            {article.category}
                                        </span>
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="text-sm text-slate-500 mb-3">
                                            <span>By {article.author}</span>
                                            <span className="mx-2">·</span>
                                            <span>{article.date}</span>
                                        </div>
                                        <h3 className="font-bold text-xl text-slate-800 leading-tight flex-grow">
                                            <Link href={article.link}>
                                                <span className="hover:text-teal-600 transition-colors duration-200">
                                                    {article.title}
                                                </span>
                                            </Link>
                                        </h3>
                                        <div className="mt-auto pt-4">
                                            <Link href={article.link}>
                                                <span className="inline-flex items-center gap-2 font-semibold text-teal-600">
                                                    Read More <ArrowRight className="w-4 h-4" />
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-16">
                     <div className="flex space-x-4">
                        <button onClick={scrollPrev} className="p-3 rounded-full bg-white shadow-md text-slate-600 hover:bg-slate-800 hover:text-white transition-colors" aria-label="Previous slide">
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button onClick={scrollNext} className="p-3 rounded-full bg-white shadow-md text-slate-600 hover:bg-slate-800 hover:text-white transition-colors" aria-label="Next slide">
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                    <Link href="/blog">
                        <span className="group inline-flex items-center gap-3 text-white font-semibold bg-slate-900 rounded-full px-8 py-4 hover:bg-slate-700 transition-all duration-300">
                            View All Blogs
                            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}