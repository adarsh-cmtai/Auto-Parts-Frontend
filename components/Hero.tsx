"use client"
import React, { useCallback, useEffect, useState } from "react"
import Link from "next/link"
import useEmblaCarousel from 'embla-carousel-react'
import type { EmblaCarouselType } from 'embla-carousel'
import Autoplay from "embla-carousel-autoplay"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  ctaPrimary: string;
  ctaPrimaryLink: string;
  ctaSecondary: string;
  ctaSecondaryLink: string;
}

export default function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [
    Autoplay({ delay: 8000, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onInit = (api: EmblaCarouselType) => setScrollSnaps(api.scrollSnapList());
    const onSelect = (api: EmblaCarouselType) => setSelectedIndex(api.selectedScrollSnap());

    emblaApi.on("reInit", onInit);
    emblaApi.on("select", onSelect);
    onInit(emblaApi);
    onSelect(emblaApi);
    return () => {
      emblaApi.off("reInit", onInit);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const slides: Slide[] = [
    {
      image: "/images/home/image2.jpg",
      title: "Premium Collection",
      subtitle: "Find Your Perfect Part",
      description: "Explore our vast collection of high-quality parts that blend performance with unmatched style.",
      ctaPrimary: "Shop All Parts",
      ctaPrimaryLink: "/shop",
      ctaSecondary: "About Us",
      ctaSecondaryLink: "/about-us"
    },
    {
      image: "/images/home/image3.jpg",
      title: "Unleash True Power",
      subtitle: "Peak Performance",
      description: "Upgrade your ride with our cutting-edge performance parts, engineered for the enthusiast.",
      ctaPrimary: "Explore Performance",
      ctaPrimaryLink: "/shop/performance",
      ctaSecondary: "View Brakes",
      ctaSecondaryLink: "/shop/brakes"
    },
    {
      image: "/images/home/image1.jpg",
      title: "Crafted for an Impression",
      subtitle: "Unmatched Style",
      description: "Transform your vehicle's look with our elegant body kits and lighting solutions.",
      ctaPrimary: "Discover Styling",
      ctaPrimaryLink: "/shop/styling",
      ctaSecondary: "Contact Us",
      ctaSecondaryLink: "/contact-us"
    },
  ];

  return (
    <>
      <style jsx global>{`
        @keyframes kenburns-zoom {
            0% { transform: scale(1); }
            100% { transform: scale(1.1); }
        }
        .slide-content > * {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.6s 0.2s cubic-bezier(0.215, 0.610, 0.355, 1), transform 0.6s 0.2s cubic-bezier(0.215, 0.610, 0.355, 1);
        }
        .is-selected .slide-content > * {
          opacity: 1;
          transform: translateY(0);
        }
        .is-selected .slide-content > *:nth-child(2) { transition-delay: 0.3s; }
        .is-selected .slide-content > *:nth-child(3) { transition-delay: 0.4s; }
        .is-selected .slide-content > *:nth-child(4) { transition-delay: 0.5s; }
        .is-selected .ken-burns-image {
            animation: kenburns-zoom 10s ease-out forwards;
        }
      `}</style>
      <section id="home" className="relative h-screen w-full bg-slate-950">
        <div className="overflow-hidden h-full" ref={emblaRef}>
          <div className="flex h-full">
            {slides.map((slide, index) => (
              <div
                className={`relative flex-[0_0_100%] h-full ${index === selectedIndex ? 'is-selected' : ''}`}
                key={index}
              >
                <div className="h-full w-full lg:grid lg:grid-cols-2">
                  <div className="relative h-full flex flex-col justify-center bg-slate-950 border-r border-white/10 overflow-hidden">
                    <div className="absolute inset-0 z-0">
                      <img src={slide.image} alt="" className="h-full w-full object-cover opacity-10 filter blur-xl scale-125" />
                      <div className="absolute inset-0 bg-slate-950/80"></div>
                    </div>
                    
                    <div className="absolute inset-0 z-0 lg:hidden">
                       <img src={slide.image} alt="" className="h-full w-full object-cover" />
                       <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
                    </div>
                    
                    <div className="relative z-10 p-8 sm:p-12 lg:p-16">
                      <div className="slide-content max-w-lg text-left text-white space-y-5">
                        <h2 className="text-base font-semibold uppercase tracking-widest text-slate-400">
                          {slide.title}
                        </h2>
                        <h1 className="text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
                          {slide.subtitle}
                        </h1>
                        <p className="text-lg text-slate-300">
                          {slide.description}
                        </p>
                        <div className="pt-5 flex items-center gap-x-4">
                          <Link href={slide.ctaPrimaryLink} className="group inline-flex items-center justify-center gap-x-2.5 bg-slate-900 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:bg-slate-700 hover:shadow-xl hover:shadow-blue-500/30 rounded-md focus:outline-none focus:ring-4 focus:ring-blue-400/50">
                            {slide.ctaPrimary}
                            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                          </Link>
                          <Link href={slide.ctaSecondaryLink} className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white rounded-md transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50">
                            {slide.ctaSecondary}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative hidden lg:block overflow-hidden">
                    <img
                      src={slide.image}
                      alt={slide.subtitle}
                      className="ken-burns-image absolute inset-0 h-full w-full object-cover"
                    />
                     <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={scrollPrev}
          className="group absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={scrollNext}
          className="group absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        <div className="absolute bottom-8 left-8 sm:left-12 lg:left-16 z-20 flex gap-x-3">
          {scrollSnaps.map((_, index: number) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2 rounded-full transition-all duration-500 ease-out ${
                index === selectedIndex ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
    </>
  );
}