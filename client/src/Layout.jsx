import Header from './Header'
// import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='p-4 flex flex-col min-h-screen'>
      <Header />
      <Outlet />
      {/* <Footer/> */}
    </div>
  )
}

export default Layout
