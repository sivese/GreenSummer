import { Link } from "react-router-dom";
import { menuConfig } from "../config/menu";

function Header() {
  return (
    <header className="p-4 bg-gray-100 flex justify-center">
      <ul className="flex flex-row space-x-4">
        {menuConfig.map((item, idx) => (
          <li key={idx}>
            <Link to={item.path} className="text-gray-800 hover:text-blue-500">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;