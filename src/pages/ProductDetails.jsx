import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import epoxyGrout from "../assets/images/epoxy grout.png";
import pop from "../assets/images/pop.png";
import tileGrout from "../assets/images/tile groute.png";
import tileCleaner from "../assets/images/tilecleaner.png";
import wallPutty from "../assets/images/wall putty.png";

import t1jk11 from "../assets/images/t1jk11.png";
import t1jk111 from "../assets/images/t1jk111.png";
import t2jk22 from "../assets/images/t2jk22.png";
import t2jk222 from "../assets/images/t2jk222.png";
import t3jk33 from "../assets/images/t3jk33.png";
import t3jk333 from "../assets/images/t3jk333.png";
import t4jk44 from "../assets/images/t4jk44.png";

import tileAdhesiveVideo from "../assets/videos/tileadhesive.mp4";
import wallPuttyVideo from "../assets/videos/wallputty.mp4";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* =========================================================
   PRODUCT DATA
========================================================= */

const products = [
  {
    image: wallPutty,
    name: "Wall Putty",
    slug: "wall-putty",
    category: "Wall Finishing",
    description:
      "High-quality wall putty designed to provide smooth, durable and beautiful wall surfaces.",
    video: wallPuttyVideo,
  },

  {
    image: t1jk11,
    name: "Tile Adhesive T1 JK11",
    slug: "tile-adhesive-t1-jk11",
    category: "Tile Adhesive",
    description:
      "Reliable tile adhesive designed for strong bonding and easy application.",
    video: tileAdhesiveVideo,
  },

  {
    image: t1jk111,
    name: "Tile Adhesive T1 JK111",
    slug: "tile-adhesive-t1-jk111",
    category: "Tile Adhesive",
    description:
      "Quality tile adhesive providing excellent adhesion and dependable performance.",
    video: tileAdhesiveVideo,
  },

  {
    image: t2jk22,
    name: "Tile Adhesive T2 JK22",
    slug: "tile-adhesive-t2-jk22",
    category: "Tile Adhesive",
    description:
      "Strong tile adhesive suitable for reliable tile installation on multiple surfaces.",
    video: tileAdhesiveVideo,
  },

  {
    image: t2jk222,
    name: "Tile Adhesive T2 JK222",
    slug: "tile-adhesive-t2-jk222",
    category: "Tile Adhesive",
    description:
      "High-performance adhesive designed for secure and long-lasting tile installation.",
    video: tileAdhesiveVideo,
  },

  {
    image: tileGrout,
    name: "Tile Grout",
    slug: "tile-grout",
    category: "Grouting",
    description:
      "Tile grout designed to provide a clean, durable and professional finish between tiles.",
  },

  {
    image: t3jk33,
    name: "Tile Adhesive T3 JK33",
    slug: "tile-adhesive-t3-jk33",
    category: "Tile Adhesive",
    description:
      "Advanced tile adhesive designed for strong bonding and long-lasting performance.",
    video: tileAdhesiveVideo,
  },

  {
    image: t3jk333,
    name: "Tile Adhesive T3 JK333",
    slug: "tile-adhesive-t3-jk333",
    category: "Tile Adhesive",
    description:
      "Premium adhesive solution for dependable tile installation and professional results.",
    video: tileAdhesiveVideo,
  },

  {
    image: epoxyGrout,
    name: "Epoxy Grout",
    slug: "epoxy-grout",
    category: "Grouting",
    description:
      "Durable epoxy grout designed for strong, clean and long-lasting tile joints.",
  },

  {
    image: pop,
    name: "POP",
    slug: "pop",
    category: "Construction Material",
    description:
      "POP solution suitable for smooth finishing and interior construction applications.",
  },

  {
    image: tileCleaner,
    name: "Tile Cleaner",
    slug: "tile-cleaner",
    category: "Tile Care",
    description:
      "Tile cleaning solution designed to help maintain clean and attractive tile surfaces.",
  },

  {
    image: t4jk44,
    name: "Tile Adhesive T4 JK44",
    slug: "tile-adhesive-t4-jk44",
    category: "Tile Adhesive",
    description:
      "High-strength tile adhesive designed for demanding tile installation applications.",
    video: tileAdhesiveVideo,
  },
];

/* =========================================================
   PRODUCT DETAILS PAGE
========================================================= */

const ProductDetails = () => {
  const { slug } = useParams();

  const product = products.find(
    (item) => item.slug === slug
  );

  /* =======================================================
     STATES
  ======================================================= */

  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");

  /* =======================================================
     WHATSAPP
  ======================================================= */

  const handleWhatsApp = (e) => {
    e.preventDefault();

    if (!customerName.trim() || !customerPhone.trim()) {
      alert("Please enter your name and phone number.");
      return;
    }

    const message = `
Hello JK Prifix,

I am interested in your product.

Product: ${product.name}
Category: ${product.category}

Customer Name: ${customerName}
Phone Number: ${customerPhone}

Product Details:
${product.description}

Please share more information about this product and its price.

Thank you.
    `.trim();

    const whatsappNumber = "918872316415";

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=` +
      encodeURIComponent(message);

    window.open(whatsappURL, "_blank");

    setIsBuyModalOpen(false);

    setCustomerName("");
    setCustomerPhone("");
  };

  /* =======================================================
     PRODUCT NOT FOUND
  ======================================================= */

  if (!product) {
    return (
      <>
        <Navbar />

        <section
          className="
            min-h-screen
            flex
            items-center
            justify-center
            bg-[#F6F5F0]
            px-5
          "
        >
          <div className="text-center">

            <h1
              className="
                text-4xl
                font-semibold
                text-[#3E3118]
              "
            >
              Product Not Found
            </h1>

            <p
              className="
                mt-4
                text-[#3E3118]/65
              "
            >
              The product you are looking for does not exist.
            </p>

            <Link
              to="/"
              className="
                inline-flex
                mt-8
                px-6
                h-12
                items-center
                justify-center
                rounded-full
                bg-[#3E3118]
                text-[#F6F5F0]
                hover:bg-[#B68827]
                hover:text-[#3E3118]
                transition-all
              "
            >
              Back to Home
            </Link>

          </div>
        </section>

        <Footer />
      </>
    );
  }

  /* =======================================================
     MAIN PAGE
  ======================================================= */

  return (
    <>
      <Navbar />

      <main
        className="
          min-h-screen
          bg-[#F6F5F0]
          pt-28
          pb-20
        "
      >
        <div
          className="
            max-w-7xl
            mx-auto
            px-5
            sm:px-10
            md:px-12
            lg:px-5
          "
        >

          {/* =================================================
              BACK BUTTON
          ================================================= */}

          <Link
            to="/"
            className="
              inline-flex
              items-center
              gap-2
              text-[#3E3118]
              hover:text-[#B68827]
              transition-colors
              mb-10
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M17 10a.75.75 0 01-.75.75H5.56l3.22 3.22a.75.75 0 11-1.06 1.06l-4.5-4.5a.75.75 0 010-1.06l4.5-4.5a.75.75 0 111.06 1.06l-3.22 3.22h10.69A.75.75 0 0117 10z"
                clipRule="evenodd"
              />
            </svg>

            Back to Products
          </Link>

          {/* =================================================
              PRODUCT SECTION
          ================================================= */}

          <div
            className="
              grid
              lg:grid-cols-2
              gap-12
              lg:gap-20
              items-center
            "
          >

            {/* =================================================
                PRODUCT IMAGE
            ================================================= */}

            <div
              className="
                rounded-3xl
                bg-white
                border
                border-[#B68827]/20
                overflow-hidden
                shadow-sm
              "
            >
              <img
                src={product.image}
                alt={product.name}
                className="
                  w-full
                  h-auto
                  object-contain
                  max-h-[600px]
                "
              />
            </div>

            {/* =================================================
                PRODUCT INFORMATION
            ================================================= */}

            <div>

              {/* CATEGORY */}

              <span
                className="
                  inline-flex
                  items-center
                  px-4
                  py-2
                  rounded-full
                  bg-[#B68827]/10
                  border
                  border-[#B68827]/30
                  text-[#3E3118]
                  text-sm
                  font-medium
                "
              >
                {product.category}
              </span>

              {/* PRODUCT NAME */}

              <h1
                className="
                  mt-6
                  text-4xl
                  sm:text-5xl
                  lg:text-6xl
                  font-semibold
                  leading-tight
                  text-[#3E3118]
                "
              >
                {product.name}
              </h1>

              {/* DESCRIPTION */}

              <p
                className="
                  mt-6
                  text-lg
                  leading-relaxed
                  text-[#3E3118]/70
                  max-w-xl
                "
              >
                {product.description}
              </p>

              {/* DIVIDER */}

              <div
                className="
                  h-px
                  bg-[#B68827]/20
                  my-8
                "
              />

              {/* BENEFITS */}

              <h2
                className="
                  text-xl
                  font-semibold
                  text-[#3E3118]
                "
              >
                Product Benefits
              </h2>

              <div
                className="
                  grid
                  sm:grid-cols-2
                  gap-4
                  mt-5
                "
              >

                {[
                  "Strong Bond",
                  "Excellent Adhesion",
                  "Easy to Apply",
                  "Water Resistant",
                  "High Strength",
                  "Long Lasting Performance",
                ].map((feature) => (

                  <div
                    key={feature}
                    className="
                      flex
                      items-center
                      gap-3
                      text-[#3E3118]/75
                    "
                  >

                    <span
                      className="
                        flex
                        items-center
                        justify-center
                        w-6
                        h-6
                        rounded-full
                        bg-[#B68827]
                        text-[#F6F5F0]
                        text-xs
                        shrink-0
                      "
                    >
                      ✓
                    </span>

                    {feature}

                  </div>

                ))}

              </div>

              {/* =================================================
                  BUTTONS
              ================================================= */}

              <div
                className="
                  flex
                  flex-col
                  sm:flex-row
                  gap-4
                  mt-10
                "
              >

                {/* BUY NOW */}

                <button
                  onClick={() => setIsBuyModalOpen(true)}
                  className="
                    px-8
                    h-12
                    rounded-full
                    bg-[#3E3118]
                    text-[#F6F5F0]
                    flex
                    items-center
                    justify-center
                    gap-2
                    hover:bg-[#B68827]
                    hover:text-[#3E3118]
                    transition-all
                    font-medium
                  "
                >

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-5 h-5"
                  >
                    <path d="M3 3h2l2.4 12.2a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 1.9-1.4L21 8H6" />
                    <circle cx="10" cy="20" r="1" />
                    <circle cx="18" cy="20" r="1" />
                  </svg>

                  Buy Now

                </button>

                {/* VIDEO BUTTON */}

                {product.video && (
                  <button
                    onClick={() =>
                      setIsVideoModalOpen(true)
                    }
                    className="
                      px-8
                      h-12
                      rounded-full
                      border
                      border-[#B68827]
                      text-[#3E3118]
                      flex
                      items-center
                      justify-center
                      gap-2
                      hover:bg-[#B68827]
                      transition-all
                      font-medium
                    "
                  >

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M8 5.14v13.72a1 1 0 0 0 1.52.86l10.1-6.86a1 1 0 0 0 0-1.72L9.52 4.28A1 1 0 0 0 8 5.14z" />
                    </svg>

                    Watch Video

                  </button>
                )}

              </div>

            </div>

          </div>

        </div>
      </main>

      {/* =====================================================
          BUY NOW MODAL
      ===================================================== */}

      {isBuyModalOpen && (
        <div
          className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-[#3E3118]/60
            backdrop-blur-sm
            px-5
          "
          onClick={() =>
            setIsBuyModalOpen(false)
          }
        >

          <div
            className="
              relative
              w-full
              max-w-md
              rounded-3xl
              bg-[#F6F5F0]
              p-7
              sm:p-9
              shadow-2xl
            "
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            {/* CLOSE */}

            <button
              onClick={() =>
                setIsBuyModalOpen(false)
              }
              className="
                absolute
                top-5
                right-5
                w-9
                h-9
                rounded-full
                flex
                items-center
                justify-center
                text-[#3E3118]/60
                hover:bg-[#B68827]/15
                hover:text-[#3E3118]
                transition
              "
            >

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-5 h-5"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>

            </button>

            {/* HEADING */}

            <div className="mb-7">

              <span
                className="
                  inline-flex
                  px-3
                  py-1.5
                  rounded-full
                  bg-[#B68827]/10
                  border
                  border-[#B68827]/30
                  text-[#3E3118]
                  text-xs
                  font-medium
                "
              >
                Product Enquiry
              </span>

              <h2
                className="
                  mt-4
                  text-3xl
                  font-semibold
                  text-[#3E3118]
                "
              >
                Interested in this product?
              </h2>

              <p
                className="
                  mt-2
                  text-sm
                  leading-relaxed
                  text-[#3E3118]/60
                "
              >
                Enter your details and we will
                connect with you on WhatsApp.
              </p>

            </div>

            {/* FORM */}

            <form
              onSubmit={handleWhatsApp}
              className="space-y-5"
            >

              {/* NAME */}

              <div>

                <label
                  className="
                    block
                    mb-2
                    text-sm
                    font-medium
                    text-[#3E3118]
                  "
                >
                  Name
                </label>

                <input
                  type="text"
                  value={customerName}
                  onChange={(e) =>
                    setCustomerName(e.target.value)
                  }
                  placeholder="Enter your name"
                  required
                  className="
                    w-full
                    h-12
                    px-4
                    rounded-xl
                    border
                    border-[#3E3118]/15
                    bg-white
                    text-[#3E3118]
                    outline-none
                    focus:border-[#B68827]
                    focus:ring-2
                    focus:ring-[#B68827]/20
                    transition
                  "
                />

              </div>

              {/* PHONE */}

              <div>

                <label
                  className="
                    block
                    mb-2
                    text-sm
                    font-medium
                    text-[#3E3118]
                  "
                >
                  Phone Number
                </label>

                <input
                  type="tel"
                  value={customerPhone}
                  onChange={(e) =>
                    setCustomerPhone(e.target.value)
                  }
                  placeholder="Enter your phone number"
                  required
                  pattern="[0-9]{10}"
                  maxLength="10"
                  inputMode="numeric"
                  className="
                    w-full
                    h-12
                    px-4
                    rounded-xl
                    border
                    border-[#3E3118]/15
                    bg-white
                    text-[#3E3118]
                    outline-none
                    focus:border-[#B68827]
                    focus:ring-2
                    focus:ring-[#B68827]/20
                    transition
                  "
                />

              </div>

              {/* PRODUCT */}

              <div
                className="
                  rounded-xl
                  bg-[#B68827]/10
                  border
                  border-[#B68827]/20
                  p-4
                "
              >

                <p
                  className="
                    text-xs
                    text-[#3E3118]/55
                  "
                >
                  Product
                </p>

                <p
                  className="
                    mt-1
                    font-semibold
                    text-[#3E3118]
                  "
                >
                  {product.name}
                </p>

              </div>

              {/* SEND BUTTON */}

              <button
                type="submit"
                className="
                  w-full
                  h-12
                  rounded-full
                  bg-[#3E3118]
                  text-[#F6F5F0]
                  font-medium
                  flex
                  items-center
                  justify-center
                  gap-2
                  hover:bg-[#B68827]
                  hover:text-[#3E3118]
                  transition-all
                "
              >

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M20.52 3.48A11.82 11.82 0 0 0 12.04 0C5.5.0.18 5.32.18 11.86c0 2.09.55 4.13 1.59 5.93L.1 24l6.35-1.66a11.86 11.86 0 0 0 5.59 1.42h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.24-6.14-3.39-8.42Z" />
                </svg>

                Send on WhatsApp

              </button>

            </form>

          </div>

        </div>
      )}

      {/* =====================================================
          VIDEO MODAL
      ===================================================== */}

      {isVideoModalOpen && product.video && (
        <div
          className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-[#3E3118]/80
            backdrop-blur-sm
            px-5
          "
          onClick={() =>
            setIsVideoModalOpen(false)
          }
        >

          <div
            className="
              relative
              w-full
              max-w-5xl
              rounded-3xl
              overflow-hidden
              bg-black
              shadow-2xl
            "
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            {/* CLOSE */}

            <button
              onClick={() =>
                setIsVideoModalOpen(false)
              }
              className="
                absolute
                z-10
                top-4
                right-4
                w-10
                h-10
                rounded-full
                bg-[#F6F5F0]/90
                text-[#3E3118]
                flex
                items-center
                justify-center
                hover:bg-[#B68827]
                transition
              "
            >

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-5 h-5"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>

            </button>

            {/* VIDEO */}

            <video
              src={product.video}
              controls
              autoPlay
              playsInline
              className="
                w-full
                max-h-[80vh]
                object-contain
              "
            />

          </div>

        </div>
      )}

      <Footer />
    </>
  );
};

export default ProductDetails;
