import React from 'react'
import './index.css'
function Header() {
    return (

        <header className='homeheader'>
            <div className='generaldivheaderhome'>
                <div className='leftsideheaderhome'>

                    <h2 className='headerbootstrap'>A Bootstrap 5 template for modern businesses</h2>
                    <h4 className='headerparagraph'> Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit!</h4>

                    <button type='button' className='btnstarted'> Get Started</button>
                    <button type='button' className='btnlearn'> Learn More</button>
                </div>

                <div className='rightsideheaderhome'>

                    <img src='https://dummyimage.com/600x400/343a40/6c757d' alt=''></img>

                </div>
            </div>

        </header>

    )
}

export default Header