// pages/index.tsx

import Apartments from "@/components/Apartments";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Banner Section */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <h1 className="text-4xl font-bold">
          Welcome to Our Real Estate Website
        </h1>
        <p className="mt-4 text-lg">
          Find your dream home with us. We offer the best properties in town!
        </p>
      </section>

      {/* Recent Apartments Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Most Recent Apartments
        </h2>

        <Apartments />
      </section>
    </div>
  );
};

export default HomePage;
