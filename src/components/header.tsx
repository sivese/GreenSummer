import { menuConfig } from "../config/menu";
import { siteInfo } from "../config/site-info";
import { useLocation, Link } from "react-router-dom";

function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header className="max-w-6xl mx-auto px-8 h-24 flex items-center justify-between">
      <h1 className="text-3xl font-bold text-cyan-500">{siteInfo.siteTitle}</h1>
      <ul className="flex gap-10">
        {menuConfig.map((item, idx) => (
          <li key={idx}>
            <Link to={item.path} className={`text-gray-800 hover:text-blue-500 ${currentPath === item.path ? "font-bold" : ""}`}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;