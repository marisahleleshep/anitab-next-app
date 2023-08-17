import Image from 'next/image'
import Navbar from './Navbar/nav'
import Footer from './Footer'
import Products from './Products/page'


export default function Home() {
  return (
    <div>
      <Navbar/>
      <Products/>
      <Footer/>
     


    </div>
  )
}
