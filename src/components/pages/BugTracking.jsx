import { useState } from 'react'


export default function BugTracking() {
  const [bugs, setBugs] = useState([
    { id: 1, title: 'Login not working', description: 'Users unable to log in', status: 'Open' },
    { id: 2, title: 'Slow loading times', description: 'Pages take too long to load', status: 'In Progress' },
  ])

  const [newBug, setNewBug] = useState({ title: '', description: '' })

  const handleInputChange = (e) => {
    setNewBug({ ...newBug, [e.target.name]: e.target.value })
  }

  const handleAddBug = (e) => {
    e.preventDefault()
    if (newBug.title && newBug.description) {
      setBugs([...bugs, { id: bugs.length + 1, ...newBug, status: 'Open' }])
      setNewBug({ title: '', description: '' })
    }
  }

  const handleStatusChange = (id, newStatus) => {
    setBugs(bugs.map((bug) => (bug.id === id ? { ...bug, status: newStatus } : bug)))
  }

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Bug Tracking</h2>
        <ul className="space-y-4 mb-6">
          {bugs.map((bug) => (
            <li key={bug.id} className="border p-4 rounded-md">
              <h3 className="font-semibold">{bug.title}</h3>
              <p className="text-sm text-gray-600">{bug.description}</p>
              <div className="mt-2 flex items-center justify-between">
                <span
                  className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    bug.status === 'Open'
                      ? 'bg-red-100 text-red-800'
                      : bug.status === 'In Progress'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-green-100 text-green-800'
                  }`}
                >
                  {bug.status}
                </span>
                <select
                  value={bug.status}
                  onChange={(e) => handleStatusChange(bug.id, e.target.value )}
                  className="text-sm border-gray-300 rounded-md"
                >
                  <option value="Open">Open</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Resolved">Resolved</option>
                </select>
              </div>
            </li>
          ))}
        </ul>
        <form onSubmit={handleAddBug} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Bug Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              onChange={handleInputChange}
              value={newBug.title}
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Bug Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={3}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              onChange={handleInputChange}
              value={newBug.description}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Bug
          </button>
        </form>
      </div>
    </div>
  )
}