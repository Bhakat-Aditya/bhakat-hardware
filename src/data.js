// src/data.js

export const products = [
    {
        id: 1,
        name: "Autoclaved Aerated Concrete (AAC) Blocks",
        brand: "Ual Kon Crete / Rashmi / Joyce / Biltech",
        category: "Masonry",
        description: "The modern standard for high-rise construction. Lightweight, heat-resistant, and eco-friendly. We are the exclusive authorized supplier for major projects in Midnapore.",
        image: "https://5.imimg.com/data5/SELLER/Default/2023/10/356354609/IQ/QZ/EC/3107843/lightweight-aac-block.jpeg",
        isAvailable: true,
        isFeatured: true, // New flag for Home page
    },
    {
        id: 2,
        name: "MYK Arment",
        brand: "MYK Arment",
        category: "Liquid Waterproofing",
        description: "Advanced liquid waterproofing solution. Ideal for roofs, terraces, and basements. Provides a seamless, durable barrier against water ingress.",
        image: "https://5.imimg.com/data5/SELLER/Default/2021/9/CP/UF/NT/3522575/myk-armant-construction-chemical.jpg",
        isAvailable: true,
        isFeatured: false,
    },
    {
        id: 3,
        name: "MYK Laticrete",
        brand: "MYK Laticrete",
        category: "Tile Adhesives & Grouts",
        description: "Premium tile adhesives and grouts. Engineered for superior bonding, flexibility, and durability. Perfect for both indoor and outdoor applications.",
        image: "https://media.myklaticrete.com/mykl/2024/08/4-LATICRETE-9237-1.png",
        isAvailable: true,
        isFeatured: false,
    },
    {
        id: 4,
        name: "Glass Fiber Mesh",
        brand: "Local",
        category: "Reinforcement",
        description: "High-strength glass fiber mesh for crack prevention and structural reinforcement. Ideal for plastering, flooring, and waterproofing applications.",
        image: "https://images.jdmagicbox.com/quickquotes/images_main/fiberglass-mesh-2031210695-4kzdc3hy.jpg",
        isAvailable: true,
        isFeatured: false,
    },
    {
        id: 5,
        name: "Redemix Plaster",
        brand: "Konarak / Rashmi",
        category: "Plaster",
        description: "Pre-mixed plaster for smooth and durable finishes. Suitable for both interior and exterior applications. Saves time and ensures consistent quality.",
        image: "https://cpimg.tistatic.com/11930203/b/4/Concrete-Ready-Mix-Plaster..png",
        isAvailable: true,
        isFeatured: false,
    },
    {
        id: 6,
        name: "Breeze Block",
        brand: "Local",
        category: "Masonry",
        description: "Cost-effective alternative to traditional bricks. Made from a mix of cement, sand, and lightweight aggregates. Ideal for non-load-bearing walls and partitions.",
        image: "https://5.imimg.com/data5/SELLER/Default/2021/8/EW/AZ/IE/8368894/cement-breeze-blocks.jpg",
        isAvailable: true,
        isFeatured: false,
    },
];

export const projects = [
    {
        id: 1,
        name: "Midnapore Heights",
        location: "Keranitola, Midnapore",
        material: "AAC Blocks & TMT",
        description: "A 12-story residential complex built entirely using our AAC blocks for reduced structural load.",
        image: ""
    },
    {
        id: 2,
        name: "City Centre Plaza",
        location: "Station Road, Midnapore",
        material: "Full Structural Supply",
        description: "The city's newest commercial hub. Supplied 500+ tons of steel and heavy aggregates.",
        image: ""
    },
    {
        id: 3,
        name: "Greenfield Residency",
        location: "Abash, Midnapore",
        material: "AAC Blocks",
        description: "Premium apartments focusing on thermal insulation. Our AAC blocks were chosen for 30% energy savings.",
        image: ""
    }
];

export const navLinks = [
    { name: "Home", href: "/" },
    { name: "Materials", href: "/products" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
];