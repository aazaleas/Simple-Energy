import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <div>
            <nav>
                <div className='container bg-black bg-opacity-25 flex items-center justify-between'>
                    <div className="pl-4 max-w-max flex items-center">
                        <a href="https://www.simpleenergy.in/#tech-smart">
                            <img id='logo' className="logo cursor-pointer inline-block" src={logo} alt="logo.png" />
                        </a>
                        <span className="name text-black text-3xl ml-2">Simple Energy</span>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar