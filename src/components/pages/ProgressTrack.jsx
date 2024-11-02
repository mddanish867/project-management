import { useState } from 'react'

export default function ProgressTrack() {
  const [progress, setProgress] = useState(65)

  const handleProgressChange = (e) => {
    setProgress(Number(e.target.value))
  }

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Project Progress</h2>
        <div className="space-y-4">
          <div>
            <label htmlFor="progress" className="block text-sm font-medium text-gray-700">
              Progress: {progress}%
            </label>
            <input
              type="range"
              id="progress"
              name="progress"
              min="0"
              max="100"
              className="mt-1 block w-full"
              onChange={handleProgressChange}
              value={progress}
            />
          </div>
          <div className="relative pt-1">
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200">
              <div
                style={{ width: `${progress}%` }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"
              ></div>
            </div>
          </div>
          <div className="text-center text-sm text-gray-600">
            {progress < 25 && 'Just getting started'}
            {progress >= 25 && progress < 50 && 'Making progress'}
            {progress >= 50 && progress < 75 && 'More than halfway there'}
            {progress >= 75 && progress < 100 && 'Almost done'}
            {progress === 100 && 'Project completed!'}
          </div>
        </div>
      </div>
    </div>
  )
}