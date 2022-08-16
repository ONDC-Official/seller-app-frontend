import * as React from 'react'
import Navbar from '../../Shared/Navbar'
import OrderTable from '../Order/OrderTable'
import {OrderData} from "../../../Constants/OrdersData"

const columns = [
  { id: 'Oredr_id', label: 'Oredr Id', minWidth: 170 },
  { id: 'Date', label: 'Date', minWidth: 110 },
  {
    id: 'Status',
    label: 'Status',
    format: (value) => value.toLocaleString('en-US'),
    minWidth: 140
  },
  {
    id: 'Provider_Name',
    label: 'Provider Name',
    format: (value) => value.toLocaleString('en-US'),
    minWidth: 150
  },
  {
    id: 'Items_Ordered',
    label: 'Items Ordered',
    format: (value) => value.toLocaleString('en-US'),
    minWidth: 100
  },
  {
    id: 'Payment_Type',
    label: 'Payment Type',
    format: (value) => value.toLocaleString('en-US'),
    minWidth: 130
  },
  {
    id: 'Total_Amount',
    label: 'Total Amount',
    minWidth: 130
  },
  {
    id: 'Delivering_To',
    label: 'Delivering To',
    format: (value) => value.toLocaleString('en-US'),
    minWidth: 200
  }
];

export default function Orders() {
  return(
    <>
      <Navbar/>
      <div className='container container mx-auto px-4 lg:px-[5rem] my-4'>
        <div className='mb-4 flex flex-row justify-between items-center'>
          <label className='font-semibold text-2xl'>Orders</label>
        </div>
        <OrderTable columns={columns} data={OrderData}/>
      </div>
    </>
  )
}