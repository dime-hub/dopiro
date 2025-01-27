

export const FeaturedContent = () => {
  return (
    <section className="py-8 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-700 dark:text-white text-center mb-12">Featured Products</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Limited Edition Flavor */}
          <div className="relative overflow-hidden rounded-2xl group">
            <img
              src="https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&q=80&w=1024"
              alt="Limited Edition Mango Sunrise"
              className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-8 text-white">
                <span className="inline-block bg-orange-600 px-4 py-1 rounded-full text-sm font-semibold mb-3">
                  Limited Edition
                </span>
                <h3 className="text-2xl font-bold mb-2">Mango Sunrise</h3>
                <p className="mb-4">Experience our newest tropical fusion blend</p>
                <a
                  href="/products"
                  className="inline-block bg-white text-orange-600 px-6 py-2 rounded-full font-semibold hover:bg-orange-50 transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          {/* Customer Testimonial */}
          <div className="bg-orange-50 rounded-2xl p-8 flex flex-col justify-center">
            <blockquote className="text-xl text-gray-700 mb-6">
              "Dopiro has become my daily energy boost. It's refreshing, natural, and I love supporting a sustainable brand!"
            </blockquote>
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
                alt="Sarah Johnson"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="ml-4">
                <p className="font-semibold text-gray-900">Samantha</p>
                <p className="text-gray-600">Wellness Coach</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};