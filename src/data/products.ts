export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  brand: string;
  rating: number;
  inStock: boolean;
  featured: boolean;
  description?: string;
  image?: string;
  model?: string; // Land Rover model
}

export const products: Product[] = [
  // Discovery 1 Produkter
  { 
    id: 1, 
    name: "Discovery 1 Bremseklodser", 
    price: 299, 
    category: "brakes", 
    brand: "AutoUniqa", 
    rating: 4.8, 
    inStock: true, 
    featured: true,
    description: "Kvalitets bremseklodser til Discovery 1",
    model: "Discovery 1",
    image: "/Images/products/discovery1/bremser.jpg"
  },
  { 
    id: 2, 
    name: "Discovery 1 Luftfilter", 
    price: 89, 
    category: "intake", 
    brand: "AutoUniqa", 
    rating: 4.7, 
    inStock: true, 
    featured: false,
    description: "Luftfilter til Discovery 1",
    model: "Discovery 1",
    image: "/Images/products/discovery1/luftfilter.jpg"
  },
  { 
    id: 3, 
    name: "Discovery 1 Oliefilter", 
    price: 45, 
    category: "maintenance", 
    brand: "AutoUniqa", 
    rating: 4.9, 
    inStock: true, 
    featured: false,
    description: "Oliefilter til Discovery 1",
    model: "Discovery 1",
    image: "/Images/products/discovery1/oliefilter.jpg"
  },

  // Discovery 2 Produkter
  { 
    id: 4, 
    name: "Discovery 2 Bremseklodser", 
    price: 349, 
    category: "brakes", 
    brand: "AutoUniqa", 
    rating: 4.8, 
    inStock: true, 
    featured: true,
    description: "Kvalitets bremseklodser til Discovery 2",
    model: "Discovery 2",
    image: "/Images/products/discovery2/bremser.jpg"
  },
  { 
    id: 5, 
    name: "Discovery 2 Luftfilter", 
    price: 99, 
    category: "intake", 
    brand: "AutoUniqa", 
    rating: 4.7, 
    inStock: true, 
    featured: false,
    description: "Luftfilter til Discovery 2",
    model: "Discovery 2",
    image: "/Images/products/discovery2/luftfilter.jpg"
  },
  { 
    id: 6, 
    name: "Discovery 2 Oliefilter", 
    price: 55, 
    category: "maintenance", 
    brand: "AutoUniqa", 
    rating: 4.9, 
    inStock: true, 
    featured: false,
    description: "Oliefilter til Discovery 2",
    model: "Discovery 2",
    image: "/Images/products/discovery2/oliefilter.jpg"
  },

  // Discovery 3 Produkter
  { 
    id: 7, 
    name: "Discovery 3 Bremseklodser", 
    price: 399, 
    category: "brakes", 
    brand: "AutoUniqa", 
    rating: 4.8, 
    inStock: true, 
    featured: true,
    description: "Kvalitets bremseklodser til Discovery 3",
    model: "Discovery 3",
    image: "/Images/products/discovery3/bremser.jpg"
  },
  { 
    id: 8, 
    name: "Discovery 3 Luftfilter", 
    price: 119, 
    category: "intake", 
    brand: "AutoUniqa", 
    rating: 4.7, 
    inStock: true, 
    featured: false,
    description: "Luftfilter til Discovery 3",
    model: "Discovery 3",
    image: "/Images/products/discovery3/luftfilter.jpg"
  },
  { 
    id: 9, 
    name: "Discovery 3 Oliefilter", 
    price: 65, 
    category: "maintenance", 
    brand: "AutoUniqa", 
    rating: 4.9, 
    inStock: true, 
    featured: false,
    description: "Oliefilter til Discovery 3",
    model: "Discovery 3",
    image: "/Images/products/discovery3/oliefilter.jpg"
  },

  // Discovery 4 Produkter
  { 
    id: 10, 
    name: "Discovery 4 Bremseklodser", 
    price: 449, 
    category: "brakes", 
    brand: "AutoUniqa", 
    rating: 4.8, 
    inStock: true, 
    featured: true,
    description: "Kvalitets bremseklodser til Discovery 4",
    model: "Discovery 4",
    image: "/Images/products/discovery4/bremser.jpg"
  },
  { 
    id: 11, 
    name: "Discovery 4 Luftfilter", 
    price: 139, 
    category: "intake", 
    brand: "AutoUniqa", 
    rating: 4.7, 
    inStock: true, 
    featured: false,
    description: "Luftfilter til Discovery 4",
    model: "Discovery 4",
    image: "/Images/products/discovery4/luftfilter.jpg"
  },
  { 
    id: 12, 
    name: "Discovery 4 Oliefilter", 
    price: 75, 
    category: "maintenance", 
    brand: "AutoUniqa", 
    rating: 4.9, 
    inStock: true, 
    featured: false,
    description: "Oliefilter til Discovery 4",
    model: "Discovery 4",
    image: "/Images/products/discovery4/oliefilter.jpg"
  },

  // Land Rover Defender Produkter
  { 
    id: 13, 
    name: "Defender Bremseklodser", 
    price: 299, 
    category: "brakes", 
    brand: "AutoUniqa", 
    rating: 4.9, 
    inStock: true, 
    featured: true,
    description: "Kvalitets bremseklodser til Land Rover Defender",
    model: "Defender",
    image: "/Images/products/defender/bremser.jpg"
  },
  { 
    id: 14, 
    name: "Defender Luftfilter", 
    price: 89, 
    category: "intake", 
    brand: "AutoUniqa", 
    rating: 4.8, 
    inStock: true, 
    featured: false,
    description: "Luftfilter til Land Rover Defender",
    model: "Defender",
    image: "/Images/products/defender/luftfilter.jpg"
  },
  { 
    id: 15, 
    name: "Defender Oliefilter", 
    price: 45, 
    category: "maintenance", 
    brand: "AutoUniqa", 
    rating: 4.9, 
    inStock: true, 
    featured: false,
    description: "Oliefilter til Land Rover Defender",
    model: "Defender",
    image: "/Images/products/defender/oliefilter.jpg"
  },
  { 
    id: 16, 
    name: "Defender Lift Kit", 
    price: 1899, 
    category: "lift-kits", 
    brand: "AutoUniqa", 
    rating: 4.9, 
    inStock: true, 
    featured: true,
    description: "Professionelt lift kit til Land Rover Defender",
    model: "Defender",
    image: "/Images/products/defender/lift-kit.jpg"
  },
  { 
    id: 17, 
    name: "Defender Roof Rack", 
    price: 1299, 
    category: "storage", 
    brand: "AutoUniqa", 
    rating: 4.8, 
    inStock: true, 
    featured: true,
    description: "Tagboks til Land Rover Defender",
    model: "Defender",
    image: "/Images/products/defender/roof-rack.jpg"
  },
  { 
    id: 18, 
    name: "Defender LED Work Lights", 
    price: 399, 
    category: "lighting", 
    brand: "AutoUniqa", 
    rating: 4.6, 
    inStock: true, 
    featured: false,
    description: "Arbejdslygter til Land Rover Defender",
    model: "Defender",
    image: "/Images/products/defender/led-lygter.jpg"
  },

  // Land Rover Freelander Produkter
  { 
    id: 19, 
    name: "Freelander Bremseklodser", 
    price: 249, 
    category: "brakes", 
    brand: "AutoUniqa", 
    rating: 4.7, 
    inStock: true, 
    featured: false,
    description: "Kvalitets bremseklodser til Land Rover Freelander",
    model: "Freelander",
    image: "/Images/products/freelander/bremser.jpg"
  },
  { 
    id: 20, 
    name: "Freelander Luftfilter", 
    price: 79, 
    category: "intake", 
    brand: "AutoUniqa", 
    rating: 4.6, 
    inStock: true, 
    featured: false,
    description: "Luftfilter til Land Rover Freelander",
    model: "Freelander",
    image: "/Images/products/freelander/luftfilter.jpg"
  },

  // Range Rover Produkter
  { 
    id: 21, 
    name: "Range Rover Bremseklodser", 
    price: 549, 
    category: "brakes", 
    brand: "AutoUniqa", 
    rating: 4.8, 
    inStock: true, 
    featured: true,
    description: "Kvalitets bremseklodser til Range Rover",
    model: "Range Rover",
    image: "/Images/products/range-rover/bremser.jpg"
  },
  { 
    id: 22, 
    name: "Range Rover Luftfilter", 
    price: 159, 
    category: "intake", 
    brand: "AutoUniqa", 
    rating: 4.7, 
    inStock: true, 
    featured: false,
    description: "Luftfilter til Range Rover",
    model: "Range Rover",
    image: "/Images/products/range-rover/luftfilter.jpg"
  },
  { 
    id: 23, 
    name: "Range Rover Sport Bull Bar", 
    price: 1499, 
    category: "protection", 
    brand: "AutoUniqa", 
    rating: 4.8, 
    inStock: true, 
    featured: true,
    description: "Bull bar til Range Rover Sport",
    model: "Range Rover Sport",
    image: "/Images/products/range-rover/bull-bar.jpg"
  },

  // Range Rover Classic Produkter
  { 
    id: 24, 
    name: "Range Rover Classic Bremseklodser", 
    price: 399, 
    category: "brakes", 
    brand: "AutoUniqa", 
    rating: 4.8, 
    inStock: true, 
    featured: false,
    description: "Kvalitets bremseklodser til Range Rover Classic",
    model: "Range Rover Classic",
    image: "/Images/products/range-rover-classic/bremser.jpg"
  },
  { 
    id: 25, 
    name: "Range Rover Classic Luftfilter", 
    price: 119, 
    category: "intake", 
    brand: "AutoUniqa", 
    rating: 4.7, 
    inStock: true, 
    featured: false,
    description: "Luftfilter til Range Rover Classic",
    model: "Range Rover Classic",
    image: "/Images/products/range-rover-classic/luftfilter.jpg"
  },

  // Partikelfilter Produkter
  { 
    id: 26, 
    name: "Partikelfilter Discovery 3", 
    price: 899, 
    category: "emissions", 
    brand: "AutoUniqa", 
    rating: 4.8, 
    inStock: true, 
    featured: true,
    description: "Partikelfilter til Discovery 3",
    model: "Discovery 3",
    image: "/Images/products/discovery3/partikelfilter.jpg"
  },
  { 
    id: 27, 
    name: "Partikelfilter Discovery 4", 
    price: 999, 
    category: "emissions", 
    brand: "AutoUniqa", 
    rating: 4.8, 
    inStock: true, 
    featured: true,
    description: "Partikelfilter til Discovery 4",
    model: "Discovery 4",
    image: "/Images/products/discovery4/partikelfilter.jpg"
  },
  { 
    id: 28, 
    name: "Partikelfilter Range Rover", 
    price: 1199, 
    category: "emissions", 
    brand: "AutoUniqa", 
    rating: 4.9, 
    inStock: true, 
    featured: true,
    description: "Partikelfilter til Range Rover",
    model: "Range Rover",
    image: "/Images/products/range-rover/partikelfilter.jpg"
  },

  // Generelle Reservedele
  { 
    id: 29, 
    name: "Universal LED Light Bar", 
    price: 299, 
    category: "lighting", 
    brand: "AutoUniqa", 
    rating: 4.7, 
    inStock: true, 
    featured: true,
    description: "Kraftig LED lygte til alle Land Rover modeller",
    image: "/Images/products/universal/led-light-bar.jpg"
  },
  { 
    id: 30, 
    name: "Universal Winch 12000lb", 
    price: 899, 
    category: "recovery", 
    brand: "AutoUniqa", 
    rating: 4.6, 
    inStock: false, 
    featured: false,
    description: "Kraftig winch til recovery operationer",
    image: "/Images/products/universal/winch.jpg"
  },
  { 
    id: 31, 
    name: "Universal Rock Sliders", 
    price: 549, 
    category: "protection", 
    brand: "AutoUniqa", 
    rating: 4.8, 
    inStock: true, 
    featured: true,
    description: "Rock sliders til beskyttelse af sideskørter",
    image: "/Images/products/universal/rock-sliders.jpg"
  },
  { 
    id: 32, 
    name: "Universal Suspension Kit", 
    price: 1899, 
    category: "suspension", 
    brand: "AutoUniqa", 
    rating: 4.9, 
    inStock: true, 
    featured: true,
    description: "Komplet ophængskit til forbedret kørselsoplevelse",
    image: "/Images/products/universal/suspension-kit.jpg"
  },
  { 
    id: 33, 
    name: "Universal Cargo Box", 
    price: 399, 
    category: "storage", 
    brand: "AutoUniqa", 
    rating: 4.4, 
    inStock: true, 
    featured: true,
    description: "Opbevaringskasse til ekstra plads",
    image: "/Images/products/universal/cargo-box.jpg"
  },
  { 
    id: 34, 
    name: "Universal Recovery Tracks", 
    price: 199, 
    category: "recovery", 
    brand: "AutoUniqa", 
    rating: 4.8, 
    inStock: true, 
    featured: false,
    description: "Recovery tracks til fastkørte situationer",
    image: "/Images/products/universal/recovery-tracks.jpg"
  },
  { 
    id: 35, 
    name: "Universal Roof Tent Pro", 
    price: 2499, 
    category: "roof-tents", 
    brand: "AutoUniqa", 
    rating: 4.8, 
    inStock: true, 
    featured: true,
    description: "Premium roof tent til alle Land Rover modeller",
    image: "/Images/products/universal/roof-tent.jpg"
  },
];

export const categories = [
  { id: "all", name: "Alle Produkter", count: products.length },
  { id: "brakes", name: "Bremser", count: products.filter(p => p.category === "brakes").length },
  { id: "intake", name: "Indsugning", count: products.filter(p => p.category === "intake").length },
  { id: "maintenance", name: "Vedligeholdelse", count: products.filter(p => p.category === "maintenance").length },
  { id: "emissions", name: "Partikelfilter", count: products.filter(p => p.category === "emissions").length },
  { id: "roof-tents", name: "Roof Tents", count: products.filter(p => p.category === "roof-tents").length },
  { id: "lift-kits", name: "Lift Kits", count: products.filter(p => p.category === "lift-kits").length },
  { id: "lighting", name: "Belysning", count: products.filter(p => p.category === "lighting").length },
  { id: "recovery", name: "Recovery Udstyr", count: products.filter(p => p.category === "recovery").length },
  { id: "protection", name: "Beskyttelse", count: products.filter(p => p.category === "protection").length },
  { id: "suspension", name: "Ophæng", count: products.filter(p => p.category === "suspension").length },
  { id: "storage", name: "Opbevaring", count: products.filter(p => p.category === "storage").length },
];

export const brands = ["AutoUniqa"];

export const models = [
  "Discovery 1",
  "Discovery 2", 
  "Discovery 3",
  "Discovery 4",
  "Defender",
  "Freelander",
  "Range Rover",
  "Range Rover Classic"
];

export const priceRanges = [
  { id: "all", name: "Alle priser", min: 0, max: Infinity },
  { id: "under-100", name: "Under 100 kr", min: 0, max: 100 },
  { id: "100-500", name: "100 - 500 kr", min: 100, max: 500 },
  { id: "500-1000", name: "500 - 1000 kr", min: 500, max: 1000 },
  { id: "over-1000", name: "Over 1000 kr", min: 1000, max: Infinity },
]; 