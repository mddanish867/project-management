import React, { useState } from 'react';
import { ArrowLeft, Bug, FileText, AlertCircle, CheckCircle, Circle } from 'lucide-react';

export default function BugTracking() {
  const [bugs, setBugs] = useState([
    { id: 1, title: 'Login not working', description: 'Users unable to log in', status: 'Open' },
    { id: 2, title: 'Slow loading times', description: 'Pages take too long to load', status: 'In Progress' },
  ]);

  const [newBug, setNewBug] = useState({ title: '', description: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setNewBug({ ...newBug, [e.target.name]: e.target.value });
  };

  const handleAddBug = async (e) => {
    e.preventDefault();
    if (newBug.title && newBug.description) {
      setIsLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setBugs([...bugs, { id: bugs.length + 1, ...newBug, status: 'Open' }]);
      setNewBug({ title: '', description: '' });
      setIsLoading(false);
    }
  };

  const handleStatusChange = (id, newStatus) => {
    setBugs(bugs.map((bug) => (bug.id === id ? { ...bug, status: newStatus } : bug)));
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Open':
        return <AlertCircle className="w-4 h-4" />;
      case 'In Progress':
        return <Circle className="w-4 h-4" />;
      case 'Resolved':
        return <CheckCircle className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Open':
        return 'text-red-400 bg-red-400/10';
      case 'In Progress':
        return 'text-yellow-400 bg-yellow-400/10';
      case 'Resolved':
        return 'text-emerald-400 bg-emerald-400/10';
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white flex flex-col">
      {/* Header with Back Button */}
      <div className="p-6">
        <a href="/dashboard" className="inline-flex items-center text-sm text-gray-400 hover:text-emerald-400 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </a>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-3xl">
          {/* Logo */}
          <div className="text-center mb-8">
            <span className="text-2xl font-thin tracking-wider">
              <a href="/">
                ScaffoldX<span className="text-emerald-400 text-3xl">.</span>
              </a>
            </span>
          </div>

          {/* Bug Tracking Container */}
          <div className="bg-black/30 border border-gray-800 p-8 backdrop-blur-lg">
            <h2 className="text-2xl font-thin tracking-wider text-center mb-8">
              Bug Tracking
            </h2>

            {/* Bug List */}
            <div className="space-y-4 mb-8">
              {bugs.map((bug) => (
                <div key={bug.id} className="border border-gray-800 bg-black/20 p-4 rounded-lg">
                  <h3 className="font-medium text-lg">{bug.title}</h3>
                  <p className="text-sm text-gray-400 mt-1">{bug.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(bug.status)}`}>
                      {getStatusIcon(bug.status)}
                      <span className="ml-2">{bug.status}</span>
                    </span>
                    <select
                      value={bug.status}
                      onChange={(e) => handleStatusChange(bug.id, e.target.value)}
                      className="bg-black/30 border border-gray-800 text-sm rounded-lg px-3 py-1.5 text-white focus:border-emerald-400 focus:ring-0 focus:outline-none"
                    >
                      <option value="Open">Open</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Resolved">Resolved</option>
                    </select>
                  </div>
                </div>
              ))}
            </div>

            {/* Add Bug Form */}
            <form onSubmit={handleAddBug} className="space-y-6">
              {/* Bug Title Input */}
              <div className="space-y-2">
                <label className="block text-sm tracking-wider text-gray-400">
                  BUG TITLE
                </label>
                <div className="relative">
                  <Bug className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    name="title"
                    required
                    className="w-full bg-black/30 border border-gray-800 py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:border-emerald-400 focus:ring-0 focus:outline-none transition-colors"
                    placeholder="Enter bug title"
                    value={newBug.title}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Bug Description Input */}
              <div className="space-y-2">
                <label className="block text-sm tracking-wider text-gray-400">
                  DESCRIPTION
                </label>
                <div className="relative">
                  <FileText className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                  <textarea
                    name="description"
                    rows={3}
                    required
                    className="w-full bg-black/30 border border-gray-800 py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:border-emerald-400 focus:ring-0 focus:outline-none transition-colors"
                    placeholder="Enter bug description"
                    value={newBug.description}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-emerald-400 text-black py-3 text-sm tracking-wider hover:bg-emerald-300 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'ADDING BUG...' : 'ADD BUG'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}