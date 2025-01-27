import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Product } from '../types';

interface CartItem {
  product: Product;
  quantity: number;
}

const products: Product[] = [
  {
    id: '1',
    name: 'Classic Boab',
    description: 'Pure, refreshing boab fruit beverage with a hint of natural sweetness.',
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&q=80&w=1024',
    price: 3.99,
    benefits: ['Rich in Vitamin C', 'Natural Energy', 'No Added Sugar'],
    ingredients: ['Boab Fruit Extract', 'Filtered Water', 'Natural Flavors'],
    nutritionalInfo: { calories: 45, sugar: 9, protein: 1, vitaminC: 60 },
  },
  {
    id: '2',
    name: 'Mango Sunrise',
    description: 'A tropical fusion of boab fruit and sweet mango.',
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&q=80&w=1024',
    price: 4.29,
    benefits: ['Antioxidant Rich', 'Immune Support', 'Natural Energy'],
    ingredients: ['Boab Fruit Extract', 'Mango Puree', 'Filtered Water', 'Natural Flavors'],
    nutritionalInfo: { calories: 60, sugar: 12, protein: 1, vitaminC: 80 },
  },
  {
    id: '3',
    name: 'Ginger Zest',
    description: 'Spicy ginger meets refreshing boab fruit for an energizing kick.',
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&q=80&w=1024',
    price: 4.29,
    benefits: ['Digestive Support', 'Anti-inflammatory', 'Immune Boost'],
    ingredients: ['Boab Fruit Extract', 'Ginger Extract', 'Filtered Water', 'Natural Flavors'],
    nutritionalInfo: { calories: 45, sugar: 9, protein: 1, vitaminC: 65 },
  },
  {
    id: '4',
    name: 'Berry Blast',
    description: 'Mixed berries combined with antioxidant-rich boab.',
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&q=80&w=1024',
    price: 4.49,
    benefits: ['High Antioxidants', 'Immune Support', 'Low Sugar'],
    ingredients: ['Boab Fruit Extract', 'Berry Mix', 'Filtered Water'],
    nutritionalInfo: { calories: 50, sugar: 10, protein: 1, vitaminC: 70 },
  },
  {
    id: '5',
    name: 'Citrus Splash',
    description: 'Zesty citrus blend with boab base.',
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&q=80&w=1024',
    price: 3.99,
    benefits: ['Vitamin C Boost', 'Energy Support', 'Low Calories'],
    ingredients: ['Boab Fruit Extract', 'Orange Juice', 'Lemon Zest'],
    nutritionalInfo: { calories: 40, sugar: 8, protein: 1, vitaminC: 90 },
  },
  {
    id: '6',
    name: 'Tropical Twist',
    description: 'Exotic tropical fruits mixed with boab.',
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&q=80&w=1024',
    price: 4.99,
    benefits: ['Electrolyte Balance', 'Energy Boost', 'Vitamin Complex'],
    ingredients: ['Boab Fruit Extract', 'Pineapple', 'Coconut Water'],
    nutritionalInfo: { calories: 55, sugar: 11, protein: 1, vitaminC: 75 },
  },
  {
    id: '7',
    name: 'Mint Fresh',
    description: 'Cooling mint infused boab drink.',
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&q=80&w=1024',
    price: 4.19,
    benefits: ['Digestive Aid', 'Refreshment', 'Low Sugar'],
    ingredients: ['Boab Fruit Extract', 'Peppermint', 'Filtered Water'],
    nutritionalInfo: { calories: 35, sugar: 7, protein: 1, vitaminC: 50 },
  },
  {
    id: '8',
    name: 'Vanilla Dream',
    description: 'Creamy vanilla infused boab beverage.',
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&q=80&w=1024',
    price: 4.79,
    benefits: ['Calming Effect', 'Antioxidants', 'Natural Sweetness'],
    ingredients: ['Boab Fruit Extract', 'Vanilla Extract', 'Filtered Water'],
    nutritionalInfo: { calories: 60, sugar: 12, protein: 1, vitaminC: 55 },
  },
  {
    id: '9',
    name: 'Green Detox',
    description: 'Boab with green tea and matcha.',
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&q=80&w=1024',
    price: 4.99,
    benefits: ['Detox Support', 'Metabolism Boost', 'Antioxidants'],
    ingredients: ['Boab Fruit Extract', 'Green Tea', 'Matcha Powder'],
    nutritionalInfo: { calories: 30, sugar: 6, protein: 1, vitaminC: 65 },
  },
  {
    id: '10',
    name: 'Choco Boab',
    description: 'Dark chocolate infused boab drink.',
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&q=80&w=1024',
    price: 5.29,
    benefits: ['Antioxidant Rich', 'Mood Enhancer', 'Energy Boost'],
    ingredients: ['Boab Fruit Extract', 'Cocoa', 'Filtered Water'],
    nutritionalInfo: { calories: 70, sugar: 14, protein: 2, vitaminC: 60 },
  },
  {
    id: '11',
    name: 'Spice Fusion',
    description: 'Warm spices combined with boab.',
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&q=80&w=1024',
    price: 4.49,
    benefits: ['Metabolism Boost', 'Digestive Support', 'Immune Boost'],
    ingredients: ['Boab Fruit Extract', 'Cinnamon', 'Cloves'],
    nutritionalInfo: { calories: 45, sugar: 9, protein: 1, vitaminC: 60 },
  },
  {
    id: '12',
    name: 'Berry Mint',
    description: 'Berry and mint fusion with boab base.',
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&q=80&w=1024',
    price: 4.69,
    benefits: ['Antioxidants', 'Refreshment', 'Vitamin C'],
    ingredients: ['Boab Fruit Extract', 'Mixed Berries', 'Mint'],
    nutritionalInfo: { calories: 50, sugar: 10, protein: 1, vitaminC: 75 },
  },
  {
    id: '13',
    name: 'Turmeric Gold',
    description: 'Golden turmeric infused boab drink.',
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&q=80&w=1024',
    price: 4.89,
    benefits: ['Anti-inflammatory', 'Antioxidants', 'Immune Support'],
    ingredients: ['Boab Fruit Extract', 'Turmeric', 'Black Pepper'],
    nutritionalInfo: { calories: 40, sugar: 8, protein: 1, vitaminC: 60 },
  },
  {
    id: '14',
    name: 'Coffee Boost',
    description: 'Cold brew coffee with boab extract.',
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&q=80&w=1024',
    price: 5.49,
    benefits: ['Energy Boost', 'Antioxidants', 'Mental Focus'],
    ingredients: ['Boab Fruit Extract', 'Coffee', 'Filtered Water'],
    nutritionalInfo: { calories: 25, sugar: 5, protein: 1, vitaminC: 50 },
  },
  {
    id: '15',
    name: 'Honey Lemon',
    description: 'Sweet honey and lemon boab blend.',
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&q=80&w=1024',
    price: 4.39,
    benefits: ['Immune Support', 'Antioxidants', 'Natural Energy'],
    ingredients: ['Boab Fruit Extract', 'Honey', 'Lemon Juice'],
    nutritionalInfo: { calories: 55, sugar: 11, protein: 1, vitaminC: 85 },
  },
];

export const Products = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close cart when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        cartRef.current &&
        !cartRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsCartOpen(false);
      }
    };

    if (isCartOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isCartOpen]);

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.product.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prevCart => prevCart.filter(item => item.product.id !== productId));
  };

  const adjustQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCart(prevCart =>
      prevCart.map(item =>
        item.product.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const getTotalItems = () => cart.reduce((sum, item) => sum + item.quantity, 0);
  const getTotalPrice = () => 
    cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  const generateQuotation = () => {
    const date = new Date().toLocaleDateString();
    let quotationContent = `Quotation - ${date}\n\n`;
    quotationContent += "Items:\n";
    
    cart.forEach(item => {
      quotationContent += `${item.product.name} x${item.quantity} - $${(item.product.price * item.quantity).toFixed(2)}\n`;
    });
    
    quotationContent += `\nTotal: $${getTotalPrice().toFixed(2)}`;
    
    const blob = new Blob([quotationContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `quotation-${date}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="pt-16 min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Floating Cart Button */}
      <button
        ref={buttonRef}
        onClick={() => setIsCartOpen(!isCartOpen)}
        className="fixed right-4 top-20 bg-orange-600 text-white p-4 rounded-full shadow-lg hover:bg-orange-700 transition-colors duration-300 z-50"
      >
        Cart ({getTotalItems()})
      </button>

      {/* Cart Sidebar */}
      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            ref={cartRef}
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            exit={{ x: 300 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed right-0 top-20 h-[calc(100vh-5rem)] w-80 bg-white dark:bg-gray-800 shadow-lg p-4 overflow-y-auto z-40"
            style={{ willChange: 'transform' }}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Your Cart</h2>
            
            {cart.length === 0 ? (
              <p className="text-gray-600 dark:text-gray-400">Your cart is empty</p>
            ) : (
              <>
                {cart.map(item => (
                  <div key={item.product.id} className="mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {item.product.name}
                      </h3>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        ×
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center">
                        <button
                          onClick={() => adjustQuantity(item.product.id, item.quantity - 1)}
                          className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded"
                        >
                          -
                        </button>
                        <span className="mx-2">{item.quantity}</span>
                        <button
                          onClick={() => adjustQuantity(item.product.id, item.quantity + 1)}
                          className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded"
                        >
                          +
                        </button>
                      </div>
                      <span className="text-gray-600 dark:text-gray-400">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}
                
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex justify-between text-lg font-semibold mb-4">
                    <span className="text-gray-900 dark:text-white">Total:</span>
                    <span className="text-orange-600">${getTotalPrice().toFixed(2)}</span>
                  </div>
                  <button
                    onClick={generateQuotation}
                    className="w-full bg-orange-600 text-white py-2 rounded-full hover:bg-orange-700 transition-colors duration-300"
                  >
                    Download Quotation
                  </button>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Product Listing */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-24 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            Our Products
          </h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {product.name}
                    </h2>
                    <span className="text-lg font-semibold text-orange-600 dark:text-orange-500">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {product.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Benefits
                      </h3>
                      <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                        {product.benefits.map((benefit) => (
                          <li key={benefit}>{benefit}</li>
                        ))}
                      </ul>
                    </div>

                    <button 
                      onClick={() => addToCart(product)}
                      className="w-full bg-orange-600 text-white py-2 rounded-full hover:bg-orange-700 transition-colors duration-300"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};