import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { NextUIProvider } from '@nextui-org/system'
import WeatherContextProvider from './context/WeatherDataContext.tsx'
import UnitMeasureContextProvider from './context/UnitMeasureContext.tsx'
import LocationDataContextProvider from './context/LocationDataContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <UnitMeasureContextProvider>
    <LocationDataContextProvider>
      <WeatherContextProvider>
        <NextUIProvider>
          <App />
        </NextUIProvider>
      </WeatherContextProvider>
    </LocationDataContextProvider>
  </UnitMeasureContextProvider>
)
