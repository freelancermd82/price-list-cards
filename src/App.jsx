import { } from 'react'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import PriceList from './components/PriceList/PriceList'
import Dashboard from './components/Dashboard/Dashboard'
import PhoneBar from './components/PhoneBar/PhoneBar'

function App() {
  

  return (
   <div className="App">
    <Navbar></Navbar>
    <PriceList></PriceList>
    <Dashboard></Dashboard>
    <PhoneBar></PhoneBar>
   </div>
  )
}

export default App
