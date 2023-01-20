import React from 'react'
import './travel.css'
const Travelouges = () => {
    return (
        <div className='container-fluid travel_container_main mt-5 pt-5'>
            <div className='container'>
                <div className='travel_des text-center'>
                    <h1 className='T_des_heading' >Fuel your daydreams</h1>
                    <p style={{ fontSize: "18px" }} className='mt-4'>Stoke your wanderlust with some dreamy photo chronicles of road trip adventures.</p>
                    <button className='mt-4 s2_btn'>Explore Travelouges</button>
                </div>
                <div className='mt-5 travel_banner'>
                    <div className='row'>
                        <div className='col-md-4 travel_content p-4 py-5'>
                            <h6>FEATURED TRAVELOGUE</h6>
                            <h2 className='mt-3 travel_heading'>An Olympic experience in Washington</h2>
                            <p className='my-3 travel_para'>Discover the epic waterfalls, moody weather, and lush forests of coastal Washington.</p>
                            <span className='travel_span'>Read more</span>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Travelouges
