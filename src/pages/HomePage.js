import React from 'react'
import Portfolio from '../components/HomePage/Portfolio'
import Footer from '../components/UI/Footer'
import Navigation from '../components/UI/Navigation'
import Features from './../components/HomePage/Features'
import HeroSection from './../components/HomePage/HeroSection'

function HomePage() {
    return (
        <>
           <Navigation></Navigation>
           <HeroSection></HeroSection>
           <Features></Features>
           <Portfolio></Portfolio>
           <Footer></Footer>
        </>
    )
}

export default HomePage
