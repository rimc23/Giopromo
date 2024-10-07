import Header from "@/components/Header";
import Hero from "@/components/Hero";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Destacados from "@/components/Destacados";
import ImageGallery from "@/components/ImageGallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Destacados/>
      <ImageGallery/>
      <Footer/>
    </>
  )
}