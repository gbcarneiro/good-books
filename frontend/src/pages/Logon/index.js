import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'

import { FiLogIn } from 'react-icons/fi'
import './styles.css'

import logo from '../../assets/logo.svg'
import girl from '../../assets/girl-reading.svg'

export default function Logon({ history }) {
    const [email, setEmail ] = useState("")
    const [password, setPassword] = useState("")

    async function handleSubmit(e) {
        e.preventDefault()
        
        try {
            const response = await api.post('/logon', { email, password })
            const { _id } = response.data
            localStorage.setItem('userId', _id)
            history.push('/dashboard')
        } catch (err) {
            alert('erro')
        }
    }

    return (
        <div>
        <div className="logon-container">
            <section className="form">
                <img src={logo} alt="Good Books"/>
                <form onSubmit={handleSubmit}>
                    <input
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        id="email"
                        type="email"
                        placeholder="E-mail"
                    />
                    
                    <input
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        id="password"
                        type="password"
                        placeholder="Password"
                    />
                    <button className="button" type="submit" >Enter</button>
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