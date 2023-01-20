import React from 'react'
import './footer.css'
import { BsFacebook, BsTwitter, BsYoutube, BsInstagram } from 'react-icons/bs'
import { MdKeyboardArrowUp } from 'react-icons/md'
import playStoreImg from '../../assets/img/playStore.png'
import appStoreImg from '../../assets/img/appStore.png'
import usaFlag from '../../assets/img/usa-flag.png'

const Footer = () => {
    return (
        <div className='container-fluid footer_main_container mt-5'>
            <div className='container footer-cont mt-5'>

                <div className='terms_cond mx-2'>
                    <p className='mb-3'>
                        * Any personal insurance you may have that covers damage to the host’s vehicle would kick in before your protection plan, except in limited situations for trips booked in Maryland, but this protects your own wallet. Liability insurance is provided under a policy issued to Turo by Travelers Excess and Surplus Lines Company. Terms, conditions, and exclusions apply. The policy does not provide coverage for damage to a host’s vehicle.
                    </p>
                    <p className='mb-3'>
                        For questions or information about the third party liability insurance that is included in protection plans in the US, consumers in Maryland and the licensed states listed here may contact Turo Insurance Agency at (415) 508-0283 or claims@turo.agency. For questions about how damage to a host’s vehicle is handled, visit the Turo Support site.
                    </p>
                    <p className='mb-3'>
                        When a trip is booked in the state of Washington, physical damage to the host’s vehicle is covered by insurance purchased by Turo, but the Turo insurance does not change the contractual responsibilities of hosts or guests with respect to physical damage to a host’s vehicle.
                    </p>
                    <p>
                        ** Terms, conditions, and exclusions apply.
                    </p>
                </div>
                {/*  */}
                <div className='row mt-5 pt-5 mx-2'>
                    <div className='col-md-2 col-sm-3 col-6 order-2'>
                        <h5 className='F-heading'>Turo</h5>
                        <a className='F_links mt-4'>About</a>
                        <a className='F_links'>Team</a>
                        <a className='F_links'>Policies</a>
                        <a className='F_links'>Careers</a>
                        <a className='F_links'>Press</a>
                        <a className='F_links'>Open Road</a>
                        <a className='F_links'>Turo Shop</a>
                    </div>
                    <div className='col-md-2 col-sm-3 col-6 order-3'>
                        <h5 className='F-heading'>Locations</h5>
                        <a className='F_links mt-4'>USA (EN)</a>
                        <a className='F_links'>Australia (EN)</a>
                        <a className='F_links'>Canada (EN)</a>
                        <a className='F_links'>Canada (FR)</a>
                        <a className='F_links'>UK (EN)</a>
                    </div>
                    <div className='col-md-2 col-sm-3 col-6 order-4'>
                        <h5 className='F-heading'>Explore</h5>
                        <a className='F_links mt-4'>Book a car</a>
                        <a className='F_links'>Weddings</a>
                        <a className='F_links'>Trust & Safety</a>
                        <a className='F_links'>Sustainability</a>
                        <a className='F_links'>FAQs</a>
                        <a className='F_links'>Get help</a>

                    </div>
                    <div className='col-md-2 col-sm-3 col-6 order-5'>
                        <h5 className='F-heading'>Hosting</h5>
                        <a className='F_links mt-4  '>List your car</a>
                        <a className='F_links'>Carculator</a>
                        <a className='F_links'>All-Star Hosts</a>
                        <a className='F_links'>Host Tools</a>
                        <a className='F_links'>Insurance & protection</a>
                        <a className='F_links'>FAQs</a>

                    </div>
                    <div className='col-md-4 order-1 order-md-5 mb-5'>
                        <div className='social'>
                            <BsFacebook className='social_icon' /><BsTwitter className='social_icon' /><BsInstagram className='social_icon' /><BsYoutube className='social_icon' />
                            <button>BLOG</button>
                        </div>
                        <div className='stores mt-3'>
                            <img src={appStoreImg} />
                            <img src={playStoreImg} alt='playstore' />
                        </div>
                        <div className='langSelect mt-3'>
                            <MdKeyboardArrowUp className='up_arrow' />
                            <img className='usa_flag ' src={usaFlag} />
                            <span>English</span>
                        </div>
                    </div>
                </div>
                {/*  */}
                <div className='my-5'>
                    <a className='F_links last_links' >©2023 Turo</a>
                    <a className='F_links last_links' >Terms</a>
                    <a className='F_links last_links' >Sitemap</a>
                    <a className='F_links last_links' >Cookie preferences</a>
                    <a className='F_links last_links' >Do not sell or share my personal information</a>
                </div>
            </div>
        </div>
    )
}

export default Footer
