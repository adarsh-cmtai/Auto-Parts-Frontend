"use client"
import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { carsData, partsData, newsData } from '@/lib/newsData';
import { ChevronDown, SearchX, ArrowRight } from 'lucide-react';

export default function NewsPage() {
  const [selectedBrand, setSelectedBrand] = useState<string>('');
  const [selectedModel, setSelectedModel] = useState<number | ''>('');
  const [selectedPart, setSelectedPart] = useState<number | ''>('');

  const availableModels = useMemo(() => {
    if (!selectedBrand) return [];
    return carsData.filter(car => car.brand === selectedBrand);
  }, [selectedBrand]);

  const filteredNews = useMemo(() => {
    let articles = newsData;
    if (selectedModel) {
      articles = articles.filter(article => article.carId === selectedModel);
    } else if (selectedBrand) {
      const modelIds = availableModels.map(m => m.id);
      articles = articles.filter(article => modelIds.includes(article.carId));
    }
    if (selectedPart) {
      articles = articles.filter(article => article.partId === selectedPart);
    }
    return articles;
  }, [selectedBrand, selectedModel, selectedPart, availableModels]);
  
  const resetFilters = () => {
    setSelectedBrand('');
    setSelectedModel('');
    setSelectedPart('');
  };

  return (
    <main className="bg-slate-50">
      <section className="relative h-72 w-full">
          <Image src="/images/home/slider1.png" alt="Auto Parts News" layout="fill" objectFit="cover" className="opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center text-center">
              <div className="text-white">
                  <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">News & Insights</h1>
                  <p className="mt-4 text-xl text-slate-200">Your source for the latest in auto parts and performance.</p>
              </div>
          </div>
      </section>

      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          <aside className="lg:col-span-1">
            <div className="bg-white p-6 border border-slate-200 rounded-2xl sticky top-28 shadow-lg shadow-slate-200/50">
              <h3 className="text-xl font-bold mb-6 text-slate-800">Filter Articles</h3>
              <div className="space-y-6">
                
                <div>
                  <label htmlFor="brand" className="block text-sm font-semibold text-slate-700 mb-2">Car Brand</label>
                  <div className="relative">
                    <select
                      id="brand"
                      value={selectedBrand}
                      onChange={(e) => { setSelectedBrand(e.target.value); setSelectedModel(''); }}
                      className="appearance-none mt-1 block w-full pl-4 pr-10 py-3 text-base bg-slate-100 border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 sm:text-sm rounded-lg"
                    >
                      <option value="">All Brands</option>
                      {[...new Set(carsData.map(car => car.brand))].map(brand => (
                        <option key={brand} value={brand}>{brand}</option>
                      ))}
                    </select>
                    <ChevronDown className="w-5 h-5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {selectedBrand && (
                  <div>
                    <label htmlFor="model" className="block text-sm font-semibold text-slate-700 mb-2">Car Model</label>
                    <div className="relative">
                      <select
                        id="model"
                        value={selectedModel}
                        onChange={(e) => setSelectedModel(Number(e.target.value))}
                        className="appearance-none mt-1 block w-full pl-4 pr-10 py-3 text-base bg-slate-100 border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 sm:text-sm rounded-lg"
                      >
                        <option value="">All Models</option>
                        {availableModels.map(model => (
                          <option key={model.id} value={model.id}>{model.model}</option>
                        ))}
                      </select>
                      <ChevronDown className="w-5 h-5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>
                )}
                
                <div>
                  <h4 className="text-sm font-semibold text-slate-700 mb-3">Part Category</h4>
                  <div className="flex flex-wrap gap-2">
                    {partsData.map(part => (
                      <button
                        key={part.id}
                        onClick={() => setSelectedPart(part.id === selectedPart ? '' : part.id)}
                        className={`py-2 px-4 rounded-full text-sm font-semibold transition-colors ${
                          selectedPart === part.id ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        {part.name}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={resetFilters}
                  className="w-full mt-4 py-3 px-4 border border-slate-300 rounded-lg shadow-sm text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 focus:outline-none"
                >
                  Reset All Filters
                </button>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-3">
            <div className="space-y-8">
              {filteredNews.length > 0 ? filteredNews.map(article => {
                const car = carsData.find(c => c.id === article.carId);
                const part = partsData.find(p => p.id === article.partId);
                return (
                  <article key={article.id} className="bg-white border border-slate-200 rounded-2xl overflow-hidden group flex flex-col md:flex-row transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                      <div className="md:w-1/3 overflow-hidden">
                        <Link href={`/news/${article.id}`}>
                          <Image src={article.image} alt={article.title} width={400} height={250} className="w-full h-56 md:h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                        </Link>
                      </div>
                      <div className="p-6 md:w-2/3 flex flex-col">
                        <div className="flex items-center gap-3 mb-3">
                            {car && <span className="text-xs font-bold text-amber-700 bg-amber-100 px-3 py-1 rounded-full">{car.brand} {car.model}</span>}
                            {part && <span className="text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full">{part.name}</span>}
                        </div>
                        <h2 className="text-xl font-bold text-slate-900">
                           <Link href={`/news/${article.id}`} className="hover:text-amber-600 transition-colors">{article.title}</Link>
                        </h2>
                        <p className="text-slate-600 mt-2 flex-grow line-clamp-2">{article.excerpt}</p>
                        <div className="mt-auto pt-4 flex items-center justify-between text-sm text-slate-500">
                          <span>{article.date}</span>
                           <Link href={`/news/${article.id}`} className="inline-flex items-center gap-1 font-semibold text-amber-600">Read More <ArrowRight className="w-4 h-4" /></Link>
                        </div>
                      </div>
                  </article>
                )
              }) : (
                <div className="text-center py-24 bg-white rounded-2xl border-2 border-dashed border-slate-300">
                  <SearchX className="w-16 h-16 text-slate-400 mx-auto mb-4"/>
                  <h3 className="text-xl font-semibold text-slate-800">No Articles Found</h3>
                  <p className="text-slate-500 mt-2">Try adjusting your filters or check back later for new content.</p>
                  <button onClick={resetFilters} className="mt-6 py-2 px-5 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-700">Reset Filters</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}