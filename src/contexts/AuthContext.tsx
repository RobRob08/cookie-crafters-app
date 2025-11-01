import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  signup: (email: string, password: string, name: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("cookie_haven_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const signup = async (email: string, password: string, name: string) => {
    const users = JSON.parse(localStorage.getItem("cookie_haven_users") || "[]");
    
    if (users.find((u: any) => u.email === email)) {
      return { success: false, error: "Email already registered" };
    }

    const newUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      name,
    };

    users.push({ ...newUser, password });
    localStorage.setItem("cookie_haven_users", JSON.stringify(users));
    localStorage.setItem("cookie_haven_user", JSON.stringify(newUser));
    setUser(newUser);

    return { success: true };
  };

  const login = async (email: string, password: string) => {
    const users = JSON.parse(localStorage.getItem("cookie_haven_users") || "[]");
    const foundUser = users.find((u: any) => u.email === email && u.password === password);

    if (!foundUser) {
      return { success: false, error: "Invalid email or password" };
    }

    const user: User = {
      id: foundUser.id,
      email: foundUser.email,
      name: foundUser.name,
    };

    localStorage.setItem("cookie_haven_user", JSON.stringify(user));
    setUser(user);

    return { success: true };
  };

  const logout = () => {
    localStorage.removeItem("cookie_haven_user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
