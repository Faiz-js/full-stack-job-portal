import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Qualification from "@/components/Qualification/Qualification";
import TopCompanies from "@/components/TopCompanies/TopCompanies";
import Trust from "@/components/Trust/Trust";

export default function LandingPageComponent() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Trust />
      <TopCompanies />
      <Qualification />
    </main>
  );
}
