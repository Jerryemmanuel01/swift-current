const TransactionTable = () => {
  const data = [
    {
      ref: "#2353232",
      category: "Credit",
      date: "22 Aug, 2024",
      time: "01 : 36 : 42 AM",
      amount: "$600,000",
      status: "Approved",
    },
    {
      ref: "#5849332",
      category: "Debit",
      date: "09 Sep, 2024",
      time: "11 : 44 : 09 PM",
      amount: "$30,000",
      status: "Pending",
    },
    {
      ref: "#3432328",
      category: "Credit",
      date: "25 Sep, 2024",
      time: "03 : 36 : 42 AM",
      amount: "$90,000",
      status: "Approved",
    },
    {
      ref: "#9382283",
      category: "Debit",
      date: "12 Dec, 2024",
      time: "06 : 16 : 32 AM",
      amount: "$10,000",
      status: "Failed",
    },
    {
      ref: "#8994843",
      category: "Credit",
      date: "12 Jan, 2025",
      time: "11 : 36 : 42 AM",
      amount: "$50,000",
      status: "Approved",
    },
  ];
  return (
    <section className="py-4 ">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-primary/5">
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
            {data.map((val, i) => (
              <tr className="even:bg-primary/10 text-xs md:text-sm " key={i}>
                <td className="px-4 py-2 whitespace-nowrap">{i+1}</td>
                <td className="px-4 py-2 whitespace-nowrap">{val.ref}</td>
                <td className="px-4 py-2 whitespace-nowrap">{val.category}</td>
                <td className="px-4 py-2 whitespace-nowrap">
                  <h2 className="">{val.date}</h2>
                  <span className="text-gray text-xs">{val.time}</span>
                </td>
                <td className="px-4 py-2 whitespace-nowrap">{val.amount}</td>
                <td className={`px-4 py-2 whitespace-nowrap font-medium font-inter ${val.status === "Approved" ? "text-green-500": val.status === "Pending" ? "text-yellow":"text-red-500"}`}>{val.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TransactionTable;
