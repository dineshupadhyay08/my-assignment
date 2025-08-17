// import React, { useState } from "react";
// import PropTypes from "prop-types";

// const DataTable = ({ data, columns, loading, selectable, onRowSelect }) => {
//   const [selectedRows, setSelectedRows] = useState([]);
//   const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

//   const handleSelectRow = (row) => {
//     let updatedSelection;
//     if (selectedRows.includes(row)) {
//       updatedSelection = selectedRows.filter((r) => r !== row);
//     } else {
//       updatedSelection = [...selectedRows, row];
//     }
//     setSelectedRows(updatedSelection);
//     onRowSelect?.(updatedSelection);
//   };

//   const handleSort = (col) => {
//     let direction = "asc";
//     if (sortConfig.key === col.key && sortConfig.direction === "asc") {
//       direction = "desc";
//     }
//     setSortConfig({ key: col.key, direction });
//   };

//   const sortedData = React.useMemo(() => {
//     if (!sortConfig.key) return data;
//     return [...data].sort((a, b) => {
//       if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === "asc" ? -1 : 1;
//       if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === "asc" ? 1 : -1;
//       return 0;
//     });
//   }, [data, sortConfig]);

//   if (loading) {
//     return <p className="p-4 text-center">Loading...</p>;
//   }

//   if (!data || data.length === 0) {
//     return <p className="p-4 text-center">No data found</p>;
//   }

//   return (
//     <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
//       <thead className="bg-gray-100">
//         <tr>
//           {selectable && <th className="px-4 py-2">Select</th>}
//           {columns.map((col) => (
//             <th
//               key={col.key}
//               className="px-4 py-2 text-left cursor-pointer"
//               onClick={() => col.sortable && handleSort(col)}
//             >
//               {col.title}
//               {col.sortable &&
//                 (sortConfig.key === col.key ? (
//                   sortConfig.direction === "asc" ? " 🔼" : " 🔽"
//                 ) : " ↕")}
//             </th>
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//         {sortedData.map((row, i) => (
//           <tr key={i} className="border-t">
//             {selectable && (
//               <td className="px-4 py-2">
//                 <input
//                   type="checkbox"
//                   checked={selectedRows.includes(row)}
//                   onChange={() => handleSelectRow(row)}
//                 />
//               </td>
//             )}
//             {columns.map((col) => (
//               <td key={col.key} className="px-4 py-2">
//                 {row[col.dataIndex]}
//               </td>
//             ))}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// DataTable.propTypes = {
//   data: PropTypes.array.isRequired,
//   columns: PropTypes.arrayOf(
//     PropTypes.shape({
//       key: PropTypes.string.isRequired,
//       title: PropTypes.string.isRequired,
//       dataIndex: PropTypes.string.isRequired,
//       sortable: PropTypes.bool,
//     })
//   ).isRequired,
//   loading: PropTypes.bool,
//   selectable: PropTypes.bool,
//   onRowSelect: PropTypes.func,
// };

// export default DataTable;



import React, { useState } from "react";
import PropTypes from "prop-types";

const DataTable = ({ data, columns, loading, selectable, onRowSelect }) => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

  const handleSelectRow = (row) => {
    let updatedSelection;
    if (selectedRows.includes(row)) {
      updatedSelection = selectedRows.filter((r) => r !== row);
    } else {
      updatedSelection = [...selectedRows, row];
    }
    setSelectedRows(updatedSelection);
    onRowSelect?.(updatedSelection);
  };

  const handleSort = (col) => {
    let direction = "asc";
    if (sortConfig.key === col.key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key: col.key, direction });
  };

  const sortedData = React.useMemo(() => {
    if (!sortConfig.key) return data;
    return [...data].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key])
        return sortConfig.direction === "asc" ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key])
        return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [data, sortConfig]);

  if (loading) {
    return (
      <p className="p-6 text-center text-gray-500 font-medium text-lg">
        Loading...
      </p>
    );
  }

  if (!data || data.length === 0) {
    return (
      <p className="p-6 text-center text-gray-400 italic text-lg">
        No data found
      </p>
    );
  }

  return (
    <div className="overflow-x-auto shadow-lg rounded-lg">
      <table className="min-w-full divide-y divide-gray-200 bg-white rounded-lg">
        <thead className="bg-gray-50">
          <tr>
            {selectable && <th className="px-4 py-3">Select</th>}
            {columns.map((col) => (
              <th
                key={col.key}
                className="px-4 py-3 text-left text-gray-700 font-semibold text-sm uppercase tracking-wider cursor-pointer select-none"
                onClick={() => col.sortable && handleSort(col)}
              >
                <div className="flex items-center space-x-1">
                  <span>{col.title}</span>
                  {col.sortable && (
                    <span>
                      {sortConfig.key === col.key
                        ? sortConfig.direction === "asc"
                          ? " 🔼"
                          : " 🔽"
                        : " ↕"}
                    </span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {sortedData.map((row, i) => (
            <tr
              key={i}
              className={`${
                i % 2 === 0 ? "bg-gray-50" : "bg-white"
              } hover:bg-gray-100 transition-colors`}
            >
              {selectable && (
                <td className="px-4 py-2">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    checked={selectedRows.includes(row)}
                    onChange={() => handleSelectRow(row)}
                  />
                </td>
              )}
              {columns.map((col) => (
                <td
                  key={col.key}
                  className="px-4 py-2 text-gray-700 text-sm font-medium"
                >
                  {row[col.dataIndex]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

DataTable.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      dataIndex: PropTypes.string.isRequired,
      sortable: PropTypes.bool,
    })
  ).isRequired,
  loading: PropTypes.bool,
  selectable: PropTypes.bool,
  onRowSelect: PropTypes.func,
};

export default DataTable;
