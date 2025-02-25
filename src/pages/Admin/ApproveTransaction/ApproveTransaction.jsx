import { ChevronLeft } from "lucide-react";
import useApproveTransaction from "../../../hooks/adminHooks/useApproveTransaction";
import HeaderName from "../../../components/Dashboard/HeaderName";
import moment from "moment";
import { PiSpinner } from "react-icons/pi";
import { TablePagination } from "@mui/material";

const ApproveTransaction = () => {
  const {
    isError,
    isLoading,
    pendingTransaction,
    navigate,
    handleRowClick,
    handleChangePage,
    handleChangeRowsPerPage,
    page,
    products,
    rowsPerPage,
    startIndex,
  } = useApproveTransaction();
  return (
    <section className="w-full px-6 -mt-6 py-6">
      <div className="flex items-center gap-3 mt-2">
        <button
          onClick={() => navigate(-1)}
          className="outline-hidden flex items-center gap-1.5 text-sm md:text-base"
        >
          <ChevronLeft className="w-5 md:w-6" />
        </button>
        <HeaderName title={"Pending Transactions"} />
      </div>

      <div className="overflow-x-auto">
        {isLoading ? (
          <h2 className="font-merriweather flex items-center gap-2 mt-5 justify-center text-sm">
            Getting pending transactions{" "}
            <PiSpinner className="animate-spin text-sm" />
          </h2>
        ) : isError ? (
          <h2 className="font-merriweather flex items-center gap-2 mt-5 justify-center text-sm">
            Error getting pending transactions, please try again.
          </h2>
        ) : (
          <>
            <table className="w-full bg-[#f8f8f8] font-inter mt-4">
              <thead>
                <tr className="bg-primary/10 text-sm ">
                  <th className=" px-4 py-4 text-left whitespace-nowrap">#</th>
                  <th className=" px-4 py-4 text-left whitespace-nowrap">ID</th>
                  <th className=" px-4 py-4 text-left whitespace-nowrap">
                    Name
                  </th>
                  <th className=" px-4 py-4 text-left whitespace-nowrap">
                    Amount
                  </th>
                  <th className=" px-4 py-4 text-left whitespace-nowrap">
                    Type
                  </th>
                  <th className=" px-4 py-4 text-left whitespace-nowrap">
                    Category
                  </th>
                  <th className=" px-4 py-4 text-left whitespace-nowrap">
                    Status
                  </th>
                  <th className=" px-4 py-4 text-left whitespace-nowrap">
                    Description
                  </th>
                  <th className=" px-4 py-4 text-left whitespace-nowrap">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {products?.map((val, i) => {
                  const dateTime = val.createdAt;
                  const date = moment(dateTime).format("YYYY-MM-DD");
                  const time = moment(dateTime).format("HH:mm:ss");
                  return (
                    <tr
                      key={i}
                      className="even:bg-primary/5 text-xs cursor-pointer"
                      onClick={() => handleRowClick(val._id)}
                    >
                      <td className="px-4 py-3.5 whitespace-nowrap">
                        {i + 1 + startIndex}
                      </td>
                      <td className="px-4 py-3.5 whitespace-nowrap">
                        {val._id.substring(0, 10) + "..."}
                      </td>
                      <td className="px-4 py-3.5 whitespace-nowrap">
                        {val.name}
                      </td>
                      <td className="px-4 py-3.5 whitespace-nowrap">
                        {val?.type === "Crypto Swift Fee" ? "ETH " : "$"}
                        {val.amount.toLocaleString()}
                      </td>
                      <td className="px-4 py-3.5 whitespace-nowrap">
                        {val.type}
                      </td>
                      <td className="px-4 py-3.5 whitespace-nowrap">
                        {val.category}
                      </td>
                      <td className="px-4 py-3.5 whitespace-nowrap tracking-wide">
                        {val.status}
                      </td>
                      <td className="px-4 py-3.5 whitespace-nowrap">
                        {val.description}
                      </td>
                      <td className="px-4 py-3.5 whitespace-nowrap">
                        <h2 className="">{date}</h2>
                        <span className="text-gray text-[9.5px]">{time}</span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {pendingTransaction.length !== 0 ? (
              <TablePagination
                component="div"
                count={pendingTransaction.length}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                rowsPerPageOptions={[10, 20, 25, 50, 100]} // Options for rows per page
              />
            ) : (
              <p>
                <p className="text-center py-4">
                  No pending Transaction available{" "}
                </p>
              </p>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default ApproveTransaction;
