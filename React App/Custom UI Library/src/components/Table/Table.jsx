import { useMemo } from "react";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
// import "./Table.css";

ModuleRegistry.registerModules([AllCommunityModule]);

const Table = ({
  columns = [],
  rowData = [],
  //   pagination = true,
  theme = "ag-theme-alpine",
  height = 200,
  className = "",
  ...props
}) => {
  const defaultColDef = useMemo(
    () => ({
      // sortable: true,
      // filter: true,
      // resizable: true,
      flex: 1,
    }),
    []
  );

  return (
    <div className={`${theme} ${className}`} style={{ height, width: "100%" }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columns}
        defaultColDef={defaultColDef}
        // pagination={pagination}
        {...props}
      />
    </div>
  );
};
export default Table;
