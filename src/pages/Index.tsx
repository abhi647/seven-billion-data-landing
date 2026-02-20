import Hero from "@/components/Hero";
import CaseStudies from "@/components/CaseStudies";
import WhyUs from "@/components/WhyUs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <CaseStudies />
      <WhyUs />
      <Footer />
    </div>
  );
};

export default Index;
