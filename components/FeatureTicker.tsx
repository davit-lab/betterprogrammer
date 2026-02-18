
import React from 'react';

const FEATURES = [
  '• FREE UPDATES FOREVER',
  '• GEORGIAN LANGUAGE CONTENT',
  '• EXPERT CODE REVIEW',
  '• LIFETIME ACCESS',
  '• SECURE PAYMENTS',
  '• INDUSTRY STANDARDS'
];

const FeatureTicker: React.FC = () => {
  return (
    <div className="bg-white text-black py-6 overflow-hidden relative z-20">
      <div className="flex whitespace-nowrap animate-scroll">
        {[...FEATURES, ...FEATURES, ...FEATURES, ...FEATURES].map((feature, i) => (
          <div key={i} className="flex items-center mx-12">
            <span className="text-[12px] font-black uppercase tracking-[0.3em] font-mono">
              {feature}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureTicker;
