import Image from "next/image";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Our from "@/components/Our";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
    {/* <h1>Hello World</h1> */}
    <Hero/>
    <About/>
    <Our/>
    <Pricing/>
    <Contact/>
    <Footer/>  
    
    </>
  );
}
