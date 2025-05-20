import BodyLayout from "../components/body-layout";
import { useEffect } from "react";
import { siteInfo } from "../config/site-info";

function Home() {
  useEffect(() => {
    document.title = `${siteInfo.siteTitle} -  Home`;
  }, []);

  return (
    <BodyLayout>
      <div className="flex items-center gap-4 my-8">
        <div className="flex-grow border-t border-gray-300" />
        <h2 className="text-2xl font-semibold whitespace-nowrap">About Me</h2>
        <div className="flex-grow border-t border-gray-300" />
      </div>
      <p>This is the home page of our application.</p>
    </BodyLayout>
  );
}

export default Home;