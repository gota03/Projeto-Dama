import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog"
import { MdEdit } from "react-icons/md"
import { DialogTrigger } from '@radix-ui/react-dialog'
import axios from 'axios'
import { Tournament } from '@/types/tournament'
import api from '@/service/api'

interface EditTournamentDialogProps {
  tournament: Tournament;
  onSave: () => void; // Agora aceita um parâmetro Tournament
}

const EditTournamentDialog: React.FC<EditTournamentDialogProps> = ({ tournament, onSave }) => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false)

  const formatDate = (date: string) => {
    const [day, month, year] = date.includes('-') ? date.split('-') : date.split('/')
    return `${year}-${month}-${day}`
  }

  const [editedTournament, setEditedTournament] = useState<Tournament>({
    ...tournament,
    Date: formatDate(tournament.Date)
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setEditedTournament(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSave = async () => {
    try {
      await api.put(`/tournaments/${editedTournament.id}`, {
        tournamentName: editedTournament.Name,
        date: editedTournament.Date,
        location: editedTournament.Locale,
        qtd_participants: editedTournament.Qtd_participants,
        registration_price: editedTournament.Taxe_pay
      });
      setIsDialogOpen(false);
      onSave()
    } catch (error) {
      console.error("Erro ao atualizar torneio:", error);
    }
  };

  return (
    <>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <button className="text-blue-500 hover:text-blue-700" onClick={() => setIsDialogOpen(true)}>
            <MdEdit size={24} />
          </button>
        </DialogTrigger>
        <DialogContent className="bg-white p-4 rounded-lg shadow-lg w-full max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl font-medium mb-4 text-center roboto">Editar torneio</DialogTitle>
            <DialogDescription className="mb-4 text-center roboto font-medium">Atualize as informações do torneio.</DialogDescription>
          </DialogHeader>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 font-medium roboto" htmlFor="Name">Nome do torneio</label>
                <input
                  type="text"
                  name="Name"
                  value={editedTournament.Name}
                  onChange={handleInputChange}
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-medium roboto" htmlFor="Date">Data</label>
                <input
                  type="date"
                  name="Date"
                  value={editedTournament.Date}
                  onChange={handleInputChange}
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 font-medium roboto" htmlFor="Qtd_participants">Quantidade de participantes</label>
                <input
                  type="number"
                  name="Qtd_participants"
                  value={editedTournament.Qtd_participants}
                  onChange={handleInputChange}
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-medium roboto" htmlFor="Taxe_pay">Taxa de inscrição</label>
                <input
                  type="number"
                  name="Taxe_pay"
                  value={editedTournament.Taxe_pay}
                  onChange={handleInputChange}
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 font-medium roboto" htmlFor="Locale">Localização</label>
              <input
                type="text"
                name="Locale"
                value={editedTournament.Locale}
                onChange={handleInputChange}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>
          </form>

          <DialogFooter className="mt-6">
            <DialogClose asChild>
              <button className="w-full bg-gray-300 hover:bg-gray-400 text-black py-2 rounded-lg">
                Cancelar
              </button>
            </DialogClose>
            <button className="w-full bg-teal-500 hover:bg-teal-700 text-white py-2 rounded-lg ml-4" onClick={handleSave}>
              Salvar
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default EditTournamentDialog;
