import DashboardTransactions from "../../../components/Dashboard/DashboardTransactions";
import TransactionTable from "../../../components/Dashboard/TransactionTable";

const TransactionHistory = () => {
  return (
    <section className="px-6 w-full lg:w-full overflow-hidden">
      <h2 className="font-semibold text-lg font-inter text-dark">
        Transaction History
      </h2>
      <TransactionTable />
    </section>
  );
};

export default TransactionHistory;
