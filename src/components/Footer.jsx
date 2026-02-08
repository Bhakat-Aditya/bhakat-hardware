import React from 'react';

const Footer = () => {
  return (
    <footer className="py-20 px-6 bg-slate-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        <div>
          <div className="text-2xl font-display font-bold text-white mb-6">
            BHAKAT <span className="text-amber-600">HARDWARE</span>
          </div>
          <p className="text-slate-400 max-w-sm leading-relaxed">
            The backbone of Midnapore's skyline. Exclusive suppliers of AAC Blocks and heavy construction materials.
          </p>
        </div>
        <div className="text-right">
          <p className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-4">Get in Touch</p>
          <p className="text-lg md:text-xl font-display font-bold">Jamunabali Abash, Midnapore</p>
          <p className="text-slate-500 mt-2">Pin: 721102</p>
        </div>
      </div>
      
      {/* Fixed the date error below */}
      <div className="max-w-7xl mx-auto border-t border-slate-800 mt-16 pt-8 text-center text-slate-600 text-xs uppercase tracking-widest">
        © {new Date().getFullYear()} Bhakat Hardware. Built for Strength.
      </div>
    </footer>
  );
};

export default Footer;