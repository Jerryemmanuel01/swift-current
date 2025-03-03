import { ChevronLeft } from "lucide-react";
import HeaderName from "../../../components/Dashboard/HeaderName";
import { TablePagination } from "@mui/material";
import { PiSpinner } from "react-icons/pi";
import Modal from "../../../components/General/Modal";
import useApproveKyc from "../../../hooks/adminHooks/useApproveKyc";

const ApproveKYC = () => {
  const {
    handleChangePage,
    handleChangeRowsPerPage,
    handleRowClick,
    navigate,
    page,
    pendingKyc,
    products,
    rowsPerPage,
    startIndex,
    showModal,
    isLoading,
    isError,
    setShowModal,
    userKyc,
    showKycPhoto,
    setShowKycPhoto,
    handleAction,
    isKycLoading,
  } = useApproveKyc();
  return (
    <section className="w-full px-6 -mt-6 py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 mt-2">
          <button
            name="action"
            onClick={() => navigate(-1)}
            className="outline-hidden flex items-center gap-1.5 text-sm md:text-base"
          >
            <ChevronLeft className="w-5 md:w-6" />
          </button>
          <HeaderName title={"KYC Review"} />
        </div>

        {/* <div className="flex items-center">
          <select
            onChange={(e) => handleFilter(e)}
            name="fiter"
            id="filter"
            className="text-[10px] md:text-xs font-merriweather outline-none p-2 rounded-md"
          >
            <option value="">All</option>
            <option value="deposit">Deposit</option>
            <option value="transfer">Transfer</option>
            <option value="swift fee">Swift Fee</option>
            <option value="account upgrade">Upgrade</option>
            <option value="crypto swift fee">Blockchain Fee</option>
          </select>
        </div> */}
      </div>

      <div className="overflow-x-auto">
        {isLoading ? (
          <h2 className="font-merriweather flex items-center gap-2 mt-5 justify-center text-sm">
            Getting KYC
            <PiSpinner className="animate-spin text-sm" />
          </h2>
        ) : isError ? (
          <h2 className="font-merriweather flex items-center gap-2 mt-5 justify-center text-sm">
            Error getting KYC, please try again.
          </h2>
        ) : (
          <>
            <table className="w-full bg-[#f8f8f8] font-inter mt-4">
              <thead>
                <tr className="bg-primary/10 text-sm ">
                  <th className=" px-4 py-4 text-left whitespace-nowrap">#</th>
                  <th className=" px-4 py-4 text-left whitespace-nowrap">ID</th>
                  <th className=" px-4 py-4 text-left whitespace-nowrap">
                    First Name
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
                    Country
                  </th>
                  <th className=" px-4 py-4 text-left whitespace-nowrap">
                    Phone Number
                  </th>
                  <th className=" px-4 py-4 text-left whitespace-nowrap">
                    KYC Status
                  </th>
                  <th className=" px-4 py-4 text-left whitespace-nowrap">
                    Tier
                  </th>
                </tr>
              </thead>
              <tbody>
                {pendingKyc.length
                  ? products?.map((val, i) => {
                      return (
                        <tr
                          className="even:bg-primary/5 text-xs cursor-pointer"
                          key={i}
                          onClick={() => handleRowClick(val._id)}
                        >
                          <td className="px-4 py-5 whitespace-nowrap">
                            {startIndex + i + 1}
                          </td>
                          <td className="px-4 py-5 whitespace-nowrap">
                            {val._id.substring(0, 10) + "..."}
                          </td>
                          <td className="px-4 py-5 whitespace-nowrap">
                            {val?.firstName}
                          </td>
                          <td className="px-4 py-5 whitespace-nowrap">
                            {val?.lastName}
                          </td>
                          <td className="px-4 py-5 whitespace-nowrap">
                            {val?.email}
                          </td>
                          <td className="px-4 py-5 whitespace-nowrap">
                            {val?.accountNumber}
                          </td>
                          <td className="px-4 py-5 whitespace-nowrap capitalize">
                            {val?.country}
                          </td>
                          <td className="px-4 py-5 whitespace-nowrap capitalize">
                            {val?.phone}
                          </td>
                          <td className="px-4 py-5 whitespace-nowrap capitalize">
                            {val?.kycStatus}
                          </td>
                          <td className="px-4 py-5 whitespace-nowrap capitalize">
                            {val?.accountLevel}
                          </td>
                        </tr>
                      );
                    })
                  : ""}
              </tbody>
            </table>
            {pendingKyc.length !== 0  ? (
              <TablePagination
                component="div"
                count={pendingKyc.length}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                rowsPerPageOptions={[10, 20, 25, 50, 100]} // Options for rows per page
              />
            ):<p className="text-center py-4">No pending KYC available </p>}
            <Modal
              isOpen={showModal}
              onClose={() => setShowModal(false)}
              title="KYC Details"
            >
              {userKyc && (
                <>
                  <div className="">
                    <div
                      className={`px-4 py-1 rounded-md flex items-center justify-center text-primary bg-white font-medium font-inter absolute -translate-x-[50%] -translate-y-[50%] left-1/2 -top-16 shadow-custom duration-300 ${
                        isKycLoading ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <p className=" flex items-center gap-2">
                        Loading... <PiSpinner className="animate-spin" />
                      </p>
                    </div>
                    <img
                      onClick={() => setShowKycPhoto(true)}
                      alt="id card"
                      src={userKyc?.kycDocument.identityCardPhoto}
                      className="w-full h-[220px] object-center object-contain rounded-lg cursor-pointer"
                    />
                    <div className="mt-4 text-sm text-gray font-inter">
                      <div className="flex items-center gap-2">
                        <h2 className=" font-medium">Identity Number:</h2>
                        <span className="text-[13px] tracking-wide">
                          {userKyc?.kycDocument.identityNumber}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <h2 className=" font-medium">Issuing Country:</h2>
                        <span className="text-[13px] tracking-wide">
                          {userKyc?.kycDocument.issuingCountry}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <h2 className=" font-medium">Identity Medium:</h2>
                        <span className="text-[13px] tracking-wide">
                          {userKyc?.kycDocument.identityMedium}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between gap-2 text-sm">
                      <button
                        name="action"
                        className="py-2 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700 duration-300"
                        onClick={() => handleAction("Failed")}
                      >
                        Decline
                      </button>
                      <button
                        name="action"
                        className="py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 duration-300"
                        onClick={() => handleAction("Complete")}
                      >
                        Approve
                      </button>
                    </div>
                  </div>
                  <Modal
                    isOpen={showKycPhoto}
                    onClose={() => setShowKycPhoto(false)}
                    title="ID Card"
                  >
                    <div className="w-full h-full">
                      <img
                        alt="id card"
                        src={userKyc?.kycDocument.identityCardPhoto}
                        className="w-full h-[500px] object-center object-scale-down rounded-lg"
                      />
                    </div>
                  </Modal>
                </>
              )}
            </Modal>
          </>
        )}
      </div>
    </section>
  );
};

export default ApproveKYC;
