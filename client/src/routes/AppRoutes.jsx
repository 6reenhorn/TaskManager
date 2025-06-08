import { Routes, Route, Outlet } from "react-router-dom"
import { useState } from "react"
import { NavBar } from "../common/NavBar"
import { Dashboard } from "../components/pages/Dashboard"

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const toggleSidebar = () => setIsSidebarOpen(prev => !prev)

  return (
    <>
      <NavBar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div
        className={`transition-all duration-300 ${
          isSidebarOpen ? "ml-78" : "ml-0"
        }`}
      >
        <Outlet context={{ isSidebarOpen }} />
      </div>
    </>
  )
}

export const AppRoutes = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Dashboard />} />
    </Route>
  </Routes>
)