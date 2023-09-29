import { AnimatePresence, motion } from "framer-motion"
import LocationFoundItem from "../components/LocationFoundItem"
import { LocationFound } from "../types"
import { FunctionComponent } from "react"

const ListLocationsFound: FunctionComponent<{ locations: LocationFound[] }> = ({ locations }) => {
  return (
    <motion.ul className='flex flex-col gap-2'>
      <AnimatePresence mode='popLayout'>
        {
          locations.map((location, i) => (
            <LocationFoundItem key={i} custom={i} location={location} />
          ))
        }
      </AnimatePresence>
    </motion.ul>
  )
}
export default ListLocationsFound