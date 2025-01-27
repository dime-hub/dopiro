import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, Send } from 'lucide-react'

export const Contacts= () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto px-4 py-16"
      >
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Get in Touch
          </motion.h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We're here to help! Reach out for inquiries, partnerships, or just to say hello.
          </p>
        </div>

        {/* Contact Information */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 mb-20"
        >
          {/* Contact Details */}
          <div className="space-y-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <div className="flex items-center gap-4 mb-4">
                <MapPin className="w-8 h-8 text-orange-600" />
                <h3 className="text-xl font-semibold dark:text-white">Our Locations</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium dark:text-white">Head Office</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    123 Samora Machel Ave<br/>
                    Harare, Zimbabwe
                  </p>
                </div>
                <div>
                  <h4 className="font-medium dark:text-white">Distribution Center</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    45 Jason Moyo Street<br/>
                    Harare, Zimbabwe
                  </p>
                </div>
                <div>
                  <h4 className="font-medium dark:text-white">Retail Outlet</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Eastgate Shopping Mall<br/>
                    Level 2, Shop 45<br/>
                    Harare, Zimbabwe
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <div className="flex items-center gap-4 mb-4">
                <Phone className="w-8 h-8 text-orange-600" />
                <h3 className="text-xl font-semibold dark:text-white">Contact Numbers</h3>
              </div>
              <div className="space-y-2">
                <p className="text-gray-600 dark:text-gray-400">
                  Main: +263 242 123 456
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Sales: +263 242 123 457
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Support: +263 242 123 458
                </p>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <div className="flex items-center gap-4 mb-4">
                <Clock className="w-8 h-8 text-orange-600" />
                <h3 className="text-xl font-semibold dark:text-white">Operating Hours</h3>
              </div>
              <div className="space-y-2">
                <p className="text-gray-600 dark:text-gray-400">
                  Mon-Fri: 8:00 AM - 5:00 PM
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Sat: 9:00 AM - 1:00 PM
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Sun: Closed
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-6 dark:text-white">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
                    placeholder="name@company.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
                  placeholder="Write your message here..."
                  required
                />
              </div>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </motion.section>

        {/* Map Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden h-[400px]">
            <iframe
              title="Dopiro Head Office Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.755774067499!2d31.04283231544338!3d-17.82491088775085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a5e1d5f0f8b5%3A0x5f2f1f5f5f5f5f5f!2sSamora%20Machel%20Ave%2C%20Harare%2C%20Zimbabwe!5e0!3m2!1sen!2sus!4v1623345600000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              className="dark:grayscale dark:opacity-90"
            />
          </div>
        </motion.section>
      </motion.div>
    </div>
  )
}