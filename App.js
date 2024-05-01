import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="head">
      <div className="logo-container">
        <img
          className="logo"
          alt="logo"
          src="https://t3.ftcdn.net/jpg/03/74/73/78/360_F_374737839_VsxlmnN7soqOOOFFzy5kfE9H6PFMCkPX.jpg"
        ></img>
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

const RestrauantCard = () => {
  return (
    <div className="card-details">
      <div className="card">
        <img
          className="card-img"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/34bdc0b9-123a-44a8-b07a-12055c8ba41f_84469.JPG"
        ></img>
        <h3>Ravi Teja Foods</h3>
        <h4>KFC, Wings, Biriyani</h4>
        <h4>4.2 Stars</h4>
        <h4>30 Minutes</h4>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurantcard-container">
        <RestrauantCard />
        <RestrauantCard />
        <RestrauantCard />
        <RestrauantCard />
        <RestrauantCard />
        <RestrauantCard />
        <RestrauantCard />
        <RestrauantCard />
        <RestrauantCard />
        <RestrauantCard />
        <RestrauantCard />
        <RestrauantCard />
        <RestrauantCard />
        <RestrauantCard />
      </div>
    </div>
  );
};

const Applayout = () => {
  return (
    <div>
      <Header></Header>
      <Body></Body>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
