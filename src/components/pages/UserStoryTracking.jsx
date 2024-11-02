import { useState } from 'react'


export default function UserStoryTracking() {
  const [userStories, setUserStories] = useState([
    { id: 1, title: 'User Registration', description: 'As a new user, I want to create an account', status: 'To Do', points: 3 },
    { id: 2, title: 'User Login', description: 'As a registered user, I want to log in to my account', status: 'In Progress', points: 2 },
  ])

  const [newStory, setNewStory] = useState({ title: '', description: '', points: 1 })

  const handleInputChange = (e) => {
    setNewStory({ ...newStory, [e.target.name]: e.target.value })
  }

  const handleAddStory = (e) => {
    e.preventDefault()
    if (newStory.title && newStory.description) {
      setUserStories([...userStories, { id: userStories.length + 1, ...newStory, status: 'To Do', points: Number(newStory.points) }])
      setNewStory({ title: '', description: '', points: 1 })
    }
  }

  const handleStatusChange = (id, newStatus) => {
    setUserStories(userStories.map((story) => (story.id === id ? { ...story, status: newStatus } : story)))
  }

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center">User Story Tracking</h2>
        <ul className="space-y-4 mb-6">
          {userStories.map((story) => (
            <li key={story.id} className="border p-4 rounded-md">
              <h3 className="font-semibold">{story.title}</h3>
              <p className="text-sm text-gray-600">{story.description}</p>
              <div className="mt-2 flex items-center justify-between">
                <span
                  className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    story.status === 'To Do'
                      ? 'bg-red-100 text-red-800'
                      : story.status === 'In Progress'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-green-100 text-green-800'
                  }`}
                >
                  {story.status}
                </span>
                <span className="text-sm font-medium">{story.points} {story.points === 1 ? 'point' : 'points'}</span>
                <select
                  value={story.status}
                  onChange={(e) => handleStatusChange(story.id, e.target.value)}
                  className="text-sm border-gray-300 rounded-md"
                >
                  <option value="To Do">To Do</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Done">Done</option>
                </select>
              </div>
            </li>
          ))}
        </ul>
        <form onSubmit={handleAddStory} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              User Story Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              onChange={handleInputChange}
              value={newStory.title}
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              User Story Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={3}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              onChange={handleInputChange}
              value={newStory.description}
            ></textarea>
          </div>
          <div>
            <label htmlFor="points" className="block text-sm font-medium text-gray-700">
              Story Points
            </label>
            <select
              id="points"
              name="points"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              onChange={handleInputChange}
              value={newStory.points}
            >
              {[1, 2, 3, 5, 8, 13].map((point) => (
                <option key={point} value={point}>
                  {point}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add User Story
          </button>
        </form>
      </div>
    </div>
  )
}