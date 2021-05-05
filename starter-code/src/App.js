import React from 'react'
import './App.css'
import users from './users.json'
import { v4 as uuidv4 } from 'uuid'
import linkedIn from './linkedin.png'
// import { useSpring, animated } from 'react-spring'

class App extends React.Component {
  state = {
    usersList: users,
    searchQuery: '',
    student: false,
    teacher: false,
    selectInputValue: '...',
  }

  search = (event) => {
    const query = event.target.value
    this.setState((state) => {
      return {
        usersList: users.filter((user) => {
          return (user.firstName + ' ' + user.lastName).includes(query)
        }),
        searchQuery: query,
      }
    })
  }

  filterRole = (event) => {
    const name = event.target.name
    const value =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value
    // reset the filter
    if (value) {
      this.setState({
        [name]: value,
        usersList: users.filter((user) => {
          return user.role === name
        }),
      })
    } else {
      this.setState({
        [name]: value,
        usersList: users,
      })
    }
  }

  selectCampus = (event) => {
    const value = event.target.value
    this.setState(() => {
      return {
        usersList: users.filter((user) => {
          return user.campus === value
        }),
        selectInputValue: value,
      }
    })
  }

  render() {
    const campuses = users.map((user) => user.campus)
    const uniqueCampuses = [...new Set(campuses)]
    // animation setting - use in a functional component as it uses hooks
    // const springProps = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })

    return (
      <div className='ironbook'>
        <h1>Ironbook</h1>
        {/* <animated.div style={springProps}>I will fade in</animated.div> */}
        <input
          value={this.state.searchQuery}
          onChange={this.search}
          className='searchbar'
          type='text'
        />
        <div className='filter'>
          <div className='checkbox'>
            <input
              type='checkbox'
              name='student'
              id='student'
              checked={this.state.student}
              onChange={this.filterRole}
            />
            <label htmlFor='student'>Student</label>
          </div>
          <div className='checkbox'>
            <input
              type='checkbox'
              name='teacher'
              id='teacher'
              checked={this.state.teacher}
              onChange={this.filterRole}
            />
            <label htmlFor='teacher'>Teacher</label>
          </div>
          <div className='dropdown'>
            <label>Campus</label>
            <select
              name='selectInputValue'
              value={this.state.selectInputValue}
              onChange={(event) => this.selectCampus(event)}
            >
              <option value={this.state.selectInputValue}>
                {this.state.selectInputValue}
              </option>
              {uniqueCampuses.map((campus) => {
                return <option value={campus}>{campus}</option>
              })}
            </select>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Campus</th>
              <th>Role</th>
              <th>Links</th>
            </tr>
          </thead>
          <tbody>
            {this.state.usersList.map((user) => {
              return (
                <tr key={uuidv4()}>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.campus}</td>
                  <td>{user.role}</td>
                  <td>
                    {user.linkedin ? (
                      <a href={user.linkedin}>
                        <img src={linkedIn} alt='linkedin' />
                      </a>
                    ) : (
                      ''
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

export default App
