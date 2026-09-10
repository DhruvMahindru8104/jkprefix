
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import wallPutty from "../assets/images/hero2.png";
import wallFinish from "../assets/images/hero3.png";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const imageLeftVariants = {
  hidden: {
    opacity: 0,
    x: -70,
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      delay: 0.25,
      ease: "easeOut",
    },
  },
};

const imageRightVariants = {
  hidden: {
    opacity: 0,
    x: 70,
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      delay: 0.45,
      ease: "easeOut",
    },
  },
};

const pillVariants = {
  hidden: {
    opacity: 0,
    y: 15,
    scale: 0.95,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      delay: 0.55 + index * 0.08,
      ease: "easeOut",
    },
  }),
};

export default function HeroSection() {
  return (
    <section
      id="home"
      className="
        min-h-fit
        bg-[#F6F5F0]
        pt-28
        pb-12
        sm:pt-32
        lg:pt-24
        overflow-hidden
      "
    >
      <div
        className="
          mx-auto
          lg:max-w-7xl
          w-full
          px-5
          sm:px-10
          md:px-12
          lg:px-5
          grid
          lg:grid-cols-2
          lg:items-center
          gap-12
          lg:gap-16
        "
      >
        {/* ================= LEFT CONTENT ================= */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="
            flex
            flex-col
            space-y-7
            sm:space-y-8
            max-w-2xl
            mx-auto
            lg:mx-0
            text-center
            lg:text-left
          "
        >
          {/* Brand Badge */}

          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-start"
          >
            <motion.span
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
                className="w-2 h-2 rounded-full bg-[#B68827]"
              />

              Complete Construction Solutions
            </motion.span>
          </motion.div>

          {/* Main Heading */}

          <motion.h1
            variants={itemVariants}
            className="
              font-semibold
              leading-[1.08]
              tracking-tight
              text-[#3E3118]
              text-4xl
              sm:text-5xl
              lg:text-6xl
              xl:text-7xl
            "
          >
            Better Surfaces.
            <br />

            <motion.span
              className="text-[#B68827] inline-block"
              whileHover={{
                x: 5,
              }}
              transition={{
                duration: 0.25,
              }}
            >
              Better Results.
            </motion.span>
          </motion.h1>

          {/* Description */}

          <motion.p
            variants={itemVariants}
            className="
              text-[#3E3118]/70
              text-base
              sm:text-lg
              leading-relaxed
              max-w-xl
              mx-auto
              lg:mx-0
            "
          >
            Reliable construction solutions designed for stronger,
            smoother and long-lasting surfaces. From premium wall putty
            and tile adhesives to tile grout, epoxy and POP products.
          </motion.p>

          {/* Product Categories */}

          <motion.div
            variants={containerVariants}
            className="
              flex
              flex-wrap
              items-center
              justify-center
              lg:justify-start
              gap-2
              pt-1
            "
          >
            {[
              {
                name: "Wall Putty",
                className:
                  "bg-[#3E3118] text-[#F6F5F0]",
              },
              {
                name: "Tile Adhesive",
                className:
                  "bg-[#B68827] text-[#3E3118]",
              },
              {
                name: "Tile Grout",
                className:
                  "border border-[#B68827]/40 text-[#3E3118] bg-[#F6F5F0]",
              },
              {
                name: "Epoxy",
                className:
                  "border border-[#B68827]/40 text-[#3E3118] bg-[#F6F5F0]",
              },
              {
                name: "POP",
                className:
                  "border border-[#B68827]/40 text-[#3E3118] bg-[#F6F5F0]",
              },
            ].map((item, index) => (
              <motion.span
                key={item.name}
                custom={index}
                variants={pillVariants}
                initial="hidden"
                animate="visible"
                whileHover={{
                  y: -4,
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className={`
                  px-4
                  py-2
                  rounded-full
                  text-sm
                  font-medium
                  cursor-default
                  ${item.className}
                `}
              >
                {item.name}
              </motion.span>
            ))}
          </motion.div>

          {/* Buttons */}

          <motion.div
            variants={itemVariants}
            className="
              flex
              flex-col
              sm:flex-row
              items-center
              justify-center
              lg:justify-start
              gap-4
              w-full
            "
          >
            <motion.div
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="w-full sm:w-auto"
            >
              <Link
                to="/products"
                className="
                  px-7
                  h-12
                  rounded-full
                  bg-[#3E3118]
                  text-[#F6F5F0]
                  flex
                  items-center
                  justify-center
                  w-full
                  sm:w-auto
                  transition-all
                  duration-300
                  hover:bg-[#B68827]
                  hover:text-[#3E3118]
                "
              >
                Explore Products

                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 ml-2"
                  whileHover={{
                    x: 5,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <path
                    fillRule="evenodd"
                    d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 01-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                    clipRule="evenodd"
                  />
                </motion.svg>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="w-full sm:w-auto"
            >
              <Link
                to="/contact"
                className="
                  px-7
                  h-12
                  rounded-full
                  border
                  border-[#B68827]
                  text-[#3E3118]
                  flex
                  items-center
                  justify-center
                  w-full
                  sm:w-auto
                  transition-all
                  duration-300
                  hover:bg-[#B68827]
                "
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>

          {/* Trust Points */}

          <motion.div
            variants={itemVariants}
            className="
              pt-3
              flex
              flex-wrap
              items-center
              justify-center
              lg:justify-start
              gap-x-6
              gap-y-3
              text-sm
              text-[#3E3118]/70
            "
          >
            {[
              "Quality Materials",
              "Reliable Performance",
              "Professional Results",
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{
                  opacity: 0,
                  x: -15,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 1 + index * 0.12,
                }}
                whileHover={{
                  x: 3,
                }}
                className="flex items-center gap-2"
              >
                <motion.span
                  whileHover={{
                    scale: 1.15,
                    rotate: 10,
                  }}
                  className="
                    flex
                    items-center
                    justify-center
                    w-5
                    h-5
                    rounded-full
                    bg-[#B68827]
                    text-[#F6F5F0]
                    text-xs
                  "
                >
                  ✓
                </motion.span>

                {item}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* ================= RIGHT VISUAL ================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            flex
            aspect-square
            lg:aspect-auto
            lg:h-[35rem]
            relative
            items-center
            justify-center
          "
        >
          {/* Decorative Background */}

          <motion.div
            animate={{
              y: [0, -12, 0],
              rotate: [0, 1.5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              right-4
              top-4
              w-[75%]
              h-[75%]
              rounded-[3rem]
              bg-[#B68827]/15
            "
          />

          {/* Main Image — Wall Putty */}

          <motion.div
            variants={imageLeftVariants}
            initial="hidden"
            animate="visible"
            whileHover={{
              scale: 1.025,
              y: -6,
              rotate: -1,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
            className="
              absolute
              left-0
              top-0
              w-[62%]
              h-[78%]
              rounded-[2rem]
              overflow-hidden
              border-8
              border-[#F6F5F0]
              shadow-xl
              z-30
              cursor-pointer
            "
          >
            <img
              src={wallPutty}
              alt="Wall Putty"
              loading="lazy"
              className="
                w-full
                h-full
                object-cover
              "
            />
          </motion.div>

          {/* Secondary Image — Tile Adhesive */}

          <motion.div
            variants={imageRightVariants}
            initial="hidden"
            animate="visible"
            whileHover={{
              scale: 1.025,
              y: -6,
              rotate: 1,
            }}
            className="
              absolute
              right-0
              bottom-0
              h-[65%]
              w-[65%]
              rounded-[2rem]
              overflow-hidden
              border-4
              border-[#F6F5F0]
              shadow-lg
              z-20
              cursor-pointer
            "
          >
            <img
              src={wallFinish}
              alt="Tile Adhesive"
              loading="lazy"
              className="
                w-full
                h-full
                object-cover
              "
            />
          </motion.div>

          {/* Floating Product Card */}

          <motion.div
            animate={{
              y: [0, -9, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.06,
              y: -12,
            }}
            className="
              absolute
              left-[38%]
              bottom-[8%]
              z-40
              bg-[#3E3118]
              text-[#F6F5F0]
              rounded-2xl
              px-5
              py-4
              shadow-xl
              cursor-default
            "
          >
            <p className="text-xs text-[#F6F5F0]/60">
              Our Expertise
            </p>

            <p className="font-semibold text-lg">
              Walls & Tiles
            </p>

            <div className="flex items-center gap-1 mt-1">
              <motion.span
                animate={{
                  scale: [1, 1.4, 1],
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

              <span className="text-xs text-[#F6F5F0]/70">
                Built for Better Results
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

