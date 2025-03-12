import { createContext, useContext, useState, ReactNode } from "react";
import { users } from "./Users";

interface AuthContextType {
  user: string | null;
  isAuthenticated: boolean;
  googleLogin: (username: string) => void;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(localStorage.getItem("user"));
 const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const login = (username: string, password: string): boolean => {
    const foundUser = users.find(
      (u) => u.username === username && u.password === password
    );

    if (foundUser) {
      localStorage.setItem("user", username);
      setUser(username);
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };
const googleLogin = (username: string) => {
    localStorage.setItem("user", username);
    setUser(username);
   setIsAuthenticated(true);
  }

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
     setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login,googleLogin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
