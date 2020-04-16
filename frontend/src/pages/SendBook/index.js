import React from 'react'
import { Link } from 'react-router-dom' 

import './styles.css'
import typewriter from '../../assets/typewriter.svg'

export default function Send() {
    return (
        <div>
        <div className="container">
            <section className="form">
                
                <form action="">
                    <input type="text" placeholder="Book name"/>
                    <input type="text" placeholder="Author(s)"/>
                    <p>comma separated*</p>
                    <input type="text"placeholder="Genre(s)"/>
                    <p>comma separated*</p>
                    <label className="select">
                        Select your book from your computer
                        <input type="file" name="" id=""/>
                    </label>
                    <button className="button" type="submit">Send your story</button>
                </form>
                <Link to="/dashboard" className="cancel-link">Cancel</Link>
            </section>
            <img src={typewriter} alt="Writing"/>
            
        </div>
        <footer className="footer"><Link className="about-link" to="/about"> ABOUT IT </Link></footer>
        </div>
    )
}