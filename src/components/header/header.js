import { NavLink } from "react-router-dom";
import "./header.css"

const Header = () => {
  return (
    <ul className="menu">
      <li>
        <NavLink to="/" className="menu__link">Home</NavLink>
      </li>
      <li>
        <NavLink to="/cart" className="menu__link">Cart</NavLink>
      </li>
    </ul>
  );
}

export default Header;