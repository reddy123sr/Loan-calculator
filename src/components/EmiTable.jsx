const EMITable = ({ schedule, currency, symbol }) => {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-2 text-center">
        Amortization Schedule ({currency})
      </h2>
      <table className="table-auto w-1/2 mx-auto text-center sm:w-7/8">
        <thead>
          <tr className="bg-gray-500">
            <th className="border px-4 py-2">#</th>
            <th className="border px-4 py-2">Principal</th>
            <th className="border px-4 py-2">Interest</th>
            <th className="border px-4 py-2">Remaining Balance</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((row, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{row.principal.toFixed(2)} {symbol}</td>
              <td className="border px-4 py-2">{row.interest.toFixed(2)} {symbol}</td>
              <td className="border px-4 py-2">{row.balance.toFixed(2)} {symbol}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default EMITable;