import React, { useState } from 'react';
import { ArrowLeft, Calendar, FileText, FolderPlus } from 'lucide-react';

const AddProject = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    startDate: '',
    endDate: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('New project data:', formData);
    setIsLoading(false);
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

          {/* Project Form Container */}
          <div className="bg-black/30 border border-gray-800 p-8 backdrop-blur-lg">
            <h2 className="text-2xl font-thin tracking-wider text-center mb-8">
              Add New Project
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Project Name Input */}
              <div className="space-y-2">
                <label className="block text-sm tracking-wider text-gray-400">
                  PROJECT NAME
                </label>
                <div className="relative">
                  <FolderPlus className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    name="name"
                    className="w-full bg-black/30 border border-gray-800 py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:border-emerald-400 focus:ring-0 focus:outline-none transition-colors"
                    placeholder="Enter project name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Description Input */}
              <div className="space-y-2">
                <label className="block text-sm tracking-wider text-gray-400">
                  DESCRIPTION
                </label>
                <div className="relative">
                  <FileText className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                  <textarea
                    name="description"
                    rows={3}
                    className="w-full bg-black/30 border border-gray-800 py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:border-emerald-400 focus:ring-0 focus:outline-none transition-colors"
                    placeholder="Enter project description"
                    value={formData.description}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>

              {/* Start Date Input */}
              <div className="space-y-2">
                <label className="block text-sm tracking-wider text-gray-400">
                  START DATE
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="date"
                    name="startDate"
                    className="w-full bg-black/30 border border-gray-800 py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:border-emerald-400 focus:ring-0 focus:outline-none transition-colors"
                    value={formData.startDate}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* End Date Input */}
              <div className="space-y-2">
                <label className="block text-sm tracking-wider text-gray-400">
                  END DATE
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="date"
                    name="endDate"
                    className="w-full bg-black/30 border border-gray-800 py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:border-emerald-400 focus:ring-0 focus:outline-none transition-colors"
                    value={formData.endDate}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-emerald-400 text-black py-3 text-sm tracking-wider hover:bg-emerald-300 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'CREATING PROJECT...' : 'CREATE PROJECT'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProject;