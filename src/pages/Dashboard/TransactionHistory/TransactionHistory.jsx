import { useSelector } from "react-redux";
import TransactionHistoryTable from "../../../components/Dashboard/TransactionHistoryTable";
e
const TransactionHistory = () => {
    const { user } = useSelector((state) => state.userInfo);
  return (
    <section className="px-6 w-full lg:w-full overflow-hidden">
      <h2 className="font-semibold text-lg font-inter text-dark">
        Transaction History
      </h2>
      <TransactionHistoryTable transactions={user.transactions} />
    </section>
  );
};

export default TransactionHistory;
