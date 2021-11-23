import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SelectInput from '../atoms/selectInput'
import DataTable from '../molecules/dataTable'
import TableHeader from '../atoms/tableHeader'
import TableRow from '../atoms/tableRow'
import ViewDetailsButton from '../atoms/viewDetailsButton'
import BackChevronLink from '../atoms/backChevronLink'

const ProductListPage = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios
        .get(`http://192.168.0.13:8000/articles/`)
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.data)
            throw new Error(error.response.data.error.message)
          }
        })
      const data = response.data
      setProducts(data)
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
          <TableHeader headings={['ID','Name', "Description", "Image", "Price", "Category", "Created"]} />
          {products.map(product => (
            <TableRow  key={product.id}
              fields={[
                product.id,
                product.name,
                product.desc,
                <img src={product.img} height="80px" witdh="80px" alt='Product'/>,
                "$" + product.price,
                product.category.name,
                product.createdAt,
              ]}
            />
          ))}
        </DataTable>
      </div>
    </div>
  )
}

export default ProductListPage
