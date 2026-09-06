const products = [
  // =========================
  // GREY TILE ADHESIVES
  // =========================

  {
    id: 1,
    name: "T1 JK11",
    category: "Grey Adhesive",
    shortDescription: "High-quality grey tile adhesive for reliable tile installation.",
    description:
      "T1 JK11 is a grey tile adhesive designed for dependable tile fixing and easy application.",
    image: "/images/t1-jk11.jpg",
    benefits: [
      "Easy to apply",
      "Strong tile adhesion",
      "Smooth application",
      "Reliable performance",
    ],
    applications: [
      "Wall tiles",
      "Floor tiles",
      "Interior applications",
    ],
  },

  {
    id: 2,
    name: "T2 JK22",
    category: "Grey Adhesive",
    shortDescription: "Reliable grey tile adhesive for a wide range of tile applications.",
    description:
      "T2 JK22 is a grey tile adhesive formulated for strong and reliable tile installation.",
    image: "/images/t2-jk22.jpg",
    benefits: [
      "Strong adhesion",
      "Easy application",
      "Good workability",
      "Reliable performance",
    ],
    applications: [
      "Wall tiles",
      "Floor tiles",
      "Interior applications",
    ],
  },

  {
    id: 3,
    name: "T3 JK33",
    category: "Grey Adhesive",
    shortDescription: "Advanced grey tile adhesive for demanding tile installation applications.",
    description:
      "T3 JK33 is a grey tile adhesive designed to provide dependable performance for professional tile installation.",
    image: "/images/t3-jk33.jpg",
    benefits: [
      "Strong bonding",
      "Professional application",
      "Good workability",
      "Durable performance",
    ],
    applications: [
      "Wall tiles",
      "Floor tiles",
      "Interior applications",
    ],
  },

  {
    id: 4,
    name: "T4 JK44",
    category: "Grey Adhesive",
    shortDescription: "Premium grey tile adhesive designed for high-performance applications.",
    description:
      "T4 JK44 is a high-performance grey tile adhesive designed for professional tile fixing applications.",
    image: "/images/t4-jk44.jpg",
    benefits: [
      "High bonding strength",
      "Excellent workability",
      "Professional grade",
      "Durable performance",
    ],
    applications: [
      "Wall tiles",
      "Floor tiles",
      "Professional tile installation",
    ],
  },

  // =========================
  // WHITE TILE ADHESIVES
  // =========================

  {
    id: 5,
    name: "T1 JK111",
    category: "White Adhesive",
    shortDescription: "High-quality white tile adhesive for clean and reliable tile installation.",
    description:
      "T1 JK111 is a white tile adhesive designed for reliable tile fixing where a clean white finish is preferred.",
    image: "/images/t1-jk111.jpg",
    benefits: [
      "Clean white base",
      "Strong adhesion",
      "Easy application",
      "Good workability",
    ],
    applications: [
      "Wall tiles",
      "Floor tiles",
      "Decorative tiles",
    ],
  },

  {
    id: 6,
    name: "T2 JK222",
    category: "White Adhesive",
    shortDescription: "Reliable white tile adhesive for professional tile installation.",
    description:
      "T2 JK222 is a white tile adhesive formulated for dependable bonding and professional tile installation.",
    image: "/images/t2-jk222.jpg",
    benefits: [
      "Strong bonding",
      "Clean white appearance",
      "Easy to apply",
      "Reliable performance",
    ],
    applications: [
      "Wall tiles",
      "Floor tiles",
      "Decorative applications",
    ],
  },

  {
    id: 7,
    name: "T3 JK333",
    category: "White Adhesive",
    shortDescription: "Premium white tile adhesive for demanding professional applications.",
    description:
      "T3 JK333 is a premium white tile adhesive designed for professional tile fixing and high-quality finishing.",
    image: "/images/t3-jk333.jpg",
    benefits: [
      "High bonding strength",
      "Premium white base",
      "Excellent workability",
      "Professional performance",
    ],
    applications: [
      "Wall tiles",
      "Floor tiles",
      "Decorative tiles",
      "Professional installations",
    ],
  },

  // =========================
  // OTHER PRODUCTS
  // =========================

  {
    id: 8,
    name: "Wall Putty",
    category: "Wall Putty",
    shortDescription: "Quality wall putty for smooth and durable wall surfaces.",
    description:
      "Wall Putty is designed to prepare and smooth wall surfaces before painting, helping achieve a uniform and refined finish.",
    image: "/images/wall-putty.jpg",
    benefits: [
      "Smooth surface",
      "Easy application",
      "Improved wall finish",
      "Good workability",
    ],
    applications: [
      "Interior walls",
      "Exterior walls",
      "Surface preparation",
      "Before painting",
    ],
  },

  {
    id: 9,
    name: "Epoxy Grout",
    category: "Grout",
    shortDescription: "High-performance epoxy grout for strong and durable tile joints.",
    description:
      "Epoxy Grout is designed for durable and reliable joint filling in tile installations where enhanced performance is required.",
    image: "/images/epoxy-grout.jpg",
    benefits: [
      "Strong and durable joints",
      "Easy maintenance",
      "Professional finish",
      "Excellent performance",
    ],
    applications: [
      "Tile joints",
      "Bathrooms",
      "Kitchens",
      "Commercial spaces",
    ],
  },

  {
    id: 10,
    name: "Plaster of Paris",
    category: "Plaster",
    shortDescription: "Quality plaster of Paris for smooth finishing and interior applications.",
    description:
      "Plaster of Paris is suitable for a range of interior finishing, decorative and repair applications.",
    image: "/images/plaster-of-paris.jpg",
    benefits: [
      "Smooth finish",
      "Easy to work with",
      "Versatile applications",
      "Suitable for finishing",
    ],
    applications: [
      "Interior finishing",
      "Wall repairs",
      "Decorative work",
      "Ceiling applications",
    ],
  },

  {
    id: 11,
    name: "Tile Grout",
    category: "Grout",
    shortDescription: "Reliable tile grout for clean and durable tile joints.",
    description:
      "Tile Grout is designed for filling tile joints and achieving a neat and professional-looking finish.",
    image: "/images/tile-grout.jpg",
    benefits: [
      "Clean joint finish",
      "Easy application",
      "Good workability",
      "Durable performance",
    ],
    applications: [
      "Floor tiles",
      "Wall tiles",
      "Bathrooms",
      "Kitchens",
    ],
  },

  {
    id: 12,
    name: "Tile Cleaner",
    category: "Tile Care",
    shortDescription: "Tile cleaning solution for maintaining clean and fresh-looking surfaces.",
    description:
      "Tile Cleaner is designed to help remove dirt and buildup from tile surfaces and maintain a clean appearance.",
    image: "/images/tile-cleaner.jpg",
    benefits: [
      "Easy to use",
      "Helps remove dirt",
      "Maintains tile appearance",
      "Suitable for regular cleaning",
    ],
    applications: [
      "Floor tiles",
      "Wall tiles",
      "Bathrooms",
      "Kitchens",
    ],
  },
];

export default products;