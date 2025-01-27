import { motion } from 'framer-motion'
import { Hero } from "../components/Hero"
import { QuickLinks } from "../components/QuickLinks"
import { FeaturedContent } from "../components/FeaturedContent"
import { Testimonials } from "../components/Testimonials"
import { Newsletter } from "../components/Newsletter"
import { BenefitsOverview } from "../components/BenefitsOverview"

export const Home = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <Hero
        title="Dopiro: Unleash the Power of Nature's Superfruit"
        subtitle="Experience the refreshing taste and incredible benefits of African Boab fruit"
        ctaText="Explore Products"
        ctaLink="/products"
        secondaryCtaText="Learn More"
        secondaryCtaLink="/about"
        backgroundImage="https://images.unsplash.com/photo-1596392301391-e8622b210bd4?auto=format&fit=crop&q=80"
      />

      {/* Quick Links */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-16"
      >
        <QuickLinks />
      </motion.section>

      {/* Featured Content */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-16 bg-gray-50 dark:bg-gray-800"
      >
        <FeaturedContent />
      </motion.section>

      {/* Benefits Overview */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-16"
      >
        <BenefitsOverview />
      </motion.section>

      {/* Testimonials */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-16 bg-gray-50 dark:bg-gray-800"
      >
        <Testimonials />
      </motion.section>

      {/* Newsletter */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-16"
      >
        <Newsletter />
      </motion.section>
    </div>
  )
}