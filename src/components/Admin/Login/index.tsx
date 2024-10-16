import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAdminContext } from '../AdminContext'
import api from '@/service/api'

const AdminLogin: React.FC = () => {
  const { setAdminName, setToken } = useAdminContext()
  const [cpf, setCpf] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post('/admin/login', {
        cpf,
        password,
      }).then((response) => {
        const { token, adminName } = response.data
        localStorage.setItem("token", token)
        setToken(token)
        setAdminName(adminName)
        toast.success('Login realizado com sucesso!', {
          position: 'bottom-right',
          autoClose: 3000,
        })
        setTimeout(() => navigate("/admin/dashboard"), 3000)
    })

      setTimeout(() => navigate('/admin/dashboard'), 3000)
    } catch (error) {
      console.log(error)
      toast.error('Falha no login! Verifique suas credenciais.', {
        position: 'bottom-right',
        autoClose: 3000,
      })
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <p className="text-lg font-bold text-gray-700 mb-6 text-center roboto">
          Realize seu login
        </p>

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="cpf" className="block text-gray-600 mb-1 roboto">
              CPF
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Digite seu CPF..."
              name="cpf"
              type="text"
              onChange={(e) => setCpf(e.target.value)}
              value={cpf}
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-600 mb-1 roboto"
            >
              Senha
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Digite sua senha..."
              name="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>

          <button
            className="w-full bg-teal-500 hover:bg-teal-700 text-white py-2 rounded-lg font-semibold"
            type="submit"
          >
            Fazer login
          </button>
        </form>
      </div>

      <ToastContainer/>

    </div>
  )
}

export default AdminLogin;
