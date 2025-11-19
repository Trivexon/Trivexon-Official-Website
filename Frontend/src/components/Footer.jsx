// SimpleFooter.jsx
import React from 'react';

const SimpleFooter = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">DigipPlus</h3>
            <p className="text-gray-400 text-sm">
              Professional web design agency creating stunning digital experiences.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Web Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">SEO</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Branding</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="text-gray-400 space-y-2">
              <p>68 Road Boshyn Street</p>
              <p>600 New York, USA</p>
              <p>info@digipplus.com</p>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>© 2025 DigipPlus. All rights reserved. | tradesolutions.com</p>
        </div>
      </div>
    </footer>
  );
};

export default SimpleFooter;