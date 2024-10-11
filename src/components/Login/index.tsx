import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {Label} from "../ui/label"
import {Button} from "../ui/button"
import axios from 'axios';
import { useState } from "react";

export function Login() {

    const [formData, setFormData] = useState({
        name: "",
        cpf: "",
        birthdate: "",
        phone: "",
        cep: "",
        email: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:5000/user/register', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response.data);
            alert("Usuário cadastrado com sucesso")

        } catch (error) {
            console.error("Erro ao enviar o formulário", error)
            alert('Erro ao registrar o usuário.')
        }
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-[600px]">

                <Tabs defaultValue="login">

                    <TabsList className="flex justify-around mb-6">
                        <TabsTrigger value="login" className="px-4 py-2 font-semibold text-gray-700 roboto">Login</TabsTrigger>
                        <TabsTrigger value="register" className="px-4 py-2 font-semibold text-gray-700 roboto">Cadastro</TabsTrigger>
                    </TabsList>

                    <TabsContent value="login">
                        <p className="text-lg font-bold text-gray-700 mb-4 roboto">Realize seu login</p>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <Label htmlFor="email" className="block text-gray-600 mb-1 roboto">E-mail</Label>
                                <input 
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg" 
                                placeholder="Digite seu e-mail..." 
                                name="email" 
                                inputMode="email" 
                                type="email" 
                                onChange={handleChange}/>
                            </div>

                            <div className="mb-6">
                                <Label htmlFor="password" className="block text-gray-600 mb-1 roboto">Senha</Label>
                                <input 
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="Digite sua senha..." 
                                name="password" 
                                type="password"
                                onChange={handleChange}
                                />
                            </div>
                            <Button className="w-full bg-teal-500 hover:bg-teal-700 text-white py-2 rounded-lg font-semibold roboto" type="submit">Fazer login</Button>
                        </form>
                    </TabsContent>

                    <TabsContent value="register">
                        <p className="text-lg font-bold text-gray-700 roboto mb-4">Realize seu cadastro</p>
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <Label htmlFor="name" className="block text-gray-700 mb-1">Nome</Label>
                                    <input 
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg" 
                                    placeholder="Digite seu nome..." 
                                    name="name" 
                                    type="text"
                                    onChange={handleChange}
                                    value={formData.name}
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="cpf" className="block text-gray-700 mb-1">CPF</Label>
                                    <input 
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg" 
                                    placeholder="Digite seu CPF..." 
                                    name="cpf" 
                                    type="text"
                                    onChange={handleChange}
                                    value={formData.cpf}
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="birthdate" className="block text-gray-700 mb-1">Data de Nascimento</Label>
                                    <input 
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg" 
                                    placeholder="DD/MM/AAAA" 
                                    name="birthdate" 
                                    type="date"
                                    onChange={handleChange}
                                    value={formData.birthdate}
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="phone" className="block text-gray-700 mb-1">Telefone</Label>
                                    <input 
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg" 
                                    placeholder="(xx) x xxxx-xxxx" 
                                    name="phone" 
                                    type="tel" 
                                    onChange={handleChange}
                                    value={formData.phone}
                                    />
                                </div>

                                {/* <div>
                                    <Label htmlFor="city" className="block text-gray-700 mb-1">Cidade</Label>
                                    <input 
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg" 
                                    placeholder="Digite sua cidade..." 
                                    name="city" 
                                    type="text" 
                                    />
                                </div> */}

                                {/* <div>
                                    <Label htmlFor="district" className="block text-gray-700 mb-1">Bairro</Label>
                                    <input 
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg" 
                                    placeholder="Digite seu bairro..." 
                                    name="district" 
                                    type="text" 
                                    />
                                </div> */}

                                <div>
                                    <Label htmlFor="cep" className="block text-gray-700 mb-1">CEP</Label>
                                    <input 
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg" 
                                    placeholder="Digite seu CEP..." 
                                    name="cep" 
                                    type="text"
                                    onChange={handleChange}
                                    value={formData.cep}
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="email" className="block text-gray-700 mb-1">E-mail</Label>
                                    <input 
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg" 
                                    placeholder="Digite seu e-mail..." 
                                    name="email" 
                                    type="email"
                                    onChange={handleChange}
                                    value={formData.email}
                                    />
                                </div>
                            </div>

                            <Button 
                            className="w-full bg-teal-500 hover:bg-teal-700 text-white py-2 rounded-lg font-semibold"
                            type="submit"
                            >
                            Fazer cadastro
                            </Button>
                        </form>

                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
