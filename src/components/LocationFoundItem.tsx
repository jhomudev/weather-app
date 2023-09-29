import { faChevronRight, faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Variants, motion } from 'framer-motion'
import { FunctionComponent } from 'react'
import { LocationFound } from '../types'
import useLocationData from '../hooks/useLocationData'
import { useNavigate } from 'react-router-dom'

type Props = {
  custom: number,
  location: LocationFound
}
const LocationFoundItem: FunctionComponent<Props> = ({ custom, location }) => {
  const navigate = useNavigate()
  const { setCurrentLocation, addRecentLocation } = useLocationData()

  const variants: Variants = {
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        ease: 'easeOut'
      }
    }),
    hidden: {
      opacity: 0,
      x: -10
    }
  }

  const handleClickLocation = (location: LocationFound) => {
    setCurrentLocation(location.coords)
    addRecentLocation(location)
    navigate('/')
  }

  return (
    <motion.li
      onClick={() => { handleClickLocation(location) }}
      variants={variants}
      custom={custom}
      initial='hidden'
      animate='visible'
      className='w-full p-4 flex items-center gap-2 text-sm text-my_white-light hover:outline hover:outline-my_white-smoth hover:outline-[1px] cursor-pointer'
    >
      <FontAwesomeIcon className='text-lg mr-2' icon={faLocationArrow} />
      <p className='font-semibold'>{location.name}</p>
      <span className='uppercase italic ml-auto'>{location.siglas}</span>
      <FontAwesomeIcon className='text-xs' icon={faChevronRight} />
    </motion.li>
  )
}
export default LocationFoundItem
