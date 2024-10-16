import { useState } from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { MdDelete } from "react-icons/md"

interface DeleteConfirmationDialogProps {
  tournamentId: number;
  tournamentName: string
  onConfirm: () => Promise<void>
}

const DeleteConfirmationDialog: React.FC<DeleteConfirmationDialogProps> = ({
  tournamentName,
  onConfirm,
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false)

  const handleOpenDialog = () => setIsDialogOpen(true)
  const handleCloseDialog = () => setIsDialogOpen(false)

  const handleConfirmDelete = async () => {
    await onConfirm()
    handleCloseDialog()
  }

  return (
    <>
      <button className="text-red-500 hover:text-red-700" onClick={handleOpenDialog}>
        <MdDelete size={24} />
      </button>

      <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Tem certeza que deseja excluir?</AlertDialogTitle>
            <AlertDialogDescription>
              Esta ação não poderá ser desfeita. Você está prestes a excluir o torneio "{tournamentName}".
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={handleCloseDialog}>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirmDelete} className='bg-red-600 hover:bg-red-700'>
              Confirmar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default DeleteConfirmationDialog;
