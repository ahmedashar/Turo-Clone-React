import React from 'react'
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos, MdOutlinePets } from 'react-icons/md';
import Slider from 'react-slick';
import "./experience.css"
import { BsBatteryCharging, BsStars, BsHeartHalf } from "react-icons/bs";
import { IoCarSportSharp } from "react-icons/io5";
import { GiCarWheel } from "react-icons/gi";


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
const Experience = () => {
    var settings = {
        dots: true,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000,
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
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            },

        ]
    };
    return (
        <div className='container-fluid experience_container_main mt-5 pt-5'>
            <div className='container experience_cont mt-5'>
                <h3 className='mb-4 mx-2' style={{ fontWeight: 'bolder' }}>Browse by experience</h3>
                <div className='container text-center'>
                    <Slider {...settings}>
                        <div className='slick_div_exp'>
                            <img className='slick_img_exp' src='https://resources.turo.com/f/81934/328x262/8e60a37cc1/image_experience_electric.jpg' />
                            <div className='exp_title mt-3'>
                                <BsBatteryCharging className='icon_exp' />
                                <span className='exp_span'>Electric</span>
                            </div>
                        </div>
                        <div className='slick_div_exp'>
                            <img className='slick_img_exp' src='https://resources.turo.com/f/81934/328x262/1d0c1a5bd7/image_experience_deluxesuperdeluxe.jpg' />
                            <div className='exp_title mt-3'>
                                <BsStars className='icon_exp' />
                                <span className='exp_span'>Deluxe & Super Deluxe</span>
                            </div>
                        </div>
                        <div className='slick_div_exp'>
                            <img className='slick_img_exp' src='https://resources.turo.com/f/81934/328x262/0d5b069ff2/image_experience_petfriendly.jpg' />
                            <div className='exp_title mt-3'>
                                <MdOutlinePets className='icon_exp' />
                                <span className='exp_span'>Pet-friendly</span>
                            </div>
                        </div>
                        <div className='slick_div_exp'>
                            <img className='slick_img_exp' src='https://resources.turo.com/f/81934/328x262/61e1aebed5/image_experience_convertibles.jpg' />
                            <div className='exp_title mt-3'>
                                <IoCarSportSharp className='icon_exp' />
                                <span className='exp_span'>Convertibles</span>
                            </div>

                        </div>
                        <div className='slick_div_exp'>
                            <img className='slick_img_exp' src='https://resources.turo.com/f/81934/328x262/6a22a954a4/image_experience_allwheeldrive.jpg' />
                            <div className='exp_title mt-3'>
                                <GiCarWheel className='icon_exp' />
                                <span className='exp_span'>All-wheel drive</span>
                            </div>
                        </div>
                        <div className='slick_div_exp'>
                            <img className='slick_img_exp' src='https://resources.turo.com/f/81934/328x262/294b8f8aec/image_experience_classiccars.jpg' />
                            <div className='exp_title mt-3'>
                                <BsHeartHalf className='icon_exp' />
                                <span className='exp_span'>Classic cars</span>
                            </div>
                        </div>


                    </Slider>
                </div>
            </div>

        </div>
    )
}

export default Experience
