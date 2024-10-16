import ScrollToTop from "./Components/ScrollToTop";
import About from "./sections/About";
import BestSellers from "./sections/BestSellers";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Products from "./sections/Products";
import Services from "./sections/Services";

export default function Home() {
  return (
    <main className="min-h-screen m-auto max-w-[2000px]">
      <Navbar active="main"/>
      <Hero/>
      <About/>
      <Products/>
      <Services/>
      <BestSellers/>
      <Contact/>
      <Footer/>
    </main>
  );
}
