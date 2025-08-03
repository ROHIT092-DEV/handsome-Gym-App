
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HeroBottom from "@/components/HeroBottom";
import InstrumementCount from "@/components/InstrumementCount";
import Plans from "@/components/plan";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";

export default function Home() {
   
  return (
    <>
   <Hero />
   <InstrumementCount />
   <Plans />
   <HeroBottom />
   <Footer />
    </>
  );
}
