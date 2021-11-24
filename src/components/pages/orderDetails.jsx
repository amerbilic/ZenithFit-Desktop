import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DataTable from '../molecules/dataTable'
import TableHeader from '../atoms/tableHeader'
import TableRow from '../atoms/tableRow'
import BackChevronLink from '../atoms/backChevronLink'

const OrderDetailsPage = () => {
  const [orders, setOrders] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  const orderId = urlParams.get('id')

  useEffect(() => {
    if (orders !== undefined) {
      setIsLoading(false)
      return
    }
    const fetchData = async () => {
      setIsLoading(true)
      const response = await axios
        .get(`http://192.168.0.13:8000/orders/${orderId}`)
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
  }, [orders])

  return (
    <div>
      <div className="u-t-center d-flex flex-column">
        <div className="heading d-flex flex-row">
          <BackChevronLink to="/" />
          <h1>Orders List</h1>
        </div>
        <DataTable>
          <TableHeader headings={['Name', 'Quantity', 'Price', 'Total']} />
          {!isLoading
            ? orders.order_items.map(order => (
                <TableRow
                  key={order.name}
                  fields={[
                    order.article.name,
                    order.quantity,
                    '$' + order.article.price,
                    '$' + order.quantity * order.article.price
                  ]}
                />
              ))
            : ''}
        </DataTable>
      </div>
    </div>
  )
}

export default OrderDetailsPage
