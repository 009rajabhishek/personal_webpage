import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import "../styles/layout.scss"

const Layout = (props) => {

    return (
      <React.Fragment>
        <div className="layout">
            <Header home={props.home} />
            {props.home ?
            <main>{props.children}</main>:
          <body>{props.children}</body>}
            <Footer />
        </div>
        </React.Fragment>
    )
}
Layout.defautProps = {
    home: false
  }

export default Layout
