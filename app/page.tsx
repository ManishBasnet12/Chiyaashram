import Experiance from "@/component/experianceSection";
import Feature from "@/component/featureSection";
import Gallery from "@/component/gallerySection";
import Hero from "@/component/hero";
import Popular from "@/component/popularSection";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <Hero />
      <Experiance />
      <Feature />
      <Popular />
      <Gallery />
      {/* <Footer /> */}
    </>
  );
}
