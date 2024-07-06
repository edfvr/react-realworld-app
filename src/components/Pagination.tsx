interface PaginationProps {
    currentPage: number; // Current active page number
    totalPages: number; // Total number of pages
    onPageChange: (page: number) => void; // Callback function to handle page changes
  }
  
  /**
   * Pagination component
   */
  export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps): JSX.Element {
    
    // Make an array of page numbers based on totalPages
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  
    return (
      <nav>
        <ul className="pagination">
          {/* Map through each page number and render a list item */}
          {pageNumbers.map(number => (
            <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
              <a onClick={() => onPageChange(number)} href="#" className="page-link">
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }