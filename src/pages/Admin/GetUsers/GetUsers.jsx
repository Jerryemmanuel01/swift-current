import { useNavigate } from "react-router-dom";
import HeaderName from "../../../components/Dashboard/HeaderName";
import getAllUser from "../../../hooks/adminHooks/getAllUser";
import { ChevronLeft } from "lucide-react";
import { ImSpinner5 } from "react-icons/im";
import { useState } from "react";

const GetUsers = () => {
  const { users, isLoading, isError } = getAllUser();
  const [data, setData] = useState(users);
  const [sortOrder, setSortOrder] = useState("asc"); // Track sorting order

  const handleSort = () => {
    const sortedData = [...data].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.firstName.localeCompare(b.firstName);
      } else {
        return b.firstName.localeCompare(a.firstName);
      }
    });

    setData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc"); // Toggle order
  };

  const navigate = useNavigate();

  const handleRowClick = (id) => {
    navigate(`/admin/user-profile/${id}`);
  };
  return (
    <section className="w-full px-6 bg-[#f1f5f6] -mt-6 py-6">
      <div className="flex items-center gap-3 mt-2">
        <button
          onClick={() => navigate(-1)}
          className="outline-hidden flex items-center gap-1.5 text-sm md:text-base"
        >
          <ChevronLeft className="w-5 md:w-6" />
        </button>
        <HeaderName title={"All User"} />
      </div>

      <div className="overflow-x-auto">
        {isLoading ? (
          <h2 className="font-merriweather flex items-center gap-2 mt-5 justify-center text-sm">
            Getting all users <ImSpinner5 className="animate-spin text-sm" />
          </h2>
        ) : isError ? (
          <h2 className="font-merriweather flex items-center gap-2 mt-5 justify-center text-sm">
            Error getting users, please try again.
          </h2>
        ) : (
          <table className="w-full bg-[#f8f8f8] font-inter mt-4">
            <thead>
              <tr className="bg-primary/10 text-sm ">
                <th className=" px-4 py-4 text-left whitespace-nowrap">#</th>
                <th className=" px-4 py-4 text-left whitespace-nowrap">ID</th>
                <th className=" px-4 py-4 text-left whitespace-nowrap">
                  First Name
                  <button onClick={handleSort} style={{ marginLeft: "10px" }}>
                    {sortOrder === "asc" ? "▲" : "▼"}
                  </button>
                </th>
                <th className=" px-4 py-4 text-left whitespace-nowrap">
                  Last Name
                </th>
                <th className=" px-4 py-4 text-left whitespace-nowrap">
                  Email Address
                </th>
                <th className=" px-4 py-4 text-left whitespace-nowrap">
                  Account Number
                </th>
                <th className=" px-4 py-4 text-left whitespace-nowrap">
                  Account Balance
                </th>
                <th className=" px-4 py-4 text-left whitespace-nowrap">
                  Phone Number
                </th>
                <th className=" px-4 py-4 text-left whitespace-nowrap">
                  KYC Status
                </th>
                <th className=" px-4 py-4 text-left whitespace-nowrap">Role</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((val, i) => (
                <tr
                  key={i}
                  className="even:bg-primary/5 text-xs cursor-pointer"
                  onClick={() => handleRowClick(val.id)}
                >
                  <td className="px-4 py-3.5 whitespace-nowrap">{i + 1}</td>
                  <td className="px-4 py-3.5 whitespace-nowrap">
                    {val.id.substring(0, 10) + "..."}
                  </td>
                  <td className="px-4 py-3.5 whitespace-nowrap">
                    {val.firstName}
                  </td>
                  <td className="px-4 py-3.5 whitespace-nowrap">
                    {val.lastName}
                  </td>
                  <td className="px-4 py-3.5 whitespace-nowrap">{val.email}</td>
                  <td className="px-4 py-3.5 whitespace-nowrap">
                    {val.accountNumber}
                  </td>
                  <td className="px-4 py-3.5 whitespace-nowrap tracking-wide">
                    {val.accountBalance.toLocaleString()}
                  </td>
                  <td className="px-4 py-3.5 whitespace-nowrap">{val.phone}</td>
                  <td className="px-4 py-3.5 whitespace-nowrap">
                    {val.kycStatus}
                  </td>
                  <td className="px-4 py-3.5 whitespace-nowrap">{val.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
};

export default GetUsers;
