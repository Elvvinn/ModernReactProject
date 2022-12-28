import React from 'react'
import { Link } from 'react-router-dom'
import About from '../../Pages/About'
import Home from '../../Pages/Home'
import './index.css'
function Navbar() {

    const hamburgerclick = () => {

        const newlist = document.getElementById('newlistt')
        newlist.classList.toggle('addedclass')

    }


    return (

        <nav className='homenavbar'>
            <div className='homegeneraldiv'>
                <Link to="/"> <a href='' className='start'> Start Bootstrap </a> </Link>

                <div className='rightsidenavbar'>

                    <div className='hamburger' onClick={hamburgerclick}><i class="fa-solid fa-bars"></i></div>
                    <ul className='rightsidelist'>
                        <Link to="/"> <li> <a href='#'> Home </a> </li> </Link>
                        <Link to="/about"> <li> <a href='#'> About </a> </li> </Link>
                        <li> <a href='#'> Contact </a> </li>
                        <li> <a href='#'> Pricing </a> </li>
                        <li> <a href='#'> FAQ </a> </li>
                        <li> <a href='#'> Blog </a>
                            <i class="fa-solid fa-caret-down"></i>
                        </li>
                        <li> <a href='#'> Portfolio </a>
                            <i class="fa-solid fa-caret-down"></i>
                        </li>

                    </ul>

                </div>

            </div>

            <ul id='newlistt'>

                <li> <a href='#'> Home </a> </li>
                <li> <a href='#'> About </a> </li>
                <li> <a href='#'> Contact </a> </li>
                <li> <a href='#'> Pricing </a> </li>
                <li> <a href='#'> FAQ </a> </li>
                <li> <a href='#'> Blog </a> </li>

            </ul>

        </nav>


    )
}

export default Navbar