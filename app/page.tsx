import CategorySection from "@/components/home/CategorySection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import HeroSection from "@/components/home/HeroSection";
import TrustSection from "@/components/home/TrustSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <TrustSection />
      <FeaturedProducts />
    </>
  );
}
