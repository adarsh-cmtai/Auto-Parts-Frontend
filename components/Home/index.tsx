import Hero from "@/components/Hero"
import CarsSection from "@/components/CarsSection"
import BrandProductsSection from "@/components/BrandProductsSection"
import AboutUs from "@/components/AboutUs"
import NewsSection from "@/components/NewsSection"
import FeaturesBanner from "@/components/FeaturesBanner"

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Hero />
      <CarsSection />
      <BrandProductsSection />
      <AboutUs />
      <NewsSection />
      <FeaturesBanner />
    </div>
  )
}
