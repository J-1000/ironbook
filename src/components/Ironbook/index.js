import React, { Component } from 'react'
import users from "./users"
import './tailwind.css'
import { v4 as uuidv4 } from "uuid";
import User from './User'

export default class index extends Component {
    state = {
        users: users,
        isTeacher: true,
        isStudent: true,
        campus: '',
        query: ''
    }
    setQuery = queryParam => {
        this.setState({
            query: queryParam
        })
    }

    handleQueryChange = event => {
        this.setQuery(event.target.value)
    }

    handleInputChange = event => {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name
        // set state according to the target name
        this.setState({
            [name]: value
        })
    }

    campuses = [...new Set(users.map((user) => user.campus))].map(
        (campus) => {
            return (
                <option key={uuidv4()} value={campus}>
                    {campus}
                </option>
            );
        }
    )

    render() {
        return (
            <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
                <div className="py-8">
                    <div className="flex flex-row mb-1 sm:mb-0 justify-between w-full p-1">
                        <h2 className="text-2xl leading-tight">
                            Ironbook
                            </h2>
                        <div className="text-end">
                            <form className="flex w-full max-w-sm space-x-3">
                                <div className="relative">
                                    <input type="text"
                                        name="query"
                                        value={this.state.query}
                                        onChange={this.handleQueryChange}
                                        className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Search by name" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="flex flex-row mb-1 sm:mb-0 justify-between w-full p-1">
                        <div className="text-sm leading-tight flex items-center gap-8">
                            <label className="inline-flex items-center">
                                <input type="checkbox" name="isTeacher" className="h-5 w-5 text-red-600"
                                    checked={this.state.isTeacher}
                                    onChange={this.handleInputChange} />
                                <span className="ml-2 text-gray-700">
                                    Teacher
                                </span>
                            </label>
                            <label className="inline-flex items-center">
                                <input type="checkbox" name="isStudent" className="h-5 w-5 text-red-600"
                                    checked={this.state.isStudent}
                                    onChange={this.handleInputChange} />
                                <span className="ml-2 text-gray-700">
                                    Student
                                </span>
                            </label>
                        </div>
                        <div className="text-end">
                            <div className="relative inline-block text-left">
                                <div>
                                    <select
                                        name="campus"
                                        value={this.state.campus}
                                        onChange={this.handleInputChange}
                                        className="border border-gray-300 bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500" id="options-menu">
                                        <option value="" className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">All Countries</option>
                                        {this.campuses}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                            First Name
                                            </th>
                                        <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                            Last Name
                                            </th>
                                        <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                            Campus
                                            </th>
                                        <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                            Role
                                            </th>
                                        <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                            Links
                                            </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <User users={this.state.users}
                                        query={this.state.query}
                                        isTeacher={this.state.isTeacher}
                                        isStudent={this.state.isStudent}
                                        campus={this.state.campus} />
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
