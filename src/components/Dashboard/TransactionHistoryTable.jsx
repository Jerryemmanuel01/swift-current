import { ExternalLink } from "lucide-react";
import moment from "moment";
import useTransactionHistoryTable from "../../hooks/dashboardHooks/useTransactionHistoryTable";
import { TablePagination } from "@mui/material";

const TransactionHistoryTable = ({ transactions }) => {
  const {
    handleRowClick,
    user,
    handleChangePage,
    handleChangeRowsPerPage,
    page,
    products,
    rowsPerPage,
    startIndex,
  } = useTransactionHistoryTable(transactions);

  return (
    <section className="py-4 ">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-[#f8f8f8] font-inter">
          <thead>
            <tr className="bg-primary/10 text-sm ">
              <th className=" px-4 py-4 text-left whitespace-nowrap">#</th>
              <th className=" px-4 py-4 text-left whitespace-nowrap">Ref</th>
              <th className=" px-4 py-4 text-left whitespace-nowrap">Name</th>
              <th className=" px-4 py-4 text-left whitespace-nowrap">Status</th>
              <th className=" px-4 py-4 text-left whitespace-nowrap">
                Category
              </th>
              <th className=" px-4 py-4 text-left whitespace-nowrap">
                Transaction Date
              </th>
              <th className=" px-4 py-4 text-left whitespace-nowrap">Amount</th>
              <th className=" px-4 py-4 text-left whitespace-nowrap">Type</th>
              <th className=" px-4 py-4 text-left whitespace-nowrap">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.length
              ? products?.map((val, i) => {
                  const dateTime = val.createdAt;
                  const date = moment(dateTime).format("YYYY-MM-DD");
                  const time = moment(dateTime).format("HH:mm:ss");

                  return (
                    <tr
                      className="even:bg-primary/5 text-xs cursor-pointer"
                      key={i}
                      onClick={() => handleRowClick(val._id, val)}
                    >
                      <td className="px-4 py-2 whitespace-nowrap">
                        {i + 1 + startIndex}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap">
                        {val._id.substring(0, 10) + "..."}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap">
                        {val.name || val.metadata.name}
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
                        {val.status === "Pending" &&
                          val.type === "Transfer" && (
                            <div className="text-[9px] text-green-600 flex gap-1 items-center">
                              Continue <ExternalLink className="w-2.5" />
                            </div>
                          )}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap">
                        {val.category}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap">
                        <h2 className="">{date}</h2>
                        <span className="text-gray text-[9.5px]">{time}</span>
                      </td>
                      <td
                        className={`px-4 py-2 whitespace-nowrap ${
                          val.category === "Credit"
                            ? "text-primary"
                            : "text-red-600"
                        }`}
                      >
                        {val?.type === "Crypto Swift Fee"
                          ? "ETH "
                          : "$"}
                        {val.category === "Debit"
                          ? "-" + val.amount.toLocaleString()
                          : val.amount.toLocaleString()}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap">
                        {val.type}
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap">
                        {val.description ? val.description : "null"}
                      </td>
                    </tr>
                  );
                })
              : ""}
          </tbody>
        </table>
        {transactions.length !== 0 ? (
          <TablePagination
            component="div"
            count={transactions.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            rowsPerPageOptions={[10, 20, 25, 50, 100]} // Options for rows per page
          />
        ) : (
          <p className="text-center py-4">No Transaction Available</p>
        )}
        {!transactions.length && (
          <div className="text-center w-full py-4 text-sm font-inter font-medium">
            No Transaction available
          </div>
        )}
      </div>
    </section>
  );
};

export default TransactionHistoryTable;
