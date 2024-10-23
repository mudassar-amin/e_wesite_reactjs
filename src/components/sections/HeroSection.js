// src/components/HeroSection.js
const HeroSection = () => {
    return (
      <div className="bg-cover bg-center h-96 text-white flex items-center justify-center" style={{ backgroundImage: "url('https://via.placeholder.com/1200x600')" }}>
        <div className="text-center">
          <h1 className="text-5xl font-bold">Welcome to ShopEase</h1>
          <p className="text-xl mt-4">Find the best deals on our exclusive products!</p>
          <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Shop Now
          </button>
        </div>
      </div>
    );
  };
  
  export default HeroSection;
  