import React, { useEffect, useRef } from 'react';

const platforms = [
  'Google Ads', 'Meta Ads', 'Salesforce', 'Shopify', 'HubSpot', 'AWS',
  'Google Analytics', 'LinkedIn Sales Navigator', 'Mailchimp', 'Stripe',
  'PayPal', 'WooCommerce', 'Twitter/X Ads', 'TikTok Ads', 'YouTube Ads',
  'Intercom', 'Drift', 'Twilio', 'Zendesk', 'Slack', 'Zapier', 'n8n'
];

export default function PlatformCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    const scrollWidth = scrollElement.scrollWidth;
    const clientWidth = scrollElement.clientWidth;
    
    let scrollPos = 0;
    const scroll = () => {
      scrollPos = (scrollPos + 1) % scrollWidth;
      if (scrollElement) {
        if (scrollPos + clientWidth >= scrollWidth) {
          scrollPos = 0;
        }
        scrollElement.scrollLeft = scrollPos;
      }
    };

    const interval = setInterval(scroll, 150); // Slowed down the scroll speed
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-navy-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-center text-gray-400 mb-12">
          Trusted Integrations
        </h2>
        
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-navy-900 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-navy-900 to-transparent z-10" />
          
          <div 
            ref={scrollRef}
            className="overflow-hidden whitespace-nowrap"
          >
            <div className="inline-block animate-scroll">
              {[...platforms, ...platforms].map((platform, index) => (
                <span
                  key={index}
                  className="inline-block mx-8 text-gray-500 hover:text-blue-400 transition-colors text-lg"
                >
                  {platform}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}