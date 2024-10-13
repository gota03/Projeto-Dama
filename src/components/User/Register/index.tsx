import axios from 'axios'
import { useState } from 'react'
import { isCPF } from 'validation-br'
import { Label } from '../../ui/label'
import {Button} from '../../ui/button'
import 'react-toastify/dist/ReactToastify.css' 
import { TabsContent} from '@/components/ui/tabs'
import {toast, ToastContainer} from 'react-toastify'

interface FormData {
    name: string;
    cpf: string;
    birthdate: string;
    phone: string;
    cep: string;
    email: string;
    password: string;
}

export function Register() {

    const [formData, setFormData] = useState<FormData>({
        name: "",
        cpf: "",
        birthdate: "",
        phone: "",
        cep: "",
        email: "",
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
            await axios.post('http://127.0.0.1:5000/user/register', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            toast.success("Cadastrado feito com sucesso!", {
                position: "bottom-right"
            })
    
        } catch (error) {

            if (axios.isAxiosError(error)) {

                if (error.response && error.response.status === 400) {
                    toast.error(error.response.data.message, {
                        position: "bottom-right"
                    })

                } else {
                    toast.error('Erro ao registrar o usuário.', {
                        position: "bottom-right"
                    })
                }

            } else {
                toast.error('Erro inesperado.', {
                    position: "bottom-right"
                })
            }

        }
    }

    return (
        <>

            <TabsContent value="register">
                <p
                    className="text-lg font-bold text-gray-700 roboto mb-4">
                    Realize seu cadastro
                </p>

                <form onSubmit={handleSubmit}>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

                        <div>

                            <Label
                                htmlFor="name"
                                className="block text-gray-700 mb-1">
                                Nome
                            </Label>

                            <input
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm"
                                placeholder="Digite seu nome..."
                                name="name"
                                type="text"
                                onChange={handleChange}
                                value={formData.name}
                                required={true}
                            />

                        </div>

                        <div>
                            <Label
                                htmlFor="cpf"
                                className="block text-gray-700 mb-1">
                                CPF
                            </Label>

                            <input
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm"
                                placeholder="Digite seu CPF..."
                                name="cpf"
                                type="text"
                                onChange={handleChange}
                                value={formData.cpf}
                                required={true}
                            />
                        </div>

                        <div>
                            <Label
                                htmlFor="birthdate"
                                className="block text-gray-700 mb-1">
                                Data de Nascimento
                            </Label>

                            <input
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm"
                                placeholder="DD/MM/AAAA"
                                name="birthdate"
                                type="date"
                                onChange={handleChange}
                                value={formData.birthdate}
                                required={true}
                            />
                        </div>

                        <div>
                            <Label
                                htmlFor="phone"
                                className="block text-gray-700 mb-1">
                                Telefone
                            </Label>

                            <input
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm"
                                placeholder="(xx) x xxxx-xxxx"
                                name="phone"
                                type="tel"
                                onChange={handleChange}
                                value={formData.phone}
                                required={true}
                            />
                        </div>

                        <div>
                            <Label
                                htmlFor="cep"
                                className="block text-gray-700 mb-1">
                                CEP
                            </Label>

                            <input
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm"
                                placeholder="Digite seu CEP..."
                                name="cep"
                                type="text"
                                onChange={handleChange}
                                value={formData.cep}
                                required={true}
                            />
                        </div>

                        <div>
                            <Label
                                htmlFor="email"
                                className="block text-gray-700 mb-1">
                                E-mail
                            </Label>

                            <input
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm"
                                placeholder="Digite seu e-mail..."
                                name="email"
                                type="email"
                                onChange={handleChange}
                                value={formData.email}
                                required={true}
                            />
                        </div>

                        <div>
                            <Label
                                htmlFor="password"
                                className="block text-gray-700 mb-1">
                                Senha
                            </Label>
                                    
                            <input
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm"
                                placeholder="Digite sua senha..."
                                name="password"
                                type="password"
                                onChange={handleChange}
                                value={formData.password}
                                required={true}
                            />
                        </div>
                    
                    </div>

                    <Button
                        className="w-full bg-teal-500 hover:bg-teal-700 text-white py-2rounded-lfont-semibold"
                        type="submit"
                    >
                        Fazer cadastro
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