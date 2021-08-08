import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import "../styles/NavigationBar.scss"


const NavigationBar = () => {


  return (
        <Navbar variant="dark" expand="lg" className="NavbarStyle">
            <Navbar.Brand className="NNB" href="/">
            Abhishek
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Link className="NavigationBarLinks" to="/">Home</Link>
                    <Link className="NavigationBarLinks" to="/contacts/">Contacts</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default NavigationBar
