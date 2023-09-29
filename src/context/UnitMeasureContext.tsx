import { ReactNode, createContext, useState } from "react"
import { UnitMeasure } from "../types.d"
import { getDataLocalStorage } from "../utils/localStorageActions"

type Context = {
  unitMeasure: UnitMeasure,
  changeUnitMeasure: (unit: UnitMeasure) => void
}

export const UnitMeasureContext = createContext<Context>({} as Context)

const unitMeasureInLocaStorage = getDataLocalStorage({
  nameItem: '__weatherapp_unitMeasure__',
  needToParse: false
}) as UnitMeasure

const defaultUnitMeasure: UnitMeasure = UnitMeasure.celcius

const UnitMeasureContextProvider = ({ children }: { children: ReactNode }) => {
  const [unitMeasure, setUnitMeasure] = useState<UnitMeasure>(unitMeasureInLocaStorage ?? defaultUnitMeasure)

  const changeUnitMeasure = (unit: UnitMeasure) => {
    setUnitMeasure(unit)
  }

  return (
    <UnitMeasureContext.Provider value={{
      unitMeasure,
      changeUnitMeasure
    }}>
      {children}
    </UnitMeasureContext.Provider>
  )
}

export default UnitMeasureContextProvider