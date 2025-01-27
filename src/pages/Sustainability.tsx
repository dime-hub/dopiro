import { motion } from 'framer-motion'
import { Leaf, Recycle, Users, TreePine, HandCoins, Sprout } from 'lucide-react'

export const Sustainability = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto px-4 py-16"
      >
        {/* Hero Section */}
        <div className="text-center mt-16 mb-16">
          <motion.h1
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Sustainable by Nature
          </motion.h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Committed to ethical practices that nurture both people and planet
          </p>
        </div>

        {/* Eco-Friendly Practices */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Our Green Initiatives
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <Recycle className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Circular Packaging</h3>
              <p className="text-gray-600 dark:text-gray-400">
                100% recyclable materials with plant-based inks. Our bottles use 30% less plastic than industry average.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <Users className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Community Partnerships</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Direct partnerships with 12 Boab-harvesting communities, ensuring fair wages and sustainable practices.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <Leaf className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Sustainable Sourcing</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Wild-harvested Boab fruit with a 1:1 replanting ratio to maintain natural ecosystems.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Certifications */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-orange-600 text-white rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Certifications</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <HandCoins className="w-8 h-8" />
                  <h3 className="text-xl font-semibold">Fair Trade Certified</h3>
                </div>
                <p>Ensuring ethical treatment and fair compensation for all harvesters</p>
                
                <div className="flex items-center gap-4">
                  <TreePine className="w-8 h-8" />
                  <h3 className="text-xl font-semibold">Carbon Neutral</h3>
                </div>
                <p>100% carbon offset through reforestation projects in harvesting regions</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="/fair-trade-certified.png" 
                  alt="Fair Trade Certification" 
                  className="w-full h-auto object-contain"
                />
                <img 
                  src="/carbon-neutral-certified.png" 
                  alt="Carbon Neutral Certification" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* Impact Stories */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Real World Impact
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
              <Sprout className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4 dark:text-white">Empowering Communities</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold text-orange-600">12k+</div>
                  <div className="text-gray-600 dark:text-gray-400">
                    Families supported through fair trade partnerships
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold text-orange-600">45%</div>
                  <div className="text-gray-600 dark:text-gray-400">
                    Increase in community literacy rates since 2018
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
              <TreePine className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4 dark:text-white">Reforestation Efforts</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold text-orange-600">250k+</div>
                  <div className="text-gray-600 dark:text-gray-400">
                    Trees planted in deforested regions of Madagascar
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold text-orange-600">85%</div>
                  <div className="text-gray-600 dark:text-gray-400">
                    Survival rate of saplings through our care program
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Join Our Sustainability Journey
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
            Every purchase supports our environmental and social initiatives
          </p>
          <a href="./Products"> 
           <button className="bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 transition-colors">
            Explore Sustainable Products
          </button>
          </a>
        
        </motion.div>
      </motion.div>
    </div>
  )
}