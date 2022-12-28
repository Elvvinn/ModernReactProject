import React from 'react'
import FoundCard from '../../Components/AboutComponent/FoundingCard'
import GrowthCard from '../../Components/AboutComponent/GrowthCard'
import Header from '../../Components/AboutComponent/Header'
import Team from '../../Components/AboutComponent/Team'
import Footer from '../../Components/Footer'
import Navbar from '../../Components/Navbar'

function About() {
    return (
        <>
            <Navbar></Navbar>
            <Header></Header>
            <FoundCard></FoundCard>
            <GrowthCard></GrowthCard>
            <Team></Team>
            <Footer></Footer>
        </>
    )
}

export default About