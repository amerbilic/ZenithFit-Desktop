import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom';
import DataTable from '../molecules/dataTable'
import TableHeader from '../atoms/tableHeader'
import TableRow from '../atoms/tableRow'
import BackChevronLink from '../atoms/backChevronLink'
import {readableDate} from '../../helpers/readableDate'

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
      const data = response.data;
      const sortedList = data.sort(function(a, b) { 
        return a.id - b.id  ||  a.name.localeCompare(b.name);
      });
      setProducts(sortedList)
    }

    fetchData()
  },[])

  return (
    <div>
      <div className="u-t-center d-flex flex-column">
        <div className="heading d-flex flex-row">
          <BackChevronLink to="/" />
          <h1>Products</h1>
        </div>
        <DataTable>
          <TableHeader headings={['ID','Name', "Description", "Image", "Price", "Category", "Created", "Action"]} />
          {products.map(product => (
            <TableRow  key={product.id}
              fields={[
                product.id,
                product.name,
                product.desc,
                <img src={product.img} height="80px" witdh="80px" alt='Product'/>,
                "$" + product.price,
                product.category.name,
                readableDate(product.createdAt),
                <Link to={`/productEdit?id=${product.id}`} className="btn btn-primary" > Edit </Link>
              ]}
            />
          ))}
        </DataTable>
      </div>
    </div>
  )
}

export default ProductListPage
