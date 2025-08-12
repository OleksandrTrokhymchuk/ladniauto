import Image from "next/image";
import Hero from "./components/Hero";
import heroBackground from "../../public/images/hero-background-original.jpg";
import heroBackgroundMobile from "../../public/images/hero-backgorund-mobile.jpg";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import ChooseCar from "./components/ChooseCar/ChooseCar";

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
              objectPosition: "right",
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
      <section className="vsm:py-14 lg:py-24 bg-gray-200" id="whyus">
      <div className="custom-container text-project-blue px-4 sm:px-6 lg:px-8">

        <div className="bg-project-blue w-full rounded-3xl bg-opacity-90 shadow-2xl">
          <p
            className="text-center font-bold text-project-dark bg-project-white
                    vsm:text-xl msm:text-2xl md:text-3xl lg:text-4xl p-5 rounded-t-3xl "
          >
            Розкажіть про авто яке вам цікаве та оберіть свій подарунок! 🎁
          </p>

          <ChooseCar />
        </div>
        </div>
      </section>
      <section className="min-h-screen vsm:py-14 lg:py-24 bg-project-white" id="services">
        <Services />
      </section>
      <section className="vsm:py-14 lg:py-24 bg-gray-200" id="whyus">
        <WhyUs />
      </section>
    </>
  );
}
