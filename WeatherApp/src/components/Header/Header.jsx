import './Header.css'
import logo from "../../assets/headerLogo.svg"

function Header() {
  return (
    <>
      <header className="header">
      <img className='header__logo' src={logo}></img>
      <p className="header__date-and-location">Date/Location</p>
      <button className="header__add-clothes-btn">+ Add Clothes</button>
      <div className="header__user-container">
        <p className="header__username"></p>
        <img src="" alt="" className="header__avatar" />
      </div>
      </header>
    </>
  );
}

export default Header;