import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink
} from './SidebarElements'


function Sidebar({isOpen,toggle}) {
    return (
        <>
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>    
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>About</SidebarLink>    
                    <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>    
                    <SidebarLink to="gallery" onClick={toggle}>Gallery</SidebarLink>    
                    <SidebarLink to="contact" onClick={toggle}>Contact</SidebarLink>    
                </SidebarMenu>      
            </SidebarWrapper>        
        </SidebarContainer>   
        </>
    )
}

export default Sidebar
