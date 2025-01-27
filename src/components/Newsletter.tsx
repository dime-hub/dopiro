import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import { useState } from 'react'

export const Newsletter = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add your newsletter submission logic here
    console.log('Submitting email:', email)
  }

  return (
    <div className="max-w-4xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-orange-600 text-white rounded-2xl p-6 md:p-12 text-center"
      >
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Stay Updated
        </h2>
        <p className="text-base md:text-lg mb-6 md:mb-8">
          Join our newsletter for exclusive offers, new product launches, and health tips
        </p>
        <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 p-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-white text-orange-600 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-sm md:text-base">Subscribe</span>
            </button>
          </div>
          <p className="text-xs md:text-sm mt-2 text-orange-200">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </form>
      </motion.div>
    </div>
  )
}