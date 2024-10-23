// src/components/Footer.js
const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; {new Date().getFullYear()} ShopEase. All rights reserved.</p>
        <div className="mt-2">
          <a href="#" className="text-gray-400 mx-2 hover:text-white">Privacy Policy</a>
          <a href="#" className="text-gray-400 mx-2 hover:text-white">Contact</a>
          <a href="#" className="text-gray-400 mx-2 hover:text-white">About Us</a>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  