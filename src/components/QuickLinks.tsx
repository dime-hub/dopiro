import { Heart, Leaf, MapPin } from 'lucide-react';

const links = [
  {
    icon: Heart,
    title: 'Why Boab?',
    description: 'Discover the incredible health benefits of nature\'s superfruit',
    href: '/benefits',
  },
  {
    icon: Leaf,
    title: 'Our Story',
    description: 'Learn about our journey and commitment to sustainability',
    href: '/about',
  },
  {
    icon: MapPin,
    title: 'Find Dopiro',
    description: 'Locate your nearest Dopiro retailer',
    href: '/stores',
  },
];

export const QuickLinks = () => {
  return (
    <section className="py-24 bg-gray-200 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid  bg-gray-200 dark:bg-gray-800 text-gray-100 md:grid-cols-3 gap-8">
          {links.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="group text-gray-900 dark:text-gray-100 bg-gray-200 dark:bg-gray-500 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <link.icon className="w-12 h-12 text-orange-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100 group-hover:text-orange-600 transition-colors">
                  {link.title}
                </h3>
                <p className="text-gray-800 dark:text-gray-100">{link.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};