import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DataTable from '../molecules/dataTable'
import TableHeader from '../atoms/tableHeader'
import TableRow from '../atoms/tableRow'
import BackChevronLink from '../atoms/backChevronLink'
import { readableDate } from '../../helpers/readableDate'
const UserListPage = () => {
  const [users, setUsers] = useState([])
  const [searchEmail, setSearchEmail] = useState('')
  const [searchUsername, setSearchUsername] = useState('')
  const [emailSearched, setEmailSearched] = useState(false);
  const [usernameSearched, setUsernameSearched] = useState(false);
  const [filteredArray, setFilteredArray] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios
        .get(`http://192.168.0.13:8000/users/`)
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
      setUsers(sortedList)
      setFilteredArray(sortedList)
    }

    fetchData()
  }, [])

  const emailHandler = event => {
    setSearchEmail(event.target.value)
    setEmailSearched(true);
    let list = usernameSearched ? filteredArray : users;
    const searchWord = event.target.value.toLowerCase()
    const newFilter = list.filter(value => {
      return value.email.toLowerCase().includes(searchWord)
    })
    setFilteredArray(newFilter)
  }

  const usernameHandler = event => {
    setSearchUsername(event.target.value);
    setUsernameSearched(true);
    let list = emailSearched ? filteredArray : users;
    const searchWord = event.target.value.toLowerCase()
    const newFilter = list.filter(value => {
      return value.username.toLowerCase().includes(searchWord)
    })
    setFilteredArray(newFilter)
  }

  return (
    <div>
      <div className="mainDiv u-t-center d-flex flex-column align-items-center justify-content-center">
        <div className="heading d-flex flex-row align-items-center justify-content-center">
          <BackChevronLink to="/users" />
          <h1>User List</h1>
          <input
            type="text"
            className="mx-3"
            value={searchEmail}
            onChange={emailHandler}
            placeholder="Email..."
          />
          <input
            type="text"
            className="mx-3"
            value={searchUsername}
            onChange={usernameHandler}
            placeholder="Username..."
          />
        </div>
        <DataTable>
          <TableHeader
            headings={[
              'ID',
              'Email',
              'Username',
              'First Name',
              'Last Name',
              'Created',
              'Updated'
            ]}
          />
          {filteredArray.map(user => (
            <TableRow
              key={user.id}
              fields={[
                user.id,
                user.email,
                user.username,
                user.firstname,
                user.lastname,
                readableDate(user.createdAt),
                readableDate(user.updatedAt)
              ]}
            />
          ))}
        </DataTable>
      </div>
    </div>
  )
}

export default UserListPage
