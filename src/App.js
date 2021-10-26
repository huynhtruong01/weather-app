import { useState } from 'react'
import './App.scss'
import Header from './components/Header'
import Main from './components/Main'

function App() {
  const apiKey = 'e62bcb8e5e4cae63d75b37062e28f9dd'
  const [weather, setWeather] = useState({})
  const [loading, setLoading] = useState(false)
  const [hire, setHire] = useState(true)

  const handleApi = async (value) => {
    setLoading(true)
    setHire(false)
    try {
      const fetchApi = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=${apiKey}`
      )
        .then((res) => res.json())
        .then((data) => setWeather(data))
      setLoading(false)
      setHire(true)
    } catch (err) {
      console.log(err)
    }
  }

  console.log(weather)
  return (
    <div
      className={
        !weather.main ? 'app' : weather.main.temp > 16 ? 'app warn' : 'app'
      }
    >
      <Header onSubmit={handleApi} />
      {!weather.main ? (
        <div className="app-notification">
          Please enter the city you are looking for
        </div>
      ) : (
        <Main weathers={weather} loading={loading} hire={hire} />
      )}
    </div>
  )
}

export default App
