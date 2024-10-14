import { CardTitle, Card, CardContent, CardHeader } from "../../ui/card"
import { Button } from "../../ui/button"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useAdminContext } from '../AdminContext'

export default function AdminDashboard() {
  const navigate = useNavigate()
  const { adminName, token, setToken } = useAdminContext()

  useEffect(() => {
    if (!token) {
      navigate("/admin/login")
    }
  }, [token, navigate])

  const handleLogout = () => {
    localStorage.removeItem("token")
    setToken(null)
    navigate("/admin/login")
  }

  return (
    <div className="min-h-screen bg-gray-200">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold roboto">Painel do administrador</h1>
          <Button variant="outline" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </header>

      <main className="p-6 max-w-7xl mx-auto">
        <div className="text-2xl font-normal mb-6 roboto">
          Bem-vindo, administrador {adminName ? adminName : 'Visitante'}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg cursor-pointer" onClick={() => navigate("/create-tournament")}>
            <CardHeader>
              <CardTitle className="roboto font-medium">Criar novo torneio</CardTitle>
            </CardHeader>
            <CardContent className="roboto">Cadastre um novo torneio rapidamente.</CardContent>
          </Card>

          <Card className="hover:shadow-lg cursor-pointer" onClick={() => navigate("/manage-users")}>
            <CardHeader>
              <CardTitle className="roboto font-medium">Gerenciar usuários</CardTitle>
            </CardHeader>
            <CardContent className="roboto">Visualize e edite os dados dos usuários.</CardContent>
          </Card>

          <Card className="hover:shadow-lg cursor-pointer" onClick={() => navigate("/create-adm")}>
            <CardHeader>
              <CardTitle className="roboto font-medium">Criar novo adm</CardTitle>
            </CardHeader>
            <CardContent className="roboto">Crie um novo adm para gerenciar o sistema</CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
