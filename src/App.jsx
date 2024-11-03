import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import IMac from './components/iMac'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Banner />
      <IMac 
        title="Mac Mini" 
        subtitle="Size down Power Up."
        date="Available starting 11.8"
      />
      <IMac 
        title="iMac" 
        subtitle="Brilllliance"
        date="Available starting 11.8"
      />
    </>
  )
}

export default App
