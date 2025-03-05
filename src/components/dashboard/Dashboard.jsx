import { useState } from 'react'
import { Menu, X, Plus, Edit, BarChart, Users, GitBranch, Bug, BookOpen, Trash, Settings, LogOut } from 'lucide-react'
import AddProject from '../pages/AddProject'
import ModifyProject from '../pages/ModifyProject'
import ProgressTrack from '../pages/ProgressTrack'
import TeamMembers from '../pages/TeamMembers'
import Repository from '../pages/Repository'
import BugTracking from '../pages/BugTracking'
import UserStoryTracking from '../pages/UserStoryTracking'
import DeleteProject from '../pages/DeleteProject'
import AccountSettings from '../user/AccountSettings'

const menuItems = [
  { name: 'Add Project', icon: Plus, component: AddProject },
  { name: 'Modify Project', icon: Edit, component: ModifyProject },
  { name: 'Progress Track', icon: BarChart, component: ProgressTrack },
  { name: 'Team Members', icon: Users, component: TeamMembers },
  { name: 'Repository', icon: GitBranch, component: Repository },
  { name: 'Bug Tracking', icon: Bug, component: BugTracking },
  { name: 'User Story Tracking', icon: BookOpen, component: UserStoryTracking },
  { name: 'Delete Project', icon: Trash, component: DeleteProject },
]

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [activeComponent, setActiveComponent] = useState(menuItems[0].name)

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  const ActiveComponent = menuItems.find(item => item.name === activeComponent)?.component || AddProject

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="flex items-center justify-center h-16 border-b">
          <span className="text-2xl font-thin tracking-wider">
            <a href="/">
              ScaffoldX<span className="text-emerald-400 text-3xl">.</span>
            </a>
          </span>
        </div>
        <nav className="mt-5">
          {menuItems.map((item) => (
            <a
              key={item.name}
              className={`flex items-center mt-4 py-2 px-6 hover:bg-gray-200 ${
                activeComponent === item.name ? 'bg-gray-200' : ''
              }`}
              onClick={() => {
                setActiveComponent(item.name)
                if (window.innerWidth < 1024) {
                  setIsSidebarOpen(false)
                }
              }}
            >
              <item.icon className="h-5 w-5" />
              <span className="mx-3">{item.name}</span>
            </a>
          ))}
        </nav>
        <div className="absolute bottom-0 w-full">
          <a
            className="flex items-center py-4 px-6 hover:bg-gray-200"
            onClick={() => setActiveComponent('Settings')}
          >
            <Settings className="h-5 w-5" />
            <span className="mx-3">Settings</span>
          </a>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="flex items-center justify-between px-6 py-4 bg-white border-b">
          <div className="flex items-center">
            <button onClick={toggleSidebar} className="text-gray-500 focus:outline-none lg:hidden">
              {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          <div className="flex items-center">
            <button className="flex items-center text-gray-500 hover:text-gray-600 focus:outline-none">
              <LogOut className="h-5 w-5" />
              <span className="ml-2 text-sm">Logout</span>
            </button>
            <div className="ml-4 relative">
              <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                <span className="text-sm font-medium text-gray-700">JD</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            {/* <h3 className="text-gray-700 text-3xl font-medium">{activeComponent}</h3> */}
            <div className="mt-8">
              {activeComponent === 'Settings' ? <AccountSettings /> : <ActiveComponent />}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}