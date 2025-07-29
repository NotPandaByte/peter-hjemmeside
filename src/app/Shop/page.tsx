"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, ShoppingCart, Heart, Star, ChevronDown } from "lucide-react";
import { products as allProducts, categories, brands, priceRanges, models } from "@/data/products";

export default function ShopPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedModels, setSelectedModels] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [showInStockOnly, setShowInStockOnly] = useState(false);
  const [displayedProducts, setDisplayedProducts] = useState(8);
  const [isLoading, setIsLoading] = useState(false);
  const [filtersVisible, setFiltersVisible] = useState(false);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  // Filter and sort products
  const filteredProducts = allProducts
    .filter(product => {
      if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }
      if (selectedCategory !== "all" && product.category !== selectedCategory) {
        return false;
      }
      if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
        return false;
      }
      if (selectedModels.length > 0 && product.model && !selectedModels.includes(product.model)) {
        return false;
      }
      const priceRange = priceRanges.find(range => range.id === selectedPriceRange);
      if (priceRange && (product.price < priceRange.min || product.price > priceRange.max)) {
        return false;
      }
      if (showInStockOnly && !product.inStock) {
        return false;
      }
      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low": return a.price - b.price;
        case "price-high": return b.price - a.price;
        case "rating": return b.rating - a.rating;
        case "name": return a.name.localeCompare(b.name);
        case "featured": return b.featured ? 1 : -1;
        default: return 0;
      }
    });

  // Infinite scroll loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && displayedProducts < filteredProducts.length) {
          setIsLoading(true);
          setTimeout(() => {
            setDisplayedProducts(prev => Math.min(prev + 4, filteredProducts.length));
            setIsLoading(false);
          }, 500);
        }
      },
      { threshold: 0.1 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => observer.disconnect();
  }, [displayedProducts, filteredProducts.length]);

  // Reset displayed products when filters change
  useEffect(() => {
    setDisplayedProducts(8);
  }, [searchQuery, selectedCategory, selectedBrands, selectedModels, selectedPriceRange, sortBy, showInStockOnly]);

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const toggleModel = (model: string) => {
    setSelectedModels(prev => 
      prev.includes(model) 
        ? prev.filter(m => m !== model)
        : [...prev, model]
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedBrands([]);
    setSelectedModels([]);
    setSelectedPriceRange("all");
    setShowInStockOnly(false);
    setSortBy("featured");
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white pt-16 md:pt-20">
      {/* Header */}
      <div className="border-b border-[#333333] bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Shop</h1>
            <p className="text-xl text-[#b0b0b0] max-w-2xl mx-auto">
              Premium Land Rover og 4x4 dele til dit næste eventyr
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 max-w-2xl mx-auto relative"
          >
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#8b8b8b]" size={20} />
                          <input
                type="text"
                placeholder="Søg efter produkter..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-[#0a0a0a] border border-[#333333] rounded-lg focus:border-[#8b8b8b] focus:outline-none transition-colors"
              />
          </motion.div>

          {/* Mobile Filter Toggle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:hidden mt-6 flex justify-center"
          >
            <button
              onClick={() => setFiltersVisible(!filtersVisible)}
              className="flex items-center space-x-2 px-6 py-3 bg-[#2a2a2a] rounded-lg hover:bg-[#3a3a3a] transition-colors"
            >
              <Filter size={20} />
              <span>Filtre</span>
              <ChevronDown className={`transition-transform ${filtersVisible ? 'rotate-180' : ''}`} size={16} />
            </button>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`lg:col-span-1 space-y-6 ${filtersVisible ? 'block' : 'hidden lg:block'}`}
          >
            <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333333]">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Filtre</h3>
                <button
                  onClick={clearFilters}
                  className="text-[#8b8b8b] hover:text-white text-sm transition-colors"
                >
                  Ryd alle
                </button>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="text-[#8b8b8b] text-sm font-medium tracking-widest mb-3">KATEGORIER</h4>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-[#2a2a2a] text-white'
                          : 'text-[#b0b0b0] hover:text-white hover:bg-[#2a2a2a]'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm">{category.name}</span>
                        <span className="text-xs text-[#666666]">{category.count}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="text-[#8b8b8b] text-sm font-medium tracking-widest mb-3">PRISINTERVAL</h4>
                <div className="space-y-2">
                  {priceRanges.map(range => (
                    <button
                      key={range.id}
                      onClick={() => setSelectedPriceRange(range.id)}
                      className={`w-full text-left px-3 py-2 rounded transition-colors text-sm ${
                        selectedPriceRange === range.id
                          ? 'bg-[#2a2a2a] text-white'
                          : 'text-[#b0b0b0] hover:text-white hover:bg-[#2a2a2a]'
                      }`}
                    >
                      {range.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Models */}
              <div className="mb-6">
                <h4 className="text-[#8b8b8b] text-sm font-medium tracking-widest mb-3">MODELLER</h4>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {models.map(model => (
                    <label key={model} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedModels.includes(model)}
                        onChange={() => toggleModel(model)}
                        className="w-4 h-4 bg-[#0a0a0a] border border-[#333333] rounded focus:ring-2 focus:ring-[#8b8b8b]"
                      />
                      <span className="text-sm text-[#b0b0b0] hover:text-white transition-colors">{model}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Brands */}
              <div className="mb-6">
                <h4 className="text-[#8b8b8b] text-sm font-medium tracking-widest mb-3">MÆRKER</h4>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {brands.map(brand => (
                    <label key={brand} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={() => toggleBrand(brand)}
                        className="w-4 h-4 bg-[#0a0a0a] border border-[#333333] rounded focus:ring-2 focus:ring-[#8b8b8b]"
                      />
                      <span className="text-sm text-[#b0b0b0] hover:text-white transition-colors">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Stock Filter */}
              <div className="mb-6">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showInStockOnly}
                    onChange={(e) => setShowInStockOnly(e.target.checked)}
                    className="w-4 h-4 bg-[#0a0a0a] border border-[#333333] rounded focus:ring-2 focus:ring-[#8b8b8b]"
                  />
                  <span className="text-sm text-[#b0b0b0]">Kun på lager</span>
                </label>
              </div>
            </div>
          </motion.div>

          {/* Products Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            {/* Sort Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <p className="text-[#b0b0b0]">
                Viser {Math.min(displayedProducts, filteredProducts.length)} af {filteredProducts.length} produkter
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-[#1a1a1a] border border-[#333333] rounded-lg focus:border-[#8b8b8b] focus:outline-none text-white"
              >
                <option value="featured">Fremhævet</option>
                <option value="price-low">Pris: Lav til Høj</option>
                <option value="price-high">Pris: Høj til Lav</option>
                <option value="rating">Højest bedømt</option>
                <option value="name">Navn: A til Z</option>
              </select>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {filteredProducts.slice(0, displayedProducts).map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-[#1a1a1a] rounded-lg border border-[#333333] overflow-hidden hover:border-[#8b8b8b] transition-colors group"
                  >
                    <div className="relative overflow-hidden">
                      {product.image ? (
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-48 bg-[#2a2a2a] flex items-center justify-center">
                          <span className="text-[#666666]">Produktbillede</span>
                        </div>
                      )}
                      {!product.inStock && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                                  <span className="bg-red-600 text-white px-3 py-1 rounded text-sm font-medium">
                          Ikke på lager
                        </span>
                        </div>
                      )}
                      {product.featured && (
                        <div className="absolute top-3 left-3 bg-amber-600 text-white px-2 py-1 rounded text-xs font-medium">
                          Fremhævet
                        </div>
                      )}
                      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors">
                          <Heart size={16} className="text-white" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <div className="flex items-center mb-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={14}
                              className={`${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-[#333333]'}`}
                            />
                          ))}
                          <span className="ml-2 text-xs text-[#8b8b8b]">({product.rating})</span>
                        </div>
                      </div>
                      
                      <h3 className="font-semibold mb-1 group-hover:text-[#8b8b8b] transition-colors">
                        {product.name}
                      </h3>
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-sm text-[#8b8b8b]">{product.brand}</p>
                        {product.model && (
                          <span className="text-xs bg-amber-600/20 text-amber-600 px-2 py-1 rounded">
                            {product.model}
                          </span>
                        )}
                      </div>
                                              <p className="text-xl font-bold text-white mb-4">{product.price} kr</p>
                      
                      <button
                        disabled={!product.inStock}
                        className={`w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-lg transition-colors ${
                          product.inStock
                            ? 'bg-[#8b8b8b] hover:bg-white text-black font-medium'
                            : 'bg-[#333333] text-[#666666] cursor-not-allowed'
                        }`}
                      >
                        <ShoppingCart size={16} />
                        <span>{product.inStock ? 'Tilføj til kurv' : 'Ikke på lager'}</span>
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Load More Trigger */}
            {displayedProducts < filteredProducts.length && (
              <div ref={loadMoreRef} className="mt-8 text-center">
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-6 h-6 border-2 border-[#8b8b8b] border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-[#8b8b8b]">Indlæser flere produkter...</span>
                  </div>
                ) : (
                  <div className="text-[#8b8b8b]">Scroll ned for at indlæse flere</div>
                )}
              </div>
            )}

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-[#8b8b8b] text-lg">Ingen produkter fundet der matcher dine kriterier.</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 px-6 py-3 bg-[#8b8b8b] text-black rounded-lg hover:bg-white transition-colors"
                >
                  Ryd filtre
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  );
} 