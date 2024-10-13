import { Login } from "./Login";
import { Register } from "./Register";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function User() {

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-200">
            <div className="bg-white p-8 rounded-lg shadow-lg w-[600px] focus:outline-none">

                <Tabs defaultValue="login">

                    <TabsList className="flex justify-around mb-6">

                        <TabsTrigger
                            value="login"
                            className="px-4 py-2 font-semibold text-gray-700 roboto">
                            Login
                        </TabsTrigger>

                        <TabsTrigger
                            value="register"
                            className="px-4 py-2 font-semibold text-gray-700 roboto">
                            Cadastro
                        </TabsTrigger>

                    </TabsList>

                    <Login />
                    <Register/>
                    
                </Tabs>
            </div>
        </div>
    );
}
