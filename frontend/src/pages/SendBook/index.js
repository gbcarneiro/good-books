import React, { useState } from 'react'
import { Link } from 'react-router-dom' 
import api from '../../services/api'

import './styles.css'
import typewriter from '../../assets/typewriter.svg'

export default function Send({ history }) {
    const [name, setName] = useState("")
    const [authors, setAuthors] = useState("")
    const [genres, setGenres] = useState("")
    const [bookfile, setBookfile]  = useState(null)

	async function handleSubmitBook(e) {
		e.preventDefault()

		const data = new FormData() 
		const user_id = localStorage.getItem('userId')

		data.append('name', name)
		data.append('authors', authors)
		data.append('genres', genres)
		data.append('bookfile', bookfile)

		await api.post('/book', data, {
			headers: { user_id } 
		})

		history.push('/dashboard')
	}

    return (
        <>
        <div className="container">
            <section className="form">
                
                <form onSubmit={handleSubmitBook}>
                    <input 
                        type="text" 
                        placeholder="Book name"
                        value={name}
                       	onChange={e => setName(e.target.value)}
                    />
                    <input 
                        type="text" 
                        placeholder="Author(s)"
                        value={authors}
                        onChange={e => setAuthors(e.target.value)}    
                    />
                    <input 
                        type="text"
                        placeholder="Genre(s)"
                        value={genres}
                       	onChange={e => setGenres(e.target.value)}
                    />
                    <p>comma separated*</p>
                    <label className="select">
                        Select your book from your computer
                        <input type="file" onChange={e => setBookfile(e.target.files[0])} />
                    </label>
                    <button className="button" type="submit">Send your story</button>
                </form>
                <Link to="/dashboard" className="cancel-link">Cancel</Link>
            </section>
            <img src={typewriter} alt="Writing"/>
            
        </div>
        <footer className="footer"><Link className="about-link" to="/about"> ABOUT IT </Link></footer>
        </>
    )
}
