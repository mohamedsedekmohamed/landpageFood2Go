
import './App.css'
import Allcontect from './pages/Home/Allcontect'
import Home from './pages/Home/Home'
import Plans from './pages/Pricing/Plans'
import Pricing from './pages/Pricing/Pricing'
import Aboutus from './pages/Home/Aboutus'
import MenuScan from './pages/Home/MenuScan'
import AdminApp from './pages/Home/AdminApp'
import AdminPanel from './pages/Home/AdminPanel'
import UserApp from './pages/Home/UserApp'
import DeliveryApp from './pages/Home/DeliveryApp'
import Websiteorderonline from './pages/Home/Websiteorderonline'
import Pos from './pages/Home/Pos'
import ViewMore from './pages/Home/ViewMore'
import Clients from './pages/Home/Clients'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Demos from './pages/Home/Demos'

function App() {
  return (
 <div className='max-w-screen overflow-hidden'>
 <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Plans" element={<Plans />} />
        <Route path='/ContactUs' element={<Allcontect/>}/>
        <Route path='/AboutUs' element={<Aboutus/>}/>
        <Route path='/MenuScan' element={<MenuScan/>}/>
        <Route path='/AdminApp' element={<AdminApp/>}/>
        <Route path='/AdminPanel' element={<AdminPanel/>}/>
        <Route path='/UserApp' element={<UserApp/>}/>
        <Route path='/DeliveryApp' element={<DeliveryApp/>}/>
        <Route path='/Websiteorderonline' element={<Websiteorderonline/>}/>
        <Route path='/Pos' element={<Pos/>}/>
        <Route path='/viewmore' element={<ViewMore/>}/>
        <Route path='/demos' element={<Demos/>}/>
        <Route path='/clients' element={<Clients/>}/>
      </Routes>
    </Router> </div>
  )
}

export default App
