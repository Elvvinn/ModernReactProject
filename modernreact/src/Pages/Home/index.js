import React from 'react'
import Footer from '../../Components/Footer'
import Better from '../../Components/HomeCompanent/Better'
import Blog from '../../Components/HomeCompanent/Blog'
import Ceo from '../../Components/HomeCompanent/Ceo'
import Header from '../../Components/HomeCompanent/Header'
import Product from '../../Components/HomeCompanent/Product'
import Navbar from '../../Components/Navbar'

function Home() {
    return (
        <>


            <Navbar></Navbar>
            <Header></Header>
            <Better></Better>
            <Ceo></Ceo>
            <Blog></Blog>
            <Product></Product>


            <Footer></Footer>


        </>
    )
}

export default Home