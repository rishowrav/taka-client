import React from "react";
import SendMoney from "../components/SendMoney";

const TransactionsHistory = () => {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold">Transactions History</h1>

      <div>
        <SendMoney />
      </div>
    </div>
  );
};

export default TransactionsHistory;
