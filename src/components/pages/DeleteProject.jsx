import { useState } from 'react'

export default function DeleteProject() {
  const [projects, setProjects] = useState([
    { id: 1, name: 'Project Alpha' },
    { id: 2, name: 'Project Beta' },
    { id: 3, name: 'Project Gamma' },
  ])

  const [selectedProject, setSelectedProject] = useState(null)
  const [confirmDelete, setConfirmDelete] = useState(false)

  const handleProjectSelect = (e) => {
    setSelectedProject(Number(e.target.value))
    setConfirmDelete(false)
  }

  const handleDeleteConfirm = () => {
    if (selectedProject !== null) {
      setProjects(projects.filter((project) => project.id !== selectedProject))
      setSelectedProject(null)
      setConfirmDelete(false)
    }
  }

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Delete Project</h2>
        <div className="space-y-4">
          <div>
            <label htmlFor="project" className="block text-sm font-medium text-gray-700">
              Select Project
            </label>
            <select
              id="project"
              name="project"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              onChange={handleProjectSelect}
              value={selectedProject || ''}
            >
              <option value="">Select a project</option>
              {projects.map((project) => (
                <option key={project.id} value={project.id}>
                  {project.name}
                </option>
              ))}
            </select>
          </div>
          {selectedProject && (
            <div className="space-y-2">
              {!confirmDelete ? (
                <button
                  onClick={() => setConfirmDelete(true)}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Delete Project
                </button>
              ) : (
                <div>
                  <p className="text-sm text-gray-500 mb-2">Are you sure you want to delete this project? This action cannot be undone.</p>
                  <div className="flex space-x-2">
                    <button
                      onClick={handleDeleteConfirm}
                      className="flex-1 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                      Confirm Delete
                    </button>
                    <button
                      onClick={() => setConfirmDelete(false)}
                      className="flex-1 flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}