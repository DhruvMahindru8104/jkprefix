import React from "react";
import { motion } from "framer-motion";


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


const contactContainer = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};


const contactItem = {
  hidden: {
    opacity: 0,
    x: -35,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};


const mapVariants = {
  hidden: {
    opacity: 0,
    x: 50,
    scale: 0.97,
  },

  visible: {
    opacity: 1,
    x: 0,
    scale: 1,

    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};


/* =========================================================
   CONTACT ITEM
========================================================= */

const ContactItem = ({ icon, title, description, children }) => {
  return (
    <motion.div
      variants={contactItem}

      whileHover={{
        x: 5,
      }}

      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
    >

      {/* ICON */}

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
          inline-flex
          items-center
          justify-center
          w-12
          h-12
          rounded-full
          bg-[#B68827]/10
          text-[#B68827]
        "
      >
        {icon}
      </motion.span>


      {/* TITLE */}

      <h2
        className="
          mt-4
          text-base
          font-semibold
          text-[#3E3118]
        "
      >
        {title}
      </h2>


      {/* DESCRIPTION */}

      <p
        className="
          mt-2
          text-sm
          leading-relaxed
          text-[#3E3118]/60
        "
      >
        {description}
      </p>


      {/* CONTENT */}

      {children}

    </motion.div>
  );
};


/* =========================================================
   CONTACT US SECTION
========================================================= */

const Contactus = () => {
  return (
    <motion.section
      id="contact"

      variants={sectionVariants}

      initial="hidden"

      whileInView="visible"

      viewport={{
        once: true,
        amount: 0.12,
      }}

      className="
        bg-[#F6F5F0]
        py-32
        sm:py-24
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

          className="max-w-2xl"
        >

          {/* BADGE */}

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

            Contact Us

          </motion.span>


          {/* HEADING */}

          <motion.h1
            variants={headingItem}

            className="
              mt-5
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-semibold
              leading-tight
              text-[#3E3118]
            "
          >
            Get in touch with us.
          </motion.h1>


          {/* DESCRIPTION */}

          <motion.p
            variants={headingItem}

            className="
              mt-5
              text-[#3E3118]/65
              text-base
              sm:text-lg
              leading-relaxed
              max-w-xl
            "
          >
            Have a question about our products or need help choosing
            the right construction solution? Our team is here to help.
          </motion.p>

        </motion.div>


        {/* =================================================
            CONTACT + MAP
        ================================================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-12
            mt-12
            lg:grid-cols-3
          "
        >

          {/* =================================================
              CONTACT INFORMATION
          ================================================= */}

          <motion.div
            variants={contactContainer}

            initial="hidden"

            whileInView="visible"

            viewport={{
              once: true,
              amount: 0.2,
            }}

            className="
              grid
              grid-cols-1
              gap-10
              sm:grid-cols-2
              lg:grid-cols-1
            "
          >

            {/* =================================================
                EMAIL
            ================================================= */}

            <ContactItem
              title="Email"
              description="Our team is here to help with your product enquiries."

              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              }
            >

              <motion.a
                href="mailto:jkprifix@gmail.com"

                whileHover={{
                  x: 5,
                }}

                className="
                  inline-block
                  mt-2
                  text-sm
                  font-medium
                  text-[#B68827]
                  hover:text-[#3E3118]
                  transition-colors
                "
              >
                jkprifix@gmail.com
              </motion.a>

            </ContactItem>


            {/* =================================================
                ADDRESS
            ================================================= */}

            <ContactItem
              title="Office"
              description={
                <>
                  Behind Jagdamba Marbles,
                  <br />
                  Borawar Road,
                  <br />
                  Makrana Village,
                  <br />
                  Makrana, Nagaur,
                  <br />
                  Rajasthan - 341505
                </>
              }

              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              }
            >

              <motion.a
                href="https://www.google.com/maps/search/?api=1&query=Behind+Jagdamba+Marbles+Borawar+Road+Makrana+Rajasthan+341505"

                target="_blank"

                rel="noopener noreferrer"

                whileHover={{
                  x: 5,
                }}

                className="
                  inline-block
                  mt-3
                  text-sm
                  font-medium
                  text-[#B68827]
                  hover:text-[#3E3118]
                  transition-colors
                "
              >
                Get Directions →
              </motion.a>

            </ContactItem>


            {/* =================================================
                PHONE
            ================================================= */}

            <ContactItem
              title="Phone"
              description="Contact us for product enquiries and assistance."

              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              }
            >

              <motion.a
                href="tel:+918872316415"

                whileHover={{
                  x: 5,
                }}

                className="
                  inline-block
                  mt-2
                  text-sm
                  font-medium
                  text-[#B68827]
                  hover:text-[#3E3118]
                  transition-colors
                "
              >
                +91 88723 16415
              </motion.a>

            </ContactItem>

          </motion.div>


          {/* =================================================
              GOOGLE MAP
          ================================================= */}

          <motion.div
            variants={mapVariants}

            initial="hidden"

            whileInView="visible"

            viewport={{
              once: true,
              amount: 0.2,
            }}

            whileHover={{
              y: -4,
            }}

            transition={{
              duration: 0.3,
            }}

            className="
              overflow-hidden
              rounded-3xl
              lg:col-span-2
              h-[400px]
              lg:h-auto
              min-h-[400px]
              border
              border-[#B68827]/20
              shadow-sm
            "
          >

            <iframe
              title="Our Location - Makrana Rajasthan"

              width="100%"
              height="100%"

              frameBorder="0"

              marginHeight="0"

              marginWidth="0"

              scrolling="no"

              src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Behind%20Jagdamba%20Marbles%2C%20Borawar%20Road%2C%20Makrana%2C%20Rajasthan%20341505&t=&z=15&ie=UTF8&iwloc=B&output=embed"

              className="
                w-full
                h-full
              "
            />

          </motion.div>

        </div>

      </div>

    </motion.section>
  );
};


export default Contactus;

