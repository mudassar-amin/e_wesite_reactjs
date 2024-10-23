// src/components/Testimonials.js
const Testimonials = () => {
    const reviews = [
      { name: "Alice", review: "Great products, fast shipping!" },
      { name: "Bob", review: "Amazing customer service and top-quality items." }
    ];
  
    return (
      <div className="bg-gray-100 p-8">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <p className="text-lg italic">"{review.review}"</p>
              <p className="mt-4 text-right font-bold">- {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Testimonials;
  