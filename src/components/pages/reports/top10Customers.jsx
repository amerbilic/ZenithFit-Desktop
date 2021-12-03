import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DataTable from '../../molecules/dataTable'
import TableHeader from '../../atoms/tableHeader'
import TableRow from '../../atoms/tableRow'
import { readableDate } from '../../../helpers/readableDate'
import {motion} from 'framer-motion'

const Top10CustomersPage = () => {
  const [customers, setCustomers] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios
        .get(`http://192.168.0.13:8000/reports/top10users/`)
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.data)
            throw new Error(error.response.data.error.message)
          }
        })
      const data = response.data
      const sortedList = data.sort(function (a, b) {
        return (
          b._count.order_details - a._count.order_details
        )
      })
      setCustomers(sortedList)
    }

    fetchData()
  }, [])

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
  >
    <div>
      <div className="u-t-center d-flex flex-column align-items-center justify-content-center">
        <div className="heading d-flex flex-row">
          <h1 className="mainTitle">Top 10 Customers</h1>
        </div>
        <DataTable>
          <TableHeader
            headings={[
              'ID',
              'Firstname',
              'Lastname',
              'Username',
              'Email',
              'CreatedAt',
              'Number of Orders'
            ]}
          />
          {customers.map(customer => (
            <TableRow
              key={customer.id}
              fields={[
                customer.id,
                customer.firstname,
                customer.lastname,
                customer.username,
                customer.email,
                readableDate(customer.createdAt),
                customer._count.order_details
              ]}
            />
          ))}
        </DataTable>
      </div>
    </div>
    </motion.div>
  )
}

export default Top10CustomersPage
