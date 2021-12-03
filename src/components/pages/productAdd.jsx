import React from 'react'
import BackChevronLink from '../atoms/backChevronLink'

const ProductAddPage = () => {
  return (
    <div>
      <div className="u-t-center d-flex flex-column align-items-center justify-content-center">
        <div className="heading d-flex flex-row ">
          <BackChevronLink to="/products" />
          <h1>Create New Article</h1>
        </div>
      </div>
      <form className="d-flex flex-column align-items-center justify-content-center">
        <div class="mb-3 w-50">
          <label for="Name" class="form-label">
            Name
          </label>
          <input
            type="name"
            class="form-control"
            id="Name"
            placeholder="Power Red"
          />
        </div>
        <div class="mb-3 w-50">
          <label for="Description" class="form-label">
            Description
          </label>
          <textarea class="form-control" id="Description" rows="2"></textarea>
        </div>
        <div class="mb-3 w-50">
          <label for="Price" class="form-label">
            Price
          </label>
          <input
            type="number"
            class="form-control"
            id="Price"
            placeholder="300"
          />
        </div>
        <div class="mb-3 w-50">
          <label for="Quantity" class="form-label">
            Quantity
          </label>
          <input
            type="number"
            class="form-control"
            id="Quantity"
            placeholder="2500"
          />
        </div>
        <button type="submit" class="btn btn-primary" onSubmit={() => {}}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default ProductAddPage
