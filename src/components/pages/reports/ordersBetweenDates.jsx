import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DataTable from '../../molecules/dataTable'
import TableHeader from '../../atoms/tableHeader'
import TableRow from '../../atoms/tableRow'
import ViewDetailsButton from '../../atoms/viewDetailsButton'
import BackChevronLink from '../../atoms/backChevronLink'
import { readableDate } from '../../../helpers/readableDate'
import DatePicker from 'react-date-picker'
import {motion} from 'framer-motion'

const OrdersBetweenDatesPage = () => {
  const [orders, setOrders] = useState([])
  const [dateFrom, setDateFrom] = useState(new Date())
  const [dateTo, setDateTo] = useState(new Date())
  const [filteredList, setFilteredList] = useState([])

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
      const sortedList = data.sort(function (a, b) {
        return a.id - b.id || a.name.localeCompare(b.name)
      })
      setOrders(sortedList)
      setFilteredList(sortedList);
    }

    fetchData()
  }, [])

  const filterDataHandler = () => {
   
    const newFilter = orders.filter(value => {
      return new Date(value.createdAt) >= dateFrom && new Date(value.createdAt) <= dateTo
    })
    setFilteredList(newFilter)
  }

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
  >
    <div>
      <div className="u-t-center d-flex flex-column justify-content-center align-items-center">
        <div className="heading d-flex flex-row justify-content-center">
          <BackChevronLink to="/home" />
          <h1 className="mainTitle me-3">Orders List</h1>
          <div className="datePicker">
            <DatePicker
              onChange={setDateFrom}
              value={dateFrom}
              className="me-5 bg bg-light"
            />
            <DatePicker
              onChange={setDateTo}
              value={dateTo}
              className="bg-light"
            />
            <button className="LoginButton btn btn-success w-30 mx-5" onClick={filterDataHandler}>
              Filter
            </button>
          </div>
        </div>
        <DataTable>
          <TableHeader
            headings={[
              'ID',
              'Total',
              'Username',
              'First Name',
              'Last Name',
              'Created'
            ]}
          />
          {filteredList.map(order => (
            <TableRow
              key={order.id}
              fields={[
                order.id,
                '$' + order.total,
                order.user.username,
                order.user.firstname,
                order.user.lastname,
                readableDate(order.createdAt),
                <ViewDetailsButton
                  pathname="/orderDetails"
                  id={order.id}
                  orderItems={order.order_items}
                />
              ]}
            />
          ))}
        </DataTable>
      </div>
    </div>
    </motion.div>
  )
}

export default OrdersBetweenDatesPage
