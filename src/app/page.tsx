import Image from "next/image";
import Hero from "./components/Hero";
import heroBackground from "../../public/images/hero-background2.jpg";
import heroBackgroundMobile from "../../public/images/hero-backgorund-mobile.jpg";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen text-project-white vsm:pt-32 md:pt-64 pb-20">
        <div className="hidden md:block">
          <Image
            src={heroBackground}
            alt="Hero Background"
            priority
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
              objectPosition: "bottom right",
            }}
          />
        </div>
        <div className="md:hidden">
          <Image
            src={heroBackgroundMobile}
            alt="Hero Background"
            priority
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
              objectPosition: "bottom left",
            }}
          />
        </div>
        <div className="relative">
          <Hero />
        </div>
      </section>
      <section className="min-h-screen py-24 bg-project-white" id="services">
        <Services />
      </section>
      <section className="py-24 bg-gray-200" id="whyus">
        <WhyUs />
      </section>
    </>
  );
}
