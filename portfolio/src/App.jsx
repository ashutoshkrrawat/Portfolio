import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to your clean Vite React project!
          </h1>
          <p className="text-gray-600 mb-6">Start building something amazing with Tailwind CSS</p>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-sm text-gray-500">Tailwind CSS v3 is ready to use!</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App