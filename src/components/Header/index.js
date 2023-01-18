import React from 'react'
import './header.css'
import turoLogo from '../../assets/img/Turo-Symbol.png'
import { FiMenu } from "react-icons/fi";
import { RxAvatar } from "react-icons/rx";

const Header = () => {
    return (
        <div className='container-fluid'>
            <div className='nav1 text-center'>
                <span>Turo is open for business in Australia! Tap to explore cars.</span>
            </div>
            <div className='nav2'>
                <img src={turoLogo} alt="" />
                <div className='nav2-item2'>
                    <button className='host_btn'>Become a host</button>
                    <FiMenu className='nav2_icons' />
                    <RxAvatar className='nav2_icons' />

                </div>
            </div>
        </div>
    )
}

export default Header
