import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import "../styles/header.scss"
import NavigationBar from "./NavigationBar"
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'



const Header = (props) => {
  const data = useStaticQuery(graphql`
        query {
            file(relativePath: {eq: "images/test_img.jpg"}) {
                childImageSharp {
                  fluid(maxWidth: 2000,quality: 90) {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
        }
    `)
const Ishome= props.home
return (
  <header>
  <NavigationBar/>
  </header>
)
}
export default Header
