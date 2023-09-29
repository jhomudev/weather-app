import { Button } from '@nextui-org/button'
import { Tooltip } from '@nextui-org/tooltip'
import { faLocationCrosshairs, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { cloudsImg } from '../utils/media'
import getDateFormated from '../utils/getDateFormated'
import useUnitMeasure from '../hooks/useUnitMeasure'
import { iconWeatherUrl } from '../utils/contants'
import useWeatherData from '../hooks/useWeatherData'
import ProgressChargeData from '../components/ProgressChargeData'
import { WeatherCurrentData } from '../types'
import getMyLocation from '../utils/getMyLocation'
import useLocationData from '../hooks/useLocationData'

const Compose = ({ data }: { data: WeatherCurrentData }) => {
  const icon = iconWeatherUrl(data.weather[0].icon)
  const { letterUnit } = useUnitMeasure()
  const currentDate = getDateFormated({ date: Date() })
  const { setCurrentLocation } = useLocationData()

  const handleClickMyLocation = async () => {
    const myLocation = await getMyLocation()
    setCurrentLocation(myLocation)
  }

  return (
    <>
      <div className='w-full p-7 box-border flex items-center justify-between'>
        <Button as={Link} to='/search' size='sm' radius='sm' className='bg-my_blue-opaque text-my_white-light'>Search for places</Button>
        <Tooltip color='foreground' content='My location'>
          <Button onPress={handleClickMyLocation} size='sm' isIconOnly radius='full' className='bg-my_blue-opaque text-my_white-light text-lg'><FontAwesomeIcon icon={faLocationCrosshairs} /></Button>
        </Tooltip>
      </div>
      <div className='w-full relative grid place-items-center min-h-[200px]'>
        <img className='absolute left-0 top-0 w-full h-full opacity-5 object-fill' src={cloudsImg} alt='rain & sun' />
        <motion.img
          animate={{ opacity: 1, y: [-10, 10] }}
          transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 2
          }}
          src={icon}
          alt='icon'
          className='w-[min(100%,500px)]  h-full object-fill'
        />
      </div>
      <motion.p
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className='text-7xl'
      > {data.main.temp}<span className='text-2xl text-my_blue-opaque'>°{letterUnit}</span>
      </motion.p>
      <motion.span
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className='font-medium text-xl text-my_blue-opaque'
      >
        {data.weather[0].main}
      </motion.span>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: 'tween' }}
        className='text-sm text-my_blue-opaque grid gap-5 place-items-center p-7'
      >
        <p>Today . {currentDate}</p>
        <span><FontAwesomeIcon icon={faLocationDot} />&nbsp;&nbsp; {data.name} </span>
      </motion.div>
    </>
  )
}

const CoverApp = () => {
  const { weatherData } = useWeatherData()
  const isDataAlready = Object.entries(weatherData.weatherCurrentData).length > 0

  return isDataAlready ? <Compose data={weatherData.weatherCurrentData} /> : <ProgressChargeData />
}
export default CoverApp
