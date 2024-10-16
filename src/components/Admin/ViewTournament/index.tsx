import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../../ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import DeleteConfirmationDialog from '../../DeleteDialog';
import EditTournamentDialog from '../../EditDialog';
import { Tournament } from '@/types/tournament';
import api from '@/service/api';

export const ViewTournament = () => {
  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true)
    fetchTournaments();
  }, []);

  const fetchTournaments = async () => {
    try {
      const response = await api.get('/view-tournaments');
      setTournaments(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Erro ao buscar os torneios:", error);
      setError("Erro ao buscar os torneios");
    }
  };

  const handleDeleteTournament = async (tournamentId: number) => {
    try {
      await api.delete(`/tournaments/${tournamentId}`);
      setTournaments(tournaments.filter(tournament => tournament.id !== tournamentId));
    } catch (error) {
      console.error("Erro ao deletar torneio:", error);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {error && <p className="text-red-500">{error}</p>}
      {isLoading && <p className='text-blue-500 font-semibold animate-pulse'>Carregando...</p>}
      {tournaments.length === 0 && !isLoading ? (
        <p className='bg-red-600 text-white rounded-md p-4 shadow-md text-center'>Nenhum torneio encontrado.</p>
      ) : (
        tournaments.map((tournament) => (
          <Card key={tournament.id} className="shadow-md">
            <CardHeader>
              <CardTitle>{tournament.Name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Data: {formatDate(tournament.Date)}</p>
              <p>Localização: {tournament.Locale}</p>
              <p>Participantes: {tournament.Qtd_participants}</p>
              <p>Taxa de inscrição: R${tournament.Taxe_pay.toFixed(2)}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <DeleteConfirmationDialog
                      tournamentName={tournament.Name}
                      tournamentId={tournament.id}
                      onConfirm={handleDeleteTournament}
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Excluir torneio</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <EditTournamentDialog
                      tournament={tournament}
                      onSave={fetchTournaments}
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Editar torneio</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </CardFooter>
          </Card>
        ))
      )}
    </div>
  );
};
