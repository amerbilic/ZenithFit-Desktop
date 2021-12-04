import React, { Fragment, useState } from 'react'
import axios from 'axios'
import {motion} from 'framer-motion'

const UserAddPage = () => {
  const [emailInput, SetEmailInput] = useState('')
  const [passwordInput, SetPasswordInput] = useState('')
  const [usernameInput, SetUsernameInput] = useState('')
  const [firstNameInput, setFirstName] = useState('')
  const [lastNameInput, setLastName] = useState('')

  const emailHandler = event => {
    SetEmailInput(event.target.value)
  }

  const passwordHandler = event => {
    SetPasswordInput(event.target.value)
  }

  const usernameHandler = event => {
    SetUsernameInput(event.target.value)
  }
  const firstNameHandler = event => {
    setFirstName(event.target.value)
  }
  const lastNameHandler = event => {
    setLastName(event.target.value)
  }

  const createUser = async frmData => {
    await axios
      .post(`http://192.168.0.13:8000/auth/signup`, frmData)
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data)
          throw new Error(error.response.data.error.message)
        }
      })
    alert('User succesfully created')
  }

  const submitHandler = async event => {
    event.preventDefault()

    createUser({
      email: emailInput,
      password: passwordInput,
      username: usernameInput,
      firstname: firstNameInput,
      lastname: lastNameInput
    })

    SetEmailInput('')
    SetUsernameInput('')
    SetPasswordInput('')
    setFirstName('')
    setLastName('')
  }

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
  >
    <Fragment>
      <div className="mainDiv d-flex flex-column align-items-center justify-content-center">
        <div className="u-t-center">
          <div className="heading">
            <h1 className="mainTitle">Create New User</h1>
          </div>
        </div>
        <form onSubmit={submitHandler} className="d-flex flex-column align-items-center justify-content-center">
          <div className="mb-3 w-100">
            <label htmlFor="Email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="Email"
              placeholder="example@mail.com"
              value={emailInput}
              onChange={emailHandler}
            />
          </div>
          <div className="mb-3 w-100">
            <label htmlFor="Username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="Username"
              placeholder="andrew_933"
              value={usernameInput}
              onChange={usernameHandler}
            />
          </div>
          <div className="mb-3 w-100">
            <label htmlFor="FirstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="FirstName"
              placeholder="Andrew"
              value={firstNameInput}
              onChange={firstNameHandler}
            />
          </div>
          <div className="mb-3 w-100">
            <label htmlFor="LastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="LastName"
              placeholder="Garfield"
              value={lastNameInput}
              onChange={lastNameHandler}
            />
          </div>
          <div className="mb-3 w-100">
            <label htmlFor="Password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="Password"
              placeholder="*******"
              value={passwordInput}
              onChange={passwordHandler}
            />
          </div>
          <button type="submit" className="LoginButton btn btn-dark w-100">
            Submit
          </button>
        </form>
      </div>
    </Fragment>
    </motion.div>
  )
}

export default UserAddPage
