import './App.css'
import { Login } from './components/Login';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path="/user" element={<Login/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}
export default App