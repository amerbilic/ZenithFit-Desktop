import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SelectInput from '../atoms/selectInput'
import DataTable from '../molecules/dataTable'
import TableHeader from '../atoms/tableHeader'
import TableRow from '../atoms/tableRow'
import ViewDetailsButton from '../atoms/viewDetailsButton'
import BackChevronLink from '../atoms/backChevronLink'
import {readableDate} from '../../helpers/readableDate'

const UserListPage = () => {
  const [users, setUsers] = useState([])

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
      const sortedList = data.sort(function(a, b) { 
        return a.id - b.id  ||  a.name.localeCompare(b.name);
      });
      setUsers(sortedList)
    }

    fetchData()
  },[])


  return (
    <div>
      <div className="u-t-center d-flex flex-column">
      <div className="heading d-flex flex-row align-items-center justify-content-center">
          <BackChevronLink to="/" />
          <h1>User List</h1>
        </div>
        <DataTable>
          <TableHeader headings={['ID',"Email",'Username', "First Name", "Last Name", "Created", "Updated"]} />
          {users.map(user => (
            <TableRow  key={user.id}
              fields={[
                user.id,
                user.email,
                user.username,
                user.firstname,
                user.lastname,
                readableDate(user.createdAt),
                readableDate(user.updatedAt),
              ]}
            />
          ))}
        </DataTable>
      </div>
    </div>
  )
}

export default UserListPage
