import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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

/* =========================================================
   PRODUCTS DATA
========================================================= */

const products = [
  /* ---------------------------------------------------------
     ROW 1
     JK11 | JK22 | JK33 | JK44
  --------------------------------------------------------- */

  {
    image: t1jk11,
    name: "Tile Adhesive T1 JK11",
    slug: "tile-adhesive-t1-jk11",
  },

  {
    image: t2jk22,
    name: "Tile Adhesive T2 JK22",
    slug: "tile-adhesive-t2-jk22",
  },

  {
    image: t3jk33,
    name: "Tile Adhesive T3 JK33",
    slug: "tile-adhesive-t3-jk33",
  },

  {
    image: t4jk44,
    name: "Tile Adhesive T4 JK44",
    slug: "tile-adhesive-t4-jk44",
  },

  /* ---------------------------------------------------------
     ROW 2
     JK111 | JK222 | JK333 | Wall Putty
  --------------------------------------------------------- */

  {
    image: t1jk111,
    name: "Tile Adhesive T1 JK111",
    slug: "tile-adhesive-t1-jk111",
  },

  {
    image: t2jk222,
    name: "Tile Adhesive T2 JK222",
    slug: "tile-adhesive-t2-jk222",
  },

  {
    image: t3jk333,
    name: "Tile Adhesive T3 JK333",
    slug: "tile-adhesive-t3-jk333",
  },

  {
    image: wallPutty,
    name: "Wall Putty",
    slug: "wall-putty",
  },

  /* ---------------------------------------------------------
     ROW 3
     POP | Tile Grout | Epoxy Grout | Tile Cleaner
  --------------------------------------------------------- */

  {
    image: pop,
    name: "POP",
    slug: "pop",
  },

  {
    image: tileGrout,
    name: "Tile Grout",
    slug: "tile-grout",
  },

  {
    image: epoxyGrout,
    name: "Epoxy Grout",
    slug: "epoxy-grout",
  },

  {
    image: tileCleaner,
    name: "Tile Cleaner",
    slug: "tile-cleaner",
  },
];

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const sectionVariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      duration: 0.6,
    },
  },
};

/* =========================================================
   HEADING ANIMATION
========================================================= */

const headingContainer = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const headingItem = {
  hidden: {
    opacity: 0,
    y: 25,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

/* =========================================================
   GALLERY ANIMATION
========================================================= */

const galleryContainer = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const productVariants = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.96,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

/* =========================================================
   PRODUCT IMAGE COMPONENT
========================================================= */

const ProductImage = ({ image, name, slug }) => {
  return (
    <motion.div
      variants={productVariants}
      whileHover={{
        y: -8,
        scale: 1.015,
        boxShadow: "0 20px 40px rgba(62,49,24,0.12)",
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
      className="rounded-2xl"
    >
      <Link
        to={`/products/${slug}`}
        className="
          group
          relative
          block
          overflow-hidden
          rounded-2xl
          bg-white
          border
          border-[#B68827]/20
          shadow-sm
        "
      >
        {/* =================================================
            PRODUCT IMAGE
        ================================================= */}

        <motion.img
          src={image}
          alt={name}
          loading="lazy"
          whileHover={{
            scale: 1.07,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="
            w-full
            h-auto
            object-cover
          "
        />

        {/* =================================================
            PRODUCT NAME OVERLAY
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0.9,
          }}
          whileHover={{
            opacity: 1,
          }}
          className="
            absolute
            bottom-0
            left-0
            right-0
            p-4
            pt-12
            bg-gradient-to-t
            from-[#3E3118]/95
            via-[#3E3118]/60
            to-transparent
          "
        >
          <motion.p
            whileHover={{
              x: 4,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              text-[#F6F5F0]
              font-semibold
              text-sm
              sm:text-base
            "
          >
            {name}
          </motion.p>
        </motion.div>

        {/* =================================================
            GOLD HOVER LINE
        ================================================= */}

        <motion.div
          initial={{
            width: 0,
          }}
          whileHover={{
            width: "35%",
          }}
          transition={{
            duration: 0.35,
            ease: "easeOut",
          }}
          className="
            absolute
            bottom-0
            left-0
            h-[3px]
            bg-[#B68827]
            rounded-r-full
          "
        />
      </Link>
    </motion.div>
  );
};

/* =========================================================
   PRODUCTS SECTION
========================================================= */

const Products = () => {
  return (
    <motion.section
      id="products"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.12,
      }}
      className="
        py-2
        sm:py-2
        bg-[#F6F5F0]
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
            HEADING
        ================================================= */}

        <motion.div
          variants={headingContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.4,
          }}
          className="
            max-w-2xl
            mx-auto
            text-center
            mb-14
          "
        >
          {/* =================================================
              BADGE
          ================================================= */}

          <motion.span
            variants={headingItem}
            whileHover={{
              scale: 1.04,
            }}
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              bg-[#B68827]/10
              border
              border-[#B68827]/30
              text-[#3E3118]
              text-sm
              font-medium
              mb-5
            "
          >
            <motion.span
              animate={{
                scale: [1, 1.25, 1],
                opacity: [1, 0.7, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                w-2
                h-2
                rounded-full
                bg-[#B68827]
              "
            />

            Our Products
          </motion.span>

          {/* =================================================
              MAIN HEADING
          ================================================= */}

          <motion.h2
            variants={headingItem}
            className="
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-semibold
              leading-tight
              text-[#3E3118]
            "
          >
            Quality products for{" "}

            <motion.span
              whileHover={{
                x: 4,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                inline-block
                text-[#B68827]
              "
            >
              better surfaces.
            </motion.span>
          </motion.h2>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <motion.p
            variants={headingItem}
            className="
              mt-5
              text-[#3E3118]/65
              text-base
              sm:text-lg
              leading-relaxed
            "
          >
            From smooth wall finishes to strong tile installations,
            our range of construction products is designed for
            reliable performance and professional results.
          </motion.p>
        </motion.div>

        {/* =================================================
            PRODUCT GALLERY

            IMPORTANT:
            Do NOT split the products using slice().

            The normal CSS grid automatically places items:

            JK11     JK22     JK33     JK44
            JK111    JK222    JK333    Wall Putty
            POP      Tile Grout  Epoxy Grout  Tile Cleaner
        ================================================= */}

        <motion.div
          variants={galleryContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="
            grid
            grid-cols-2
            md:grid-cols-4
            gap-4
          "
        >
          {products.map((product) => (
            <ProductImage
              key={product.slug}
              image={product.image}
              name={product.name}
              slug={product.slug}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Products;