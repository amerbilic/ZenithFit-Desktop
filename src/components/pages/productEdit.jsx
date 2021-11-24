import React, { useState, useEffect } from 'react'
import BackChevronLink from '../atoms/backChevronLink'
import axios from 'axios'

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
      setCategory(data.category)
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

    const enteredName = nameInput
    const enteredDesc = description
    const enteredCategory = category.id
    const enteredPrice = price

    updateArticle({
      name: enteredName,
      desc: enteredDesc,
      category_id: enteredCategory,
      price: enteredPrice,
    })
  }

  return (
    <div>
      <div className="u-t-center d-flex flex-column">
        <div className="heading d-flex flex-row">
          <BackChevronLink to="/" />
          <h1>{nameInput}</h1>
        </div>
      </div>
      <form onSubmit={submitHandler}>
        <div class="mb-3 w-50">
          <label for="name" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="name"
            value={nameInput}
            onChange={nameHandler}
          />
        </div>
        <div class="mb-3 w-50">
          <label for="Description" class="form-label">
            Description
          </label>
          <input
            type="text"
            class="form-control"
            id="Description"
            placeholder="andrew_933"
            value={description}
            onChange={descriptionHandler}
          />
        </div>
        <div class="mb-3 w-50">
          <label for="Price" class="form-label">
            Price
          </label>
          <input
            type="text"
            class="form-control"
            id="FirstName"
            placeholder="Andrew"
            value={price}
            onChange={priceHandler}
          />
        </div>
        <div class="mb-3 w-50">
          <label for="Category" class="form-label">
            Category
          </label>
          <select class="form-select" aria-label="Default select example" onChange={()=>{setCategory(this.selectedIndex)}}>
            <option value={category.id} selected>{category.name}</option>
            {categories.map(category => (
              <option value={category.id}>{category.name}</option>
            ))}
          </select>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  )
}

export default ProductEditPage
