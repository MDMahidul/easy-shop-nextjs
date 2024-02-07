import Image from "next/image";
import HeroSlider from "./HeroSlider";
import Categories from "./Categories";

export default function Home() {
  return (
    <main>
      <HeroSlider/>
      <Categories/>
    </main>
  );
}
