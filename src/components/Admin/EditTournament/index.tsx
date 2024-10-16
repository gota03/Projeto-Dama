import { useState } from 'react';

interface Tournament {
  Name: string;
  Date: string;
  Locale: string;
  Qtd_participants: number;
  Taxe_pay: number;
}

interface EditTournamentProps {
  tournament: Tournament;
  onSave: (updatedTournament: Tournament) => void; // Recebe a função de salvar
}

const EditTournament: React.FC<EditTournamentProps> = ({ tournament, onSave }) => {
  const [updatedTournament, setUpdatedTournament] = useState<Tournament>(tournament);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUpdatedTournament({ ...updatedTournament, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(updatedTournament); // Chama a função de salvar
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="Name"
        value={updatedTournament.Name}
        onChange={handleChange}
        placeholder="Nome do Torneio"
      />
      <input
        name="Date"
        type="date"
        value={updatedTournament.Date}
        onChange={handleChange}
      />
      <input
        name="Locale"
        value={updatedTournament.Locale}
        onChange={handleChange}
        placeholder="Localização"
      />
      <input
        name="Qtd_participants"
        type="number"
        value={updatedTournament.Qtd_participants}
        onChange={handleChange}
        placeholder="Quantidade de Participantes"
      />
      <input
        name="Taxe_pay"
        type="number"
        value={updatedTournament.Taxe_pay}
        onChange={handleChange}
        placeholder="Taxa de Inscrição"
      />
      <button type="submit">Salvar</button>
    </form>
  );
};

export default EditTournament;
