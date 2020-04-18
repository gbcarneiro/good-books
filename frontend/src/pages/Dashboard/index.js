import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiDownload, FiTrash2 } from 'react-icons/fi'
import api from '../../services/api'

import './styles.css'
import logo from '../../assets/logo.svg'

export default function Dashboard({ history }) {
    const [books, setBooks] = useState([])
    const user_id = localStorage.getItem('userId')

    useEffect(() => {
        api.get('/dashboard', { headers: { user_id } }).then(response => {
            setBooks(response.data)
        })
    }, [user_id])

    function handleLogout() {
        localStorage.clear()
        history.push('/')
    }

    async function handleDeleteBook(_id) {
        try {
            await api.delete(`/book/${_id}`, {})
            setBooks(books.filter(book => book._id !== _id))
        } catch {
            alert('Error')
        }
    }

    return (
        <>
            <div className="content">
                <header className="header">
                    <Link className="header-logo" onClick={handleLogout}>
                        <img src={logo} className="header-logo" alt="Good Books"/>
                    </Link>
                    <Link to="/book" className="button">Send a book</Link>
                </header>

                <h1>Your published books</h1>

                <ul>
                    {books.map(book => (
                        <li key={book._id}>
                            <p>Name:</p> <strong>{book.name}</strong>
                            <p>Author(s):</p> <strong>{book.authors}</strong>
                            <p>Genre(s):</p> <strong>{book.genres}</strong>
                            <a 
                                href={`http://localhost:3333/files/${book.bookfile}`} 
                                target="blank" c
                                lassName="download-link"
                            >
                                <FiDownload size={23} color="#E5585B"/>
                                Download the book
                            </a>

                            <button onClick={() => handleDeleteBook(book._id)} type="button">
                                <FiTrash2 size={20} color="#E5585B" />
                            </button>

                        </li>
                    ))}
                </ul>
            </div>
            <footer className="footer">
                <Link className="about-link" to="/about"> ABOUT IT </Link>
            </footer>
        </>
    )
}
