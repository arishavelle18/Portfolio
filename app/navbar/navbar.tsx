import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // preserve previous value and restore on cleanup
    const prev = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : prev;
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <nav className={`top-nav ${open ? "open" : ""}`}>
      <div className="nav-inner">
        <div className="nav-logo">Karl.Dev</div>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
        >
          ☰
        </button>

        <ul className="nav-links" onClick={() => setOpen(false)}>
          <li><a href="#summary">Summary</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#tech">Tech</a></li>
          {/* <li><a href="#contact">Contact</a></li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;