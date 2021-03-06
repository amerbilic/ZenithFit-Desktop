import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DataTable from '../molecules/dataTable'
import TableHeader from '../atoms/tableHeader'
import TableRow from '../atoms/tableRow'
import ViewDetailsButton from '../atoms/viewDetailsButton'
import {readableDate} from '../../helpers/readableDate'
import {motion} from 'framer-motion'

const OrdersPage = () => {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios
        .get(`http://192.168.0.13:8000/orders/`)
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.data)
            throw new Error(error.response.data.error.message)
          }
        })
      const data = response.data
      const sortedList = data.sort(function(a, b) { 
        return a.id - b.id  ||  a.name.localeCompare(b.name);
      });
      setOrders(sortedList)
    }

    fetchData()
  },[])

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
  >
    <div>
      <div className="mainDiv u-t-center d-flex flex-column align-items-center justify-content-center">
        <div className="heading d-flex flex-row align-items-center justify-content-center">
          <h1 className="mainTitle">Orders List</h1>
        </div>
        <DataTable>
          <TableHeader headings={['ID', 'Total', 'Username', "First Name", "Last Name", 'Created', "Action"]} />
          {orders.map(order => (
            <TableRow  key={order.id}
              fields={[
                order.id,
                "$" + order.total,
                order.user.username,
                order.user.firstname,
                order.user.lastname,
                readableDate(order.createdAt),
                <ViewDetailsButton pathname="/orderDetails" id={order.id} orderItems={order.order_items}/>
              ]}
            />
          ))}
        </DataTable>
      </div>
    </div>
    </motion.div>
  )
}

export default OrdersPage
