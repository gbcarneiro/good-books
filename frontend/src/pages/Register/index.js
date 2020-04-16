import React from 'react'
import { Link } from 'react-router-dom' 

import './styles.css'

import logo from '../../assets/logo.svg'
import signup from '../../assets/sign-up.svg'

export default function Register() {
    return (
        <div>
        <div className="register-container">
            <section className="form">
                <img src={logo} alt="Good Books"/>
                <form action="">
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="E-mail"/>
                    <input type="password"placeholder="Password"/>
                    <button className="button" type="submit">Register</button>
                </form>
                <Link to="/" className="cancel-link">Cancel</Link>
            </section>
            <img src={signup} alt="Sign up"/>
            
        </div>
        <footer className="footer"><Link className="about-link" to="/about"> ABOUT IT </Link></footer>
        </div>
    )
}