import React from 'react'
import './searchbar.css'
import { TfiSearch } from "react-icons/tfi";

const SearchBar = () => {
    return (

        <div className='container searchbar_main'>
            <div className='input_cont1'>
                <span className='labeltext'>Where</span>
                <input placeholder='City, airport, address or hotel' />
            </div>
            <div className='input_cont2'>
                <span className='labeltext'>From</span>
                <input type='date' />
                <input type='time' />
            </div>
            <div className='input_cont3'>
                <span className='labeltext'>Until</span>
                <input type='date' />
                <input type='time' />
            </div>

            <TfiSearch className='search_icon' />

        </div>

    )
}

export default SearchBar
