import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import StatsBand from "@/components/StatsBand";
import Manifesto from "@/components/Manifesto";
import Solutions from "@/components/Solutions";
import Results from "@/components/Results";
import Founder from "@/components/Founder";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StatsBand />
        <Manifesto />
        <Solutions />
        <Results />
        <Founder />
      </main>
      <Footer />
    </>
  );
}
