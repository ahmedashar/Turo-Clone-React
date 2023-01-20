import React from 'react'
import './giftcard.css'
const GiftCard = () => {
    return (
        <div className='container-fluid gift_container_main mt-5 pt-5'>
            <div className='container gift_cont mt-5'>
                <div className='row'>
                    <div className='col-md-6 text-center'>
                        <img className='gift_img img-fluid' src='https://resources.turo.com/f/81934/751x423/cb9c4231e8/lm-gift-card-2x.png' />
                    </div>
                    <div className='col-md-6 gift_detail'>
                        <h2 className='gift_heading'>Shop Turo gift cards</h2>
                        <p className='gift_para mt-3'>Introducing Turo gift cards! Give the gift of exploration or help make any special occasion extra-memorable.</p>
                        <button className='s2_btn gift_btn mt-5 px-5'>Shop gift cards</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GiftCard
