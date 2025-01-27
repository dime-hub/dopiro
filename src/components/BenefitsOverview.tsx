import { motion } from 'framer-motion'
import { Leaf, Heart, Zap, Shield } from 'lucide-react'

export const BenefitsOverview = () => {
  const benefits = [
    {
      icon: <Leaf className="w-8 h-8 text-orange-600" />,
      title: "Natural Energy",
      description: "Sustain your energy levels with nature's superfruit"
    },
    {
      icon: <Heart className="w-8 h-8 text-orange-600" />,
      title: "Heart Health",
      description: "Rich in antioxidants for cardiovascular support"
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-600" />,
      title: "Immune Boost",
      description: "Packed with Vitamin C for immune system support"
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-600" />,
      title: "Antioxidant Power",
      description: "Fights free radicals and supports cellular health"
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
        Why Choose Dopiro?
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center"
          >
            <div className="flex justify-center mb-4">
              {benefit.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              {benefit.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {benefit.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}