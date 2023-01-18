import React from 'react'
import './section2.css'
import Slider from "react-slick";
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", backgroundColor: 'black' }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black" }}
            onClick={onClick}
        />
    );
}
const Section2 = () => {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div className='container-fluid section_2_main mt-5 pt-5'>
            <div className='container sec2_cont'>
                <Slider {...settings}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-6 text-center ml-4'>
                                <img className='s2_img text-center' src='https://resources.turo.com/f/81934/416x284/6e085cbe0e/image_outdoors_416x285.jpg'></img>
                            </div>
                            <div className='col-md-6'>
                                <h2 className='s2_heading'>Find the perfect car<span className='s2_heading_span'> to conquer the great outdoors</span></h2>
                                <p className='s2_para mt-4'>Go prepared in a rugged 4x4 to take on winter roads with ease, or a camper van to take you to the trees.</p>
                                <button className='s2_btn mt-5'>Browse cars</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='row'>
                            <div className='col-md-6 text-center ml-4'>
                                <img className='s2_img text-center' src='https://resources.turo.com/f/81934/416x284/7c424a07d5/image_unwind_416x285.jpg'></img>
                            </div>
                            <div className='col-md-6'>
                                <h2 className='s2_heading'>Find the perfect car<span className='s2_heading_span'> to unwind for the weekend</span></h2>
                                <p className='s2_para mt-4'>From daily drivers to spirited sports cars, ditch the grind with convenient nearby cars.</p>
                                <button className='s2_btn mt-5'>Browse cars</button>
                            </div>
                        </div>
                    </div>
                    <div>

                        <div className='row'>
                            <div className='col-md-6 text-center ml-4'>
                                <img className='s2_img text-center' src='https://resources.turo.com/f/81934/416x284/929b21c4fa/image_upgrade_416x285.jpg'></img>
                            </div>
                            <div className='col-md-6'>
                                <h2 className='s2_heading'>Find the perfect car<span className='s2_heading_span'> to upgrade your vacation plans</span></h2>
                                <p className='s2_para mt-4'>Skip the rental car counter and find the perfect car to complement your vacation vibe.</p>
                                <button className='s2_btn mt-5'>Browse cars</button>
                            </div>
                        </div>
                    </div>
                    <div>

                        <div className='row'>
                            <div className='col-md-6 text-center ml-4'>
                                <img className='s2_img text-center' src='https://resources.turo.com/f/81934/416x284/1e828ae782/image_scenic_416x285.jpg'></img>
                            </div>
                            <div className='col-md-6'>
                                <h2 className='s2_heading'>Find the perfect car<span className='s2_heading_span'> for scenic corners & curves</span></h2>
                                <p className='s2_para mt-4'>Get your fill of high-performance thrills, with the richest selection of luxury and exotic vehicles anywhere.</p>
                                <button className='s2_btn mt-5'>Browse cars</button>
                            </div>
                        </div>
                    </div>
                    <div>

                        <div className='row'>
                            <div className='col-md-6 text-center ml-4'>
                                <img className='s2_img text-center' src='https://resources.turo.com/f/81934/416x284/a3870434ac/image_try_416x285.jpg'></img>
                            </div>
                            <div className='col-md-6'>
                                <h2 className='s2_heading'>Find the perfect car<span className='s2_heading_span'>to try before you buy</span></h2>
                                <p className='s2_para mt-4'>Make sure your future wheels work well with your lifestyle by taking your time in the drivers seat.</p>
                                <button className='s2_btn mt-5'>Browse cars</button>
                            </div>
                        </div>
                    </div>
                    <div>

                        <div className='row'>
                            <div className='col-md-6 text-center ml-4'>
                                <img className='s2_img text-center' src='https://resources.turo.com/f/81934/416x284/fa43ee8e2b/image_errand_416x285.jpg'></img>
                            </div>
                            <div className='col-md-6'>
                                <h2 className='s2_heading'>Find the perfect car<span className='s2_heading_span'>to make errand day easier</span></h2>
                                <p className='s2_para mt-4'>Book a roomy truck or SUV to ease your errand day stress, or to motivate your moving day.</p>
                                <button className='s2_btn mt-5'>Browse cars</button>
                            </div>
                        </div>
                    </div>
                </Slider>

            </div>

        </div>
    )
}

export default Section2
