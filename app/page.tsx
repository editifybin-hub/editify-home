import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import StatsBand from "@/components/StatsBand";
import Ecosystem from "@/components/Ecosystem";
import Audiences from "@/components/Audiences";
import Timeline from "@/components/Timeline";
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
        <Ecosystem />
        <Audiences />
        <Timeline />
        <Results />
        <Founder />
      </main>
      <Footer />
    </>
  );
}
