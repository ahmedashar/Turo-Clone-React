import React from 'react'
import Slider from 'react-slick'
import './host.css'
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIosNew } from "react-icons/md";
import { RiMedalLine } from "react-icons/ri"
import { AiFillStar } from "react-icons/ai"


const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div>
            {/* <i className="fas fa-arrow-right" style={{ fontSize: '1px', background: 'black' }} /> */}
            <MdOutlineArrowForwardIos className={className} style={{ color: 'black', top: '-40', right: '1%' }} onClick={onClick} />
        </div>
    );
};
const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div style={{ background: 'black' }}>
            {/* <i className="fas fa-arrow-right" style={{ fontSize: '1px', background: 'black' }} /> */}
            <MdOutlineArrowBackIosNew className={className} style={{ fontSize: '100px', color: 'black', top: '-40', left: '90%' }} onClick={onClick} />
        </div>
    );
};

const Host = () => {
    var settings = {
        dots: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        pauseOnHover: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 568,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },

        ]
    }
    return (
        <div className='container_fluid host_main_container mt-5 pt-5'>
            <div className='container host_cont mt-5'>
                <h1 style={{ fontWeight: 'bolder', fontSize: '50px' }} className='text-center'>Meet the hosts</h1>
                <h4 style={{ fontWeight: 'bolder' }} className='mt-5 mb-4 mx-2'>Top hosts on Turo</h4>

                <div className='container'>
                    <Slider {...settings}>

                        <div className='slick_div_host p-3'>
                            <div className='slick_div_hp1 mb-3'>
                                <img className='hp1_img' src='https://images.turo.com/media/driver/oIuGRUy_SD2f3BuB6MFj7A.160x160.jpg' />
                                <div className='hp1_info'>
                                    <span className='info_name'>Saul Z.</span>
                                    <span className='info_batch'><RiMedalLine /> All-Star Host</span>
                                    <span className='info_trips'>200 trips . Joined May 2021</span>
                                </div>
                            </div>
                            <span className='host_rating'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></span>
                            <p className='host_review mt-2 mb-5'>The <strong>car</strong> was great!</p>
                            <span className='host_dur'>James L. - Jan 2023</span>
                        </div>

                        <div className='slick_div_host p-3'>
                            <div className='slick_div_hp1 mb-3'>
                                <img className='hp1_img' src='https://images.turo.com/media/driver/edc4lzlWTHGwKOpT3WF4Og.160x160.jpg' />
                                <div className='hp1_info'>
                                    <span className='info_name'>Kevin M.</span>
                                    <span className='info_batch'><RiMedalLine /> All-Star Host</span>
                                    <span className='info_trips'>561 trips . Joined Aug 2020</span>
                                </div>
                            </div>
                            <span className='host_rating'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></span>
                            <p className='host_review mt-2'>He came Thru for us at the last minute, I was literally on the plane when I got a call that my <strong>car</strong> from a rental...</p>
                            <span className='bottom_info host_dur'>Donna S. - Nov 2022</span>
                        </div>
                        <div className='slick_div_host p-3'>
                            <div className='slick_div_hp1 mb-3'>
                                <img className='hp1_img' src='https://images.turo.com/media/driver/oIuGRUy_SD2f3BuB6MFj7A.160x160.jpg' />
                                <div className='hp1_info'>
                                    <span className='info_name'>Saul Z.</span>
                                    <span className='info_batch'><RiMedalLine /> All-Star Host</span>
                                    <span className='info_trips'>200 trips . Joined May 2021</span>
                                </div>
                            </div>
                            <span className='host_rating'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></span>
                            <p className='host_review mt-2 mb-5'>The <strong>car</strong> was great!</p>
                            <span className='host_dur'>James L. - Jan 2023</span>
                        </div>
                        <div className='slick_div_host p-3'>
                            <div className='slick_div_hp1 mb-3'>
                                <img className='hp1_img' src='https://images.turo.com/media/driver/GYXLNy3eTj-9112VMxeI0g.160x160.jpg' />
                                <div className='hp1_info'>
                                    <span className='info_name'>Laura V.</span>
                                    <span className='info_batch'><RiMedalLine /> All-Star Host</span>
                                    <span className='info_trips'>364 trips . Joined Jan 2019</span>
                                </div>
                            </div>
                            <span className='host_rating'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></span>
                            <p className='host_review mt-2 mb-5'>Fun <strong>car</strong>. Laura was so nice!</p>
                            <span className='host_dur'>Jairo A A. - Jan 2023</span>
                        </div>
                        <div className='slick_div_host p-3'>
                            <div className='slick_div_hp1 mb-3'>
                                <img className='hp1_img' src='https://images.turo.com/media/driver/kFR_K6gDQ4ivXlIQXyaC-w.160x160.jpg' />
                                <div className='hp1_info'>
                                    <span className='info_name'>Muhammad A.</span>
                                    <span className='info_batch'><RiMedalLine /> All-Star Host</span>
                                    <span className='info_trips'>1,100 trips . Joined Apr 2015</span>
                                </div>
                            </div>
                            <span className='host_rating'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></span>
                            <p className='host_review mt-2 mb-5'>Amazing <strong>car</strong> and an amazing trip.</p>
                            <span className='host_dur'>Chris A. - Jan 2023</span>
                        </div>

                        <div className='slick_div_host p-3'>
                            <div className='slick_div_hp1 mb-3'>
                                <img className='hp1_img' src='https://images.turo.com/media/driver/oIuGRUy_SD2f3BuB6MFj7A.160x160.jpg' />
                                <div className='hp1_info'>
                                    <span className='info_name'>Saul Z.</span>
                                    <span className='info_batch'><RiMedalLine /> All-Star Host</span>
                                    <span className='info_trips'>200 trips . Joined May 2021</span>
                                </div>
                            </div>
                            <span className='host_rating'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></span>
                            <p className='host_review mt-2 mb-5'>The <strong>car</strong> was great!</p>
                            <span className='host_dur'>James L. - Jan 2023</span>
                        </div>

                        <div className='slick_div_host p-3'>
                            <div className='slick_div_hp1 mb-3'>
                                <img className='hp1_img' src='https://images.turo.com/media/driver/edc4lzlWTHGwKOpT3WF4Og.160x160.jpg' />
                                <div className='hp1_info'>
                                    <span className='info_name'>Kevin M.</span>
                                    <span className='info_batch'><RiMedalLine /> All-Star Host</span>
                                    <span className='info_trips'>561 trips . Joined Aug 2020</span>
                                </div>
                            </div>
                            <span className='host_rating'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></span>
                            <p className='host_review mt-2'>He came Thru for us at the last minute, I was literally on the plane when I got a call that my <strong>car</strong> from a rental...</p>
                            <span className='bottom_info host_dur'>Donna S. - Nov 2022</span>
                        </div>
                        <div className='slick_div_host p-3'>
                            <div className='slick_div_hp1 mb-3'>
                                <img className='hp1_img' src='https://images.turo.com/media/driver/oIuGRUy_SD2f3BuB6MFj7A.160x160.jpg' />
                                <div className='hp1_info'>
                                    <span className='info_name'>Saul Z.</span>
                                    <span className='info_batch'><RiMedalLine /> All-Star Host</span>
                                    <span className='info_trips'>200 trips . Joined May 2021</span>
                                </div>
                            </div>
                            <span className='host_rating'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></span>
                            <p className='host_review mt-2 mb-5'>The <strong>car</strong> was great!</p>
                            <span className='host_dur'>James L. - Jan 2023</span>
                        </div>
                        <div className='slick_div_host p-3'>
                            <div className='slick_div_hp1 mb-3'>
                                <img className='hp1_img' src='https://images.turo.com/media/driver/GYXLNy3eTj-9112VMxeI0g.160x160.jpg' />
                                <div className='hp1_info'>
                                    <span className='info_name'>Laura V.</span>
                                    <span className='info_batch'><RiMedalLine /> All-Star Host</span>
                                    <span className='info_trips'>364 trips . Joined Jan 2019</span>
                                </div>
                            </div>
                            <span className='host_rating'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></span>
                            <p className='host_review mt-2 mb-5'>Fun <strong>car</strong>. Laura was so nice!</p>
                            <span className='host_dur'>Jairo A A. - Jan 2023</span>
                        </div>
                        <div className='slick_div_host p-3'>
                            <div className='slick_div_hp1 mb-3'>
                                <img className='hp1_img' src='https://images.turo.com/media/driver/kFR_K6gDQ4ivXlIQXyaC-w.160x160.jpg' />
                                <div className='hp1_info'>
                                    <span className='info_name'>Muhammad A.</span>
                                    <span className='info_batch'><RiMedalLine /> All-Star Host</span>
                                    <span className='info_trips'>1,100 trips . Joined Apr 2015</span>
                                </div>
                            </div>
                            <span className='host_rating'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></span>
                            <p className='host_review mt-2 mb-5'>Amazing <strong>car</strong> and an amazing trip.</p>
                            <span className='host_dur'>Chris A. - Jan 2023</span>
                        </div>

                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Host
