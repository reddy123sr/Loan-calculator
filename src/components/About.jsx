import React from 'react';

const About = () => {
  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">Loan Calculator</h1>
      
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <img 
          src="public\loanimage.jpg" 
          alt="About Loan Calculator" 
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        
        {/* Text Content */}
        <div className="text-lg leading-relaxed">
          <p className="mb-4">
            Welcome to our Loan Calculator App — a simple, efficient, and user-friendly tool
            that helps you plan your financial future with ease. We designed this app with the
            aim to give you clear EMI breakdowns, repayment schedules, and total interest insights.
          </p>
          <p>
            Whether you're buying a car, a house, or taking out a personal loan, our calculator
            gives you full control over understanding your loan structure. Our team is constantly
            working to improve the app, including features like dark mode, exchange rates, and more!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
