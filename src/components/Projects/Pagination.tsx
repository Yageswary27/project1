import React from "react";

interface PaginationProps {
  currentPage: number; // currentPage is a number
  totalPages: number; // totalPages is a number
  onPageChange: (page: number) => void; // onPageChange is a function
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePreviousClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1); // Move to previous page
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1); // Move to next page
    }
  };

  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={handlePreviousClick}
        disabled={currentPage === 1} // Disable previous button if on first page
        className="px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-l disabled:bg-gray-400"
      >
        Previous
      </button>

      <span className="px-4 py-2 text-sm font-semibold text-gray-700">
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={handleNextClick}
        disabled={currentPage === totalPages} // Disable next button if on last page
        className="px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-r disabled:bg-gray-400"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
