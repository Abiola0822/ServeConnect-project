import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4">
      <Outlet />
    </div>
  )
}