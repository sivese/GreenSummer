import BodyLayout from "../layout/body-layout";
import PageLayout from "../layout/page-layout";
import { useEffect } from "react";
import { siteInfo } from "../config/site-info";
import homeIntro from "../config/home-contents";
import HoverTag from "../components/hover-tag";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

function Home() {
  useEffect(() => {
    document.title = `${siteInfo.siteTitle} -  Home`;
  }, []);

  return (
    <PageLayout>
      <BodyLayout>
        <div className="flex items-center gap-4 my-8">
          <img src="./favicon1.webp" alt="Logo" className="w-64 h-64 rounded-full" />
          <div className="pl-10">
            <h2 className="flex pl-8 text-4xl font-bold whitespace-nowrap text-blue-600">Doss Lee</h2>
            <p className="font-medium pt-7 text-xl text-gray-700">{homeIntro}</p>
            <div className="flex flex-wrap gap-3 pt-10">
              <HoverTag icon={<FaMapMarkerAlt/>} label="Vancouver, BC" />
              <HoverTag icon={<FaPhone/>} label="+1 587-322-8758" />
              <HoverTag icon={<FaGithub/>} label="github.com/sivese" />
              <HoverTag icon={<FaEnvelope/>} label="codeguru.sivese@gmail.com" />
              <HoverTag icon={<FaLinkedin/>} label="linkedin.com/in/codeguru-doss/"/>
            </div>
          </div>
        </div>
        <div className="flex">
          <h3 className="text-1xl font-semibold">My Skills</h3>
          <h2>What I Can Do!</h2>
        </div>
      </BodyLayout>
    </PageLayout>
  );
}

export default Home;