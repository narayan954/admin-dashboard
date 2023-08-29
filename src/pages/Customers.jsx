import React from 'react'
import { GridComponent,ColumnsDirective,ColumnDirective,Page,Selection,Edit,Sort,Filter,Inject,Toolbar } from '@syncfusion/ej2-react-grids'
import { customersData,customersGrid } from '../data/dummy'
import { Header } from '../components'

const Customers = () => {

  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ['Delete'];
  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-gray-100 dark:bg-slate-800 rounded-3xl" >
      <Header category="Page" title="Customers" />
      <GridComponent dataSource={customersData } allowPaging
        pageSettings={{ pageCount: 5 }}
        selectionSettings={selectionsettings}
        toolbar={toolbarOptions}
        editSettings={editing}
        allowSorting >
        <ColumnsDirective>
          {customersGrid.map((item,index)=>{
            return (<ColumnDirective key={index} {...item} />)
          })}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Selection,Edit,Sort,Filter]}  />
      </GridComponent>
    </div>
  )
}

export default Customers