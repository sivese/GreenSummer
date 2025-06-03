import BodyLayout from "../layout/body-layout";
import PageLayout from "../layout/page-layout";
import { useEffect } from "react";
import { siteInfo } from "../config/site-info";
import homeIntro from "../config/home-contents";
import HoverTag from "../components/hover-tag";

import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { CPP, CSHARP, CSS, HTML, JAVA, JS, PYTHON, RUST, TS } from "../logos/language-logo";
import SkillBox from "../components/skill-box";

type Props = {
  children: React.ReactNode;
};

function Bullet( { children }: Props ) {
  return (
    <li className="flex items-center space-x-2">
      <span className="text-green-500 font-bold text-xl leading-none">+</span>
      <span className="font-medium text-gray-800 ">{ children }</span>
    </li>
  );
}

function TechnicalSkills() {
  return (
    <div className="pt-15 pl-[15%]">
      <h3 className="text-2xl mx-auto font-semibold pb-10">Technical Skills</h3>
      <div className="space-y-10">
      <SkillBox title="Programming Languages" skills={[
        { name: "C++", icon: CPP, level: 85 },
        { name: "C#", icon: CSHARP, level: 80 },
        { name: "Rust", icon: RUST, level: 75 },
        { name: "Java", icon: JAVA, level: 75 },
        { name: "Python", icon: PYTHON, level: 65 },
        { name: "JavaScript", icon: JS, level: 55 },
        { name: "TypeScript", icon: TS, level: 40 },
        { name: "CSS", icon: CSS, level: 40 },
        { name: "HTML", icon: HTML, level: 40 },
      ]} />
      <SkillBox title="Framework/Library" skills={[
        { name: "SDL", icon: CPP, level: 90 },
        { name: "QT", icon: CPP, level: 90 },
        { name: "Juce", icon: CPP, level: 90 },
        { name: "OpenGL", icon: CPP, level: 90 },
        { name: "WPF", icon: CSHARP, level: 80 },
        { name: "Axum", icon: CSHARP, level: 80 },
        { name: "Tokio", icon: CSHARP, level: 80 },
        { name: "PyTorch", icon: CSHARP, level: 80 },
        { name: "Node.JS", icon: CSHARP, level: 80 },
        { name: "Express", icon: CSHARP, level: 80 },
        { name: "Three.JS", icon: CSHARP, level: 80 },
        { name: "WebGL", icon: CSHARP, level: 80 },
        { name: "WGPU", icon: CSHARP, level: 80 },
        { name: "WASM", icon: CSHARP, level: 80 },
        { name: "React", icon: CSHARP, level: 80 },
        { name: "Tailwind", icon: CSHARP, level: 80 },
      ]} />
      <SkillBox title="DevOps/Cloud" skills={[
        { name: "C++", icon: CPP, level: 90 },
        { name: "C#", icon: CSHARP, level: 80 },
      ]} />
      <SkillBox title="IDE/Tools/OS" skills={[
        { name: "C++", icon: CPP, level: 90 },
        { name: "C#", icon: CSHARP, level: 80 },
      ]} />
      <SkillBox title="Game Engine" skills={[
        { name: "C++", icon: CPP, level: 90 },
        { name: "C#", icon: CSHARP, level: 80 },
      ]} />
      </div>
    </div>
  )
}

function WhatICanDo() {
  return (
    <div className="pt-15 pl-[15%]"> 
      <h3 className="text-2xl mx-auto font-semibold">What I Can Do</h3>
      <div className="grid grid-cols-2 gap-1 pt-5">
        <Bullet>Android Development</Bullet>
        <Bullet>Desktop App Development</Bullet>
        <Bullet>Game Development</Bullet>
        <Bullet>Raw TCP Socket</Bullet>
        <Bullet>Multi-Threading</Bullet>
        <Bullet>AWS Cloud Infrastructure</Bullet>
        <Bullet>Design RESTful API</Bullet>
        <Bullet>Web Front-End</Bullet>
        <Bullet>Open Source Custom</Bullet>
        <Bullet>Performance Optimization</Bullet>
      </div>
    </div>
  )
}

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
        <WhatICanDo />
        <TechnicalSkills />
      </BodyLayout>
    </PageLayout>
  );
}

export default Home;