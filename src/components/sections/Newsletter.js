// src/components/Newsletter.js
const Newsletter = () => {
    return (
      <div className="bg-blue-500 text-white p-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Join Our Newsletter</h2>
          <p className="mt-4">Stay updated with our latest products and offers.</p>
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="mt-6 p-2 w-full max-w-md border-2 border-white rounded"
          />
          <button className="mt-4 bg-white text-blue-500 py-2 px-4 rounded hover:bg-gray-100">Subscribe</button>
        </div>
      </div>
    );
  };
  
  export default Newsletter;
  