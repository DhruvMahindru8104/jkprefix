import React from 'react'
import Products from '@/components/Gallery'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
function Catalogue() {
  return (
      <div className="bg-[#F6F5F0]">
    <div>
    <Navbar/>
    <div className='py-24'>
      <Products/>
    </div>
    <Footer/>
    </div>
      </div>
  )
}

export default Catalogue
