import "./Header.css";
import logo from "../../assets/headerLogo.svg";
import avatar from "../../assets/ExampleAvatar.svg";

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="header logo"></img>
      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <button className="header__add-clothes-btn" onClick={handleAddClick}>
        + Add Clothes
      </button>
      <div className="header__user-container">
        <p className="header__username">Username</p>
        <img src={avatar} alt="img" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;
