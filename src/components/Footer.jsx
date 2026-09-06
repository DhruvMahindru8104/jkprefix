
import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/images/finallogo.png";

const Footer = () => {
  return (
    <footer className="bg-[#F6F5F0] text-[#3E3118]">

      <div className="max-w-7xl mx-auto px-6 py-4">

        {/* ==============================
            LOGO
        ============================== */}

        <div className="flex flex-col items-center text-center">

          <Link to="/">
            <img
              src={logo}
              alt="JK Prifix"
              className="
                w-auto
                h-12
                sm:h-14
                object-contain
              "
            />
          </Link>


          {/* ==============================
              NAVIGATION
          ============================== */}

          <nav
            className="
              flex
              flex-wrap
              justify-center
              gap-x-8
              gap-y-3
              mt-8
            "
          >

            <Link
              to="/"
              className="
                text-sm
                text-[#3E3118]/65
                hover:text-[#B68827]
                transition-colors
              "
            >
              Home
            </Link>

            <Link
              to={'/products'}
              className="
                text-sm
                text-[#3E3118]/65
                hover:text-[#B68827]
                transition-colors
              "
            >
              Products
            </Link>

            <a
              href="/#features"
              className="
                text-sm
                text-[#3E3118]/65
                hover:text-[#B68827]
                transition-colors
              "
            >
              Features
            </a>

            <Link
             to={'/contact'}
              className="
                text-sm
                text-[#3E3118]/65
                hover:text-[#B68827]
                transition-colors
              "
            >
              Contact
            </Link>

          </nav>

        </div>


        {/* ==============================
            DIVIDER
        ============================== */}

        <div className="my-8 border-t border-[#3E3118]/10" />


        {/* ==============================
            BOTTOM
        ============================== */}

        <div
          className="
            flex
            flex-col
            items-center
            gap-5
            sm:flex-row
            sm:justify-between
          "
        >

          {/* Copyright */}

          <p className="text-xs text-[#3E3118]/45">
            © {new Date().getFullYear()} JK Prifix. All rights reserved.
          </p>


          {/* Phone */}

          <a
            href="tel:+918872316415"
            className="
              text-xs
              text-[#3E3118]/55
              hover:text-[#B68827]
              transition-colors
            "
          >
            +91 88723 16415
          </a>


          {/* Social Icons */}

          <div className="flex items-center gap-5">

          

            


            {/* Instagram */}

            <a
              href="https://www.instagram.com/jkprifix?igsi=M2FnZHRsb2k4ZHAw"
              target="_blank"
              aria-label="Instagram"
              className="
                text-[#3E3118]/55
                hover:text-[#B68827]
                transition-colors
              "
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="5"
                />

                <circle
                  cx="12"
                  cy="12"
                  r="4"
                />

                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </a>


            {/* WhatsApp */}

            <a
              href="https://wa.me/918872316415"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="
                text-[#3E3118]/55
                hover:text-[#B68827]
                transition-colors
              "
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M20.52 3.48A11.82 11.82 0 0012.04 0C5.5 0 .18 5.32.18 11.86c0 2.09.55 4.13 1.59 5.93L.1 24l6.35-1.66a11.86 11.86 0 005.59 1.42h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.24-6.14-3.39-8.42zM12.05 21.76h-.01a9.88 9.88 0 01-5.04-1.38l-.36-.21-3.77.99 1.01-3.67-.23-.38a9.86 9.86 0 01-1.51-5.25C2.14 6.42 6.58 1.98 12.05 1.98c2.65 0 5.14 1.03 7.02 2.91a9.87 9.87 0 012.9 7.02c0 5.47-4.45 9.91-9.92 9.91zm5.43-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.67-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"
                />
              </svg>
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;

