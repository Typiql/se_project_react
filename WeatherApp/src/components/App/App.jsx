import './App.css'
import Header from '../Header/Header'
import WeatherCard from '../WeatherCard/WeatherCard'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import { useEffect, useState } from 'react'
import { getWeather } from '../../utils/weatherApi'
import { coordinates, APIKEY } from '../../utils/constants'

function App() {
return (
    <>
      <div className='page'>
      <div className='page__content'></div>
      <Header></Header>
      <WeatherCard></WeatherCard>
      <Main></Main>
      <Footer></Footer>
      </div>
    </>
  )
}

export default App
