import Image from "next/image"
import Hero from "./components/Hero"
import heroBackground from "../../public/images/bg1.png"

export default function Home() {
  return (
    <section className="relative min-h-screen text-project-white vsm:pt-32 md:pt-48 pb-20">
      <Image
        src={heroBackground}
        alt="Hero Background"
        priority
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
      <div className="relative z-10">
        <Hero/>
      </div>
    </section>
  )
}