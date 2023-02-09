import Header from './Header'
import { Outlet } from 'rect-router-dom'

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      {/* <Footer/> */}
    </div>
  )
}

export default Layout
