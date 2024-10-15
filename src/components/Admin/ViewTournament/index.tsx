import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../../ui/card';

// Definindo o tipo do torneio
interface Tournament {
  Name: string;
  Date: string;
  Locale: string;
  Qtd_participants: number;
  Taxe_pay: number;
}

export const ViewTournament = () => {
  const [tournaments, setTournaments] = useState<Tournament[]>([]); // Tipando o estado como um array de Tournament

  useEffect(() => {
    // Fazer a chamada GET para a API Flask e buscar os torneios
    axios.get('http://localhost:5000/view-tournaments')
      .then((response) => {
        setTournaments(response.data); // Armazenar os torneios no estado
      })
      .catch((error) => {
        console.error("Erro ao buscar os torneios:", error);
      });
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {tournaments.map((tournament, index) => (
        <Card key={index} className="shadow-md">
          <CardHeader>
            <CardTitle>{tournament.Name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Data: {tournament.Date}</p>
            <p>Local: {tournament.Locale}</p>
            <p>Participantes: {tournament.Qtd_participants}</p>
            <p>Taxa: R${tournament.Taxe_pay.toFixed(2)}</p>
          </CardContent>
          <CardFooter>
            <button className="btn btn-primary">Ver detalhes</button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
