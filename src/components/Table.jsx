import Pagination from './Pagination';

const Table = ({
  columns = [],
  data = [],
  keyField = 'id',
  showPagination = false,
  currentPage = 1,
  totalPages = 1,
  onPageChange = () => {},
  className = '',
}) => {
  return (
    <div className={`bg-white rounded-2xl border border-gray-200 overflow-hidden flex flex-col flex-1 min-h-0 ${className}`}>
      <div className="overflow-auto flex-1 min-h-0">
        <table className="w-full">
          <thead className="bg-gray-50 sticky top-0 z-10">
            <tr className="border-b border-gray-200">
              {columns.map((column, index) => (
                <th
                  key={column.key || index}
                  className={`px-6 py-4 text-xs font-bold text-gray-700 uppercase tracking-wider bg-gray-50 ${
                    column.align === 'right' ? 'text-right' : 'text-left'
                  }`}
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="px-6 py-12 text-center text-gray-500">
                  No data available
                </td>
              </tr>
            ) : (
              data.map((row) => (
                <tr key={row[keyField]} className="hover:bg-gray-50/50 transition-colors group">
                  {columns.map((column, index) => {
                    const cellKey = column.key || index;
                    const cellValue = column.accessor ? row[column.accessor] : null;
                    
                    return (
                      <td
                        key={cellKey}
                        className={`px-6 py-4 whitespace-nowrap ${
                          column.align === 'right' ? 'text-right' : ''
                        }`}
                      >
                        {column.render ? column.render(row, cellValue) : (
                          <div className="text-sm text-gray-900">{cellValue}</div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {showPagination && (
        <div className="flex-shrink-0 border-t border-gray-200">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </div>
      )}
    </div>
  );
};

export default Table;

