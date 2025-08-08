import Image from "next/image"
import Hero from "./components/Hero"
import heroBackground from "../../public/images/hero-background2.jpg"
import Services from "./components/Services"

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen text-project-white vsm:pt-32 md:pt-64 pb-20">
        <Image
          src={heroBackground}
          alt="Hero Background"
          priority
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "bottom right"
          }}
        />
        <div className="relative z-10">
          <Hero/>
        </div>
      </section>
      <section className="min-h-screen py-28 bg-project-white" id="services">
          <Services/>
      </section>
    </>
  )
}