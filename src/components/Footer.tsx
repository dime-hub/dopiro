import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-800 text-center text-gray-300 border-t border-orange-600"> {/* Added border color */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Dopiro</h3>
            <p className="text-gray-400">
              Bringing the rare goodness of boab fruit to the world while
              supporting sustainable farming practices and local communities in Africa.
            </p>
            <div className="flex justify-center space-x-8 mt-4">
              <a href="#" className="text-blue-600 hover:text-indigo-400 transition-colors">
                <Facebook size={30} />
              </a>
              <a href="#" className="text-blue-300 hover:text-indigo-400 transition-colors">
                <Twitter size={30} />
              </a>
              <a href="#" className="text-red-400 hover:text-indigo-400 transition-colors">
                <Instagram size={30} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-orange-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-orange-600 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/stores" className="hover:text-orange-600 transition-colors">
                  Store Locator
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-orange-600 transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Extras */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Extras</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/benefits" className="hover:text-orange-600 transition-colors">
                  Health Benefits
                </Link>
              </li>
              <li>
                <Link to="/recipes" className="hover:text-orange-600 transition-colors">
                  Recipes
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="hover:text-orange-600 transition-colors">
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Sam Levy Street</li>
              <li>Harare, Zimbabwe</li>
              <li>Phone: +263 242 123456</li>
              <li>Email: info@dopiro.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Dopiro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;