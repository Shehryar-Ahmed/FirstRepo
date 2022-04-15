import React from "react";

export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-dark bg-${props.checked.bg}`}
      >
        <div className="container-fluid">
          <a className={`navbar-brand text-${props.checked.fg}`} href="/">
            <em>TextPlay</em>
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="cbox"
                checked={props.checked.stat}
                onChange={props.onchange}
              />
              <label
                className={`form-check-label text-${props.checked.fg}`}
                htmlFor="cbox"
              >
                Enable Dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
