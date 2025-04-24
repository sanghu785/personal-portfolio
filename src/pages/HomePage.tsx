import Layout from "@/components/Layout";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Achievements from "@/components/sections/Achievements";
import BlogPreview from "@/components/sections/BlogPreview";
import SkillsSection from "@/components/sections/SkillsSection";
import Contact from "@/components/sections/Contact";

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Achievements />
      <SkillsSection />
      <Contact />
    </Layout>
  );
};

export default HomePage;
