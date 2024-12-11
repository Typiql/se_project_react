import './App.css'
import Header from '../Header/Header'
import WeatherCard from '../WeatherCard/WeatherCard'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import { getWeather, filterWeatherData } from '../../utils/weatherApi'
import { useState, useEffect } from 'react'
import { coordinates, APIKEY } from '../../utils/constants'
import ModalWithForm from '../ModalWithForm/ModalWithForm'

function App() {
  const [weatherData, setWeatherData] = useState(
{
  type: "",
  temp: { F: 999, C: 999 },
  city: "",
}
  );

  useEffect(() => {
    getWeather(coordinates, APIKEY)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, [coordinates, APIKEY]);

  return (
    <>
      <div className='page'>
        <div className='page__content'></div>
        <Header weatherData={weatherData}></Header>
        <WeatherCard weatherData={weatherData}></WeatherCard>
        <Main weatherData={weatherData}></Main>
        <ModalWithForm titleText="New garment" buttonText="Add garment">
        <label className="modal__label">
              Name
              <input
                id="name-input"
                type="text"
                className="modal__input"
                placeholder="Name"
                required
              />
              <span
                id="name-input-error"
                className="modal__error_visible"
              ></span>
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
              <span
                id="image-input-error"
                className="modal__error_visible"
              ></span>
            </label>
            <fieldset className="modal__radio-buttons">
              <legend className="modal__legend">Select the weather type:</legend>
              <label className="modal__label modal__label_radio" htmlFor="hot">
                <input
                  id="hot"
                  className="modal__radio-input"
                  type="radio"
                  name="type"
                />
                <span>Hot</span>
              </label>
              <label className="modal__label modal__label_radio" htmlFor="warm">
                <input
                  id="warm"
                  className="modal__radio-input"
                  type="radio"
                  name="type" 
                />
                <span>Warm</span>
              </label>
              <label className="modal__label modal__label_radio" htmlFor="cold">
                <input
                  id="cold"
                  className="modal__radio-input"
                  type="radio"
                  name="type"
                />
                <span>Cold</span>
              </label>
            </fieldset>
        </ModalWithForm>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App