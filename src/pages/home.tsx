import BodyLayout from "../components/body-layout";
import { useEffect } from "react";
import { siteInfo } from "../config/site-info";
import homeIntro from "../config/home-contents";

function Home() {
  useEffect(() => {
    document.title = `${siteInfo.siteTitle} -  Home`;
  }, []);

  return (
    <BodyLayout>
      <div className="flex pl-[10%] items-center gap-4 my-8">
        <img src="./favicon1.webp" alt="Logo" className="w-32 h-32 rounded-full" />
        <h2 className="flex text-2xl font-bold whitespace-nowrap">ABOUT ME</h2>
      </div>
      <p className="font-medium">{homeIntro}</p>
      <div className="flex">
        <h3 className="text-1xl font-semibold">My Skills</h3>
        <h2>What I Can Do!</h2>
      </div>
    </BodyLayout>
  );
}

export default Home;