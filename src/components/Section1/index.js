import React from 'react'
import './section1.css'
import Slider from "react-slick";
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIosNew } from "react-icons/md";

const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div>
            {/* <i className="fas fa-arrow-right" style={{ fontSize: '1px', background: 'black' }} /> */}
            <MdOutlineArrowForwardIos className={className} style={{ color: 'black', top: '-20' }} onClick={onClick} />
        </div>
    );
};
const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div style={{ background: 'black' }}>
            {/* <i className="fas fa-arrow-right" style={{ fontSize: '1px', background: 'black' }} /> */}
            <MdOutlineArrowBackIosNew className={className} style={{ fontSize: '100px', color: 'black', top: '-20', left: '94%' }} onClick={onClick} />
        </div>
    );
};


const Section1 = () => {
    var settings = {
        dots: true,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='contianer-fluid section1_main_container'>
            <div className='container section1_container  mt-5'>
                <h1 className='sec_heading text-center'>Find your drive</h1>
                <h3 className='sec_para mt-3 text-center'>Explore the world's largest car sharing marketplace</h3>
                <h4 className='mt-5 pt-5 mb-5' style={{ fontWeight: 'bolder' }}>Browse by make</h4>
                <div className='container text-center mt-3'>

                    <Slider {...settings}>
                        <div className='slick_div_car'>
                            <img className='slick_img_car' src='https://resources.turo.com/f/81934/386x308/9bf274f19e/image_make_jeep-2x.jpg' />
                            <h3>Jeep</h3>
                        </div>
                        <div className='slick_div_car'>
                            <img className='slick_img_car' src='https://resources.turo.com/f/81934/386x308/7dcf9bff19/image_make_tesla-2x.jpg' />
                            <h3>Tesla</h3>
                        </div>
                        <div className='slick_div_car'>
                            <img className='slick_img_car' src='https://resources.turo.com/f/81934/386x308/ef857a4438/image_make_subaru-2x.jpg' />
                            <h3>Subaru</h3>
                        </div>
                        <div className='slick_div_car'>
                            <img className='slick_img_car' src='https://resources.turo.com/f/81934/386x308/7e7ce60797/image_make_porsche-2x.jpg' />
                            <h3>Porsche</h3>
                        </div>
                        <div className='slick_div_car'>
                            <img className='slick_img_car' src='https://resources.turo.com/f/81934/386x308/0c4f5f5186/image_make_bmw-2x.jpg' />
                            <h3>BMW</h3>
                        </div>
                        <div className='slick_div_car'>
                            <img className='slick_img_car' src='https://resources.turo.com/f/81934/386x308/065308f2c4/image_make_mb-2x.jpg' />
                            <h3>Marcedes-Benz</h3>
                        </div>
                        <div className='slick_div_car'>
                            <img className='slick_img_car' src='https://resources.turo.com/f/81934/386x308/2809ca8702/image_make_toyota-2x.jpg' />
                            <h3>Toyota</h3>
                        </div>
                        <div className='slick_div_car'>
                            <img className='slick_img_car' src='https://resources.turo.com/f/81934/386x308/a470b4f290/image_make_lambo-2x.jpg' />
                            <h3>Lamborghini</h3>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Section1
