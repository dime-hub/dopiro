import { useState } from 'react';
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';
import { NavItem } from '../types';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Store Locator', href: '/stores' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const extrasItems: NavItem[] = [
  { label: 'Health Benefits', href: '/benefits' },
  { label: 'Recipes', href: '/recipes' },
  { label: 'Sustainability', href: '/sustainability' },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExtrasOpen, setIsExtrasOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-50 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-around  h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-orange-600 dark:text-orange-500">
              Dopiro
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="relative group">
              <button
                onClick={() => setIsExtrasOpen(!isExtrasOpen)}
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500 transition-colors"
              >
                Extras
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isExtrasOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {isExtrasOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg  hover:text-orange-600 dark:hover:text-orange-500 shadow-lg"
                  >
                    <div className="py-2">
                      {extrasItems.map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-gray-300" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-gray-300" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 w-64 h-full bg-gray-900 dark:bg-gray-800 shadow-lg md:hidden"
          >
            <div className="p-4">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-gray-700 dark:text-gray-600"
              >
                <X size={24} />
              </button>
              <div className="mt-12 space-y-4 bg-black dark:bg-gray-800">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-500 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="space-y-2">
                  <button
                    onClick={() => setIsExtrasOpen(!isExtrasOpen)}
                    className="flex items-center justify-between w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500"
                  >
                    Extras
                    <ChevronDown className={`h-4 w-4 transition-transform ${isExtrasOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isExtrasOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="pl-4"
                      >
                        {extrasItems.map((item) => (
                          <a
                            key={item.href}
                            href={item.href}
                            className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};