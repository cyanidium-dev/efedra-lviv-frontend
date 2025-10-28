import Hero from "@/components/homePage/hero/Hero";
import About from "@/components/homePage/about/About";
import Blog from "@/components/homePage/blog/Blog";
import ChooseUs from "@/components/homePage/chooseUs/ChooseUs";
import Mission from "@/components/homePage/mission/Mission";
import Reviews from "@/components/homePage/reviews/Reviews";
import StartJourneyCTA from "@/components/shared/cta/StartJourneyCTA";
import MarqueeLine from "@/components/shared/marquee/MarqueeLine";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeLine />
      <About />
      <ChooseUs />
      <Mission />
      <Blog />
      <MarqueeLine className="hidden lg:block lg:text-[26px] lg:h-[65px]" />
      <Reviews />
      <StartJourneyCTA
        image="/images/homePage/cta/office.webp"
        className="py-15"
      />
    </>
  );
}
