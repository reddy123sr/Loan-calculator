import React, { useState } from "react";
import EMITable from "./EmiTable";
import LoanForm from "./LoanForm";

const currencyOptions = {
  USD: "USD",
  EUR: "EUR",
  INR: "INR",
  GBP: "GBP",
  JPY: "JPY",
  AUD: "AUD",
  CAD: "CAD"
};

const Home = () => {
  const [emi, setEmi] = useState(null);
  const [schedule, setSchedule] = useState([]);
  const [currency, setCurrency] = useState("USD");

  const calculateEMI = ({ loanAmount, interestRate, termYears }) => {
    const P = loanAmount;
    const R = interestRate / 12 / 100;
    const N = termYears * 12;
    const emiValue = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    setEmi(emiValue.toFixed(2));

    let balance = P;
    let fullSchedule = [];

    for (let i = 0; i < N; i++) {
      const interest = balance * R;
      const principal = emiValue - interest;
      balance -= principal;
      fullSchedule.push({
        principal,
        interest,
        balance: balance > 0 ? balance : 0
      });
    }

    setSchedule(fullSchedule);
  };

  const handleReset = () => {
    setEmi(null);
    setSchedule([]);
  };

  return (
    <div>
      <LoanForm onCalculate={calculateEMI} />
      {emi && (
        <div className="text-center mt-6">
          <h2 className="text-xl font-semibold">
            Monthly EMI: {currencyOptions[currency]}{emi}
          </h2>

          {/* Currency Dropdown */}
          <div className="mt-4">
            <label className="block font-semibold mb-1">Currency</label>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="border px-3 py-1 rounded"
            >
              {Object.keys(currencyOptions).map((cur) => (
                <option key={cur} value={cur}>
                  {cur}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={handleReset}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Reset Table
          </button>
        </div>
      )}
      {schedule.length > 0 && (
        <EMITable schedule={schedule} currency={currency} symbol={currencyOptions[currency]} />
      )}
    </div>
  );
};

export default Home;
