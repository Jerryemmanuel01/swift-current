import { useSelector } from "react-redux";
import TransactionHistoryTable from "../../../components/Dashboard/TransactionHistoryTable";
import useDashboard from "../../../hooks/dashboardHooks/useDashboard";
import { ImSpinner } from "react-icons/im";
const TransactionHistory = () => {
  const { transactions, isGetTransactionsLoading } = useSelector((state) => state.user);
  const {} = useDashboard();
  return (
    <section className="px-6 w-full lg:w-full overflow-hidden">
      <h2 className="font-semibold text-lg font-inter text-dark">
        Transaction History
      </h2>
      {isGetTransactionsLoading ? (
        <p className="mt-4 flex items-center gap-2">
          Getting Transactions... <ImSpinner className="animate-spin" />
        </p>
      ) : (
        <TransactionHistoryTable transactions={transactions} />
      )}
    </section>
  );
};

export default TransactionHistory;
