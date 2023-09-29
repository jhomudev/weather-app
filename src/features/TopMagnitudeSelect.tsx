import { motion } from 'framer-motion'
import { UnitMeasure } from '../types.d'
import ButtonChangeUnit from '../components/ButtonChangeUnit'

const TopMagnitudeSelect = () => {
    return (
    <motion.ul className='self-end flex items-center gap-2'>
        <ButtonChangeUnit unit={ UnitMeasure.celcius }></ButtonChangeUnit>
        <ButtonChangeUnit unit={ UnitMeasure.fahrenheit }></ButtonChangeUnit>
    </motion.ul>
  )
}
export default TopMagnitudeSelect
