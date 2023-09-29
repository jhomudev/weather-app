import { motion } from 'framer-motion'
import CardWeather from '../components/CardWeather'
import { WeatherForecastData } from '../types'
import useWeatherData from '../hooks/useWeatherData'
import ProgressChargeData from '../components/ProgressChargeData'

const Compose = ({ data }: { data: WeatherForecastData }) => {
  const { list } = data
  const onlyFiveList = list.filter((_, id) => id < 5)
  return (
    <motion.ul className='grid gap-5 grid-cols-[repeat(auto-fit,minmax(min(100%,140px),1fr))]'>
      {
        onlyFiveList.map((data, i) => (
          <CardWeather
            key={data.dt}
            custom={i + 1}
            date={data.dt_txt}
            temp={data.main.temp.toFixed(0)}
            otherTemp={data.main.feels_like.toFixed(0)}
            icon={data.weather[0].icon}
          />
        ))
      }
    </motion.ul>
  )
}

const ListTopWeather = () => {
  const { weatherData } = useWeatherData()
  const isDataAlready = Object.entries(weatherData.weatherForecastData).length > 0

  return isDataAlready ? <Compose data={weatherData.weatherForecastData} /> : <ProgressChargeData />
}
export default ListTopWeather
