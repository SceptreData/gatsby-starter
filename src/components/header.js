import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

import Image from "./image"
import Nav from "./nav"
import DropNav from "./DropNav"

const Header = ({ siteTitle }) => {
  // let [isStuck, setStuck] = useState(false)
  let [isMobileNavOpen, setMobileNavOpen] = useState(false)

  let toggleList = () => {
    setMobileNavOpen(!isMobileNavOpen)
  }

  return (
    <header className="site-header">
      <div className="container">
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
          className="branding"
        >
          <div className="header-logo">
            <Image name="logo.png" />
          </div>

          <h1 style={{ margin: 0 }}>{siteTitle}</h1>
        </Link>
        <Nav mobileNav={isMobileNavOpen} />
        <DropNav />
      </div>
    </header>
  )
}

// class Header extends React.component {
//   constructor(){
//     super()
//   }

//   render(){
//    return (
//     <header className="site-header">
//       <div className="container">
//         <Link
//           to="/"
//           style={{
//             color: `white`,
//             textDecoration: `none`,
//           }}
//           className="branding"
//         >
//           <div className="header-logo">
//             <Image name="logo-sm.png" />
//           </div>

//           <h1 style={{ margin: 0 }}>{siteTitle}</h1>
//         </Link>
//         <Nav mobileNav={isMobileNavOpen}/>
//       </div>
//     </header>
//    )
//   }
// }

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
