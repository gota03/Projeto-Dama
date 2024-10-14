import axios from 'axios'
import React, { useState } from 'react'
import { Button } from "../../ui/button"
import { toast, ToastContainer } from 'react-toastify'

interface Tournament {
    tournamentName: string
    date: string
    location: string
    qtd_participants: number
    registration_price: number
}

const CreateTournament = () => {
    const [tournamentData, setTournamentData] = useState<Tournament>({
        tournamentName: '',
        date: '',
        location: '',
        qtd_participants: 0,
        registration_price: 0
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setTournamentData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        try {
            const response = await axios.post('http://localhost:5000/tournaments', tournamentData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            console.log(response.data)
            toast.success('Torneio criado com sucesso!', {
                position: 'bottom-right',
                autoClose: 3000,
              })
        } catch (error) {
            console.error('Erro ao criar torneio:', error)
            toast.error('Falha ao criar torneio', {
                position: 'bottom-right',
                autoClose: 3000,
              })
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
                <h2 className="text-2xl font-medium mb-4 text-center">Criar novo torneio</h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="tournamentName" className="block mb-2 font-medium">Nome do torneio</label>
                            <input 
                                type="text"
                                placeholder='Digite o nome do torneio...'
                                id="tournamentName" 
                                name="tournamentName"
                                value={tournamentData.tournamentName} 
                                onChange={handleChange} 
                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500" 
                                required 
                            />
                        </div>
                        <div>
                            <label htmlFor="date" className="block mb-2 font-medium">Data</label>
                            <input 
                                type="date" 
                                id="date" 
                                name="date"
                                value={tournamentData.date} 
                                onChange={handleChange} 
                                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500" 
                                required 
                            />
                        </div>
                    </div>
                    
                    <div className="mb-4">
                        <label htmlFor="qtd_participants" className="block mb-2 font-medium">Quantidade de participantes</label>
                        <input 
                            type="number" 
                            id="qtd_participants" 
                            name="qtd_participants"
                            value={tournamentData.qtd_participants} 
                            onChange={handleChange} 
                            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500" 
                            required 
                        />
                    </div>
                    
                    <div className="mb-4">
                        <label htmlFor="registration_price" className="block mb-2 font-medium">Taxa de inscrição</label>
                        <input 
                            type="number" 
                            id="registration_price" 
                            name="registration_price"
                            value={tournamentData.registration_price} 
                            onChange={handleChange} 
                            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500" 
                            required 
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="location" className="block mb-2 font-medium">Localização</label>
                        <input 
                            type="text" 
                            id="location"
                            placeholder='Digite a localização...'
                            name="location"
                            value={tournamentData.location} 
                            onChange={handleChange} 
                            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500" 
                            required 
                        />
                    </div>

                    <Button 
                        type="submit" 
                        className="w-full bg-teal-500 hover:bg-teal-700 text-white py-2 rounded-lg"
                    >
                        Criar torneio
                    </Button>
                </form>
            </div>
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
        </div>
    )
}

export default CreateTournament
