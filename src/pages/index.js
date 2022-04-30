import React,{useState} from 'react'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import HeroSection from '../components/HeroSection/HeroSection'
import InfoSection from '../components/InfoSection/InfoSection'
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data'
import Services from '../components/Services/Services'
import Gallery from '../components/Gallery/Gallery'
import Footer from '../components/Footer/Footer'

function Home() {
    const [isOpen,SetIsOpen] = useState(false)

    const toggle = () =>{
        SetIsOpen(!isOpen)
    }

    return (
        <>
         <Sidebar isOpen={isOpen} toggle={toggle}/>
         <Navbar toggle={toggle}/>
         <HeroSection/>   
         <InfoSection {...homeObjOne}/>   
         <InfoSection {...homeObjTwo}/>
         <Services/>   
         <InfoSection {...homeObjThree}/>
         <Gallery/>
         <Footer/>   
        </>
    )
}

export default Home
