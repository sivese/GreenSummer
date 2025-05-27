import { menuConfig } from "../config/menu";
import { siteInfo } from "../config/site-info";
import { useLocation, Link } from "react-router-dom";
import BgmController from "./bgm-controller";

function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header className="stiky border-b-1 border-gray-200 mx-auto px-8 h-24 flex items-center">
      <img src="./favicon1.png" alt="Logo" className="ml-[20%] w-18 h-24" />
      <h1 className="text-3xl font-bold text-cyan-500">{siteInfo.siteTitle}</h1>
      <ul className="flex ml-[15%] gap-10">
        {menuConfig.map((item, idx) => (
          <li key={idx}>
            <Link to={item.path} className={`text-gray-800 hover:text-blue-500 ${currentPath === item.path ? "font-bold" : ""}`}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <BgmController className="pl-75"/>
    </header>
  );
}

export default Header;