import React from 'react'
import {animateScroll as scroll} from "react-scroll"
import {FaFacebook,FaYoutube,FaLinkedin,FaInstagram,FaTwitter} from 'react-icons/fa'

import {
    FooterContainer,
    FooterLinksContainer,
    FooterWrap,
    FooterLink,
    FooterLinkItems,
    FooterLinksWrapper,
    FooterLinkTitle,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
} from "./FooterElements"

function Footer() {

    const toggleHome = () =>{
        scroll.scrollToTop();
    }

    return (
        <>
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                        <FooterLinkTitle>About</FooterLinkTitle>
                            <FooterLink to='about'>About</FooterLink>
                            <FooterLink to='services'>Services</FooterLink>
                            <FooterLink to='portfolio'>Portfolio</FooterLink>
                            <FooterLink to='contact'>Contacts</FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                        <FooterLinkTitle>Links</FooterLinkTitle>
                            <FooterLink to='about'>About</FooterLink>
                            <FooterLink to='services'>Services</FooterLink>
                            <FooterLink to='portfolio'>Portfolio</FooterLink>
                            <FooterLink to='contact'>Contacts</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper> 

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                        <FooterLinkTitle>About</FooterLinkTitle>
                            <FooterLink to='about'>About</FooterLink>
                            <FooterLink to='services'>Services</FooterLink>
                            <FooterLink to='portfolio'>Portfolio</FooterLink>
                            <FooterLink to='contact'>Contacts</FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to='about'>Twitter</FooterLink>
                            <FooterLink to='services'>Facebook</FooterLink>
                            <FooterLink to='portfolio'>Instagram</FooterLink>
                            <FooterLink to='contact'>LinkedIn</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>

                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>ngo</SocialLogo>
                        <WebsiteRights>ngo &copy; {new Date().getFullYear()} All rights reserved </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="www.facebook.com" target="_blank" aria-label="Facebook">
                                <FaFacebook/>
                            </SocialIconLink>

                            <SocialIconLink href="www.youtube.com" target="_blank" aria-label="Youtube">
                                <FaYoutube/>
                            </SocialIconLink>

                            <SocialIconLink href="www.instagram.com" target="_blank" aria-label="Instagram">
                                <FaInstagram/>
                            </SocialIconLink>

                            <SocialIconLink href="www.twitter.com" target="_blank" aria-label="Twitter">
                                <FaTwitter/>
                            </SocialIconLink>

                            <SocialIconLink href="www.linkedin.com" target="_blank" aria-label="LinkedIn">
                                <FaLinkedin/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>     
        </FooterContainer>   
        </>
    )
}

export default Footer
