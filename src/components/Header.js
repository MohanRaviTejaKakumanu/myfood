import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="head">
      <div className="logo-container">
        <img className="logo" alt="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Contact Us</li>
          <li>About Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;