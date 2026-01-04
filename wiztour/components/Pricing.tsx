"use client";

export default function Pricing() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white text-black p-8">
      <h1 className="text-4xl font-bold mb-12">Pricing</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
        {/* Package 1 */}
        <div className="bg-white rounded-lg p-8 border-2 border-gray-300 shadow-lg hover:shadow-xl transition">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Basic</h3>
          <div className="mb-6">
            <span className="text-5xl font-bold text-blue-600">$29</span>
            <span className="text-gray-600">/month</span>
          </div>
          <p className="text-gray-600 mb-6">Perfect for getting started</p>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg mb-6">
            Get Started
          </button>
          <ul className="text-sm space-y-3 text-gray-700">
            <li>✓ Feature 1</li>
            <li>✓ Feature 2</li>
            <li>✓ Feature 3</li>
          </ul>
        </div>

        {/* Package 2 - Featured */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-8 shadow-2xl transform scale-105">
          <div className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
            POPULAR
          </div>
          <h3 className="text-2xl font-bold mb-4 text-white">Professional</h3>
          <div className="mb-6">
            <span className="text-5xl font-bold text-white">$79</span>
            <span className="text-blue-100">/month</span>
          </div>
          <p className="text-blue-100 mb-6">Most popular choice</p>
          <button className="w-full bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-4 rounded-lg mb-6">
            Get Started
          </button>
          <ul className="text-sm space-y-3 text-white">
            <li>✓ Feature 1</li>
            <li>✓ Feature 2</li>
            <li>✓ Feature 3</li>
            <li>✓ Feature 4</li>
            <li>✓ Feature 5</li>
          </ul>
        </div>

        {/* Package 3 */}
        <div className="bg-white rounded-lg p-8 border-2 border-gray-300 shadow-lg hover:shadow-xl transition">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Enterprise</h3>
          <div className="mb-6">
            <span className="text-5xl font-bold text-blue-600">$199</span>
            <span className="text-gray-600">/month</span>
          </div>
          <p className="text-gray-600 mb-6">For large organizations</p>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg mb-6">
            Get Started
          </button>
          <ul className="text-sm space-y-3 text-gray-700">
            <li>✓ Feature 1</li>
            <li>✓ Feature 2</li>
            <li>✓ Feature 3</li>
            <li>✓ Feature 4</li>
            <li>✓ Feature 5</li>
            <li>✓ Feature 6</li>
          </ul>
        </div>
      </div>
    </section>
  );
}