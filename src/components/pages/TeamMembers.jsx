
import { useState } from 'react'

export default function TeamMembers() {
  const [teamMembers, setTeamMembers] = useState([
    { id: 1, name: 'John Doe', role: 'Frontend Developer', avatar: '/placeholder.svg?height=40&width=40' },
    { id: 2, name: 'Jane Smith', role: 'Backend Developer', avatar: '/placeholder.svg?height=40&width=40' },
    { id: 3, name: 'Mike Johnson', role: 'UI/UX Designer', avatar: '/placeholder.svg?height=40&width=40' },
  ])

  const [newMember, setNewMember] = useState({ name: '', role: '' })

  const handleInputChange = (e) => {
    setNewMember({ ...newMember, [e.target.name]: e.target.value })
  }

  const handleAddMember = (e) => {
    e.preventDefault()
    if (newMember.name && newMember.role) {
      setTeamMembers([
        ...teamMembers,
        {
          id: teamMembers.length + 1,
          name: newMember.name,
          role: newMember.role,
          avatar: '/placeholder.svg?height=40&width=40',
        },
      ])
      setNewMember({ name: '', role: '' })
    }
  }

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Team Members</h2>
        <ul className="space-y-4">
          {teamMembers.map((member) => (
            <li key={member.id} className="flex items-center space-x-4">
              <img src={member.avatar} alt={member.name} className="w-10 h-10 rounded-full" />
              <div>
                <p className="font-semibold">{member.name}</p>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            </li>
          ))}
        </ul>
        <form onSubmit={handleAddMember} className="mt-6 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              onChange={handleInputChange}
              value={newMember.name}
            />
          </div>
          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">
              Role
            </label>
            <input
              type="text"
              id="role"
              name="role"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              onChange={handleInputChange}
              value={newMember.role}
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Team Member
          </button>
        </form>
      </div>
    </div>
  )
}