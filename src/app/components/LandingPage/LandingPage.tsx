import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import Qualification from "../Qualification/Qualification";
import TopCompanies from "../TopCompanies/TopCompanies";
import Trust from "../Trust/Trust";

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
