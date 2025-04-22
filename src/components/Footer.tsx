
import { useEffect, useState } from "react";
import { Facebook, Instagram, Twitter, Github, Eye } from "lucide-react";

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 py-12 border-t border-gray-200">
      <div className="container-custom px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold font-poppins mb-2">Your Name</h3>
            <p className="text-sm text-gray-600 flex flex-col sm:flex-row items-center">
              Sharing my journey, experiences, and insights with the world.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://instagram.com/sanghu785" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a 
                href="https://facebook.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-primary transition-colors"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a 
                href="https://twitter.com/sanghu785" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-primary transition-colors"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
            
            <div className="text-sm text-gray-600 flex flex-col sm:flex-row items-center">
              <p>© {currentYear} Your Name. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
