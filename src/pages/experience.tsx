import BodyLayout from "../layout/body-layout";
import PageLayout from "../layout/page-layout";
import { useEffect } from "react";
import { siteInfo } from "../config/site-info";

function Experience() {
  useEffect(() => {
    document.title = `${siteInfo.siteTitle} -  Projects`;
  }, []);

  return (
    <PageLayout>
        <BodyLayout>
            <h1 className="font-medium">Experience Page</h1>
        </BodyLayout>
    </PageLayout>
  );
}

export default Experience;