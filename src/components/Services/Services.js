import React from 'react'

import Icon1 from '../../images/one.svg'
import Icon2 from '../../images/music.svg'
import Icon3 from '../../images/blog.svg'

import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
}from './ServiceElements' 

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Services</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1}/>
                        <ServicesH2>Reduce Expenses</ServicesH2>
                        <ServicesP>we help help to reduce fees and increase your overall revenue</ServicesP>
                    </ServicesCard>

                    <ServicesCard>
                        <ServicesIcon src={Icon2}/>
                        <ServicesH2>Virtual Offices</ServicesH2>
                        <ServicesP>we help help to reduce fees and increase your overall revenue</ServicesP>
                    </ServicesCard>

                    <ServicesCard>
                        <ServicesIcon src={Icon3}/>
                        <ServicesH2>Premium Benefits</ServicesH2>
                        <ServicesP>we help help to reduce fees and increase your overall revenue</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
