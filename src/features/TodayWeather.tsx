import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Progress } from '@nextui-org/progress'
import CardTodayWeather from '../components/CardTodayWeather'
import { WeatherCurrentData } from '../types'
import ProgressChargeData from '../components/ProgressChargeData'
import useWeatherData from '../hooks/useWeatherData'

const Compose = ({ data }: { data: WeatherCurrentData }) => {
  return (
    <>
      <CardTodayWeather
        custom={0}
        headerContent='Wind Status'
        bodyContent={
          <>
            {data.wind.speed} <span className='text-lg self-center'>mph</span>
          </>
        }
        footerContent={
          <>
            <span className='rounded-full px-3 py-2 text-my_white-light bg-my_blue-opaque'>
              <FontAwesomeIcon icon={faPaperPlane} />
            </span>
            <span className='text-lg self-center'>wsw</span>
          </>
        }
      />
      <CardTodayWeather
        custom={1}
        headerContent='Humedity'
        bodyContent={
          <>
            {data.main.humidity} <span className='text-lg self-center'>%</span>
          </>
        }
        footerContent={
          <>
            <Progress
              label='Level humedity'
              size='sm'
              value={data.main.humidity}
              color='warning'
              showValueLabel
              className='max-w-md'
            />
          </>
        }
      />
      <CardTodayWeather
        custom={2}
        headerContent='Visibility'
        bodyContent={
          <>
            {data.visibility} <span className='text-lg self-center'>Km</span>
          </>
        }
      />
      <CardTodayWeather
        custom={3}
        headerContent='Air Pressuare'
        bodyContent={
          <>
            {data.main.pressure} <span className='text-lg self-center'>mb</span>
          </>
        }
      />
    </>
  )
}

const TodayWeather = () => {
  const { weatherData } = useWeatherData()
  const isDataAlready = Object.entries(weatherData.weatherCurrentData).length > 0

  return (
    <div className='flex-1 flex flex-col'>
      <h2 className='font-semibold mb-5'>TodayWeather</h2>
      <div className='flex flex-wrap gap-5 flex-1'>
        {
          isDataAlready ? <Compose data={weatherData.weatherCurrentData} /> : <ProgressChargeData />
        }
      </div>
    </div>
  )
}
export default TodayWeather
