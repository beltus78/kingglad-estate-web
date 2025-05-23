
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-kingglad-charcoal text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-kingglad-green rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-sm">K</span>
              </div>
              <span className="text-xl font-bold">Kingglad Group</span>
            </div>
            <p className="text-gray-400 mb-6">Building Excellence, Creating Value</p>
            <p className="text-gray-400">Est. 2020 in Limbe, Cameroon</p>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Our Companies</h4>
            <ul className="space-y-2">
              <li><Link to="/realty" className="text-gray-400 hover:text-kingglad-green transition-colors">Kingglad Realty</Link></li>
              <li><Link to="/auto" className="text-gray-400 hover:text-kingglad-green transition-colors">Kingglad Auto</Link></li>
              <li><Link to="/suites" className="text-gray-400 hover:text-kingglad-green transition-colors">Kingglad Suites</Link></li>
              <li><Link to="/oil" className="text-gray-400 hover:text-kingglad-green transition-colors">Kingglad Oil</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-kingglad-green transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-kingglad-green transition-colors">About</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-kingglad-green transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-kingglad-green transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Limbe, Cameroon</li>
              <li>Phone: 671673049</li>
              <li>Email: contact@kinggladgroup.com</li>
              <li>www.kinggladgroup.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} Kingglad Group. All rights reserved. | Premium Real Estate & Property Development
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
