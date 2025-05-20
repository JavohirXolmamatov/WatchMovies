import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const Pagination = ({ page, setPage, totalPages = 100 }) => {
  const getPageNumbers = () => {
    const pages = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1); // first

      if (page > 4) pages.push("...");

      const start = Math.max(2, page - 1);
      const end = Math.min(totalPages - 1, page + 1);

      for (let i = start; i <= end; i++) pages.push(i);

      if (page < totalPages - 3) pages.push("...");

      pages.push(totalPages); // last
    }

    return pages;
  };

  const handleClick = (p) => {
    if (p === "...") return;
    setPage(p);
  };

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between w-full">
        <p className="text-sm text-gray-700">
          Page <span className="font-medium">{page}</span> of{" "}
          <span className="font-medium">{totalPages}</span>
        </p>
        <nav
          className="isolate inline-flex -space-x-px rounded-md shadow-sm"
          aria-label="Pagination"
        >
          <button
            onClick={() => setPage(page > 1 ? page - 1 : 1)}
            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-500 ring-1 ring-gray-300 hover:bg-gray-50"
          >
            <GrFormPrevious className="h-5 w-5" />
          </button>

          {getPageNumbers().map((p, idx) => (
            <button
              key={idx}
              onClick={() => handleClick(p)}
              className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ring-1 ring-gray-300 ${
                p === page
                  ? "z-10 bg-indigo-600 text-white"
                  : p === "..."
                  ? "text-gray-400 cursor-default"
                  : "text-gray-900 hover:bg-gray-50"
              }`}
              disabled={p === "..."}
            >
              {p}
            </button>
          ))}

          <button
            onClick={() => setPage(page < totalPages ? page + 1 : totalPages)}
            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-500 ring-1 ring-gray-300 hover:bg-gray-50"
          >
            <MdNavigateNext className="h-5 w-5" />
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
