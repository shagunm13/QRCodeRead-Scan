import React from "react"
import { NavLink } from 'react-router-dom';
const Home = (props) => {

    return (
        <React.Fragment>
            <h1 className=" pt-5">QR Code </h1>
            <h3 className="display-6">Generate and Scan</h3>
            <ul className="nav flex-column">
                What do you want to do ?

                <li className="nav-item mt-5">
                    Generate your own QR code for portfolio , sites ,etc
                </li>
                <li className="nav-item">
                    <NavLink to='/qrgenerator'>Generate QR Code</NavLink>
                </li>
                <li className="nav-item mt-5">
                    or Scan and open any link using QR scanner !!
                </li>
                <li className="nav-item pb-5">
                    <NavLink to='/qrreader' >Scan QR Code</NavLink>
                </li>
            </ul>
        </React.Fragment>
    )
}

export default Home;