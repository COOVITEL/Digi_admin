import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css'; // Core CSS
import 'ag-grid-community/styles/ag-theme-quartz.css'; // Theme
import { useEffect, useMemo, useState } from 'react';
import { TunrsDates } from '@/pages/api/dates';
import { getAllTurns } from '@/pages/api/turns';

export const GridExample = () => {
  const [rowData, setRowData] = useState(TunrsDates);

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
    async function loadTurns() {
      const res = await getAllTurns()
      setRowData(res.data)
    }
    loadTurns()
  }, [])

  const defaultColDef = useMemo(() => ({filter: true}))

  return (
    <div className='w-full h-full flex items-center justify-center'>
      <div className={"ag-theme-quartz"} style={{ width: '95%', height: '80%' }}>
        <h4 className='text-white p-5 text-center'>
          Puedes encontrar todos los turnos tomados por nuestros asociados, puedes filtrarlos por numero de cedula, sucursal, telefono entro otros.
        </h4>
        <AgGridReact rowData={rowData} columnDefs={colDefs} defaultColDef={defaultColDef} pagination={true}/>
      </div>
    </div>
  );
};