import { p } from "framer-motion/client";
import TransactionTable from "./TransactionTable";
import { ImSpinner } from "react-icons/im";

const DashboardTransactions = ({ transactions, user, isLoading }) => {
  return (
    <>
      {user && (
        <section className="mt-10">
          <h2 className="font-semibold text-lg font-inter text-dark">
            Latest Transactions
          </h2>
          {isLoading ? (
            <p className="mt-4 flex items-center gap-2">
              Getting latest Transactions... <ImSpinner className="animate-spin"/>
            </p>
          ) : (
            <TransactionTable transactions={transactions} />
          )}
        </section>
      )}
    </>
  );
};

export default DashboardTransactions;
