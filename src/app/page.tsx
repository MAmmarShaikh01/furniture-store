// pages/index.tsx
"use client";
import Header from '../components/Header';
import furnitureData from '../data/furniture.json';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main className="pt-20 bg-black text-white">
        {/* Landing Section */}
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-900 to-black">
          <div className="text-center px-6">
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-4">
              Welcome to FurnitureCo
            </h1>
            <p className="text-lg lg:text-xl mb-8 text-gray-300">
              Discover premium furniture that blends comfort, style, and quality.
            </p>
            <a
              href="#collection"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full text-lg font-semibold hover:from-indigo-600 hover:to-blue-500 transition-colors duration-300"
            >
              Shop the Collection
            </a>
          </div>
        </section>

        {/* Collection Section */}
        <section id="collection" className="container mx-auto px-6 py-16">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Explore Our Collection
          </h2>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {furnitureData.map((item) => (
              <div
                key={item.id}
                className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300 flex flex-col"
              >
                {/* Fixed-height Image Container */}
                <div className="w-full h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-white">
                      {item.name}
                    </h3>
                    <p className="text-gray-400 mb-4">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xl font-semibold">
                      RS {item.price}
                    </span>
                    <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl text-white hover:from-indigo-600 hover:to-blue-500 transition-colors duration-300">
                      View & Purchase
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-gray-900 py-16">
          <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="text-4xl font-bold mb-4">
                About FurnitureCo
              </h2>
              <p className="text-gray-300 mb-4">
                At FurnitureCo, we’re dedicated to crafting high-quality pieces that bring your dream spaces to life. Our materials are sustainably sourced and our designs blend modern aesthetics with timeless comfort.
              </p>
              <p className="text-gray-300">
                From sleek sofas to elegant dining tables, our curated collection is built for lasting style and functionality.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img
                src="/images/about-image.jpg"
                alt="About FurnitureCo"
                className="rounded-2xl shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Why Buy Section */}
        <section id="why-buy" className="container mx-auto px-6 py-16">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Why Buy From FurnitureCo?
          </h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
            <div className="bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-400">
                Only the finest materials and craftsmanship go into every piece we offer.
              </p>
            </div>
            <div className="bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-2">Sustainable Sourcing</h3>
              <p className="text-gray-400">
                We prioritize eco-friendly practices and responsible wood sourcing.
              </p>
            </div>
            <div className="bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-2">Customer Satisfaction</h3>
              <p className="text-gray-400">
                Our dedicated support team ensures a seamless shopping experience from start to finish.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-gradient-to-r from-indigo-900 to-black py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Get in Touch
            </h2>
            <p className="text-gray-300 mb-8">
              Have questions? We’d love to hear from you. Send us a message and we’ll get back to you within 24 hours.
            </p>
            <form className="max-w-xl mx-auto text-left">
              <div className="mb-4">
                <label className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="you@example.com"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={5}
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-8 py-3 bg-blue-500 rounded-full font-semibold hover:bg-indigo-600 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
