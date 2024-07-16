
import React, { useState } from 'react';

const Pagination = ({ totalPages }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };

  return (
    <div className="flex items-center space-x-2 ">
      <button
        onClick={handlePrev}
        className="px-3 py-1 border rounded text-gray-500 hover:text-purple-600"
        disabled={currentPage === 1}
      >
        Prev
      </button>
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => handleClick(index + 1)}
          className={`px-3 py-1 border rounded ${currentPage === index + 1 ? 'bg-purple-600 text-white' : 'text-purple-600 hover:bg-purple-200'}`}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={handleNext}
        className="px-3 py-1 border rounded text-gray-500 hover:text-purple-600"
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
