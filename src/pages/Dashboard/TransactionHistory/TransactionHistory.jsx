import TransactionHistoryTable from "../../../components/Dashboard/TransactionHistoryTable";
import TransactionTable from "../../../components/Dashboard/TransactionTable";

const TransactionHistory = () => {
  return (
    <section className="px-6 w-full lg:w-full overflow-hidden">
      <h2 className="font-semibold text-lg font-inter text-dark">
        Transaction History
      </h2>
      <TransactionHistoryTable />
    </section>
  );
};

export default TransactionHistory;
