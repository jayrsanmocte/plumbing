import React, { useState } from 'react';

const Navbar = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <div className="navdiv">
      <nav className="navbar navbar-expand-lg">
        <div className="container d-flex justify-content-center justify-content-md-start"> {/* Updated container */}
          <a className="navbar-brand me-2" href="https://mdbgo.com/">
            <img
              src="https://cdn.vectorstock.com/i/preview-1x/80/30/plumber-mascot-logo-design-vector-45838030.jpg"
              height={175}
              width={175}
              alt="MDB Logo"
              loading="lazy"
              style={{ marginTop: '-1px' }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNav}
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div
            className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}
            id="navbarButtonsExample"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <div className="d-flex align-items-center">
                  <button type="button" className="btn btn-warning me-3">
                    About Us
                  </button>
                  <button type="button" className="btn btn-warning me-3">
                    Media
                  </button>
                  <div className="dropdown">
                    <a
                      className="btn btn-warning dropdown-toggle"
                      href="#"
                      role="button"
                      id="dropdownMenuLink"
                      data-mdb-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Services
                    </a>

                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              <ul>
                <button type="button" className="btn btn-warning me-3">
                  Inquire Now
                </button>
                <button type="button" className="btn btn-warning me-3">
                  <img src="image/too.png" alt="" width={20} />
                </button>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
