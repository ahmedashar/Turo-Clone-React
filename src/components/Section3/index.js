
import Slider from 'react-slick'
import './section3.css'
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


const Section3 = () => {

    var settings = {
        dots: true,
        infinite: false,
        slidesToShow: 6,
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
        <div className='container-fluid sec3_container_main mt-5 pt-5'>
            <div className='container sec3_cont mt-5'>
                <h4 style={{ fontWeight: 'bolder' }}>Browse by destination</h4>
                <div className='s3_slider mt-5'>
                    <Slider {...settings}>

                        <div className='slick_div'>
                            <img className='slick_img_dest' src='https://resources.turo.com/f/81934/240x240/7825448638/illo_city_losangeles-2x.png' />
                            <h3 className='text-center mt-2'>Los Angeles</h3>
                        </div>


                        <div className='slick_div'>
                            <img className='slick_img_dest' src='https://resources.turo.com/f/81934/240x240/1442627566/illo_city_london-2x.png' />
                            <h3 className='text-center mt-2'>London</h3>
                        </div>


                        <div className='slick_div'>
                            <img className='slick_img_dest' src='https://resources.turo.com/f/81934/240x240/24053a444a/illo_city_sydney-2x.png' />
                            <h3 className='text-center mt-2'>Sydney</h3>
                        </div>


                        <div className='slick_div'>
                            <img className='slick_img_dest' src='	https://resources.turo.com/f/81934/240x240/87ab56dd05/illo_city_toronto-2x.png' />
                            <h3 className='text-center mt-2'>Toronto</h3>
                        </div>


                        <div className='slick_div'>
                            <img className='slick_img_dest' src='https://resources.turo.com/f/81934/240x240/101ea2791a/illo_city_jerseycity-2x.png' />
                            <h3 className='text-center mt-2'>Jersey City</h3>
                        </div>


                        <div className='slick_div'>
                            <img className='slick_img_dest' src='https://resources.turo.com/f/81934/240x240/c00858690e/illo_city_sanfrancisco-2x.png' />
                            <h3 className='text-center mt-2'>San Francisco</h3>
                        </div>


                        <div className='slick_div'>
                            <img className='slick_img_dest' src='https://resources.turo.com/f/81934/240x240/184058bb96/illo_city_lasvegas-2x.png' />
                            <h3 className='text-center mt-2'>Las Vegas</h3>
                        </div>


                        <div className='slick_div'>
                            <img className='slick_img_dest' src='https://resources.turo.com/f/81934/240x240/b7eaeead8f/illo_city_dallas-2x.png' />
                            <h3 className='text-center mt-2'>Dallas</h3>
                        </div>
                        <div className='slick_div'>
                            <img className='slick_img_dest' src='https://resources.turo.com/f/81934/240x240/24053a444a/illo_city_sydney-2x.png' />
                            <h3 className='text-center mt-2'>Sydney</h3>
                        </div>


                        <div className='slick_div'>
                            <img className='slick_img_dest' src='	https://resources.turo.com/f/81934/240x240/87ab56dd05/illo_city_toronto-2x.png' />
                            <h3 className='text-center mt-2'>Toronto</h3>
                        </div>


                        <div className='slick_div'>
                            <img className='slick_img_dest' src='https://resources.turo.com/f/81934/240x240/101ea2791a/illo_city_jerseycity-2x.png' />
                            <h3 className='text-center mt-2'>Jersey City</h3>
                        </div>


                        <div className='slick_div'>
                            <img className='slick_img_dest' src='https://resources.turo.com/f/81934/240x240/c00858690e/illo_city_sanfrancisco-2x.png' />
                            <h3 className='text-center mt-2'>San Francisco</h3>
                        </div>


                        <div className='slick_div'>
                            <img className='slick_img_dest' src='https://resources.turo.com/f/81934/240x240/184058bb96/illo_city_lasvegas-2x.png' />
                            <h3 className='text-center mt-2'>Las Vegas</h3>
                        </div>


                        <div className='slick_div'>
                            <img className='slick_img_dest' src='https://resources.turo.com/f/81934/240x240/b7eaeead8f/illo_city_dallas-2x.png' />
                            <h3 className='text-center mt-2'>Dallas</h3>
                        </div>








                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Section3
