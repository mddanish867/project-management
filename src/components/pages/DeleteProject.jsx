import React, { useState } from 'react';
import { ArrowLeft, Trash2, AlertTriangle } from 'lucide-react';

export default function DeleteProject() {
  const [projects, setProjects] = useState([
    { id: 1, name: 'Project Alpha' },
    { id: 2, name: 'Project Beta' },
    { id: 3, name: 'Project Gamma' },
  ]);

  const [selectedProject, setSelectedProject] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleProjectSelect = (e) => {
    setSelectedProject(Number(e.target.value));
    setConfirmDelete(false);
  };

  const handleDeleteConfirm = async () => {
    if (selectedProject !== null) {
      setIsLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setProjects(projects.filter((project) => project.id !== selectedProject));
      setSelectedProject(null);
      setConfirmDelete(false);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white flex flex-col">
      {/* Header with Back Button */}
      <div className="p-6">
        <a href="/projects" className="inline-flex items-center text-sm text-gray-400 hover:text-emerald-400 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </a>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="text-center mb-8">
            <span className="text-2xl font-thin tracking-wider">
              <a href="/">
                ScaffoldX<span className="text-emerald-400 text-3xl">.</span>
              </a>
            </span>
          </div>

          {/* Delete Project Container */}
          <div className="bg-black/30 border border-gray-800 p-8 backdrop-blur-lg">
            <h2 className="text-2xl font-thin tracking-wider text-center mb-8">
              Delete Project
            </h2>

            <div className="space-y-6">
              {/* Project Select */}
              <div className="space-y-2">
                <label className="block text-sm tracking-wider text-gray-400">
                  SELECT PROJECT
                </label>
                <div className="relative">
                  <Trash2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <select
                    value={selectedProject || ''}
                    onChange={handleProjectSelect}
                    className="w-full bg-black/30 border border-gray-800 py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:border-emerald-400 focus:ring-0 focus:outline-none transition-colors rounded-lg appearance-none"
                  >
                    <option value="">Select a project</option>
                    {projects.map((project) => (
                      <option key={project.id} value={project.id}>
                        {project.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Delete Confirmation */}
              {selectedProject && (
                <div className="space-y-4">
                  {!confirmDelete ? (
                    <button
                      onClick={() => setConfirmDelete(true)}
                      className="w-full bg-red-500 text-white py-3 text-sm tracking-wider hover:bg-red-600 transition-colors duration-300"
                    >
                      DELETE PROJECT
                    </button>
                  ) : (
                    <div className="space-y-4">
                      {/* Warning Message */}
                      <div className="flex items-center p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                        <AlertTriangle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                        <p className="text-sm text-gray-300">
                          Are you sure you want to delete this project? This action cannot be undone.
                        </p>
                      </div>

                      {/* Confirmation Buttons */}
                      <div className="flex gap-4">
                        <button
                          onClick={handleDeleteConfirm}
                          disabled={isLoading}
                          className="flex-1 bg-red-500 text-white py-3 text-sm tracking-wider hover:bg-red-600 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isLoading ? 'DELETING...' : 'CONFIRM DELETE'}
                        </button>
                        <button
                          onClick={() => setConfirmDelete(false)}
                          disabled={isLoading}
                          className="flex-1 bg-gray-800 text-white py-3 text-sm tracking-wider hover:bg-gray-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          CANCEL
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}