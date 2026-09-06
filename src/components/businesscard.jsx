
import { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import LOGO_SRC from "../assets/images/businesslogo.png";


/**
 * JKprifix — 3D animated business card
 *
 * Features:
 * - 3D cursor tilt
 * - Gold foil / glare effect
 * - Click / tap to flip
 * - Properly centered and fitted logo
 * - Responsive card sizing
 */


/* =========================================================
   CONTACT DETAILS
========================================================= */

const CONTACT = {
  phone: "+91 88723 16415",
  email: "JKPREFIX@GMAIL.COM",

  addressLines: [
    "BEHIND JAGDAMBA MARBLES, BORAWAR ROAD,",
    "MAKRANA VILLAGE,",
    "MAKRANA, NAGAUR,",
    "RAJASTHAN - 341505",
  ],
};


/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function JKprifixBusinessCard() {

  const cardRef = useRef(null);

  const [flipped, setFlipped] = useState(false);


  /* =======================================================
     POINTER VALUES
  ======================================================= */

  const px = useMotionValue(0);
  const py = useMotionValue(0);


  /* =======================================================
     3D SPRING
  ======================================================= */

  const springConfig = {
    stiffness: 150,
    damping: 18,
    mass: 0.6,
  };


  const rotateX = useSpring(
    useTransform(py, [-0.5, 0.5], [14, -14]),
    springConfig
  );


  const rotateY = useSpring(
    useTransform(px, [-0.5, 0.5], [-14, 14]),
    springConfig
  );


  /* =======================================================
     GLARE POSITION
  ======================================================= */

  const glareX = useTransform(
    px,
    [-0.5, 0.5],
    ["10%", "90%"]
  );


  const glareY = useTransform(
    py,
    [-0.5, 0.5],
    ["10%", "90%"]
  );


  /* =======================================================
     MOUSE MOVE
  ======================================================= */

  function handleMouseMove(e) {

    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    const x =
      (e.clientX - rect.left) / rect.width - 0.5;

    const y =
      (e.clientY - rect.top) / rect.height - 0.5;

    px.set(x);
    py.set(y);
  }


  /* =======================================================
     MOUSE LEAVE
  ======================================================= */

  function handleMouseLeave() {

    px.set(0);
    py.set(0);
  }


  /* =======================================================
     CARD
  ======================================================= */

  return (

    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        minHeight: "100vh",
        width: "100%",

        padding: "30px 20px",

        boxSizing: "border-box",

        background:
          "radial-gradient(circle at 50% 30%, #1c1c1a 0%, #050505 75%)",

        fontFamily:
          "'Segoe UI', Helvetica, Arial, sans-serif",
      }}
    >

      {/* =================================================
          PERSPECTIVE
      ================================================= */}

      <div
        style={{
          perspective: 1600,

          width: "100%",

          display: "flex",
          justifyContent: "center",
        }}
      >

        {/* =================================================
            OUTER CARD
        ================================================= */}

        <motion.div
          ref={cardRef}

          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}

          onClick={() =>
            setFlipped((f) => !f)
          }

          style={{
            position: "relative",

            width: "min(380px, 92vw)",

            aspectRatio: "380 / 220",

            cursor: "pointer",

            rotateX,
            rotateY,

            transformStyle: "preserve-3d",
          }}
        >

          {/* =================================================
              CARD SHADOW
          ================================================= */}

          <motion.div
            style={{
              position: "absolute",

              inset: -20,

              borderRadius: 24,

              background:
                "radial-gradient(ellipse at center, rgba(0,0,0,0.55) 0%, transparent 70%)",

              transform:
                "translateZ(-60px) translateY(30px)",

              filter: "blur(10px)",

              zIndex: 0,
            }}
          />


          {/* =================================================
              FLIP WRAPPER
          ================================================= */}

          <motion.div
            animate={{
              rotateY: flipped ? 180 : 0,
            }}

            transition={{
              duration: 0.7,

              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}

            style={{
              position: "relative",

              width: "100%",
              height: "100%",

              transformStyle:
                "preserve-3d",
            }}
          >

            {/* =================================================
                FRONT
            ================================================= */}

            <div
              style={{
                position: "absolute",

                inset: 0,

                borderRadius: 16,

                overflow: "hidden",

                backfaceVisibility:
                  "hidden",

                boxShadow:
                  "0 2px 6px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.5)",

                background:
                  "linear-gradient(135deg, #fbfbfa 0%, #f2f1ec 30%, #e7e5dd 55%, #f4f3ee 80%, #fafaf8 100%)",
              }}
            >

              {/* =================================================
                  MARBLE VEINS
              ================================================= */}

              <svg
                width="100%"
                height="100%"
                viewBox="0 0 380 220"

                style={{
                  position: "absolute",
                  inset: 0,

                  opacity: 0.35,

                  mixBlendMode:
                    "multiply",

                  pointerEvents: "none",
                }}
              >

                <path
                  d="M-10 40 C 60 10, 120 70, 200 30 S 340 20, 400 60"
                  stroke="#bcb9ae"
                  strokeWidth="1.2"
                  fill="none"
                />

                <path
                  d="M-10 140 C 80 110, 140 180, 230 150 S 360 170, 400 130"
                  stroke="#c7c4b8"
                  strokeWidth="1"
                  fill="none"
                />

                <path
                  d="M20 -10 C 40 60, 10 100, 60 180"
                  stroke="#d2cfc2"
                  strokeWidth="0.8"
                  fill="none"
                />

                <path
                  d="M340 -10 C 320 50, 360 90, 330 220"
                  stroke="#c2bfb2"
                  strokeWidth="0.8"
                  fill="none"
                />

              </svg>


              {/* =================================================
                  GOLD FOIL
              ================================================= */}

              <motion.div
                style={{
                  position: "absolute",

                  inset: 0,

                  background: useTransform(
                    [glareX, glareY],

                    ([gx, gy]) =>
                      `radial-gradient(
                        circle at ${gx} ${gy},
                        rgba(255,224,140,0.55) 0%,
                        rgba(255,224,140,0.12) 30%,
                        transparent 60%
                      )`
                  ),

                  mixBlendMode:
                    "overlay",

                  pointerEvents:
                    "none",
                }}
              />


              {/* =================================================
                  FRONT LOGO AREA
              ================================================= */}

              <div
                style={{
                  position: "absolute",

                  inset: 0,

                  display: "flex",

                  alignItems: "center",

                  justifyContent: "center",

                  padding:
                    "28px 35px",

                  boxSizing:
                    "border-box",

                  transform:
                    "translateZ(30px)",

                  zIndex: 2,
                }}
              >

                {/* Fixed visual container */}

                <div
                  style={{
                    width: "100%",

                    height: "100%",

                    display: "flex",

                    alignItems: "center",

                    justifyContent:
                      "center",

                    overflow: "hidden",
                  }}
                >

                  <img
                    src={LOGO_SRC}

                    alt="JKprefix Construction Chemicals Co."

                    draggable={false}

                    style={{
                      display: "block",

                      width: "100%",

                      height: "100%",

                      maxWidth: "310px",

                      maxHeight: "135px",

                      objectFit:
                        "contain",

                      objectPosition:
                        "center",

                      userSelect:
                        "none",

                      pointerEvents:
                        "none",
                    }}
                  />

                </div>

              </div>


              {/* =================================================
                  FRONT TAP LABEL
              ================================================= */}

              <div
                style={{
                  position: "absolute",

                  bottom: 10,
                  right: 14,

                  fontSize: 9,

                  letterSpacing:
                    "0.2em",

                  color: "#9a988e",

                  textTransform:
                    "uppercase",

                  zIndex: 4,
                }}
              >
                TAP TO FLIP
              </div>

            </div>


            {/* =================================================
                BACK
            ================================================= */}

            <div
              style={{
                position: "absolute",

                inset: 0,

                borderRadius: 16,

                overflow: "hidden",

                backfaceVisibility:
                  "hidden",

                transform:
                  "rotateY(180deg)",

                background:
                  "linear-gradient(160deg, #111110 0%, #0a0a09 60%, #050504 100%)",

                boxShadow:
                  "0 2px 6px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.08)",
              }}
            >

              {/* =================================================
                  BACK GLARE
              ================================================= */}

              <motion.div
                style={{
                  position: "absolute",

                  inset: 0,

                  background:
                    useTransform(
                      [glareX, glareY],

                      ([gx, gy]) =>
                        `radial-gradient(
                          circle at ${gx} ${gy},
                          rgba(233,196,105,0.18) 0%,
                          transparent 55%
                        )`
                    ),

                  pointerEvents:
                    "none",
                }}
              />


              {/* =================================================
                  BACK CONTENT
              ================================================= */}

              <div
                style={{
                  position: "relative",

                  height: "100%",

                  display: "flex",

                  flexDirection:
                    "column",

                  justifyContent:
                    "center",

                  padding:
                    "20px 26px",

                  boxSizing:
                    "border-box",

                  transform:
                    "translateZ(30px)",
                }}
              >

                {/* =================================================
                    BACK LOGO
                ================================================= */}

                <div
                  style={{
                    width: "100%",

                    height: 38,

                    display: "flex",

                    alignItems:
                      "center",

                    justifyContent:
                      "flex-start",

                    marginBottom: 10,

                    overflow: "hidden",
                  }}
                >

                 

                </div>


                {/* =================================================
                    GOLD LINE
                ================================================= */}

                <div
                  style={{
                    height: 1,

                    width: "100%",

                    marginBottom: 12,

                    background:
                      "linear-gradient(90deg, #c99a34 0%, rgba(201,154,52,0.15) 60%, transparent 100%)",
                  }}
                />


                {/* =================================================
                    CONTACT DETAILS
                ================================================= */}

                <div
                  style={{
                    display: "flex",

                    flexDirection:
                      "column",

                    gap: 5,
                  }}
                >

                  {/* PHONE */}

                  <span
                    style={{
                      fontSize: 10.5,

                      letterSpacing:
                        "0.1em",

                      color: "#e9c469",

                      textTransform:
                        "uppercase",

                      whiteSpace:
                        "nowrap",
                    }}
                  >
                    {CONTACT.phone}
                  </span>


                  {/* EMAIL */}

                  <span
                    style={{
                      fontSize: 10.5,

                      letterSpacing:
                        "0.1em",

                      color: "#e9c469",

                      textTransform:
                        "uppercase",

                      whiteSpace:
                        "nowrap",
                    }}
                  >
                    {CONTACT.email}
                  </span>


                  {/* ADDRESS */}

                  <div
                    style={{
                      marginTop: 4,

                      display: "flex",

                      flexDirection:
                        "column",

                      gap: 2,
                    }}
                  >

                    {CONTACT.addressLines.map(
                      (line) => (
                        <span
                          key={line}

                          style={{
                            fontSize: 9.5,

                            letterSpacing:
                              "0.08em",

                            color:
                              "#cfcdc4",

                            textTransform:
                              "uppercase",

                            whiteSpace:
                              "nowrap",
                          }}
                        >
                          {line}
                        </span>
                      )
                    )}

                  </div>

                </div>

              </div>


              {/* =================================================
                  BACK TAP LABEL
              ================================================= */}

              <div
                style={{
                  position: "absolute",

                  bottom: 10,
                  right: 14,

                  fontSize: 9,

                  letterSpacing:
                    "0.2em",

                  color: "#6b6a63",

                  textTransform:
                    "uppercase",
                }}
              >
                TAP TO FLIP
              </div>

            </div>

          </motion.div>

        </motion.div>

      </div>

    </div>
  );
}

