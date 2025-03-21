import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/' },
  { 
    name: 'Products', 
    href: '/products',
    dropdownItems: [
      { name: 'Email Automation', href: '/products/email-automation' },
      { name: 'Sales & Lead Generation', href: '/products/sales-lead-generation' },
      { name: 'Billing Automation', href: '/products/billing-automation' },
      { name: 'Data Analysis & Insights', href: '/products/data-analysis' },
    ]
  },
  { name: 'About Us', href: '/about' },
  { 
    name: 'Learning Hub', 
    href: '/learning',
    dropdownItems: [
      { name: 'Blog', href: '/blog' },
      { name: 'Tutorials', href: '/tutorials' },
      { name: 'Resources', href: '/resources' },
    ]
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-navy-900/80 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold gradient-text">
                Customer Flow AI
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative group"
              >
                <Link
                  to={item.href}
                  className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium flex items-center"
                >
                  {item.name}
                  {item.dropdownItems && (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </Link>
                
                {item.dropdownItems && (
                  <div className="absolute left-0 mt-2 w-48 rounded-lg bg-navy-800 ring-1 ring-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-1" role="menu">
                      {item.dropdownItems.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-gray-300 hover:bg-navy-700 hover:text-blue-400"
                          role="menuitem"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/login"
              className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium border border-gray-600 rounded-lg hover:border-blue-400"
            >
              Login
            </Link>
            <a
              href="https://calendly.com/mylesmerreighn"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Free Consultation
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-blue-400 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-navy-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-blue-400 hover:bg-navy-700"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
                {item.dropdownItems && (
                  <div className="pl-4">
                    {item.dropdownItems.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        to={dropdownItem.href}
                        className="block px-3 py-2 rounded-md text-sm font-medium text-gray-400 hover:text-blue-400 hover:bg-navy-700"
                        onClick={() => setIsOpen(false)}
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 space-y-2">
              <Link
                to="/login"
                className="block w-full text-center px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-blue-400 hover:bg-navy-700 border border-gray-600"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <a
                href="https://calendly.com/mylesmerreighn"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-3 py-2 rounded-md text-base font-medium bg-blue-600 text-white hover:bg-blue-700"
                onClick={() => setIsOpen(false)}
              >
                Free Consultation
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}