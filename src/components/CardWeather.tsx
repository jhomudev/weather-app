import { FunctionComponent } from 'react'
import { Variants, motion } from 'framer-motion'
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card'
import { UnitMeasure } from '../types.d'
import { hailImg, heavyCloudImg, rainImg, rainSunImg, rainThunderImg, sunCloudImg, sunImg } from '../utils/media'
import useUnitMeasure from '../hooks/useUnitMeasure'
import { iconWeatherUrl } from '../utils/contants'
import getDateFormated from '../utils/getDateFormated'

export const WeatherStates = {
  clear: {
    value: 'clear',
    img: sunImg
  },
  hail: {
    value: 'hail',
    img: hailImg
  },
  cloudy: {
    value: 'cloady',
    img: heavyCloudImg
  },
  rain: {
    value: 'rain',
    img: rainImg
  },
  lightCloud: {
    value: 'lightCloud',
    img: sunCloudImg
  },
  cloudySun: {
    value: 'cloudySun',
    img: rainSunImg
  },
  rainThunder: {
    value: 'cloudySun',
    img: rainThunderImg
  }
}

type Props = {
  custom: number,
  date: string,
  icon: string,
  temp: string | number,
  otherTemp: string | number
}

const CardWeather: FunctionComponent<Props> = ({ custom, date, icon, temp, otherTemp }) => {
  const variants: Variants = {
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.2,
        type: 'spring',
        stiffness: 100
      }
    }),
    hidden: {
      opacity: 0,
      scale: 0.5
    }
  }

  const variantsImg: Variants = {
    visible: (i) => ({
      scale: [0.8, 1],
      transition: {
        repeat: Infinity,
        repeatType: 'reverse',
        duration: i * 0.9
      }
    })

  }

  let letterUnitMeasure
  const { unitMeasure } = useUnitMeasure()
  switch (unitMeasure) {
    case UnitMeasure.celcius:
      letterUnitMeasure = 'C'
      break;
    case UnitMeasure.fahrenheit:
      letterUnitMeasure = 'F'
      break;
    case UnitMeasure.kelvin:
      letterUnitMeasure = 'K'
      break;

  }

  const iconWeather = iconWeatherUrl(icon)

  return (
    <motion.li
      variants={variants}
      custom={custom}
      initial='hidden'
      animate='visible'
      className='w-full h-full'
    >
      <Card fullWidth radius='sm' className='h-full bg-my_blue-smooth text-my_white-light flex flex-col gap-3 p-3'>
        <CardHeader className='justify-center p-0'>{getDateFormated({ date })}</CardHeader>
        <CardBody className='grid place-items-center p-0'>
          <motion.img
            variants={variantsImg}
            custom={custom}
            animate='visible'
            className='w-[min(100%,100px)]'
            src={iconWeather}
            alt='weather'
          />
        </CardBody>
        <CardFooter className='flex justify-between items-center p-0'>
          <span>{temp}°C</span>
          <span className='text-my_blue-opaque'>{otherTemp}°{letterUnitMeasure}</span>
        </CardFooter>
      </Card>
    </motion.li>
  )
}
export default CardWeather
