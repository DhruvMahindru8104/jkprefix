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
   SALESMAN IDS
========================================================= */

const salesmanIds = [
  "S111",
  "S222",
  "S333",
  "S444",
  "S555",
  "S666",
  "S777",
];

/* =========================================================
   PRODUCT DATA
========================================================= */

const products = [
  {
    id: 1,
    name: "JKPRIFIX Grey Adhesive JK11",
    slug: "tile-adhesive-t1-jk11",
    category: "Tile Adhesive",
    shortDescription:
      "Strong grey tile adhesive for interior and exterior tile installation.",
    description:
      "JKPRIFIX Grey Adhesive JK11 is designed for reliable installation of ceramic, clay, vitrified, basalt, porcelain tiles and natural stone on walls and floors. It is also suitable for wet areas such as swimming pools, saunas, water bodies and washrooms.",
    image: t1jk11,
    video: tileAdhesiveVideo,
    tagline: "Strong Bond Flawless Finish",
    color: "Grey",
    packSize: "20 kg",
    standard: null,
    benefits: [
      "Strong adhesion",
      "Easy application",
      "Suitable for interior and exterior use",
      "Suitable for floor and wall tiles",
      "Suitable for wet areas",
    ],
    applications: [
      "Internal and external floors",
      "Internal and external walls",
      "Ceramic tiles",
      "Clay tiles",
      "Vitrified tiles",
      "Basalt tiles",
      "Porcelain tiles",
      "Natural stone",
      "Swimming pools",
      "Saunas",
      "Water bodies",
      "Washrooms",
    ],
    technicalProperties: {
      workingTemperature: "27°C",
      potLife: "2 hours",
      timeToHeavyTraffic: "16-24 hours",
      coverage: "Approx 45 to 55 sq.ft. per 20 kg pack",
      trowelSize: "6mm x 6mm square notched trowel",
      bedThickness: "3mm",
      note: "Actual coverage depends on substrate condition and method of application",
    },
  },

  {
    id: 2,
    name: "JKPRIFIX Grey Adhesive JK22",
    slug: "tile-adhesive-t2-jk22",
    category: "Tile Adhesive",
    shortDescription:
      "Reliable grey tile adhesive for vitrified and glass mosaic tile installation.",
    description:
      "JKPRIFIX Grey Adhesive JK22 is formulated for strong and reliable tile installation on cement-based substrates. It is suitable for interior floor and wall applications, exterior floor applications and wet or submerged areas.",
    image: t2jk22,
    video: tileAdhesiveVideo,
    tagline: "Strong Bond Perfect Finish",
    color: "Grey",
    packSize: "20 kg",
    standard: "Conforms to Type 2T, IS 15477:2019",
    benefits: [
      "Strong adhesion",
      "Reliable bonding",
      "Good workability",
      "Suitable for vitrified tiles",
      "Suitable for glass mosaic tiles",
      "Suitable for wet and submerged areas",
    ],
    applications: [
      "Interior floors",
      "Interior walls",
      "Exterior floors",
      "Vitrified tiles",
      "Fully vitrified tiles",
      "Glass mosaic tiles",
      "Wet areas",
      "Submerged areas",
      "Cement-based substrates",
    ],
    technicalProperties: {
      workingTemperature: "27°C",
      potLife: "2 hours",
      timeToHeavyTraffic: "16-24 hours",
      coverage: "Approx 45 to 55 sq.ft. per 20 kg pack",
      trowelSize: "6mm x 6mm square notched trowel",
      bedThickness: "3mm",
      note: "Actual coverage depends on substrate condition and method of application",
    },
  },

  {
    id: 3,
    name: "JKPRIFIX Grey Adhesive JK33",
    slug: "tile-adhesive-t3-jk33",
    category: "Tile Adhesive",
    shortDescription:
      "High-performance grey tile adhesive for professional tile installation.",
    description:
      "JKPRIFIX Grey Adhesive JK33 is designed to provide dependable performance for interior and exterior tile installation. It is suitable for ceramic, clay, vitrified, basalt, porcelain tiles and natural stone, including wet-area applications.",
    image: t3jk33,
    video: tileAdhesiveVideo,
    tagline: "Strong Bond Lasting Finish",
    color: "Grey",
    packSize: "20 kg",
    standard: "Conforms to Type 2T, IS 15477:2019",
    benefits: [
      "Strong bonding",
      "Durable performance",
      "Good workability",
      "Suitable for interior and exterior use",
      "Suitable for floor and wall tiles",
      "Suitable for wet areas",
    ],
    applications: [
      "Internal floors",
      "External floors",
      "Internal walls",
      "External walls",
      "Ceramic tiles",
      "Clay tiles",
      "Vitrified tiles",
      "Basalt tiles",
      "Porcelain tiles",
      "Natural stone",
      "Swimming pools",
      "Saunas",
      "Water bodies",
      "Washrooms",
    ],
    technicalProperties: {
      workingTemperature: "27°C",
      potLife: "2 hours",
      timeToHeavyTraffic: "16-24 hours",
      coverage: "Approx 45 to 55 sq.ft. per 20 kg pack",
      trowelSize: "6mm x 6mm square notched trowel",
      bedThickness: "3mm",
      note: "Actual coverage depends on substrate condition and method of application",
    },
  },

  {
    id: 4,
    name: "JKPRIFIX Grey Adhesive JK44",
    slug: "tile-adhesive-t4-jk44",
    category: "Tile Adhesive",
    shortDescription:
      "High-performance grey tile adhesive designed for large-format and elevation applications.",
    description:
      "JKPRIFIX Grey Adhesive JK44 is a high-performance tile adhesive designed for professional tile fixing. It is suitable for large-format thin tiles on walls and floors and is particularly suited for elevation applications.",
    image: t4jk44,
    video: tileAdhesiveVideo,
    tagline: "Built for Strength Made for Last",
    color: "Grey",
    packSize: "20 kg",
    standard: "Conforms to Type 4T, IS 15477:2019",
    benefits: [
      "High bonding strength",
      "Excellent workability",
      "Professional grade",
      "Suitable for large-format tiles",
      "Suitable for elevation applications",
      "Durable performance",
    ],
    applications: [
      "Internal floors",
      "External floors",
      "Internal walls",
      "External walls",
      "Large-format thin tiles",
      "Professional tile installation",
      "Elevation applications",
      "Diversified tile materials and surfaces",
    ],
    technicalProperties: {
      workingTemperature: "27°C",
      potLife: "2 hours",
      timeToHeavyTraffic: "16-24 hours",
      coverage: "Approx 45 to 55 sq.ft. per 20 kg pack",
      trowelSize: "6mm x 6mm square notched trowel",
      bedThickness: "3mm",
      note: "Actual coverage depends on substrate condition and method of application",
    },
  },

  {
    id: 5,
    name: "JKPRIFIX White Adhesive JK111",
    slug: "tile-adhesive-t1-jk111",
    category: "Tile Adhesive",
    shortDescription:
      "White tile adhesive for reliable ceramic, vitrified and porcelain tile installation.",
    description:
      "JKPRIFIX White Adhesive JK111 is designed for reliable tile fixing where a clean white base is preferred. It is suitable for ceramic, clay, vitrified, basalt, porcelain tiles and natural stone.",
    image: t1jk111,
    video: tileAdhesiveVideo,
    tagline: "Strong Bond Lasting Finish",
    color: "Orange/White",
    packSize: "20 kg",
    standard: "CTTE, Conforms to Type 2T, IS 15477:2019",
    benefits: [
      "Strong adhesion",
      "Clean white base",
      "Easy application",
      "Good workability",
      "Suitable for interior and exterior use",
    ],
    applications: [
      "Internal floors",
      "External floors",
      "Internal walls",
      "External walls",
      "Ceramic tiles",
      "Clay tiles",
      "Vitrified tiles",
      "Basalt tiles",
      "Porcelain tiles",
      "Natural stone",
      "Decorative tiles",
      "Swimming pools",
      "Saunas",
      "Water bodies",
      "Washrooms",
    ],
    technicalProperties: {
      workingTemperature: "27°C",
      potLife: "2 hours",
      timeToHeavyTraffic: "16-24 hours",
      coverage: "Approx 45 to 55 sq.ft. per 20 kg pack",
      trowelSize: "6mm x 6mm square notched trowel",
      bedThickness: "3mm",
      note: "Actual coverage depends on substrate condition and method of application",
    },
  },

  {
    id: 6,
    name: "JKPRIFIX White Adhesive JK222",
    slug: "tile-adhesive-t2-jk222",
    category: "Tile Adhesive",
    shortDescription:
      "White tile adhesive for professional and large-format tile installation.",
    description:
      "JKPRIFIX White Adhesive JK222 is formulated for reliable tile bonding and professional installation. It is suitable for large-format thin tiles, elevation applications and ceramic, vitrified and porcelain tiles.",
    image: t2jk222,
    video: tileAdhesiveVideo,
    tagline: "Built for Strength Made for Last",
    color: "White",
    packSize: "20 kg",
    standard: "Conforms to Type 2T, IS 15477:2019",
    benefits: [
      "Strong bonding",
      "Clean white appearance",
      "Excellent workability",
      "Professional performance",
      "Suitable for large-format tiles",
      "Durable performance",
    ],
    applications: [
      "Internal floors",
      "External floors",
      "Internal walls",
      "External walls",
      "Large-format thin tiles",
      "Ceramic tiles",
      "Vitrified tiles",
      "Porcelain tiles",
      "Elevation applications",
      "Professional installations",
    ],
    technicalProperties: {
      workingTemperature: "27°C",
      potLife: "2 hours",
      timeToHeavyTraffic: "16-24 hours",
      coverage: "Approx 45 to 55 sq.ft. per 20 kg pack",
      trowelSize: "6mm x 6mm square notched trowel",
      bedThickness: "3mm",
      note: "Actual coverage depends on substrate condition and method of application",
    },
  },

  {
    id: 7,
    name: "JKPRIFIX White Adhesive JK333",
    slug: "tile-adhesive-t3-jk333",
    category: "Tile Adhesive (Epoxy PU Based)",
    shortDescription:
      "Two-component epoxy PU based adhesive for demanding tile and stone installations.",
    description:
      "JKPRIFIX White Adhesive JK333 is a two-component Epoxy PU based tile adhesive designed for installation of all types of tiles, engineered stones, glass tiles and metal tiles on highly deformable, expandable, absorbent and non-absorbent substrates.",
    image: t3jk333,
    video: tileAdhesiveVideo,
    tagline: "Built for Strength Made for Last",
    color: "White",
    packSize: "20 kg",
    standard: "Conforms to Type 3T, IS 15477:2019",
    benefits: [
      "High bonding strength",
      "Two-component Epoxy PU based system",
      "Suitable for highly deformable substrates",
      "Suitable for absorbent and non-absorbent surfaces",
      "Professional performance",
      "Wide range of applications",
    ],
    applications: [
      "Interior floors",
      "Exterior floors",
      "Interior walls",
      "Exterior walls",
      "Ceramic tiles",
      "Vitrified tiles",
      "Semi-vitrified tiles",
      "Precast terrazzo",
      "Engineered stone",
      "Glass tiles",
      "Metal tiles",
      "Quartz",
      "Natural stones",
      "Marble slim tiles",
      "Composite stones",
      "Nano stones",
      "Artificial stones",
      "Engineered stones",
    ],
    compatibleSubstrates: [
      "Metal surfaces",
      "Wood and plywood",
      "Rubber",
      "PVC",
      "WPC",
      "Epoxy resin-based surfaces",
      "PU resin-based surfaces",
      "Cement-based plaster",
      "Concrete",
      "Screed",
    ],
    technicalProperties: {
      workingTemperature: null,
      potLife: null,
      timeToHeavyTraffic: null,
      coverage: null,
      trowelSize: null,
      bedThickness: null,
      note: "Actual coverage depends on substrate condition and method of application",
    },
  },

  {
    id: 8,
    name: "JKPRIFIX Wall Putty",
    slug: "wall-putty",
    category: "Wall Putty",
    shortDescription:
      "Polymer modified white cement based water-resistant wall putty for smooth and durable surfaces.",
    description:
      "JKPRIFIX Wall Putty is a polymer modified white cement based water-resistant fine wall putty for concrete and mortar walls and ceilings. It provides superior adhesive strength and durability and does not require water curing.",
    image: wallPutty,
    video: wallPuttyVideo,
    tagline: "Strong Bond Lasting Finish",
    packSize: "20 kg",
    standard: "Conforms to IS: 63(2006)",
    benefits: [
      "Suitable for all kinds of paint",
      "Provides a smooth and durable surface",
      "Superior adhesive strength",
      "Water resistant",
      "Does not require water curing",
      "Can be used as a filler and leveller",
    ],
    applications: [
      "Concrete walls",
      "Mortar walls",
      "Interior walls",
      "Exterior walls",
      "Ceilings",
      "Surface preparation",
      "Before painting",
      "Filler and leveller in paint systems",
    ],
    technicalProperties: {
      coverage: "Approx 0.2-2.5 sq.ft./kg/mm",
      shelfLife: "12 months",
    },
  },

  {
    id: 9,
    name: "JKPRIFIX Premium Gypsum Plaster",
    slug: "pop",
    category: "Gypsum Plaster",
    shortDescription:
      "Ready-mixed polymer-modified plaster for efficient interior and exterior finishing.",
    description:
      "JKPRIFIX Premium Gypsum Plaster is a ready-mixed plaster modified with high-quality polymers. It offers excellent coverage and is designed for both external and internal surfaces including brick, cement block, sand plaster, old scrap and RCC surfaces.",
    image: pop,
    tagline: "Strong Bond Lasting Finish",
    packSize: "20 kg",
    standard: "Conforms to IS: 1542-1992",
    benefits: [
      "Excellent coverage",
      "Durable finish",
      "Good bonding strength",
      "Self-curing properties",
      "Faster application",
      "Reduced surface preparation",
    ],
    applications: [
      "Internal surfaces",
      "External surfaces",
      "Brick surfaces",
      "Cement block surfaces",
      "Sand plaster",
      "Old scrap surfaces",
      "RCC surfaces",
      "Wall finishing",
      "Surface preparation",
    ],
    technicalProperties: {
      coverage: "Approx 20-22 sq.ft./40kg at 12mm bed thickness",
      shelfLife: "12 months",
    },
  },

  {
    id: 10,
    name: "JKPRIFIX Tile Grout",
    slug: "tile-grout",
    category: "Tile Grout",
    shortDescription:
      "Water-resistant polymer-modified grout for clean, durable and non-cracking tile joints.",
    description:
      "JKPRIFIX Tile Grout is a water-resistant, non-cracking and non-shrink polymer-modified cementitious tile joint filler designed for grouting glazed wall tiles, mosaics, vitrified, fully vitrified, floor and industrial floor tiles.",
    image: tileGrout,
    tagline: "Strong Bond Lasting Finish",
    packSize: "1 kg",
    standard: "Conforms to EN 13888, IS 17190:2020 CG1",
    benefits: [
      "Water resistant",
      "Non-cracking",
      "Non-shrink",
      "Hard-wearing tile joints",
      "Non-dusting tile joints",
      "Good workability",
      "Long-lasting tile joints",
    ],
    applications: [
      "Glazed wall tiles",
      "Mosaic tiles",
      "Vitrified tiles",
      "Fully vitrified tiles",
      "Floor tiles",
      "Industrial floor tiles",
      "Tile joints",
    ],
    features: [
      "Effectively fills gaps and levels itself",
      "Provides hard-wearing and non-dusting tile joints",
      "Firmly holds tiles together",
      "Suitable for 1mm to 3mm joint width",
      "Tile admix can be mixed for improved performance",
      "Available in sanded and unsanded form",
    ],
  },

  {
    id: 11,
    packSizes: ["1Kg", "5Kg"],
    name: "JKPRIFIX Epoxy Tile Grout",
    slug: "epoxy-grout",
    category: "Tile Grout",
    shortDescription:
      "Water and shock-resistant epoxy grout for durable and hygienic tile joints.",
    description:
      "JKPRIFIX Epoxy Tile Grout is a hygienic, easy-to-clean, water and shock-resistant three-component epoxy resin based grout. It provides good bond strength and is suitable for interior and covered exterior floor and wall joints.",
    image: epoxyGrout,
    tagline: "Strong Bond Lasting Finish",
    standard: "Conforms to EN 13888, IS 17190:2020 RG2",
    benefits: [
      "Water resistant",
      "Shock resistant",
      "Easy to clean",
      "Hygienic",
      "Stain free",
      "Colour fast",
      "Good bond strength",
      "Durable performance",
    ],
    applications: [
      "Ceramic tiles",
      "Vitreous tiles",
      "Semi-vitreous tiles",
      "Glass mosaic tiles",
      "Precast terrazzo",
      "Engineered stone floors",
      "Natural stones",
      "Institutional kitchens",
      "Commercial kitchens",
      "Cafeterias",
      "Residential facilities",
      "Rest rooms",
      "Schools",
      "Swimming pools",
      "Saunas",
      "Water bodies",
      "Washrooms",
    ],
  },

  {
    id: 12,
    name: "JKPRIFIX High Performance Tile Cleaner",
    slug: "tile-cleaner",
    category: "Tile Cleaner",
    shortDescription:
      "Ready-to-use fast-acting tile cleaner for interior and exterior cleaning applications.",
    description:
      "JKPRIFIX High Performance Tile Cleaner is a ready-to-use, fast-acting cleaning solution designed to remove everyday spills, dirt, grease and cement residue from a wide range of tile surfaces. It is a non-acidic cleaner specially recommended for natural stone and marble.",
    image: tileCleaner,
    tagline: "Strong Bond Lasting Finish",
    packSizes: ["100ml", "250ml", "500ml", "1 Ltr", "5 Ltr"],
    benefits: [
      "Ready to use",
      "Fast acting",
      "Helps remove dirt",
      "Helps remove grease",
      "Helps remove cement residue",
      "Non-acidic",
      "Suitable for natural stone and marble",
      "Helps maintain natural appearance",
    ],
    applications: [
      "Unglazed ceramic tiles",
      "Glass tiles",
      "Vitrified tiles",
      "Glass mosaic tiles",
      "Glazed ceramic tiles",
      "Porcelain tiles",
      "Natural stone",
      "Marble",
      "Interior cleaning",
      "Exterior cleaning",
    ],
    technicalProperties: {
      appearance: "Ocean Blue liquid",
      specificGravity: "1.02",
      pH: "5-6",
    },
  },
];

/* =========================================================
   CHECK ICON
========================================================= */

const CheckIcon = () => (
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
);

/* =========================================================
   PRODUCT DETAILS
========================================================= */

const ProductDetails = () => {
  const { slug } = useParams();

  const product = products.find((item) => item.slug === slug);

  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  /* CUSTOMER DETAILS */

  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [salesmanId, setSalesmanId] = useState("");
  const [customerGST, setCustomerGST] = useState("");
  const [quantity, setQuantity] = useState(1);

  /* =======================================================
     WHATSAPP
  ======================================================= */

  const handleWhatsApp = async (e) => {
  e.preventDefault();
 
  if (
    !customerName.trim() ||
    !customerPhone.trim() ||
    !salesmanId ||
    !quantity
  ) {
    alert("Please fill all required details.");
    return;
  }

  if (customerPhone.length !== 10) {
    alert("Please enter a valid 10-digit phone number.");
    return;
  }

  // ==========================================
  // DATA TO SEND TO GOOGLE SHEETS
  // ==========================================

  const enquiryData = {
    salesmanId: salesmanId,
    customerName: customerName.trim(),
    customerPhone: customerPhone,
    customerGST: customerGST.trim(),
    product: product.name,
    category: product.category,
    quantity: quantity,
  };

  // ==========================================
  // SEND DATA TO GOOGLE SHEETS
  // ==========================================

  try {
    await fetch(import.meta.env.VITE_GOOGLE_SHEET_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(enquiryData),
    });

    console.log("Enquiry sent to Google Sheets");

  } catch (error) {
    console.error("Google Sheets error:", error);

    alert(
      "There was a problem saving the enquiry. Please try again."
    );

    return;
  }

  // ==========================================
  // WHATSAPP MESSAGE
  // ==========================================

  const message = `
Hello JKPRIFIX Team,

Product: ${product.name}
Quantity: ${quantity}

Customer: ${customerName}
Phone: ${customerPhone}
GST: ${customerGST.trim() || "N/A"}
Salesman ID: ${salesmanId}

Please share the price and availability.

Thank you.
  `.trim();

  const whatsappNumber = "918872316415";

  const whatsappURL =
    `https://wa.me/${whatsappNumber}?text=` +
    encodeURIComponent(message);

  window.open(whatsappURL, "_blank");

  // ==========================================
  // RESET FORM
  // ==========================================

  setIsBuyModalOpen(false);
  setCustomerName("");
  setCustomerPhone("");
  setSalesmanId("");
  setCustomerGST("");
  setQuantity(1);
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

            <p className="mt-4 text-[#3E3118]/65">
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
          {/* BACK BUTTON */}

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
                d="M17 10a.75.75 0 0 1-.75.75H5.56l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 1 1 1.06 1.06l-3.22 3.22h10.69A.75.75 0 0 1 17 10Z"
                clipRule="evenodd"
              />
            </svg>

            Back to Products
          </Link>

          {/* PRODUCT HERO */}

          <div
            className="
              grid
              lg:grid-cols-2
              gap-12
              lg:gap-20
              items-start
            "
          >
            {/* PRODUCT IMAGE */}

            <div
              className="
                rounded-3xl
                bg-white
                border
                border-[#B68827]/20
                overflow-hidden
                shadow-sm
                lg:sticky
                lg:top-28
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

            {/* PRODUCT INFORMATION */}

            <div>
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

              {product.tagline && (
                <p
                  className="
                    mt-4
                    text-lg
                    font-medium
                    text-[#B68827]
                  "
                >
                  {product.tagline}
                </p>
              )}

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

              {(product.color ||
                product.packSize ||
                product.standard ||
                product.packSizes) && (
                <div
                  className="
                    grid
                    sm:grid-cols-2
                    gap-3
                    mt-8
                  "
                >
                  {product.color && (
                    <div
                      className="
                        rounded-2xl
                        bg-white
                        border
                        border-[#B68827]/20
                        p-4
                      "
                    >
                      <p className="text-xs text-[#3E3118]/50">
                        Color
                      </p>

                      <p className="mt-1 font-medium text-[#3E3118]">
                        {product.color}
                      </p>
                    </div>
                  )}

                  {product.packSize && (
                    <div
                      className="
                        rounded-2xl
                        bg-white
                        border
                        border-[#B68827]/20
                        p-4
                      "
                    >
                      <p className="text-xs text-[#3E3118]/50">
                        Pack Size
                      </p>

                      <p className="mt-1 font-medium text-[#3E3118]">
                        {product.packSize}
                      </p>
                    </div>
                  )}

                  {product.standard && (
                    <div
                      className="
                        rounded-2xl
                        bg-white
                        border
                        border-[#B68827]/20
                        p-4
                        sm:col-span-2
                      "
                    >
                      <p className="text-xs text-[#3E3118]/50">
                        Standard
                      </p>

                      <p className="mt-1 font-medium text-[#3E3118]">
                        {product.standard}
                      </p>
                    </div>
                  )}

                  {product.packSizes && (
                    <div
                      className="
                        rounded-2xl
                        bg-white
                        border
                        border-[#B68827]/20
                        p-4
                        sm:col-span-2
                      "
                    >
                      <p className="text-xs text-[#3E3118]/50">
                        Available Pack Sizes
                      </p>

                      <div className="flex flex-wrap gap-2 mt-3">
                        {product.packSizes.map((size) => (
                          <span
                            key={size}
                            className="
                              px-3
                              py-1.5
                              rounded-full
                              bg-[#B68827]/10
                              border
                              border-[#B68827]/20
                              text-sm
                              text-[#3E3118]
                            "
                          >
                            {size}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              <div className="h-px bg-[#B68827]/20 my-8" />

              {product.benefits?.length > 0 && (
                <>
                  <h2 className="text-xl font-semibold text-[#3E3118]">
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
                    {product.benefits.map((benefit) => (
                      <div
                        key={benefit}
                        className="
                          flex
                          items-center
                          gap-3
                          text-[#3E3118]/75
                        "
                      >
                        <CheckIcon />

                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {product.applications?.length > 0 && (
                <div className="mt-10">
                  <h2 className="text-xl font-semibold text-[#3E3118]">
                    Applications
                  </h2>

                  <div
                    className="
                      grid
                      sm:grid-cols-2
                      gap-4
                      mt-5
                    "
                  >
                    {product.applications.map((application) => (
                      <div
                        key={application}
                        className="
                          flex
                          items-start
                          gap-3
                          text-[#3E3118]/75
                        "
                      >
                        <CheckIcon />

                        <span>{application}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {product.compatibleSubstrates?.length > 0 && (
                <div className="mt-10">
                  <h2 className="text-xl font-semibold text-[#3E3118]">
                    Compatible Substrates
                  </h2>

                  <div
                    className="
                      grid
                      sm:grid-cols-2
                      gap-4
                      mt-5
                    "
                  >
                    {product.compatibleSubstrates.map((substrate) => (
                      <div
                        key={substrate}
                        className="
                          flex
                          items-start
                          gap-3
                          text-[#3E3118]/75
                        "
                      >
                        <CheckIcon />

                        <span>{substrate}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {product.features?.length > 0 && (
                <div className="mt-10">
                  <h2 className="text-xl font-semibold text-[#3E3118]">
                    Features
                  </h2>

                  <div
                    className="
                      grid
                      sm:grid-cols-2
                      gap-4
                      mt-5
                    "
                  >
                    {product.features.map((feature) => (
                      <div
                        key={feature}
                        className="
                          flex
                          items-start
                          gap-3
                          text-[#3E3118]/75
                        "
                      >
                        <CheckIcon />

                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {product.technicalProperties &&
                Object.values(product.technicalProperties).some(
                  (value) => value !== null && value !== undefined
                ) && (
                  <div className="mt-10">
                    <h2 className="text-xl font-semibold text-[#3E3118]">
                      Technical Properties
                    </h2>

                    <div
                      className="
                        mt-5
                        rounded-2xl
                        overflow-hidden
                        border
                        border-[#B68827]/20
                        bg-white
                      "
                    >
                      {Object.entries(product.technicalProperties).map(
                        ([key, value]) => {
                          if (
                            value === null ||
                            value === undefined ||
                            value === ""
                          ) {
                            return null;
                          }

                          const formattedKey = key
                            .replace(/([A-Z])/g, " $1")
                            .replace(/^./, (str) => str.toUpperCase());

                          return (
                            <div
                              key={key}
                              className="
                                grid
                                grid-cols-1
                                sm:grid-cols-2
                                gap-2
                                px-5
                                py-4
                                border-b
                                last:border-b-0
                                border-[#3E3118]/10
                              "
                            >
                              <span
                                className="
                                  text-sm
                                  font-medium
                                  text-[#3E3118]/55
                                "
                              >
                                {formattedKey}
                              </span>

                              <span
                                className="
                                  text-sm
                                  text-[#3E3118]
                                  sm:text-right
                                "
                              >
                                {value}
                              </span>
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                )}

              {/* BUTTONS */}

              <div
                className="
                  flex
                  flex-col
                  sm:flex-row
                  gap-4
                  mt-10
                "
              >
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

                {product.video && (
                  <button
                    onClick={() => setIsVideoModalOpen(true)}
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
            py-8
          "
          onClick={() => setIsBuyModalOpen(false)}
        >
          <div
            className="
              relative
              w-full
              max-w-md
              max-h-[90vh]
              overflow-y-auto
              rounded-3xl
              bg-[#F6F5F0]
              p-7
              sm:p-9
              shadow-2xl
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE */}

            <button
              type="button"
              onClick={() => setIsBuyModalOpen(false)}
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

            <div className="mb-7 pr-8">
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
                Enter customer details and send the enquiry directly on
                WhatsApp.
              </p>
            </div>

            {/* FORM */}

            <form onSubmit={handleWhatsApp} className="space-y-5">

              {/* SALESMAN ID */}

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
                  Salesman ID
                </label>

                <select
                  value={salesmanId}
                  onChange={(e) => setSalesmanId(e.target.value)}
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
                    cursor-pointer
                  "
                >
                  <option value="" disabled>
                    Select salesman ID
                  </option>

                  {salesmanIds.map((id) => (
                    <option key={id} value={id}>
                      {id}
                    </option>
                  ))}
                </select>
              </div>

              {/* CUSTOMER NAME */}

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
                  Customer Name
                </label>

                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Enter customer name"
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

              {/* CUSTOMER PHONE */}

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
                  Customer Phone Number
                </label>

                <input
                  type="tel"
                  value={customerPhone}
                  onChange={(e) =>
                    setCustomerPhone(
                      e.target.value.replace(/\D/g, "").slice(0, 10)
                    )
                  }
                  placeholder="Enter 10-digit phone number"
                  required
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

              {/* GST */}

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
                  GST No.
                  <span className="ml-1 text-[#3E3118]/45 font-normal">
                    (Optional)
                  </span>
                </label>

                <input
                  type="text"
                  value={customerGST}
                  onChange={(e) =>
                    setCustomerGST(
                      e.target.value.toUpperCase().slice(0, 15)
                    )
                  }
                  placeholder="Enter GST number"
                  maxLength="15"
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

              {/* QUANTITY */}

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
                  Quantity
                </label>

                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="Enter quantity"
                  required
                  min="1"
                  step="1"
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
                <p className="text-xs text-[#3E3118]/55">
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

                <div className="mt-3 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-[#3E3118]/55">
                      Category
                    </p>

                    <p className="text-sm font-medium text-[#3E3118]">
                      {product.category}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-xs text-[#3E3118]/55">
                      Quantity
                    </p>

                    <p className="text-sm font-semibold text-[#3E3118]">
                      {quantity}
                    </p>
                  </div>
                </div>
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
          onClick={() => setIsVideoModalOpen(false)}
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
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsVideoModalOpen(false)}
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