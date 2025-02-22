import { useState } from "react";

const usePagination = (transaction) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const startIndex = page * rowsPerPage;
  const products = transaction
    ?.slice()
    .reverse()
    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return {
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    startIndex,
    products,
  };
};

export default usePagination;
