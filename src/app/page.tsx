"use client";
import Header from '../components/Header';
import furnitureData from '../data/furniture.json';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main className="pt-20 bg-black min-h-screen">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-extrabold text-white mb-8 text-center">
            Explore Our Collection
          </h1>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {furnitureData.map((item) => (
              <div
                key={item.id}
                className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {item.name}
                  </h2>
                  <p className="text-gray-300 mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-semibold text-white">
                      ${item.price}
                    </span>
                    <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl hover:from-indigo-600 hover:to-blue-500 transition-colors duration-300">
                      View
n Purchase
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
