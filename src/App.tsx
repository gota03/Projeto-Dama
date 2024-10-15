import './App.css'
import { User } from './components/User'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { HomePage } from './components/HomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import AdminDashboard from './components/Admin/Dashboard' 
import { AdminProvider } from './components/Admin/AdminContext'
import AdminLogin from './components/Admin/Login'
import CreateTournament from './components/Admin/CreateTournament'
import AdminRegister from './components/Admin/Register'
import { ViewTournament } from './components/Admin/ViewTournament'

function App() {
  return (
    <AdminProvider>
      <div className="flex flex-col min-h-screen">
        <Router>

          <Header />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/user" element={<User />} />
              <Route path="/admin/login" element={<AdminLogin />} />
              
              <Route
                path="/admin/dashboard"
                element={
                  <PrivateRoute>
                    <AdminDashboard />
                  </PrivateRoute>
                }
              />
              
              <Route
                path="/create-tournament"
                element={
                  <PrivateRoute>
                    <CreateTournament />
                  </PrivateRoute>
                }
              />

              <Route
                path="/create-adm"
                element={
                  <PrivateRoute>
                    <AdminRegister />
                  </PrivateRoute>
                }
              />

              <Route
                path="/view-tournaments"
                element={
                  <PrivateRoute>
                    <ViewTournament />
                  </PrivateRoute>
                }
              />
            </Routes>
          </main>

          <Footer />

        </Router>
      </div>
    </AdminProvider>
  );
}

export default App
