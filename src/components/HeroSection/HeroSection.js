import React,{useState} from 'react'
import {Button} from "../ButtonElements"
import {
HeroContainer,
HeroBg,
ImgBg,
HeroContent,
HeroH1,
HeroP,
HeroBtnWrapper,
ArrowForward,
ArrowRight
} from "./HeroSectionElements"
import Image from "../../images/cover.jpg"

function HeroSection() {
    const [hover,setHover] = useState(false)

    const onHover = ()=>{
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <ImgBg src={Image} type="images/jpg"/>
            </HeroBg>
            <HeroContent>
                <HeroH1>How Google Assistant now helps you record stories</HeroH1>
                <HeroP>Help today because tomorrow you may be the one who needs helping! Help today because tomorrow you</HeroP>
                <HeroBtnWrapper>
                    <Button to="about"
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary='true'
                        dark='true'>
                        Get Started {hover ? <ArrowForward/>:<ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
