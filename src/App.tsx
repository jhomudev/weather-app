import { useEffect } from 'react'
import LeftMainBar from './features/LeftMainBar'
import ListTopWeather from './features/ListTopWeather'
import TodayWeather from './features/TodayWeather'
import TopMagnitudeSelect from './features/TopMagnitudeSelect'
import useWeatherData from './hooks/useWeatherData'
import useLocationData from './hooks/useLocationData'
import useUnitMeasure from './hooks/useUnitMeasure'
import { setDataLocalStorage } from './utils/localStorageActions'

function App() {
  const { getWeatherDataAll } = useWeatherData()
  const { locationData } = useLocationData()
  const { unitMeasure } = useUnitMeasure()

  useEffect(() => {
    getWeatherDataAll()
    setDataLocalStorage({
      data: locationData,
      nameItem: '__weatherapp_locationData__',
      needToStringify: true
    })
    setDataLocalStorage({
      data: unitMeasure,
      nameItem: '__weatherapp_unitMeasure__',
      needToStringify: false
    })
  }, [locationData, unitMeasure])

  return (
    <div className='dark container-all h-full md:h-screen flex flex-col md:flex-row text-my_white-light font-raleway overflow-hidden'>
      <LeftMainBar />
      <main className='p-10 bg-my_blue-dark flex-1 flex flex-col gap-8 overflow-auto'>
        <TopMagnitudeSelect />
        <ListTopWeather />
        <TodayWeather />
      </main>
    </div>
  )
}

export default App
