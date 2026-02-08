// src/data.js

export const products = [
  {
    id: 1,
    name: "Premium Portland Cement",
    brand: "UltraTech / Ambuja", // You can edit this based on actual stock
    category: "Structural",
    price: "Market Price", // Cement prices fluctuate daily, better to keep as 'Call for Rate' or generic
    description: "High-grade PPC cement suitable for heavy construction. Direct delivery from the plant to your site ensures fresh stock and zero warehousing moisture.",
    image: "https://images.unsplash.com/photo-1587582423113-d4303362095f?q=80&w=1000&auto=format&fit=crop", 
    minOrder: "50 Bags",
    isAvailable: true,
  },
  {
    id: 2,
    name: "500D / 550D TMT Rebar",
    brand: "Tata Tiscon / SRMB",
    category: "Steel",
    price: "Per Ton",
    description: "Earthquake-resistant TMT bars with superior ductility. Available in 8mm to 32mm diameters. We arrange direct logistics for bulk orders.",
    image: "https://images.unsplash.com/photo-1535927708518-d70377488054?q=80&w=1000&auto=format&fit=crop", 
    minOrder: "1 Ton",
    isAvailable: true,
  },
  {
    id: 3,
    name: "River Sand (Medium/Coarse)",
    brand: "Local Sourcing",
    category: "Aggregates",
    price: "Per Cft",
    description: "Clean, silt-free river sand essential for concrete and masonry work. Delivered via dumper trucks directly to your construction location.",
    image: "https://images.unsplash.com/photo-1627838563404-5e839e083e92?q=80&w=1000&auto=format&fit=crop", 
    minOrder: "1 Truck (400 cft)",
    isAvailable: true,
  },
  {
    id: 4,
    name: "Stone Chips (20mm / 10mm)",
    brand: "Pakuhat / Local",
    category: "Aggregates",
    price: "Per Cft",
    description: "High-strength granite stone aggregates for slab casting and road work. Uniform size grading guaranteed.",
    image: "https://images.unsplash.com/photo-1549419130-9b6424e69888?q=80&w=1000&auto=format&fit=crop", 
    minOrder: "1 Truck",
    isAvailable: true,
  },
  {
    id: 5,
    name: "Red Clay Bricks (Class A)",
    brand: "Premium Kiln",
    category: "Masonry",
    price: "Per 1000 pcs",
    description: "Standard size, well-burnt red clay bricks with sharp edges and ringing sound. Ideal for load-bearing walls.",
    image: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?q=80&w=1000&auto=format&fit=crop", 
    minOrder: "2000 Pcs",
    isAvailable: true,
  }
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Bulk Materials", href: "#products" },
  { name: "About Bhakat", href: "#about" },
  { name: "Contact", href: "#contact" },
];