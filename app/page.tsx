import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import LearningRoadmap from "@/components/home/LearningRoadmap";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedCategories />
      <LearningRoadmap />
    </>
  );
}