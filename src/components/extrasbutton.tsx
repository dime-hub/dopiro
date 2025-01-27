import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react'; 
import { AnimatePresence, motion } from 'framer-motion';
import { NavItem } from '../types';


const extrasItems: NavItem[] = [
  { label: 'Health Benefits', href: '/benefits' },
  { label: 'Recipes', href: '/recipes' },
  { label: 'Sustainability', href: '/sustainability' },
];

const ExtrasButton = () => {
  const [isExtrasOpen, setIsExtrasOpen] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  // Toggle on click
  const handleClick = () => {
    setIsExtrasOpen(!isExtrasOpen);
  };

  // Toggle on hover
  const handleHover = () => {
    setIsExtrasOpen(true);
  };

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        setIsExtrasOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div ref={buttonRef}>
      <button
        onClick={handleClick}
        onMouseEnter={handleHover}
        className="flex items-center text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500 transition-colors"
      >
        Extras
        <ChevronDown
          className={`ml-1 h-4 w-4 transition-transform ${
            isExtrasOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Render extras content if open */}
      {isExtrasOpen && (
        <div className="mt-2 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow">
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
      )}
    </div>
  );
};

export default ExtrasButton;