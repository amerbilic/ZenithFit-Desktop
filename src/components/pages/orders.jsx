import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SelectInput from '../atoms/selectInput'
import DataTable from '../molecules/dataTable'
import TableHeader from '../atoms/tableHeader'
import TableRow from '../atoms/tableRow'
import ViewDetailsButton from '../atoms/viewDetailsButton'
import BackChevronLink from '../atoms/backChevronLink'

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
      setOrders(data)
    }

    fetchData()
  },[])

  return (
    <div>
      <div className="u-t-center d-flex flex-column">
        <div className="heading d-flex flex-row">
          <BackChevronLink to="/" />
          <h1>Orders List</h1>
        </div>
        <DataTable>
          <TableHeader headings={['ID', 'Total', 'Username', "First Name", "Last Name", 'Created']} />
          {orders.map(order => (
            <TableRow  key={order.id}
              fields={[
                order.id,
                "$" + order.total,
                order.user.username,
                order.user.firstname,
                order.user.lastname,
                order.createdAt,
                <ViewDetailsButton pathname="/orderDetails" id={order.id} orderItems={order.order_items}/>
              ]}
            />
          ))}
        </DataTable>
      </div>
    </div>
  )
}

export default OrdersPage
