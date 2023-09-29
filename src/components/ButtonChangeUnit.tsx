import { Button } from "@nextui-org/button"
import { Variants, motion } from "framer-motion"
import useUnitMeasure from "../hooks/useUnitMeasure"
import { UnitMeasure } from "../types.d"
import { FunctionComponent } from "react"

type Props = {
  unit: UnitMeasure,
}

const ButtonChangeUnit: FunctionComponent<Props> = ({ unit  }) => {
  const classNameDefault = 'min-w-[35px] h-[35px] flex items-center font-semibold'
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

  const { unitMeasure }=useUnitMeasure()
  const isActive = unitMeasure=== unit

  const { changeUnitMeasure } = useUnitMeasure()

  return (
    <motion.li variants={variants} initial='hidden' animate='visible' custom={0}>
      <Button 
      onClick={() => { changeUnitMeasure(unit) }} 
      size='sm' 
        radius='full'
        className={`${classNameDefault} ${isActive ? 'bg-my_white-light text-my_blue-dark' : 'bg-my_blue-opaque text-my_white-light'} `}>°{unit === UnitMeasure.celcius ? 'C' : 'F'}</Button>
      </motion.li>
  )
}
export default ButtonChangeUnit