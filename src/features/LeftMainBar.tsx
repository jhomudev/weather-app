import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import CoverApp from './CoverApp'
import FinderLocation from './FinderLocation'

const LeftMainBar = () => {
  return (
    <section className='w-full h-screen md:w-[clamp(260px,30%,479px)]  bg-my_blue-smooth flex gap-5 flex-col items-center justify-between'>
      <BrowserRouter basename='/weather-app'>
        <Routes>
          <Route path='/' element={<CoverApp />} />
          <Route path='/search' element={<FinderLocation />} />
        </Routes>
      </BrowserRouter>
      <Outlet />
    </section>
  )
}
export default LeftMainBar
