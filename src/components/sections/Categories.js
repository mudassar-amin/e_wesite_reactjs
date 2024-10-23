// src/components/Categories.js
const Categories = () => {
    const categories = ["Electronics", "Fashion", "Home Goods"];
    return (
      <div className="p-8">
        <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-gray-200 p-6 text-center rounded-lg">
              <h3 className="text-xl font-bold">{category}</h3>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Explore {category}</button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Categories;
  