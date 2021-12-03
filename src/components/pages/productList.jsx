import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import DataTable from '../molecules/dataTable'
import TableHeader from '../atoms/tableHeader'
import TableRow from '../atoms/tableRow'
import BackChevronLink from '../atoms/backChevronLink'
import { readableDate } from '../../helpers/readableDate'
import {motion} from 'framer-motion'

const ProductListPage = () => {
  const [products, setProducts] = useState([])
  const [searchName, setSearchName] = useState('')
  const [searchCategory, setSearchCategory] = useState('')
  const [nameSearched, setNameSearched] = useState(false)
  const [categorySearched, setCategorySearched] = useState(false)
  const [filteredArray, setFilteredArray] = useState([])

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
      const sortedList = data.sort(function (a, b) {
        return a.id - b.id || a.name.localeCompare(b.name)
      })
      setProducts(sortedList)
      setFilteredArray(sortedList)
    }

    fetchData()
  }, [])

  const nameHandler = event => {
    setSearchName(event.target.value)
    setNameSearched(true)
    let list = categorySearched ? filteredArray : products
    const searchWord = event.target.value.toLowerCase()
    const newFilter = list.filter(value => {
      return value.name.toLowerCase().includes(searchWord)
    })
    setFilteredArray(newFilter)
  }

  const categoryHandler = event => {
    setSearchCategory(event.target.value)
    setCategorySearched(true)
    let list = nameSearched ? filteredArray : products
    const searchWord = event.target.value.toLowerCase()
    const newFilter = list.filter(value => {
      return value.category.name.toLowerCase().includes(searchWord)
    })
    setFilteredArray(newFilter)
  }

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
  >
    <div>
      <div className="mainDiv u-t-center d-flex flex-column align-items-center justify-content-center">
        <div className="heading d-flex flex-row ">
          <BackChevronLink to="/products" />
          <h1 className="mainTitle">Products</h1>
          <input
            type="text"
            className="mx-3"
            value={searchName}
            onChange={nameHandler}
            placeholder="Name..."
          />
          <input
            type="text"
            className="mx-3"
            value={searchCategory}
            onChange={categoryHandler}
            placeholder="Category..."
          />
        </div>
        <DataTable>
          <TableHeader
            headings={[
              'ID',
              'Name',
              'Description',
              'Image',
              'Price',
              'Category',
              'Created',
              'Action'
            ]}
          />
          {filteredArray.map(product => (
            <TableRow
              key={product.id}
              fields={[
                product.id,
                product.name,
                product.desc,
                <img
                  src={product.img}
                  height="80px"
                  witdh="80px"
                  alt="Product"
                />,
                '$' + product.price,
                product.category.name,
                readableDate(product.createdAt),
                <Link
                  to={`/productEdit?id=${product.id}`}
                  className="btn btn-primary btn-dark"
                >
                  {' '}
                  Edit{' '}
                </Link>
              ]}
            />
          ))}
        </DataTable>
      </div>
    </div>
    </motion.div>
  )
}

export default ProductListPage
