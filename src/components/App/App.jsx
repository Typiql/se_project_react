import { useState, useEffect } from "react";
import "./App.css";
import Header from "../Header/Header";
import WeatherCard from "../WeatherCard/WeatherCard";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import { coordinates, APIKEY } from "../../utils/constants";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [selectedWeather, setSelectedWeather] = useState("");

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const handleRadioChange = (event) => {
    setSelectedWeather(event.target.value);
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  useEffect(() => {
    getWeather(coordinates, APIKEY)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <div className="page">
        <div className="page__content">
          <Header weatherData={weatherData} handleAddClick={handleAddClick} />
          <WeatherCard weatherData={weatherData} />
          <Main weatherData={weatherData} handleCardClick={handleCardClick} />
          <ModalWithForm
            titleText="New garment"
            buttonText="Add garment"
            activeModal={activeModal}
            closeActiveModal={closeActiveModal}
          >
            <label className="modal__label">
              Name
              <input
                id="name-input"
                type="text"
                className="modal__input"
                placeholder="Name"
                required
              />
              <span id="name-input-error" className="modal__error_visible"></span>
            </label>
            <label className="modal__label">
              Image
              <input
                id="image-input"
                type="url"
                className="modal__input"
                placeholder="Image URL"
                required
              />
              <span id="image-input-error" className="modal__error_visible"></span>
            </label>
            <fieldset className="modal__radio-buttons">
              <legend className="modal__legend">
                Select the weather type:
              </legend>
              <label className="modal__label modal__label_radio" htmlFor="hot">
                <input
                  id="hot"
                  className="modal__radio-input"
                  type="radio"
                  name="weather"
                  value="hot"
                />
                <span className="modal__radio-span">Hot</span>
              </label>
              <label className="modal__label modal__label_radio" htmlFor="warm">
                <input
                  id="warm"
                  className="modal__radio-input"
                  type="radio"
                  name="weather"
                  value="warm"
                />
                <span className="modal__radio-span">Warm</span>
              </label>
              <label className="modal__label modal__label_radio" htmlFor="cold">
                <input
                  id="cold"
                  className="modal__radio-input"
                  type="radio"
                  name="weather"
                  value="cold"
                />
                <span className="modal__radio-span">Cold</span>
              </label>
            </fieldset>
          </ModalWithForm>
          <ItemModal
            activeModal={activeModal}
            card={selectedCard}
            closeActiveModal={closeActiveModal}
          />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
