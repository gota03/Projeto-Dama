import axios from 'axios'
import { useState } from "react"
import {Label} from "../../ui/label"
import { isCPF } from 'validation-br'
import { Button } from "../../ui/button"
import {TabsContent} from "@/components/ui/tabs"
import {toast, ToastContainer} from 'react-toastify'

interface FormData {
    cpf: string
    password: string
}

export function UserLogin() {

    const [formData, setFormData] = useState<FormData>({
        cpf: "",
        password: ""
    })
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const isValidCPF = (cpf: string) => {
        return isCPF(cpf)
    }
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!isValidCPF(formData.cpf)) {
            toast.error("CPF inválido.", { position: "bottom-right" })
            return
        }

        try {
            await axios.post('http://127.0.0.1:5000/user/login', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            toast.success("Login feito com sucesso!", {
                position: "bottom-right"
            })
              
        } catch (error) {

            if (axios.isAxiosError(error)) {
                const status = error.response?.status
            
                if (status === 401) {
                    toast.error(error.response?.data.message || 'Credenciais inválidas.', {
                        position: "bottom-right"
                    })
                } else {
                    toast.error('Erro ao fazer login.', { position: "bottom-right" })
                }
            } else {
                toast.error('Erro inesperado.', { position: "bottom-right" })
            }
            
        }
    }

    return (
        <>

            <TabsContent value="login">

                <p
                    className="text-lg font-bold text-gray-700 mb-4 roboto">
                    Realize seu login
                </p>

                <form onSubmit={handleSubmit}>

                    <div className="mb-4">

                        <Label
                            htmlFor="cpf"
                            className="block text-gray-600 mb-1 roboto">
                            CPF
                        </Label>

                        <input 
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg" 
                            placeholder="Digite seu CPF..." 
                            name="cpf" 
                            inputMode="text" 
                            type="cpf" 
                            onChange={handleChange}
                            value={formData.cpf}
                            required={true}
                        />
                    </div>

                    <div className="mb-6">

                        <Label
                            htmlFor="password"
                            className="block text-gray-600 mb-1 roboto">
                            Senha
                        </Label>

                        <input 
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            placeholder="Digite sua senha..." 
                            name="password" 
                            type="password"
                            onChange={handleChange}
                            value={formData.password}
                            required={true}
                        />
                    </div>

                    <Button 
                        className="w-full bg-teal-500 hover:bg-teal-700 text-white py-2 rounded-lfont-semibold"
                        type="submit"
                        >
                        Fazer login
                    </Button>

                </form>

                <ToastContainer
                    position="bottom-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />

            </TabsContent>
            
        </>
        
    )
}