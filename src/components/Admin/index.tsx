import AdminLogin from "./Login"

export function Admin() {

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-200">
            <div className="bg-white p-8 rounded-lg shadow-lg w-[600px] focus:outline-none">

                <AdminLogin/>
                    
            </div>
        </div>
    );
}
