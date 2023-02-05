import React, { useState } from "react";
import PropTypes from "prop-types";
export default function Navbar(props) {

 
  

  return (
    <>
      
      <nav className={`navbar navbar-expand-lg font-fam navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
             {props.logo}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  {props.navlink1}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  {props.navlink2}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  {props.navlink3}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  {props.navlink4}
                </a>
              </li>
              <li className="nav-item dropdown">
                {/* <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {props.navDrop}
                </a> */}
                {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/">
                      {props.droplink1}
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      {props.dropink2}
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      {props.droplink3}
                    </a>
                  </li>
                </ul> */}
              </li>
            </ul>
            <div className={`form-check form-switch text-${props.mode=='light'?'dark':'light'}`}>
  <input className="form-check-input " type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.enableMode}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.activeMode}</label>
</div>
          </div>
        </div>
      </nav>
    </>
  );
}


// const Navbar = () => {
//   const [isOpen, setIsOpen] = React.useState(false);

//   return (
//     <nav className="navbar">
//       <div className="navbar-header">
//         <button
//           className="navbar-toggle"
//           type="button"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <span className="icon-bar"></span>
//           <span className="icon-bar"></span>
//           <span className="icon-bar"></span>
//         </button>
//         <a className="navbar-brand" href="#">
//           Your Brand
//         </a>
//       </div>
//       <div
//         className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
//         id="navbarSupportedContent"
//       >
//         <ul className="navbar-nav ml-auto">
//           <li className="nav-item">
//             <a className="nav-link" href="#">
//               Home
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">
//               About
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">
//               Services
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">
//               Contact
//             </a>
//           </li>
//         </ul>
//         <form className="form-inline my-2 my-lg-0">
//           <input
//             className="form-control mr-sm-2"
//             type="search"
//             placeholder="Search"
//             aria-label="Search"
//           />
//           <button
//             className="btn btn-outline-success my-2 my-sm-0"
//             type="submit"
//           >
//             Search
//           </button>
//         </form>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// Helps to set value of props

Navbar.propTypes = {
  navlink1: PropTypes.string.isRequired,
  navlink2: PropTypes.string.isRequired,
  navlink3: PropTypes.string.isRequired,
  navlink4: PropTypes.string.isRequired,
  logo:PropTypes.string.isRequired
};

// in case props are not set then this will be default values
Navbar.defaultProps = {
  navlink1: "Home",
  navlink2: "About",
};
