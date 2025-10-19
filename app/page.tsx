'use client'
import Header from "@/src/components/Header";
import Hero from "@/src/components/Hero";
import About from "@/src/components/About";
import Services from "@/src/components/Services";
import Approach from "@/src/components/Approach";
import Footer from "@/src/components/Footer";

export default function Home() {
    return (
        <main>
            <Header />
            <Hero />
            <About />
            <Services />
            {/*<Approach />*/}
            <Footer />
        </main>
    )
}