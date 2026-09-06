
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const iconRender = (val) => {
  switch (val) {
    // Strong Bond
    case "strong-bond":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 6.5l4-4a3 3 0 014 4l-4 4M10.5 17.5l-4 4a3 3 0 01-4-4l4-4M8 16l8-8"
          />
        </svg>
      );

    // Excellent Adhesion
    case "adhesion":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 3v4M17 3v4M4 9h16M5 5h14a1 1 0 011 1v13a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 14l2 2 5-5"
          />
        </svg>
      );

    // Easy to Apply
    case "easy-apply":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14 6l4 4M3 21l5.5-1 9.5-9.5a2.828 2.828 0 00-4-4L4.5 16 3 21z"
          />
        </svg>
      );

    // Water Resistant
    case "water-resistant":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3s7 7 7 12a7 7 0 11-14 0c0-5 7-12 7-12z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 16a3 3 0 003 3"
          />
        </svg>
      );

    // Multiple Surfaces
    case "multiple-surfaces":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 18h16M6 6v12M18 6v12"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 10h6v4H9z"
          />
        </svg>
      );

    // High Strength
    case "high-strength":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4"
          />
        </svg>
      );

    // Long Lasting
    case "long-lasting":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="w-6 h-6"
        >
          <circle cx="12" cy="12" r="8" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 7v5l3 2"
          />
        </svg>
      );

    // Ready to Use
    case "ready-to-use":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 12l4 4L19 6"
          />
        </svg>
      );

    default:
      return null;
  }
};

// ================= ANIMATION VARIANTS =================

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

const cardsContainer = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};

const cardVariants = {
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

const contentVariants = {
  hidden: {
    opacity: 0,
    x: 50,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

// ================= FEATURE CARD =================

const FeatureItem = ({ title, description, icon }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -7,
        scale: 1.015,
        boxShadow: "0 18px 35px rgba(62,49,24,0.10)",
      }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 18,
      }}
      className="
        group
        p-6
        rounded-2xl
        bg-[#F6F5F0]
        border
        border-[#B68827]/20
        space-y-4
        cursor-default
      "
    >
      {/* Icon */}

      <motion.span
        whileHover={{
          scale: 1.1,
          rotate: 5,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 15,
        }}
        className="
          p-3
          flex
          w-max
          rounded-xl
          bg-[#B68827]
          text-[#F6F5F0]
          transition-colors
          duration-300
          group-hover:bg-[#3E3118]
        "
      >
        {iconRender(icon)}
      </motion.span>

      {/* Title */}

      <h3
        className="
          text-lg
          font-semibold
          text-[#3E3118]
        "
      >
        {title}
      </h3>

      {/* Description */}

      <p
        className="
          text-sm
          leading-relaxed
          text-[#3E3118]/65
        "
      >
        {description}
      </p>

      {/* Small animated line */}

      <motion.div
        initial={{ width: 0 }}
        whileHover={{ width: "35%" }}
        transition={{
          duration: 0.3,
        }}
        className="
          h-[2px]
          bg-[#B68827]
          rounded-full
        "
      />
    </motion.div>
  );
};

// ================= FEATURES DATA =================

const features = [
  {
    id: 1,
    title: "Strong Bond",
    description:
      "Superior adhesion provides long-lasting strength for reliable tile installation.",
    icon: "strong-bond",
  },
  {
    id: 2,
    title: "Excellent Adhesion",
    description:
      "Binds tiles firmly to surfaces, helping maintain a secure and stable installation.",
    icon: "adhesion",
  },
  {
    id: 3,
    title: "Easy to Apply",
    description:
      "Smooth application and excellent workability make installation easier and more efficient.",
    icon: "easy-apply",
  },
  {
    id: 4,
    title: "Water Resistant",
    description:
      "Helps protect tiled surfaces from moisture and dampness for dependable performance.",
    icon: "water-resistant",
  },
  {
    id: 5,
    title: "Multiple Surfaces",
    description:
      "Suitable for a wide range of floor and wall tile applications.",
    icon: "multiple-surfaces",
  },
  {
    id: 6,
    title: "High Strength",
    description:
      "Designed to withstand heavy loads and demanding areas with regular traffic.",
    icon: "high-strength",
  },
  {
    id: 7,
    title: "Long Lasting",
    description:
      "Reliable performance and durability help keep tile installations strong for years.",
    icon: "long-lasting",
  },
  {
    id: 8,
    title: "Ready to Use",
    description:
      "Simply mix with the recommended amount of water and apply for convenient installation.",
    icon: "ready-to-use",
  },
];

// ================= MAIN COMPONENT =================

const Features = () => {
  return (
    <motion.section
      id="features"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      className="
        py-20
        bg-[#F6F5F0]
        overflow-hidden
      "
    >
      {/* ================= FEATURES HEADING ================= */}

      <motion.div
        variants={headingContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.3,
        }}
        className="
          max-w-7xl
          mx-auto
          px-5
          sm:px-10
          md:px-12
          lg:px-5
        "
      >
        <div className="max-w-3xl mx-auto text-center mb-14">
          {/* Badge */}

          <motion.span
            variants={headingItem}
            whileHover={{
              scale: 1.04,
              y: -2,
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
              cursor-default
            "
          >
            <motion.span
              animate={{
                scale: [1, 1.3, 1],
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

            Why Choose Our Products
          </motion.span>

          {/* Main Heading */}

          <motion.h2
            variants={headingItem}
            className="
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-semibold
              leading-tight
              tracking-tight
              text-[#3E3118]
            "
          >
            Built for Strength.

            <motion.span
              className="text-[#B68827] inline-block"
              whileHover={{
                x: 5,
              }}
            >
              {" "}
              Designed for Performance.
            </motion.span>
          </motion.h2>

          {/* Description */}

          <motion.p
            variants={headingItem}
            className="
              mt-5
              text-[#3E3118]/65
              text-base
              sm:text-lg
              leading-relaxed
              max-w-2xl
              mx-auto
            "
          >
            Reliable construction solutions engineered to deliver
            strong adhesion, easy application and long-lasting
            performance across a wide range of surfaces.
          </motion.p>
        </div>
      </motion.div>

      {/* ================= FEATURES + CONTENT ================= */}

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
        <div
          className="
            flex
            flex-col
            lg:flex-row
            lg:items-center
            gap-12
            lg:gap-16
          "
        >
          {/* ================= FEATURES ================= */}

          <motion.div
            variants={cardsContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            className="
              lg:w-[58%]
              grid
              sm:grid-cols-2
              xl:grid-cols-3
              gap-5
            "
          >
            {features.map((feature) => (
              <FeatureItem
                key={feature.id}
                {...feature}
              />
            ))}
          </motion.div>

          {/* ================= CONTENT ================= */}

          <motion.div
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            className="
              flex-1
              py-5
              lg:py-8
              space-y-6
              max-w-xl
            "
          >
            {/* Small Label */}

            <motion.span
              whileHover={{
                scale: 1.03,
                y: -2,
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
                cursor-default
              "
            >
              <motion.span
                animate={{
                  scale: [1, 1.25, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="
                  w-2
                  h-2
                  rounded-full
                  bg-[#B68827]
                "
              />

              Why Choose Our Tile Adhesive?
            </motion.span>

            {/* Heading */}

            <motion.h2
              className="
                text-3xl
                sm:text-4xl
                lg:text-5xl
                font-semibold
                leading-tight
                text-[#3E3118]
              "
            >
              Built for {' '}

              <motion.span
                className="text-[#B68827] inline-block"
                whileHover={{
                  x: 5,
                }}
              >
                {" "}
                 stronger
              </motion.span>

              <br />

              tile installations.
            </motion.h2>

            {/* Description */}

            <p
              className="
                text-[#3E3118]/65
                leading-relaxed
                max-w-md
              "
            >
              Our tile adhesive is designed to deliver dependable
              bonding, easy application and long-lasting performance
              across a variety of tile installation requirements.
            </p>

            {/* CTA */}

            <div className="flex pt-2">
              <motion.div
                whileHover={{
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.96,
                }}
              >
                <Link
                  to="/products"
                  className="
                    px-6
                    h-12
                    rounded-full
                    bg-[#3E3118]
                    text-[#F6F5F0]
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-300
                    hover:bg-[#B68827]
                    hover:text-[#3E3118]
                  "
                >
                  Explore Tile Adhesive

                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 ml-2"
                    whileHover={{
                      x: 5,
                    }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 01-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                      clipRule="evenodd"
                    />
                  </motion.svg>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Features;

