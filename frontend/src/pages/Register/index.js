import React, { useState } from 'react'
import { Link } from 'react-router-dom' 

import './styles.css'

import logo from '../../assets/logo.svg'
import signup from '../../assets/sign-up.svg'
import api from '../../services/api'

export default function Register({ history }) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleRegister(e) {
        e.preventDefault()
        try {
            const response = await api.post('/register', {name, email, password})
            const { _id } = response.data

            localStorage.setItem('userId', _id)
            history.push('/dashboard')
        } catch (err) {
            alert('Something is wrong')
        }
    }

    return (
        <div>
        <div className="register-container">
            <section className="form">
                <img src={logo} alt="Good Books"/>
                <form onSubmit={handleRegister}>
                    <input 
                        value={name}
                        onChange={e => setName(e.target.value)}
                        id="name"
                        type="text" 
                        placeholder="Name"
                    />
                    <input 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        type="email"
                        placeholder="E-mail"
                    />
                    <input
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                    />
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