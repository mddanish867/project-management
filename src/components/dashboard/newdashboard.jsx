import React, { useState, useEffect, useRef } from 'react';
import {
  BarChart2, Calendar, Users, Settings, Bug,
  Search, Bell, ChevronDown, Layout, Book,
  List, Clock, AlertCircle, CheckCircle, GitBranch,
  Filter, Plus, Grid, MoreHorizontal, Trash2,
  ArrowUp, ArrowDown, Edit, GitPullRequest,
  PlayCircle, PauseCircle, XCircle, BookOpen,
  GitCommit, Workflow, ArrowRight
} from 'lucide-react';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const sidebarRef = useRef(null);

  // Handle clicks outside sidebar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target) &&
        !event.target.closest('button[aria-label="Toggle sidebar"]')) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Sample data states
  const [bugs, setBugs] = useState([
    {
      id: 1,
      title: "Login Authentication Failed",
      severity: "High",
      status: "Open",
      assignee: "Sarah M.",
      created: "2024-11-01",
      description: "Users unable to login with correct credentials"
    }
  ]);

  const [userStories, setUserStories] = useState([
    {
      id: 1,
      title: "User Profile Management",
      priority: "Medium",
      status: "In Progress",
      points: 8,
      assignee: "John D.",
      sprint: "Sprint 24"
    }
  ]);

  const [pipelines, setPipelines] = useState([
    {
      id: 1,
      name: "Main Deploy Pipeline",
      status: "Running",
      lastRun: "2024-11-03 14:30",
      stages: ["Build", "Test", "Deploy"],
      branch: "main"
    }
  ]);

  const [repositories, setRepositories] = useState([
    {
      id: 1,
      name: "frontend-app",
      lastCommit: "feat: Add user authentication",
      branch: "main",
      status: "Passing"
    }
  ]);

  // CRUD Operations
  const handleCreate = (type, data) => {
    switch (type) {
      case 'bug':
        setBugs([...bugs, { id: bugs.length + 1, ...data }]);
        break;
      case 'story':
        setUserStories([...userStories, { id: userStories.length + 1, ...data }]);
        break;
      // Add other cases
    }
    setModalOpen(false);
  };

  const handleDelete = (type, id) => {
    switch (type) {
      case 'bug':
        setBugs(bugs.filter(bug => bug.id !== id));
        break;
      case 'story':
        setUserStories(userStories.filter(story => story.id !== id));
        break;
      // Add other cases
    }
  };

  // Modal Component
  const Modal = ({ type, onClose, onSubmit }) => {
    const [formData, setFormData] = useState({});

    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 w-full max-w-md">
          <h2 className="text-xl font-light mb-4">
            Create New {type.charAt(0).toUpperCase() + type.slice(1)}
          </h2>
          <form onSubmit={(e) => {
            e.preventDefault();
            onSubmit(type, formData);
          }}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">Title</label>
                <input
                  type="text"
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 focus:outline-none focus:border-emerald-400"
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-sm text-gray-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-emerald-400 text-black text-sm rounded"
                >
                  Create
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  };

  // Sidebar Component
  const Sidebar = ({ isOpen }) => (
    <div
      ref={sidebarRef}
      className={`fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out lg:block w-64 bg-black/80 backdrop-blur-lg border-r border-gray-800 z-30`}
    >
      <div className="p-6">
        
        <nav className="space-y-2">
          {[
            { name: 'Overview', icon: Layout, id: 'overview' },
            { name: 'Bugs', icon: Bug, id: 'bugs' },
            { name: 'User Stories', icon: BookOpen, id: 'stories' },
            { name: 'Repositories', icon: GitBranch, id: 'repos' },
            { name: 'Pipelines', icon: Workflow, id: 'pipelines' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveSection(item.id);
                setSidebarOpen(false);
              }}
              className={`flex items-center space-x-3 w-full px-4 py-2 rounded-md transition-colors ${activeSection === item.id ? 'bg-emerald-400/20 text-emerald-400' : 'text-gray-400 hover:text-white'
                }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white">
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 border-b border-gray-800 bg-black/80 backdrop-blur-lg z-20">
  <div className="px-4 sm:px-6">
    <div className="flex justify-between h-16 items-center">
      <div className="flex items-center">
        <button
          aria-label="Toggle sidebar"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="lg:hidden p-2 rounded-md text-gray-400 hover:text-white mr-4"
        >
          <List className="w-6 h-6" />
        </button>
        <span className="text-2xl font-thin tracking-wider">
          <a href="/">
            ScaffoldX<span className="text-emerald-400 text-3xl">.</span>
          </a>
        </span>
      </div>
      
      {/* Mobile Search Toggle */}
      <div className="sm:hidden">
        <button 
          onClick={() => {
            // Implement mobile search modal/overlay logic
            // You might want to add a state to control mobile search visibility
          }}
          className="text-gray-400 hover:text-white"
        >
          <Search className="w-5 h-5" />
        </button>
      </div>
      
      {/* Desktop Search */}
      <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-96 bg-gray-900/50 border border-gray-800 rounded-md pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-emerald-400/50"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        {/* Notifications */}
        <button className="relative">
          <Bell className="w-5 h-5 text-gray-400 hover:text-emerald-400 transition-colors" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-400 rounded-full" />
        </button>
        
        {/* User Profile */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-emerald-400/20 flex items-center justify-center">
            <span className="text-sm text-emerald-400">AK</span>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-400 sm:block hidden" />
        </div>
      </div>
    </div>
    
    {/* Mobile Search Overlay (Optional - you can implement this if needed) */}
    {/* {isMobileSearchOpen && (
      <div className="sm:hidden absolute top-full left-0 right-0 bg-black/90 p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-gray-900/50 border border-gray-800 rounded-md pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-emerald-400/50"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
    )} */}
  </div>
</nav>

      <div className="flex h-screen pt-16">
        <Sidebar isOpen={sidebarOpen} />

        <main className="flex-1 overflow-auto p-6">
          {/* Content Header */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-thin tracking-wider mb-2">
                {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
              </h1>
              <p className="text-sm text-gray-400">Manage your project resources</p>
            </div>
            <button
              onClick={() => {
                setModalType(activeSection);
                setModalOpen(true);
              }}
              className="px-4 py-2 bg-emerald-400 text-black text-sm tracking-wider hover:bg-emerald-300 transition-colors duration-300 flex items-center rounded"
            >
              <Plus className="w-4 h-4 mr-2" />
              New {activeSection.slice(0, -1)}
            </button>
          </div>

          {/* Dynamic Content based on activeSection */}
          {activeSection === 'bugs' && (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {bugs.map(bug => (
                <div key={bug.id} className="bg-black/30 border border-gray-800 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-medium">{bug.title}</h3>
                    <div className="flex space-x-2">
                      <button onClick={() => handleDelete('bug', bug.id)}>
                        <Trash2 className="w-4 h-4 text-gray-400 hover:text-red-400" />
                      </button>
                      <button>
                        <Edit className="w-4 h-4 text-gray-400 hover:text-emerald-400" />
                      </button>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-gray-400">
                      <span>Severity:</span>
                      <span className="text-orange-400">{bug.severity}</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Status:</span>
                      <span>{bug.status}</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Assignee:</span>
                      <span>{bug.assignee}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeSection === 'stories' && (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {userStories.map(story => (
                <div key={story.id} className="bg-black/30 border border-gray-800 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-medium">{story.title}</h3>
                    <div className="flex space-x-2">
                      <button onClick={() => handleDelete('story', story.id)}>
                        <Trash2 className="w-4 h-4 text-gray-400 hover:text-red-400" />
                      </button>
                      <button>
                        <Edit className="w-4 h-4 text-gray-400 hover:text-emerald-400" />
                      </button>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-gray-400">
                      <span>Points:</span>
                      <span>{story.points}</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Status:</span>
                      <span>{story.status}</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Sprint:</span>
                      <span>{story.sprint}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeSection === 'repos' && (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {repositories.map(repo => (
                <div key={repo.id} className="bg-black/30 border border-gray-800 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-medium">{repo.name}</h3>
                    <div className="flex space-x-2">
                      <GitBranch className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="text-gray-400 truncate">
                      {repo.lastCommit}
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Branch:</span>
                      <span>{repo.branch}</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Status:</span>
                      <span className="text-emerald-400">{repo.status}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeSection === 'pipelines' && (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {pipelines.map(pipeline => (
                <div key={pipeline.id} className="bg-black/30 border border-gray-800 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-medium">{pipeline.name}</h3>
                    <div className="flex space-x-2">
                      <button>
                        {pipeline.status === 'Running' ? (
                          <PauseCircle className="w-4 h-4 text-gray-400 hover:text-yellow-400" />
                        ) : (
                          <PlayCircle className="w-4 h-4 text-gray-400 hover:text-emerald-400" />
                        )}
                      </button>
                      <button>
                        <XCircle className="w-4 h-4 text-gray-400 hover:text-red-400" />
                      </button>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-gray-400">
                      <span>Status:</span>
                      <span className={pipeline.status === 'Running' ? 'text-emerald-400' : 'text-gray-400'}>
                        {pipeline.status}
                      </span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Last Run:</span>
                      <span>{pipeline.lastRun}</span>
                    </div>
                    <div className="mt-4">
                      <div className="flex space-x-2">
                        {pipeline.stages.map((stage, index) => (
                          <div key={stage} className="flex items-center">
                            <div className="w-20">
                              <div className="text-xs text-gray-400 mb-1">{stage}</div>
                              <div className="h-1 bg-emerald-400/20 rounded-full">
                                <div className="h-full bg-emerald-400 rounded-full" style={{ width: '70%' }} />
                              </div>
                            </div>
                            {index < pipeline.stages.length - 1 && (
                              <ArrowRight className="w-4 h-4 text-gray-600 mx-1" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeSection === 'overview' && (
            <div className="space-y-6">
              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: 'Active Bugs', value: bugs.length, icon: Bug, color: 'text-red-400' },
                  { label: 'User Stories', value: userStories.length, icon: BookOpen, color: 'text-blue-400' },
                  { label: 'Repositories', value: repositories.length, icon: GitBranch, color: 'text-purple-400' },
                  { label: 'Active Pipelines', value: pipelines.length, icon: Workflow, color: 'text-emerald-400' }
                ].map((stat, index) => (
                  <div key={index} className="bg-black/30 border border-gray-800 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-400">{stat.label}</span>
                      <stat.icon className={`w-5 h-5 ${stat.color}`} />
                    </div>
                    <div className="text-2xl font-light">{stat.value}</div>
                  </div>
                ))}
              </div>

              {/* Recent Activity */}
              <div className="bg-black/30 border border-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-light mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  {[
                    { action: 'Created new bug', item: 'Login Authentication Issue', time: '5m ago', icon: Bug },
                    { action: 'Updated pipeline', item: 'Main Deploy Pipeline', time: '15m ago', icon: Workflow },
                    { action: 'Merged pull request', item: 'Feature/user-auth', time: '1h ago', icon: GitPullRequest }
                  ].map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <activity.icon className="w-5 h-5 text-gray-400 mt-1" />
                      <div className="flex-1">
                        <div className="text-sm">{activity.action}</div>
                        <div className="text-sm text-gray-400">{activity.item}</div>
                      </div>
                      <div className="text-xs text-gray-400">{activity.time}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Timeline */}
              <div className="bg-black/30 border border-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-light mb-4">Project Timeline</h3>
                <div className="relative">
                  <div className="absolute top-0 bottom-0 left-2 w-px bg-gray-800" />
                  <div className="space-y-6">
                    {[
                      { title: 'Sprint Planning', date: 'Mon, Nov 6', status: 'Upcoming' },
                      { title: 'Release v1.2.0', date: 'Wed, Nov 8', status: 'In Progress' },
                      { title: 'Team Review', date: 'Fri, Nov 10', status: 'Scheduled' }
                    ].map((event, index) => (
                      <div key={index} className="flex items-start ml-6">
                        <div className="absolute left-0 w-4 h-4 bg-gray-800 rounded-full border-4 border-black" />
                        <div className="flex-1 ml-4">
                          <div className="font-medium">{event.title}</div>
                          <div className="text-sm text-gray-400">{event.date}</div>
                          <div className="text-xs text-emerald-400 mt-1">{event.status}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Create/Edit Modal */}
      {modalOpen && (
        <Modal
          type={modalType}
          onClose={() => setModalOpen(false)}
          onSubmit={handleCreate}
        />
      )}
    </div>
  );
};

export default Dashboard;