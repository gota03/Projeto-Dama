import { createContext, useContext, useState, ReactNode } from 'react';

interface AdminContextType {
  token: string | null; // Permitir null
  setToken: (token: string | null) => void; // Permitir null
  adminName: string | null; // Caso adminName também possa ser nulo
  setAdminName: (name: string | null) => void; // Permitir null
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null); // Inicialize como null
  const [adminName, setAdminName] = useState<string | null>(null); // Inicialize como null

  return (
    <AdminContext.Provider value={{ token, setToken, adminName, setAdminName }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdminContext = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error("useAdminContext must be used within an AdminProvider");
  }
  return context;
};
