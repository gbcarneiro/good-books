import React from 'react'
import { Link } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'
import './styles.css'

import logo from '../../assets/logo.svg'
import girl from '../../assets/girl-reading.svg'

export default function Logon() {
    return (
        <div>
        <div className="logon-container">
            <section className="form">
                <img src={logo} alt="Good Books"/>
                <form action="">
                    <input type="text" placeholder="E-mail"/>
                    <input type="password"placeholder="Password"/>
                    <button className="button" type="submit">Enter</button>
                    <Link className="register-link" to="/register">
                        <FiLogIn size={23} color="#E5585B" />
                        Create an account
                    </Link>
                </form>
            </section>
            <img src={girl} alt="Girl Reading"/>
            
        </div>
        <footer className="footer"><Link className="about-link" to="/about"> ABOUT IT </Link></footer>
        </div>
    )
}