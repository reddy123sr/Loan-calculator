import React, { useState } from 'react';

const LoanForm = ({ onCalculate }) => {
  const [loanAmount, setLoanAmount] = useState('100000');
  const [interestRate, setInterestRate] = useState('8.5');
  const [termYears, setTermYears] = useState('5');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loanAmount && interestRate && termYears) {
      onCalculate({
        loanAmount: parseFloat(loanAmount),
        interestRate: parseFloat(interestRate),
        termYears: parseInt(termYears)
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 rounded shadow-md w-1/2 mx-auto mt-8 border border-white">
      <h1 className='text-3xl mb-2 font-medium'>Loan Calculator Dashboard</h1>
      <div className='flex gap-1'>
      <div className="mb-4">
        <label className="block mb-2 font-medium">Loan Amount</label>
        <input
          type="number"
          className="w-full border px-4 py-2 rounded"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-medium">Interest Rate (%)</label>
        <input
          type="number"
          step="0.1"
          className="w-full border px-4 py-2 rounded"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-medium">Term (Years)</label>
        <input
          type="number"
          className="w-full border px-4 py-2 rounded"
          value={termYears}
          onChange={(e) => setTermYears(e.target.value)}
          required
        />
      </div>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Calculate
      </button>
    </form>
  );
};

export default LoanForm;
