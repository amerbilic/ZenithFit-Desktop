import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'

const ProductAddPage = () => {
  const [imageSelected, setImageSelected] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [nameInput, setNameInput] = useState('')
  const [descInput, setDescInput] = useState('')
  const [priceInput, setPriceInput] = useState('')
  const [quantityInput, setQuantityInput] = useState('')
  const [categorySelected, setCategorySelected] = useState('')
  const [categories, setCategories] = useState([])

  useEffect(() => {
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
  }, [])

  const uploadImage = () => {
    const formData = new FormData()
    formData.append('file', imageSelected)
    formData.append('upload_preset', 'yjsazsql')

    axios
      .post('https://api.cloudinary.com/v1_1/dgyfyqeak/image/upload', formData)
      .then(response => {
        setImageUrl(response.data.url)
      })
  }

  const nameChangeHandler = event => {
    setNameInput(event.target.value)
  }

  const descChangeHandler = event => {
    setDescInput(event.target.value)
  }

  const priceChangeHandler = event => {
    setPriceInput(event.target.value)
  }

  const quantityChangeHandler = event => {
    setQuantityInput(event.target.value)
  }

  const selectCategoryHandler = e => {
    setCategorySelected(e.target.value)
    console.log(categorySelected)
  }

  const submitHandler = event => {
    event.preventDefault()
    uploadImage(imageSelected)
    const formData = {
      name: nameInput,
      desc: descInput,
      price: priceInput,
      quantity: parseInt(quantityInput),
      category_id: parseInt(categorySelected),
      img: imageUrl
    }
    console.log(formData)

    const createArticle = async () => {
      await axios
        .post('http://192.168.0.13:8000/articles', formData)
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.data)
            throw new Error(error.response.data.error.message)
          }
        })
    }

    createArticle()
    alert('Article created successfully!')
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
            <h1 className="mainTitle">Create New Article</h1>
          </div>
        </div>
        <form
          onSubmit={submitHandler}
          className="d-flex flex-column align-items-center justify-content-center"
        >
          <div className="mb-3 w-100">
            <label htmlFor="Name" className="form-label">
              Name
            </label>
            <input
              type="name"
              className="form-control"
              value={nameInput}
              onChange={nameChangeHandler}
              id="Name"
              placeholder="Power Red"
            />
          </div>
          <div className="mb-3 w-100">
            <label htmlFor="Description" className="form-label">
              Description
            </label>
            <input
              type="desc"
              className="form-control"
              value={descInput}
              onChange={descChangeHandler}
              id="desc"
              placeholder="Description for article.."
            />
          </div>
          <div className="mb-3 w-100">
            <label htmlFor="Price" className="form-label">
              Price
            </label>
            <input
              type="number"
              className="form-control"
              value={priceInput}
              onChange={priceChangeHandler}
              id="Price"
              placeholder="300"
            />
          </div>
          <div className="mb-3 w-100">
            <label htmlFor="Quantity" className="form-label">
              Quantity
            </label>
            <input
              type="number"
              className="form-control"
              value={quantityInput}
              onChange={quantityChangeHandler}
              id="Quantity"
              placeholder="2500"
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
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </select>
          </div>
          <div className="mb-3 w-100">
            <label htmlFor="Image" className="form-label">
              Image
            </label>
            <input
              type="file"
              className="form-control"
              id="Image"
              onChange={event => {
                setImageSelected(event.target.files[0])
              }}
            />
          </div>
          <button type="submit" className="LoginButton btn btn-dark w-100">
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  )
}

export default ProductAddPage
