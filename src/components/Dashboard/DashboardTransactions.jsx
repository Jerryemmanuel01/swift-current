import TransactionTable from "./TransactionTable";

const DashboardTransactions = ({ user }) => {
  return (
    <>
      {user && (
        <section className="mt-10">
          <h2 className="font-semibold text-lg font-inter text-dark">
            Latest Transactions
          </h2>
          <TransactionTable />
        </section>
      )}
    </>
  );
};

export default DashboardTransactions;
