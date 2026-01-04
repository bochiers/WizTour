"use client";

export default function Pricing() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white text-black p-8">
      <h1 className="text-4xl font-bold mb-12">Pricing</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
        {/* Package 1 */}
        <div className="bg-blue-900 rounded-lg p-6 border border-blue-700">
          <p className="text-blue-300 text-sm mb-4">Package 1</p>
          <h2 className="text-4xl font-bold mb-2">$600</h2>
          <p className="text-gray-300 mb-6">Short Description</p>
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mb-6">
            Purchase
          </button>
          <ul className="text-sm space-y-2">
            <li>• Feature 1</li>
            <li>• Feature 2</li>
          </ul>
        </div>

        {/* Package 2 */}
        <div className="bg-purple-900 rounded-lg p-6 border border-purple-700">
          <p className="text-purple-300 text-sm mb-4">Package 2</p>
          <h2 className="text-4xl font-bold mb-2">$1500</h2>
          <p className="text-gray-300 mb-6">Short Description</p>
          <button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-lg mb-6">
            Purchase
          </button>
          <ul className="text-sm space-y-2">
            <li>• Feature 1</li>
            <li>• Feature 2</li>
            <li>• Feature 3</li>
          </ul>
        </div>

        {/* Package 3 */}
        <div className="bg-yellow-900 rounded-lg p-6 border border-yellow-700">
          <p className="text-yellow-300 text-sm mb-4">Package 3</p>
          <h2 className="text-4xl font-bold mb-2">$1800</h2>
          <p className="text-gray-300 mb-6">Short Description</p>
          <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg mb-6">
            Purchase
          </button>
          <ul className="text-sm space-y-2">
            <li>• Feature 1</li>
            <li>• Feature 2</li>
            <li>• Feature 3</li>
            <li>• Feature 4</li>
            <li>• Feature 5</li>
          </ul>
        </div>
      </div>
    </section>
  );
}