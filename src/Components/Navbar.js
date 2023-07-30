import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";


export function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode}   bg-${props.mode} ` } style={{ color : props.mode === 'dark' ? 'white' : 'dark'}} 
       style1={{backgroundColor: props.mode === '' ? '#005893' : 'white'}}>

      <div className="container-fluid">
              {/* <a className="navbar-brand" href="/">Navbar</a> */}
              <Link className="navbar-brand" to="/">Navbar</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                 <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                   <li className="nav-item">  
                     {/* <a className="nav-link active" aria-current="page" href="">Home</a> */}
                     <Link className="navbar-brand" to="/">Home</Link>
                     <Link className="navbar-brand" to="/About">About</Link>
                     {/* <Link className="nav-link active" aria-current="page" to="/Home.js">Home</Link> */}
                   </li>
                   <li className="nav-item">
                     {/* <Link className="nav-link" to = "/About.js">About</Link> */}
                     </li> 
                     {/* <li className="nav-item">
                     <a className="nav-link" href="/">{props.Contact}</a>
                     </li> */}
                    </ul> 
                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'black' : 'light'}`} style = { {color : props.mode === 'dark' ? 'white' : 'dark'}}>
                    <input className="form-check-input mx-3" onClick={props.enableBlueMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label "  htmlFor="flexSwitchCheckDefault">Enable Blue Mode</label>
                  </div>
                <div className={`form-check form-switch text-${props.mode === 'light' ? 'black' : 'light'}`}  >
                    <input className="form-check-input mx-3" onClick={props.enableDarkMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label "  htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                  </div>
                </div>
        </div>
    </nav>
    
  )
}


Navbar.propTypes = {
    Home: PropTypes.string,
    Contact: PropTypes.string
    } 


Navbar.defaultProps = {
    Home: "Homeees",
    Contact: "Contact1"
};