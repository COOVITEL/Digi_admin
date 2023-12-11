import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css'; // Core CSS
import 'ag-grid-community/styles/ag-theme-quartz.css'; // Theme
import { useEffect, useMemo, useState } from 'react';
import { TunrsDates } from '@/pages/api/dates';

// Create new GridExample component
export const GridExample = () => {
  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState([]);

  // Column Definitions: Defines & controls grid columns.
  const [colDefs, setColDefs] = useState([
    { field: 'city'},
    { field: 'c_number' },
    { field: 'phone' },
    { field: 'name' },
    { field: 'state' },
    { field: 'type2' },
    { field: 'type' },
    { field: 'observation' },
    { field: 'arrival_time' },
    { field: 'await_time' },
    { field: 'atention_time' },
    { field: 'date' },
    { field: 'adviser' },
    { field: 'score_time' },
    { field: 'score_service' },
    { field: 'score_att' },
    { field: 'score_recommen' },
    { field: 'sms_send' },
  ]);

  useEffect(() => {
    console.log("test")
    setRowData(TunrsDates)
    console.log(rowData)
  }, [])

  const defaultColDef = useMemo(() => ({filter: true}))

  // Container: Defines the grid's theme & dimensions.
  return (
    <div className={"ag-theme-quartz"} style={{ width: '100%', height: '100%' }}>
      <AgGridReact rowData={rowData} columnDefs={colDefs} defaultColDef={defaultColDef} pagination={true}/>
    </div>
  );
};