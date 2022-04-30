import React,{useState,useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {animateScroll as scroll } from 'react-scroll'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks
} from './NavbarElements'

function Navbar({toggle}) {
    const [scrollNav,setScrollNav] = useState(false)

    const changeNav = () =>{
        if(window.scrollY >= 80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll',changeNav)
    },[])


    const toggleHome = () =>{
        scroll.scrollToTop();
    }
    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo scrollNav={scrollNav} to='/' onClick={toggleHome}>ngo</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks scrollNav={scrollNav} to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks scrollNav={scrollNav} to="services" smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks scrollNav={scrollNav} to="gallery" smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'>Gallery</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks scrollNav={scrollNav} to="contact" smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'>Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
