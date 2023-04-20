import React from 'react'
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'

const Navbar = () => {
    let location = useLocation();
    let navigate = useNavigate();
    // const [fileId, setFileId] = useState(0)
    const [username, setusername] = useState('')
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/login')
        }
        else {
            fetch('http://localhost:9191/user/name', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}` || ''
                }
            }).then(response => {
                //console.log(response)
                return response.json()
            }).then(data => {
                console.log(data)
                //setFileList(data)
                setusername(data.user_name)
            })

        }
    }, [])
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('pass');
        navigate('/login')
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">PID Review Rotation Tracker</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} aria-current="page" to="/about">About</Link>
                        </li>
                        {localStorage.getItem('token') ? <>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/dev" ? "active" : ""}`} aria-current="page" to="/dev">Developer</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/rev" ? "active" : ""}`} aria-current="page" to="/rev">Reviewer</Link>
                            </li></> : <></>}
                    </ul>

                    {localStorage.getItem('token') ?
                        <div style={{ color: "white", marginRight: "10px" }}>Logged in as: <b>{username} </b></div> : <></>
                    }
                    {!localStorage.getItem('token')
                        ?
                        <form className="d-flex">
                            <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
                            <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
                        </form>
                        :
                        <button onClick={handleLogout} className='btn btn-primary mx-1'>Logout</button>
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar