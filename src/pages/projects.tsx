import PageLayout from "../layout/page-layout";
import { useEffect } from "react";
import { siteInfo } from "../config/site-info";
import GalleryLayout from "../layout/gallery-layout";
import { Route, Routes } from "react-router-dom";
import GreenSummer from "../projects/green-summer";

function ProjectRoutes() {
  return (
    <Routes>
      <Route path="green-summer" element={<GreenSummer />} />
    </Routes>
  );
}

function Projects() {
  useEffect(() => {
    document.title = `${siteInfo.siteTitle} -  Projects`;
  }, []);

  return (
    <PageLayout>
      <GalleryLayout>
        <img src="/preview/green-summer.jpeg" alt="Green Summer" className="w-full h-48 object-cover mb-4" />
      </GalleryLayout>
    </PageLayout>
  );
}

export { ProjectRoutes };
export default Projects;