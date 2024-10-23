// src/components/FeaturedProducts.js
import products from '../../product'; // Assuming you have a products.js file with your products data

const FeaturedProducts = () => {
  const featured = products.slice(0, 3); // Example: Show only the first 3 products
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {featured.map(product => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg p-6">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4" />
            <h3 className="text-xl font-bold">{product.name}</h3>
            <p className="text-gray-700">${product.price.toFixed(2)}</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">View Product</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
