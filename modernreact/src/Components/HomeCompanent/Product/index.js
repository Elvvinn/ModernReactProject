import React from 'react'
import './index.css'
function Product() {
    return (
        <section className='productsection'>

            <div className='bluesection'>
                <div className='leftsideproduct'>
                    <h5>New products, delivered to you.</h5>
                    <p>Sign up for our newsletter for the latest updates.</p>
                </div>
                <div className='rightsideproduct'>
                    <input placeholder='Email address...'>
                    </input>
                    <p>We care about privacy, and will never share your data.</p>
                </div>
            </div>


        </section>
    )
}

export default Product