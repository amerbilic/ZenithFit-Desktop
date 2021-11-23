import React, { useState } from 'react'
import BackChevronLink from '../atoms/backChevronLink'
import axios from 'axios'

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

    const enteredEmail = emailInput
    const enteredPassword = passwordInput
    const enteredUsername = usernameInput
    const enteredFirstName = firstNameInput
    const enteredLastName = lastNameInput
    createUser({
      email: enteredEmail,
      password: enteredPassword,
      username: enteredUsername,
      firstname: enteredFirstName,
      lastname: enteredLastName
    })

    SetEmailInput('');
    SetUsernameInput('');
    SetPasswordInput('');
    setFirstName('');
    setLastName('');
  }

  return (
    <div>
      <div className="u-t-center d-flex flex-column">
        <div className="heading d-flex flex-row">
          <BackChevronLink to="/" />
          <h1>Create New User</h1>
        </div>
      </div>
      <form onSubmit={submitHandler}>
        <div class="mb-3 w-50">
          <label for="Email" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="Email"
            placeholder="example@mail.com"
            value={emailInput}
            onChange={emailHandler}
          />
        </div>
        <div class="mb-3 w-50">
          <label for="Username" class="form-label">
            Username
          </label>
          <input
            type="text"
            class="form-control"
            id="Username"
            placeholder="andrew_933"
            value={usernameInput}
            onChange={usernameHandler}
          />
        </div>
        <div class="mb-3 w-50">
          <label for="FirstName" class="form-label">
            First Name
          </label>
          <input
            type="text"
            class="form-control"
            id="FirstName"
            placeholder="Andrew"
            value={firstNameInput}
            onChange={firstNameHandler}
          />
        </div>
        <div class="mb-3 w-50">
          <label for="LastName" class="form-label">
            Last Name
          </label>
          <input
            type="text"
            class="form-control"
            id="LastName"
            placeholder="Garfield"
            value={lastNameInput}
            onChange={lastNameHandler}
          />
        </div>
        <div class="mb-3 w-50">
          <label for="Password" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="Password"
            placeholder="*******"
            value={passwordInput}
            onChange={passwordHandler}
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  )
}

export default UserAddPage
