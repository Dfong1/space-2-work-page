import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg py-4 position-sticky"
      style={{ backgroundColor: "#f5f5f5ff", top: 0}}
    >
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <Image
            src="/images/logo-space2work.png"
            width={150}
            height={50}
            alt="Logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-3">
            <li className="nav-item">
              <a className="nav-link h4 text-black" href="#">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link h4 text-black" href="#">
                Servicios
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link h4 text-black" href="#">
                Conócenos
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link h4"
                style={{ color: "rgb(41, 177, 255)" }}
                href="#"
              >
                Contáctanos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
