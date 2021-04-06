import Hero from "@components/hero";
import Network from "@components/network";
import News from "@components/news";
import Fade from "react-reveal/Fade";

export default function IndexPage() {
  return (
    <div className="flex flex-col items-center justify-center space-y-12">
      <Fade>
        <Hero />
      </Fade>
      <Network />
      <News />
    </div>
  );
}
