import axios from 'axios'
import { isCPF } from 'validation-br'
import React, { useState } from 'react'
import { Button } from "../../ui/button"
import { toast, ToastContainer } from 'react-toastify'
import api from '@/service/api'

interface Admin {
    cpf: string
    name: string
    password: string
}

const AdminRegister = () => {
    const [adminData, setAdminData] = useState<Admin>({
        cpf: '',
        name: '',
        password: '',
    })
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setAdminData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const isValidCPF = (cpf: string) => {
        return isCPF(cpf)
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!isValidCPF(adminData.cpf)) {
            toast.error("CPF inválido.", { position: "bottom-right" })
            return
        }
        
        try {
            const response = await api.post('/create-adm', adminData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            toast.success("Cadastro feito com sucesso!", {
                position: "bottom-right"
            })

            console.log(response.data)
        } catch (error) {
            console.error('Erro ao criar adm:', error)

            if (axios.isAxiosError(error)) {

                if (error.response && error.response.status === 400) {
                    toast.error(error.response.data.message, {
                        position: "bottom-right"
                    })

                } else {
                    toast.error('Erro ao registrar o adm.', {
                        position: "bottom-right"
                    })
                }

            }
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-medium mb-4 text-center roboto">Criar novo adm</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="cpf" className="block mb-2 font-medium roboto">CPF</label>
                        <input 
                            type="text" 
                            placeholder='Digite o CPF...'
                            id="cpf" 
                            name="cpf"
                            value={adminData.cpf} 
                            onChange={handleChange} 
                            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500" 
                            required 
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block mb-2 font-medium roboto">Nome</label>
                        <input 
                            type="text" 
                            id="name"
                            placeholder='Digite o nome...'
                            name="name"
                            value={adminData.name} 
                            onChange={handleChange} 
                            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500" 
                            required 
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block mb-2 font-medium roboto">Senha</label>
                        <input 
                            type="password" 
                            id="password"
                            placeholder='Digite a senha...'
                            name="password"
                            value={adminData.password} 
                            onChange={handleChange} 
                            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500" 
                            required 
                        />
                    </div>

                    <Button 
                        type="submit" 
                        className="w-full bg-teal-500 hover:bg-teal-700 text-white py-2 rounded-lg"
                    >
                        Criar ADM
                    </Button>
                </form>
            </div>
            <ToastContainer/>
        </div>
    )
}

export default AdminRegister
