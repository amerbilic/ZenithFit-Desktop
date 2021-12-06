import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'

const ProductEditPage = () => {
  const [nameInput, setNameInput] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [categories, setCategories] = useState([])
  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  const productId = urlParams.get('id')

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios
        .get(`http://192.168.0.13:8000/articles/article/${productId}`)
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.data)
            throw new Error(error.response.data.error.message)
          }
        })
      const data = response.data
      setNameInput(data.name)
      setDescription(data.desc)
      setPrice(data.price)
    }

    const fetchCategories = async () => {
      const res = await axios
        .get('http://192.168.0.13:8000/category')
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.data)
            throw new Error(error.response.data.error.message)
          }
        })

      const data = res.data
      setCategories(data)
    }

    fetchCategories()
    fetchData()
  }, [])

  const nameHandler = event => {
    setNameInput(event.target.value)
  }

  const descriptionHandler = event => {
    setDescription(event.target.value)
  }

  const priceHandler = event => {
    setPrice(event.target.value)
  }

  const selectCategoryHandler = e => {
    setCategory(e.target.value)
  }

  const updateArticle = async frmData => {
    await axios
      .put(`http://192.168.0.13:8000/articles/${productId}`, frmData)
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data)
          throw new Error(error.response.data.error.message)
        }
      })
    alert('Article succesfully updated')
  }

  const submitHandler = async event => {
    event.preventDefault()

    updateArticle({
      name: nameInput,
      desc: description,
      category_id: parseInt(category),
      price: price
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="mainDiv d-flex flex-column align-items-center justify-content-center">
        <div className="u-t-center">
          <div className="heading">
            <h1 className="mainTitle">{nameInput}</h1>
          </div>
        </div>
        <form
          onSubmit={submitHandler}
          className="d-flex flex-column align-items-center justify-content-center"
        >
          <div className="mb-3 w-100">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={nameInput}
              onChange={nameHandler}
            />
          </div>
          <div className="mb-3 w-100">
            <label htmlFor="Description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="Description"
              placeholder="andrew_933"
              value={description}
              onChange={descriptionHandler}
            />
          </div>
          <div className="mb-3 w-100">
            <label htmlFor="Price" className="form-label">
              Price
            </label>
            <input
              type="text"
              className="form-control"
              id="FirstName"
              placeholder="Andrew"
              value={price}
              onChange={priceHandler}
            />
          </div>
          <div className="mb-3 w-100">
            <label htmlFor="Category" className="form-label">
              Category
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={selectCategoryHandler}
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn btn-primary btn-dark w-100">
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  )
}

export default ProductEditPage
