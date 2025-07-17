import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div class="container p-2">
        {/* Add d-inline-block and an explicit style for max-width on the <a> */}
        <Link class="navbar-brand d-inline-block" to="/" style={{ maxWidth: '150px' }}> 
          <img
            src="media/images/logo.svg"
            style={{ width: "100%", height: "auto", display: "block" }} // Ensure image fills its parent a tag
            alt="Logo"
          />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
  <a
    className="nav-link active"
    href="http://localhost:3000"  // replace with actual dashboard URL
    target="_blank"              // optional: opens in new tab
    rel="noopener noreferrer"   // recommended for security
  >
    Dashboard
  </a>
</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;