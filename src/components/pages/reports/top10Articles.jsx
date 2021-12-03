import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DataTable from '../../molecules/dataTable'
import TableHeader from '../../atoms/tableHeader'
import TableRow from '../../atoms/tableRow'
import BackChevronLink from '../../atoms/backChevronLink'
import { readableDate } from '../../../helpers/readableDate'
import {motion} from 'framer-motion'

const Top10ArticlesPage = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios
        .get(`http://192.168.0.13:8000/reports/top10articles/`)
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.data)
            throw new Error(error.response.data.error.message)
          }
        })
      const data = response.data
      const sortedList = data.sort(function (a, b) {
        return (
          b.numOrdered - a.numOrdered
        )
      })
      setArticles(sortedList)
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
          <BackChevronLink to="/reports" />
          <h1 className="mainTitle">Top 10 Articles</h1>
        </div>
        <DataTable>
        <TableHeader headings={['ID','Name', "Image", "Price", "Category", "Created", "Order Amount"]} />
        {articles.map(product => (
            <TableRow  key={product.id}
              fields={[
                product.id,
                product.name,
                <img src={product.img} height="80px" witdh="80px" alt='Product'/>,
                "$" + product.price,
                product.category.name,
                readableDate(product.createdAt),
                product.numOrdered
              ]}
            />
          ))}
        </DataTable>
      </div>
    </div>
    </motion.div>
  )
}

export default Top10ArticlesPage
