import Hero from "@/components/Hero/Hero";
import Footer from "@/components/Footer/footer";
import Price from "@/components/Price/Price";
import FreeDownload from "@/components/FreeDownload/FreeDownload";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <FreeDownload /> */}

      <Price />
      <Footer />
    </>
  );
}
