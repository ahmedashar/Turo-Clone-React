import React from 'react'
import './services.css'
import bookCarImg from '../../assets/img/book-car.png'
import hostCarImg from '../../assets/img/host-car.png'
const Services = () => {
    return (
        <div className='container-fluid service_container_main mt-5 pt-5'>
            <div className='container service_cont mt-5'>
                <div className='row book_serv'>
                    <div className='col-md-6 book_detail'>
                        <h3 className='book_heading'>Book a car	&#62;</h3>
                        <p className='book_des'>Down the street or across <br />the country, find the perfect vehicle <br />for your next adventure.</p>
                    </div>
                    <div className='col-md-6 text-center'>
                        <img className='book-carImg' src={hostCarImg} />
                    </div>
                </div>
                <div className='row host_serv'>
                    <div className='col-md-6 text-center'>
                        <img className='book-carImg img-fluid text-center' src={bookCarImg} />
                    </div>
                    <div className='col-md-6 host_detail'>
                        <h3 className='book_heading'>Become a host &#62;</h3>
                        <p className='book_des'>Accelerate your entrepreneurship <br />and start building a small car sharing <br />business on Turo.</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Services
