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
    image: "/Images/products/defender/oliefilter.jpg?v=2"
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
    image: "/Images/products/defender/oliefilter.jpg?v=2"
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
    image: "/Images/products/defender/oliefilter.jpg?v=2"
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
    image: "/Images/products/defender/oliefilter.jpg?v=2"
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
    image: "/Images/products/defender/oliefilter.jpg?v=2"
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
    image: "/Images/products/defender/oliefilter.jpg?v=2"
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
    image: "/Images/products/defender/oliefilter.jpg?v=2"
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
    image: "/Images/products/defender/oliefilter.jpg?v=2"
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
    image: "/Images/products/defender/oliefilter.jpg?v=2"
  },
  { 
    id: 10, 
    name: "Discovery 3 Partikelfilter", 
    price: 899, 
    category: "exhaust", 
    brand: "AutoUniqa", 
    rating: 4.6, 
    inStock: true, 
    featured: false,
    description: "Partikelfilter til Discovery 3",
    model: "Discovery 3",
    image: "/Images/products/defender/oliefilter.jpg?v=2"
  },

  // Discovery 4 Produkter
  { 
    id: 11, 
    name: "Discovery 4 Bremseklodser", 
    price: 449, 
    category: "brakes", 
    brand: "AutoUniqa", 
    rating: 4.8, 
    inStock: true, 
    featured: true,
    description: "Kvalitets bremseklodser til Discovery 4",
    model: "Discovery 4",
    image: "/Images/products/defender/oliefilter.jpg?v=2"
  },
  { 
    id: 12, 
    name: "Discovery 4 Luftfilter", 
    price: 129, 
    category: "intake", 
    brand: "AutoUniqa", 
    rating: 4.7, 
    inStock: true, 
    featured: false,
    description: "Luftfilter til Discovery 4",
    model: "Discovery 4",
    image: "/Images/products/defender/oliefilter.jpg?v=2"
  },
  { 
    id: 13, 
    name: "Discovery 4 Oliefilter", 
    price: 75, 
    category: "maintenance", 
    brand: "AutoUniqa", 
    rating: 4.9, 
    inStock: true, 
    featured: false,
    description: "Oliefilter til Discovery 4",
    model: "Discovery 4",
    image: "/Images/products/defender/oliefilter.jpg?v=2"
  },
  { 
    id: 14, 
    name: "Discovery 4 Partikelfilter", 
    price: 999, 
    category: "exhaust", 
    brand: "AutoUniqa", 
    rating: 4.6, 
    inStock: true, 
    featured: false,
    description: "Partikelfilter til Discovery 4",
    model: "Discovery 4",
    image: "/Images/products/defender/oliefilter.jpg?v=2"
  },

  // Defender Produkter
  { 
    id: 15, 
    name: "Defender Bremseklodser", 
    price: 399, 
    category: "brakes", 
    brand: "AutoUniqa", 
    rating: 4.8, 
    inStock: true, 
    featured: true,
    description: "Kvalitets bremseklodser til Defender",
    model: "Defender",
    image: "/Images/products/defender/oliefilter.jpg?v=2"
  },
  { 
    id: 16, 
    name: "Defender LED Lygter", 
    price: 1299, 
    category: "lighting", 
    brand: "AutoUniqa", 
    rating: 4.9, 
    inStock: true, 
    featured: true,
    description: "LED lygter til Defender",
    model: "Defender",
    image: "/Images/products/defender/oliefilter.jpg?v=2"
  },
  { 
    id: 17, 
    name: "Defender Lift Kit", 
    price: 2499, 
    category: "suspension", 
    brand: "AutoUniqa", 
    rating: 4.7, 
    inStock: true, 
    featured: true,
    description: "Lift kit til Defender",
    model: "Defender",
    image: "/Images/products/defender/oliefilter.jpg?v=2"
  },
  { 
    id: 18, 
    name: "Defender Luftfilter", 
    price: 109, 
    category: "intake", 
    brand: "AutoUniqa", 
    rating: 4.7, 
    inStock: true, 
    featured: false,
    description: "Luftfilter til Defender",
    model: "Defender",
    image: "/Images/products/defender/oliefilter.jpg?v=2"
  },
  { 
    id: 19, 
    name: "Defender Oliefilter", 
    price: 55, 
    category: "maintenance", 
    brand: "AutoUniqa", 
    rating: 4.9, 
    inStock: true, 
    featured: false,
    description: "Oliefilter til Defender",
    model: "Defender",
    image: "/Images/products/defender/oliefilter.jpg?v=2"
  },
  { 
    id: 20, 
    name: "Defender Roof Rack", 
    price: 1899, 
    category: "accessories", 
    brand: "AutoUniqa", 
    rating: 4.6, 
    inStock: true, 
    featured: false,
    description: "Roof rack til Defender",
    model: "Defender",
    image: "/Images/products/defender/oliefilter.jpg?v=2"
  },

  // Freelander Produkter
  { 
    id: 21, 
    name: "Freelander Bremseklodser", 
    price: 299, 
    category: "brakes", 
    brand: "AutoUniqa", 
    rating: 4.8, 
    inStock: true, 
    featured: false,
    description: "Kvalitets bremseklodser til Freelander",
    model: "Freelander",
    image: "/Images/products/defender/oliefilter.jpg?v=2"
  },
  { 
    id: 22, 
    name: "Freelander Luftfilter", 
    price: 89, 
    category: "intake", 
    brand: "AutoUniqa", 
    rating: 4.7, 
    inStock: true, 
    featured: false,
    description: "Luftfilter til Freelander",
    model: "Freelander",
    image: "/Images/products/defender/oliefilter.jpg?v=2"
  },

  // Range Rover Classic Produkter
  { 
    id: 23, 
    name: "Range Rover Classic Bremseklodser", 
    price: 349, 
    category: "brakes", 
    brand: "AutoUniqa", 
    rating: 4.8, 
    inStock: true, 
    featured: false,
    description: "Kvalitets bremseklodser til Range Rover Classic",
    model: "Range Rover Classic",
    image: "/Images/products/defender/oliefilter.jpg?v=2"
  },
  { 
    id: 24, 
    name: "Range Rover Classic Luftfilter", 
    price: 99, 
    category: "intake", 
    brand: "AutoUniqa", 
    rating: 4.7, 
    inStock: true, 
    featured: false,
    description: "Luftfilter til Range Rover Classic",
    model: "Range Rover Classic",
    image: "/Images/products/defender/oliefilter.jpg?v=2"
  },

  // Range Rover Produkter
  { 
    id: 25, 
    name: "Range Rover Bremseklodser", 
    price: 499, 
    category: "brakes", 
    brand: "AutoUniqa", 
    rating: 4.8, 
    inStock: true, 
    featured: true,
    description: "Kvalitets bremseklodser til Range Rover",
    model: "Range Rover",
    image: "/Images/products/defender/oliefilter.jpg?v=2"
  },
  { 
    id: 26, 
    name: "Range Rover Bull Bar", 
    price: 3499, 
    category: "protection", 
    brand: "AutoUniqa", 
    rating: 4.7, 
    inStock: true, 
    featured: true,
    description: "Bull bar til Range Rover",
    model: "Range Rover",
    image: "/Images/products/defender/oliefilter.jpg?v=2"
  },
  { 
    id: 27, 
    name: "Range Rover Luftfilter", 
    price: 139, 
    category: "intake", 
    brand: "AutoUniqa", 
    rating: 4.7, 
    inStock: true, 
    featured: false,
    description: "Luftfilter til Range Rover",
    model: "Range Rover",
    image: "/Images/products/defender/oliefilter.jpg?v=2"
  },
  { 
    id: 28, 
    name: "Range Rover Partikelfilter", 
    price: 1099, 
    category: "exhaust", 
    brand: "AutoUniqa", 
    rating: 4.6, 
    inStock: true, 
    featured: false,
    description: "Partikelfilter til Range Rover",
    model: "Range Rover",
    image: "/Images/products/defender/oliefilter.jpg?v=2"
  },

  // Universal Produkter
  { 
    id: 29, 
    name: "Cargo Box", 
    price: 899, 
    category: "accessories", 
    brand: "AutoUniqa", 
    rating: 4.6, 
    inStock: true, 
    featured: false,
    description: "Cargo box til alle Land Rover modeller",
    image: "/Images/products/defender/oliefilter.jpg?v=2"
  },
  { 
    id: 30, 
    name: "LED Light Bar", 
    price: 799, 
    category: "lighting", 
    brand: "AutoUniqa", 
    rating: 4.8, 
    inStock: true, 
    featured: true,
    description: "LED light bar til alle Land Rover modeller",
    image: "/Images/products/defender/oliefilter.jpg?v=2"
  },
  { 
    id: 31, 
    name: "Recovery Tracks", 
    price: 399, 
    category: "recovery", 
    brand: "AutoUniqa", 
    rating: 4.7, 
    inStock: true, 
    featured: false,
    description: "Recovery tracks til alle Land Rover modeller",
    image: "/Images/products/defender/oliefilter.jpg?v=2"
  },
  { 
    id: 32, 
    name: "Rock Sliders", 
    price: 1499, 
    category: "protection", 
    brand: "AutoUniqa", 
    rating: 4.8, 
    inStock: true, 
    featured: true,
    description: "Rock sliders til alle Land Rover modeller",
    image: "/Images/products/defender/oliefilter.jpg?v=2"
  },
  { 
    id: 33, 
    name: "Roof Tent", 
    price: 3999, 
    category: "accessories", 
    brand: "AutoUniqa", 
    rating: 4.9, 
    inStock: true, 
    featured: true,
    description: "Roof tent til alle Land Rover modeller",
    image: "/Images/products/defender/oliefilter.jpg?v=2"
  },
  { 
    id: 34, 
    name: "Suspension Kit", 
    price: 2999, 
    category: "suspension", 
    brand: "AutoUniqa", 
    rating: 4.8, 
    inStock: true, 
    featured: true,
    description: "Suspension kit til alle Land Rover modeller",
    image: "/Images/products/defender/oliefilter.jpg?v=2"
  },
  { 
    id: 35, 
    name: "Winch", 
    price: 2499, 
    category: "recovery", 
    brand: "AutoUniqa", 
    rating: 4.7, 
    inStock: true, 
    featured: true,
    description: "Winch til alle Land Rover modeller",
    image: "/Images/products/defender/oliefilter.jpg?v=2"
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