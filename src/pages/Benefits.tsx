import { motion } from 'framer-motion';
import { Heart, Brain, Battery, Shield } from 'lucide-react';

const benefits = [
  {
    icon: Heart,
    title: 'Heart Health',
    description: 'Rich in antioxidants that support cardiovascular health and maintain healthy blood pressure levels.',
  },
  {
    icon: Brain,
    title: 'Cognitive Function',
    description: 'Natural compounds that may enhance mental clarity and support brain health.',
  },
  {
    icon: Battery,
    title: 'Natural Energy',
    description: 'Sustained energy without the crash, thanks to natural fruit sugars and nutrients.',
  },
  {
    icon: Shield,
    title: 'Immune Support',
    description: 'High in Vitamin C and other immune-boosting compounds to keep you healthy.',
  },
];

const comparisons = [
  { nutrient: 'Vitamin C', boab: '3x', comparison: 'oranges' },
  { nutrient: 'Antioxidants', boab: '2x', comparison: 'blueberries' },
  { nutrient: 'Fiber', boab: '4x', comparison: 'apples' },
];

export const Benefits = () => {
  return (
    <div className="pt-16 min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[60vh] flex items-center justify-center"
      >
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            The Power of Boab
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover why boab fruit is nature's best-kept secret for health and vitality
          </p>
        </div>
      </motion.section>

      {/* Benefits Grid */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg"
              >
                <benefit.icon className="w-12 h-12 text-orange-600 dark:text-orange-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 bg-orange-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            Nutrient Comparison
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {comparisons.map((item, index) => (
              <motion.div
                key={item.nutrient}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl text-center"
              >
                <h3 className="text-2xl font-bold text-orange-600 dark:text-orange-500 mb-2">
                  {item.boab}
                </h3>
                <p className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {item.nutrient}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  compared to {item.comparison}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};