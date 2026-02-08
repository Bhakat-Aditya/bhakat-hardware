// src/data.js

export const products = [
    {
        id: 1,
        name: "Autoclaved Aerated Concrete (AAC) Blocks",
        brand: "Renacon / Biltech",
        category: "Masonry",
        description: "The modern standard for high-rise construction. Lightweight, heat-resistant, and eco-friendly. We are the exclusive authorized supplier for major projects in Midnapore.",
        image: "https://images.unsplash.com/photo-1599709579628-9844b25e791e?q=80&w=1000&auto=format&fit=crop",
        isAvailable: true,
        isFeatured: true, // New flag for Home page
    },
    {
        id: 2,
        name: "550D TMT Rebar",
        brand: "Tata Tiscon / SRMB",
        category: "Structure",
        description: "Earthquake-resistant steel reinforcement bars with superior ductility. Available in all structural diameters for high-rise capability.",
        image: "https://images.unsplash.com/photo-1535927708518-d70377488054?q=80&w=1000&auto=format&fit=crop",
        isAvailable: true,
        isFeatured: false,
    },
    {
        id: 3,
        name: "Premium Portland Cement",
        brand: "UltraTech / Ambuja",
        category: "Foundation",
        description: "High-grade PPC cement for enduring strength. Sourced directly from the plant to ensure maximum freshness.",
        image: "https://images.unsplash.com/photo-1587582423113-d4303362095f?q=80&w=1000&auto=format&fit=crop",
        isAvailable: true,
        isFeatured: false,
    },
    {
        id: 4,
        name: "River Sand (Gold Quality)",
        brand: "Natural Source",
        category: "Aggregates",
        description: "Premium, silt-free river sand. Essential for high-quality concrete mixing and flawless masonry finishing.",
        image: "https://images.unsplash.com/photo-1627838563404-5e839e083e92?q=80&w=1000&auto=format&fit=crop",
        isAvailable: true,
        isFeatured: false,
    },
    {
        id: 5,
        name: "Granite Stone Chips",
        brand: "Pakuhat / Local",
        category: "Aggregates",
        description: "High-strength granite aggregates. Uniformly graded sizes ensuring the most compact and durable concrete casting.",
        image: "https://images.unsplash.com/photo-1549419130-9b6424e69888?q=80&w=1000&auto=format&fit=crop",
        isAvailable: true,
        isFeatured: false,
    }
];

export const projects = [
    {
        id: 1,
        name: "Midnapore Heights",
        location: "Keranitola, Midnapore",
        material: "AAC Blocks & TMT",
        description: "A 12-story residential complex built entirely using our AAC blocks for reduced structural load.",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 2,
        name: "City Centre Plaza",
        location: "Station Road, Midnapore",
        material: "Full Structural Supply",
        description: "The city's newest commercial hub. Supplied 500+ tons of steel and heavy aggregates.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 3,
        name: "Greenfield Residency",
        location: "Abash, Midnapore",
        material: "AAC Blocks",
        description: "Premium apartments focusing on thermal insulation. Our AAC blocks were chosen for 30% energy savings.",
        image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=1000&auto=format&fit=crop"
    }
];

export const navLinks = [
    { name: "Home", href: "/" },
    { name: "Materials", href: "/products" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
];