import React, { Component } from 'react'
import {NavLink} from "react-router-dom";
export default class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg  fixed-top shadow-sm bg-secondary" id="mainNav">
                <div className="container px-5 ">
                    <NavLink className="navbar-brand fw-bold text-white" to="/">News</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                <i className="bi-list" />
                    </button>
                    <div className="collapse navbar-collapse float-end" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0 text-white">
                            <li className="nav-item">
                                <NavLink className="nav-link me-lg-3 text-white" to="/listnews">Danh sách</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link me-lg-3 text-white" to="/news">Tin tức</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link me-lg-3 text-white" to="/contact">Liên hệ</NavLink>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        )
    }
}
