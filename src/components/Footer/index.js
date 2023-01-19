import React from 'react'
import './footer.css'
import { BsFacebook, BsTwitter, BsYoutube, BsInstagram } from 'react-icons/bs'
import playStoreImg from '../../assets/img/playStore.png'
import appStoreImg from '../../assets/img/appStore.png'
import usaFlag from '../../assets/img/USA-flag.png'

const Footer = () => {
    return (
        <div className='container-fluid footer_main_container mt-5'>
            <div className='container footer-cont mt-5'>

                <div className='terms_cond'>
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
                <div className='row'>
                    <div className='col-md-2'>
                        <h5 className='F-heading'>Turo</h5>
                        <a className='F_links'>About</a>
                        <a className='F_links'>Team</a>
                        <a className='F_links'>Policies</a>
                        <a className='F_links'>Careers</a>
                        <a className='F_links'>Press</a>
                        <a className='F_links'>Open Road</a>
                        <a className='F_links'>Turo Shop</a>
                    </div>
                    <div className='col-md-2'>
                        <h5 className='F-heading'>Locations</h5>
                        <a className='F_links'>USA (EN)</a>
                        <a className='F_links'>Australia (EN)</a>
                        <a className='F_links'>Canada (EN)</a>
                        <a className='F_links'>Canada (FR)</a>
                        <a className='F_links'>UK (EN)</a>
                    </div>
                    <div className='col-md-2'>
                        <h5 className='F-heading'>Explore</h5>
                        <a className='F_links'>Book a car</a>
                        <a className='F_links'>Weddings</a>
                        <a className='F_links'>Trust & Safety</a>
                        <a className='F_links'>Sustainability</a>
                        <a className='F_links'>FAQs</a>
                        <a className='F_links'>Get help</a>

                    </div>
                    <div className='col-md-2'>
                        <h5 className='F-heading'>Hosting</h5>
                        <a className='F_links'>List your car</a>
                        <a className='F_links'>Carculator</a>
                        <a className='F_links'>All-Star Hosts</a>
                        <a className='F_links'>Host Tools</a>
                        <a className='F_links'>Insurance & protection</a>
                        <a className='F_links'>FAQs</a>

                    </div>
                    <div className='col-md-4'>
                        <div className='social_icons'>
                            <BsFacebook /><BsTwitter /><BsInstagram /><BsYoutube />
                            <button>BLOG</button>
                        </div>
                        <div className='stores'>
                            <img src={appStoreImg} />
                            <img src={playStoreImg} alt='playstore' />
                        </div>
                        <div className='langSelect'>
                            <img className='usa_flag' src={usaFlag} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
