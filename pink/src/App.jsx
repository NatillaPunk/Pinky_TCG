// import { useState } from 'react'
// import reactLogo from './assets/react.svg'

import Landing_page from './components/Landing_page'
import Carrousel_Product_Linear from './components/Products_Carrousel'
import Product_Information from './components/Product_Information'
import './css/App.css'



function App() {

  return (
    <>
      {/* <NavMenu /> */}
      <Landing_page />
      
      <section className="w-full h-screen flex flex-row items-center justify-center flex-wrap "> 
        <div className='w-11/12  flex flex-row flex-wrap justify-center align-middle'>
          <Carrousel_Product_Linear/>
        </div>       
      </section>

      <Product_Information/>




    </>
  )
}

export default App
