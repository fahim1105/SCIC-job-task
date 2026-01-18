import AboutUs from "@/components/AboutUs";
import Categories from "@/components/Categories";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <main className="flex flex-col w-full bg-base-100 text-base-content">
      <Hero />
      <Categories />
      <AboutUs />
      <Features />
      <Stats />
      <Testimonials />
      <Newsletter />
    </main>
  );
}