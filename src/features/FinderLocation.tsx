import { faArrowLeft, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { Input } from '@nextui-org/input'
import { Button } from '@nextui-org/button'
import useLocationData from '../hooks/useLocationData'
import ListLocationsFound from './ListLocationsFound'
import { ChangeEvent, useState } from 'react'
import { LocationFound, LocationFoundResponseApiItem } from '../types'
import getLocationsFound from '../services/getLocationsFound'

const ListRecentLocations = () => {
  const { locationData } = useLocationData()
  const { recentLocations } = locationData
  const areThereRecentLocations = recentLocations.length > 0

  return areThereRecentLocations
    ? <ListLocationsFound locations={recentLocations} />
    : <p className='text-sm text-my_blue-opaque'>Your recent searches will appear here.</p>
}

const FinderLocation = () => {
  const [locationsFound, setLocationsFound] = useState<LocationFound[]>([])
  const [locationForm, setLocationForm] = useState<string>('')

  const areThereLocationFound = locationsFound.length > 0

  const handleChangeLocationForm = (e: ChangeEvent<HTMLInputElement>) => {
    setLocationForm(e.target.value)
  }

  const handleSubmitForm = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    const resLocationsFound: LocationFoundResponseApiItem[] = await getLocationsFound({ locationKeyword: locationForm })
    const locationsFound: LocationFound[] = resLocationsFound.map(location => {
      const siglas = location.country
      const name = location.name
      const coords = {
        lat: location.lat,
        lon: location.lon
      }
      return { name, siglas, coords }
    })
    setLocationsFound(locationsFound)
  }

  return (
    <div className='w-full p-10 flex flex-col gap-5'>
      <Link className='w-min' to='/'><FontAwesomeIcon icon={faArrowLeft} /></Link>
      <form onSubmit={handleSubmitForm} className='flex flex-wrap items-center gap-2'>
        <Input
          isClearable
          startContent={<FontAwesomeIcon className='text-default-400' icon={faSearch} />}
          color='default'
          variant='flat'
          className='text-my_white-light flex-[1_0_200px]' placeholder='Search location'
          value={locationForm}
          onClear={() => { setLocationForm('') }}
          onChange={handleChangeLocationForm}
        />
        <Button type='submit' className='flex-[1_0_60px] text-my_white-light bg-my_blue-primary'>Search</Button>
      </form>
      <div>
        {
          areThereLocationFound
            ? <ListLocationsFound locations={locationsFound} />
            : <ListRecentLocations />
        }
      </div>
    </div>
  )
}
export default FinderLocation
