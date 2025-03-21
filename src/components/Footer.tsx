import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Mail,
  Phone
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-800 border-t border-navy-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Customer Flow AI</h3>
            <p className="text-gray-400">
              Transforming businesses through intelligent automation solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/mylesmerreighn/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products/email-automation" className="text-gray-400 hover:text-blue-400">
                  Email Automation
                </Link>
              </li>
              <li>
                <Link to="/products/sales-lead-generation" className="text-gray-400 hover:text-blue-400">
                  Sales & Lead Generation
                </Link>
              </li>
              <li>
                <Link to="/products/billing-automation" className="text-gray-400 hover:text-blue-400">
                  Billing Automation
                </Link>
              </li>
              <li>
                <Link to="/products/data-analysis" className="text-gray-400 hover:text-blue-400">
                  Data Analysis & Insights
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2" />
                info@customerflowai.com
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2" />
                +1 (217) 430-7597
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-navy-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Customer Flow AI. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-blue-400 text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-blue-400 text-sm">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-blue-400 text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;