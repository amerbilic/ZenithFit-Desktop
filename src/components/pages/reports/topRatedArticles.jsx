import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DataTable from '../../molecules/dataTable'
import TableHeader from '../../atoms/tableHeader'
import TableRow from '../../atoms/tableRow'
import BackChevronLink from '../../atoms/backChevronLink'
import { readableDate } from '../../../helpers/readableDate'

const Top10RatedArticlesPage = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios
        .get(`http://192.168.0.13:8000/reports/topRatedArticles/`)
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.data)
            throw new Error(error.response.data.error.message)
          }
        })
      const data = response.data
      const sortedList = data.sort(function (a, b) {
        return (
          b.averageRating - a.averageRating
        )
      })
      setArticles(sortedList)
    }

    fetchData()
  }, [])

  return (
    <div>
      <div className="u-t-center d-flex flex-column align-items-center justify-content-center">
        <div className="heading d-flex flex-row">
          <BackChevronLink to="/reports" />
          <h1>Top 10 Rated Articles</h1>
        </div>
        <DataTable>
        <TableHeader headings={['ID','Name', "Image", "Price", "Category", "Created", "Rating"]} />
        {articles.filter((item,index) => index < 10).map(product => (
            <TableRow  key={product.id}
              fields={[
                product.id,
                product.name,
                <img src={product.img} height="80px" witdh="80px" alt='Product'/>,
                "$" + product.price,
                product.category.name,
                readableDate(product.createdAt),
                product.averageRating
              ]}
            />
          ))}
        </DataTable>
      </div>
    </div>
  )
}

export default Top10RatedArticlesPage
