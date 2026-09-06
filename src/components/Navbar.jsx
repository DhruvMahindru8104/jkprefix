
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/images/finallogo.png";
import { Link } from "react-router-dom";
import JKprifixBusinessCard from "./businesscard";


const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const [showBusinessCard, setShowBusinessCard] = useState(false);


  /* =========================================================
     MOBILE NAVBAR
  ========================================================= */

  const toggleNavbar = () => {
    setOpenNavbar((openNavbar) => !openNavbar);
  };


  /* =========================================================
     BUSINESS CARD
  ========================================================= */

  const openBusinessCard = () => {
    setShowBusinessCard(true);
    setOpenNavbar(false);
  };


  const closeBusinessCard = () => {
    setShowBusinessCard(false);
  };


  return (
    <>
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="absolute top-0 inset-x-0 z-50 h-24 flex items-center">

        <div
          className="
            mx-auto
            lg:max-w-7xl
            w-full
            px-5
            sm:px-10
            md:px-12
            lg:px-5
            h-full
          "
        >

          <nav className="flex justify-between items-center h-full">


            {/* =================================================
                LOGO
            ================================================= */}

            <div className="flex min-w-max items-center relative z-[60]">

              <Link
                to="/"
                onClick={() => setOpenNavbar(false)}
                className="flex items-center"
              >

                <img
                  src={logo}
                  alt="Wall Putty Logo"
                  className="
                    w-[120px]
                    sm:w-[135px]
                    h-auto
                    object-contain
                  "
                />

              </Link>

            </div>


            {/* =================================================
                NAVIGATION
            ================================================= */}

            <div
              className={`
                flex flex-col space-y-10 inset-0 fixed top-0
                h-[100dvh]
                bg-[#F6F5F0]
                lg:!bg-transparent
                py-20 px-5 sm:px-10 md:px-14
                transition-all ease-linear duration-300

                lg:flex-row lg:flex-1 lg:py-0 lg:px-0
                lg:space-y-0 lg:gap-x-10 lg:relative
                lg:top-0 lg:h-full lg:items-center
                lg:justify-between lg:w-max

                ${
                  openNavbar
                    ? "visible opacity-100 translate-y-0"
                    : "-translate-y-9 opacity-0 invisible lg:translate-y-0 lg:visible lg:opacity-100"
                }
              `}
            >

              {/* =================================================
                  MENU ITEMS
              ================================================= */}

              <ul
                className="
                  flex flex-col gap-y-5
                  text-[#3E3118]
                  lg:items-center lg:flex-row
                  lg:gap-x-8 lg:h-full
                  lg:justify-center lg:flex-1
                "
              >

                {/* HOME */}

                <li>
                  <Link
                    to="/"
                    onClick={() => setOpenNavbar(false)}
                    className="
                      transition-all
                      duration-300
                      ease-linear
                      hover:text-[#B68827]
                    "
                  >
                    Home
                  </Link>
                </li>


                {/* PRODUCTS */}

                <li>
                  <Link
                    to="/products"
                    onClick={() => setOpenNavbar(false)}
                    className="
                      transition-all
                      duration-300
                      ease-linear
                      hover:text-[#B68827]
                    "
                  >
                    Products
                  </Link>
                </li>


                {/* =================================================
                    BUSINESS CARD
                ================================================= */}

                <li>

                  <button
                    type="button"

                    onClick={openBusinessCard}

                    className="
                      transition-all
                      duration-300
                      ease-linear
                      hover:text-[#B68827]
                    "
                  >
                    Business Card
                  </button>

                </li>


                {/* CONTACT */}

                <li>
                  <Link
                    to="/contact"
                    onClick={() => setOpenNavbar(false)}
                    className="
                      transition-all
                      duration-300
                      ease-linear
                      hover:text-[#B68827]
                    "
                  >
                    Contact
                  </Link>
                </li>

              </ul>


              {/* =================================================
                  CTA
              ================================================= */}

              <div
                className="
                  w-full
                  flex
                  sm:w-max
                  lg:min-w-max
                  lg:items-center
                "
              >

                <Link
                  to="/contact"
                  onClick={() => setOpenNavbar(false)}

                  className="
                    flex
                    justify-center
                    gap-x-3
                    items-center
                    px-5
                    py-2.5
                    rounded-lg
                    bg-[#3E3118]
                    text-[#F6F5F0]
                    transition-all
                    duration-300
                    hover:bg-[#B68827]
                    hover:text-[#3E3118]
                  "
                >

                  Get in touch

                  <span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >

                      <path
                        fillRule="evenodd"
                        d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                        clipRule="evenodd"
                      />

                    </svg>

                  </span>

                </Link>

              </div>

            </div>


            {/* =================================================
                MOBILE MENU BUTTON
            ================================================= */}

            <div
              className="
                flex
                items-center
                justify-end
                relative
                z-[60]
                lg:hidden
              "
            >

              <button
                onClick={toggleNavbar}

                className="
                  p-3
                  rounded-full
                  bg-[#3E3118]
                  outline-none
                  w-12
                  aspect-square
                  flex
                  flex-col
                  relative
                  justify-center
                  items-center
                  transition-all
                  duration-300
                  hover:bg-[#B68827]
                "
              >

                <span className="sr-only">
                  Toggle navbar
                </span>


                {/* TOP LINE */}

                <span
                  className={`
                    w-6
                    h-0.5
                    rounded-full
                    bg-[#F6F5F0]
                    transition-transform
                    duration-300
                    ease-linear

                    ${
                      openNavbar
                        ? "translate-y-1.5 rotate-[40deg]"
                        : ""
                    }
                  `}
                />


                {/* MIDDLE LINE */}

                <span
                  className={`
                    w-6
                    origin-center
                    mt-1
                    h-0.5
                    rounded-full
                    bg-[#F6F5F0]
                    transition-all
                    duration-300
                    ease-linear

                    ${
                      openNavbar
                        ? "scale-x-0 opacity-0"
                        : ""
                    }
                  `}
                />


                {/* BOTTOM LINE */}

                <span
                  className={`
                    w-6
                    mt-1
                    h-0.5
                    rounded-full
                    bg-[#F6F5F0]
                    transition-all
                    duration-300
                    ease-linear

                    ${
                      openNavbar
                        ? "-translate-y-1.5 -rotate-[40deg]"
                        : ""
                    }
                  `}
                />

              </button>

            </div>

          </nav>

        </div>

      </header>


      {/* =======================================================
          BUSINESS CARD MODAL
      ======================================================= */}

      <AnimatePresence>

        {showBusinessCard && (

          <motion.div
            initial={{
              opacity: 0,
            }}

            animate={{
              opacity: 1,
            }}

            exit={{
              opacity: 0,
            }}

            transition={{
              duration: 0.25,
            }}

            onClick={closeBusinessCard}

            className="
              fixed
              inset-0
              z-[100]
              flex
              items-center
              justify-center
              bg-black/75
              backdrop-blur-sm
              p-5
            "
          >

            {/* =================================================
                CLOSE BUTTON
            ================================================= */}

            <motion.button
              initial={{
                opacity: 0,
                scale: 0.8,
              }}

              animate={{
                opacity: 1,
                scale: 1,
              }}

              exit={{
                opacity: 0,
                scale: 0.8,
              }}

              transition={{
                delay: 0.15,
              }}

              onClick={closeBusinessCard}

              className="
                absolute
                top-5
                right-5
                z-[110]
                w-11
                h-11
                rounded-full
                flex
                items-center
                justify-center
                bg-[#F6F5F0]
                text-[#3E3118]
                shadow-lg
                transition-all
                duration-300
                hover:bg-[#B68827]
                hover:scale-105
              "
            >

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.8"
                stroke="currentColor"
                className="w-5 h-5"
              >

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />

              </svg>

            </motion.button>


            {/* =================================================
                BUSINESS CARD CONTAINER
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.85,
                y: 30,
              }}

              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}

              exit={{
                opacity: 0,
                scale: 0.85,
                y: 30,
              }}

              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}

              onClick={(e) => e.stopPropagation()}

              className="
                relative
                flex
                items-center
                justify-center
                max-w-full
              "
            >

              <JKprifixBusinessCard />

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </>
  );
};


export default Navbar;

