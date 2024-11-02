
import { useState } from 'react'


export default function Repository() {
  const [repositories, setRepositories] = useState([
    { id: 1, name: 'Frontend Repo', url: 'https://github.com/example/frontend' },
    { id: 2, name: 'Backend Repo', url: 'https://github.com/example/backend' },
  ])

  const [newRepo, setNewRepo] = useState({ name: '', url: '' })

  const handleInputChange = (e) => {
    setNewRepo({ ...newRepo, [e.target.name]: e.target.value })
  }

  const handleAddRepo = (e) => {
    e.preventDefault()
    if (newRepo.name && newRepo.url) {
      setRepositories([...repositories, { id: repositories.length + 1, ...newRepo }])
      setNewRepo({ name: '', url: '' })
    }
  }

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Project Repositories</h2>
        <ul className="space-y-4">
          {repositories.map((repo) => (
            <li key={repo.id} className="flex items-center justify-between">
              <span className="font-semibold">{repo.name}</span>
              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800"
              >
                View Repository
              </a>
            </li>
          ))}
        </ul>
        <form onSubmit={handleAddRepo} className="mt-6 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Repository Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              onChange={handleInputChange}
              value={newRepo.name}
            />
          </div>
          <div>
            <label htmlFor="url" className="block text-sm font-medium text-gray-700">
              Repository URL
            </label>
            <input
              type="url"
              id="url"
              name="url"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              onChange={handleInputChange}
              value={newRepo.url}
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Repository
          </button>
        </form>
      </div>
    </div>
  )
}