import { useContext } from "react"
import { UnitMeasureContext } from "../context/UnitMeasureContext"
import { UnitMeasure } from "../types.d";

const useUnitMeasure = () => {
  const { unitMeasure, changeUnitMeasure } = useContext(UnitMeasureContext)
  let letterUnit
  switch (unitMeasure) {
    case UnitMeasure.celcius:
      letterUnit = 'C'
      break;
    case UnitMeasure.fahrenheit:
      letterUnit = 'F'
      break;
    case UnitMeasure.kelvin:
      letterUnit = 'K'
      break;
  }
  return { letterUnit, unitMeasure, changeUnitMeasure }
}

export default useUnitMeasure