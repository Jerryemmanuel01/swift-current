import moment from "moment";
const TransactionTable = ({ transactions }) => {
  console.log(transactions.length);

  return (
    <section className="py-4 ">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-[#f8f8f8] font-inter">
          <thead>
            <tr className="bg-primary/10 text-sm md:text-base">
              <th className=" px-4 py-4 text-left whitespace-nowrap">#</th>
              <th className=" px-4 py-4 text-left whitespace-nowrap">Ref</th>
              <th className=" px-4 py-4 text-left whitespace-nowrap">
                Category
              </th>
              <th className=" px-4 py-4 text-left whitespace-nowrap">
                Transaction Date
              </th>
              <th className=" px-4 py-4 text-left whitespace-nowrap">Amount</th>
              <th className=" px-4 py-4 text-left whitespace-nowrap">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.length &&
              transactions
                .slice(0, 5)
                .reverse()
                .map((val, i) => {
                  const dateTime = val.createdAt;
                  const date = moment(dateTime).format("YYYY-MM-DD");
                  const time = moment(dateTime).format("HH:mm:ss");

                  return (
                    <tr
                      className="even:bg-primary/5 text-xs md:text-sm "
                      key={i}
                    >
                      <td className="px-4 py-2 whitespace-nowrap">{i + 1}</td>
                      <td className="px-4 py-2 whitespace-nowrap">
                        {val.id.substring(0, 10) + "..."}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap">
                        {val.category}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap">
                        <h2 className="">{date}</h2>
                        <span className="text-gray text-[9.5px] md:text-xs">
                          {time}
                        </span>
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap">
                        {val.amount}
                      </td>
                      <td
                        className={`px-4 py-2 whitespace-nowrap font-medium font-inter ${
                          val.status === "Approved"
                            ? "text-green-500"
                            : val.status === "Pending"
                            ? "text-yellow"
                            : "text-red-500"
                        }`}
                      >
                        {val.status}
                      </td>
                    </tr>
                  );
                })}
          </tbody>
        </table>
        {!transactions.length && (
          <div className="text-center w-full py-4 text-sm font-inter font-medium">
            No Transaction available
          </div>
        )}
      </div>
    </section>
  );
};

export default TransactionTable;
