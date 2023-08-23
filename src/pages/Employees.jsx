import React from 'react'
import { Header } from '../components';
import { GridComponent,Search,ColumnsDirective, ColumnDirective, ContextMenu, Page, Inject ,Toolbar } from '@syncfusion/ej2-react-grids';

import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
import { employeesData,employeesGrid } from '../data/dummy';

const Employees = () => {
  const editing = { allowDeleting: true, allowEditing: true };
  return (
    <div className='bg-white m-2 md:m-10 p-2 md:p-10 rounded-lg'>
      <Header title='Employees'/>

      <GridComponent
        id="gridcomp"
        dataSource={employeesData}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        contextMenuItems={contextMenuItems}
        editSettings={editing}
        toolbar={['Search']}
        width='auto'
       
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Page,Search,Toolbar]} />
      </GridComponent>
    </div>
  )
}

export default   Employees