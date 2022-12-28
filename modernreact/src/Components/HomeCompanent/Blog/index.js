import React from 'react'
import './index.css'
function Blog() {
    return (
        <section className='blogsection'>

            <div className='blogheader'>
                <h3>From our blog</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque fugit ratione dicta mollitia. Officiis ad.</p>
            </div>

            <div className='cardsblog'>

                <div className='cardhome'>
                    <img src='https://dummyimage.com/600x350/ced4da/6c757d'></img>
                    <div className='textincard'>
                        <p>News</p>
                        <h4>Blog post title</h4>
                        <h6>Some quick example text to build on the card title and make up the bulk of the card's content.</h6>
                    </div>
                </div>
                <div className='cardhome'>
                    <img src='https://dummyimage.com/600x350/ced4da/6c757d'></img>
                    <div className='textincard'>
                        <p>News</p>
                        <h4>Blog post title</h4>
                        <h6>Some quick example text to build on the card title and make up the bulk of the card's content.</h6>
                    </div>
                </div>
                <div className='cardhome'>
                    <img src='https://dummyimage.com/600x350/ced4da/6c757d'></img>
                    <div className='textincard'>
                        <p>News</p>
                        <h4>Blog post title</h4>
                        <h6>Some quick example text to build on the card title and make up the bulk of the card's content.</h6>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Blog