import React from 'react'
import { Link } from 'react-router-dom'
import { FiDownload, FiTrash2 } from 'react-icons/fi'
import logo from '../../assets/logo.svg'

import './styles.css'

export default function Dashboard() {
    return (
        <>
            <div className="content">
                <header className="header">
                    <img src={logo} className="header-logo" alt="Good Books"/>
                    <Link to="/send" className="button">Send a book</Link>
                </header>

                <h1>Your published books</h1>

                <ul>
                    <li>
                        <p>Name:</p> <strong>O conto de Belair Houston</strong>
                        <p>Author(s):</p> <strong>Andrew Stone</strong>
                        <p>Genre(s):</p> <strong>Romance</strong> <br/>
                        <Link className="download-link">
                            <FiDownload size={23} color="#E5585B"/>
                            Download the book
                        </Link>

                        <button type="button">
                            <FiTrash2 size={20} color="#E5585B" />
                        </button>

                    </li>
                    <li>
                        <p>Name:</p> <strong>O conto de Belair Houston</strong>
                        <p>Author(s):</p> <strong>Andrew Stone</strong>
                        <p>Genre(s):</p> <strong>Romance</strong> <br/>
                        <Link className="download-link">
                            <FiDownload size={23} color="#E5585B"/>
                            Download the book
                        </Link>

                        <button type="button">
                            <FiTrash2 size={20} color="#E5585B" />
                        </button>

                    </li>
                    <li>
                        <p>Name:</p> <strong>O conto de Belair Houston</strong>
                        <p>Author(s):</p> <strong>Andrew Stone</strong>
                        <p>Genre(s):</p> <strong>Romance</strong> <br/>
                        <Link className="download-link">
                            <FiDownload size={23} color="#E5585B"/>
                            Download the book
                        </Link>

                        <button type="button">
                            <FiTrash2 size={20} color="#E5585B" />
                        </button>

                    </li>
                    <li>
                        <p>Name:</p> <strong>O conto de Belair Houston</strong>
                        <p>Author(s):</p> <strong>Andrew Stone</strong>
                        <p>Genre(s):</p> <strong>Romance</strong> <br/>
                        <Link className="download-link">
                            <FiDownload size={23} color="#E5585B"/>
                            Download the book
                        </Link>

                        <button type="button">
                            <FiTrash2 size={20} color="#E5585B" />
                        </button>

                    </li>
                </ul>
            </div>
            <footer className="footer"><Link className="about-link" to="/about"> ABOUT IT </Link></footer>
        </>
    )
}
