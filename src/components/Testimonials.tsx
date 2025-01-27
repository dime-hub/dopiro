import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Tendai M.",
      location: "Harare, Zimbabwe",
      rating: 5,
      comment: "Dopiro has become my daily energy boost! The natural taste is incredible."
    },
    {
      name: "Sarah K.",
      location: "Cape Town, South Africa",
      rating: 5,
      comment: "I love knowing I'm supporting sustainable farming while enjoying this delicious drink."
    },
    {
      name: "James L.",
      location: "Nairobi, Kenya",
      rating: 5,
      comment: "The perfect balance of health and taste. My whole family loves it!"
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
        What Our Customers Say
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="bg-white dark:bg-gray-600 p-6 rounded-xl shadow-lg"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-orange-600 fill-orange-600" />
              ))}
            </div>
            <p className="text-gray-600 dark:text-gray-200 mb-4 italic">
              "{testimonial.comment}"
            </p>
            <div className="text-gray-900 dark:text-white font-medium">
              <p>{testimonial.name}</p>
              <p className="text-lg text-gray-700 dark:text-gray-200">{testimonial.location}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}