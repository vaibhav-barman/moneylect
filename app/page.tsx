import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import LearningRoadmap from "@/components/home/LearningRoadmap";
import WhyMoneylect from "@/components/home/WhyMoneylect";
import Footer from "@/components/layout/Footer";
import TrustSection from "@/components/home/TrustSection";
import Marquee from "@/components/home/Marquee";
import ChooseGoal from "@/components/home/ChooseGoal";
import Newsletter from "@/components/home/Newsletter";
import FeaturedArticles from "@/components/home/FeaturedArticles";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustSection />
      <Marquee />
      <ChooseGoal />
      <FeaturedArticles />
      <LearningRoadmap />
      <WhyMoneylect />
      <Newsletter />
      <Footer />
    </>
  );
}