import React from 'react'
import { Link } from 'react-router-dom'
import { useLastLocation } from 'react-router-last-location'
import { FiInstagram, FiTwitter, FiGithub } from 'react-icons/fi'

import './styles.css'

import logo from '../../assets/logo.svg'
import tpwriter from '../../assets/typewriter.svg'

export default function About() {
    const lastLocation = useLastLocation()
    return (
        <div className="about-container">
            <section className="aboutct">
                <img src={logo} alt="Good Books"/>
                <p><strong>GoodBooks</strong> is a platform for connecting independent writers with passionate readers. On this website, you can publish your stories for other book lovers to read. <br/><br/>
                If you are a reader, you can download the app.</p>
                <div className="links">
                    <div className="social-links">
                        <a target="blank" href="https://www.instagram.com/"><FiInstagram color="#E5585B" size={23}/></a>
                        <a target="blank" href="https://www.twitter.com/"><FiTwitter color="#E5585B" size={23}/></a>
                        <a target="blank" href="https://www.github.com/gbcarneiro"><FiGithub color="#E5585B" size={23}/></a>
                    </div>
                    <div>
                        <Link className="about-link" to={lastLocation}>Back</Link>
                    </div>
                </div>
            </section>
            <img src={tpwriter} className="illustration" alt="Writing"/>
        </div>
    )
}
