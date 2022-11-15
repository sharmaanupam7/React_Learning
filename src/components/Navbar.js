/* eslint-disable react/no-typos */
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

export default function Navbar(props) {

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className={`navbar-brand text-${props.mode === 'light' ? 'dark' : 'light'}`} to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link text-${props.mode === 'light' ? 'dark' : 'light'}`} aria-current="page" to="/">{props.homeText}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link text-${props.mode === 'light' ? 'dark' : 'light'}`} aria-current="page" to="/about_textUtils">{props.aboutText}</Link>
                        </li>
                    </ul>

                    {/* for later use */}
                    {/* <form className="d-flex mx-4">
                        <input className="form-control me-2" type="search" placeholder={props.search_input} aria-label="Search"></input>
                        <button className={`btn btn-outline-warning text-${props.mode === 'light'? 'dark':'light'}`} type="button">{props.searchText}</button>
                    </form> */}

                    {/* Dark Mode */}
                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} mx-2`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" aria-checked = "true" id="flexSwitchCheckDefault"></input>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">ENABLE DARK MODE</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    homeText: PropTypes.string,
    aboutText: PropTypes.string,
    searchText: PropTypes.string,
    search_input: PropTypes.string,
}

Navbar.defaultProps = {
    title: "TextUtils",
    aboutText: "About",
    search_input: "Input Your Text Here"
}