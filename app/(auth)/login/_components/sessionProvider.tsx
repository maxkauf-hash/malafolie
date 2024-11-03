'use client'

import { createContext, useContext, useEffect, useState } from "react";
import { verifySession } from "./session";

interface User {
    id: string | null,
          address: string | null,
          city: string | null,
          email: string | null,
          firstName: string | null,
          lastName: string | null,
          phone: string | null,
          role: string | null,
          zip: string | null,
          _count: {
            orders: number
            session: number
          }
  }
  
    interface SessionContextType {
      user: User | null;
      loading: boolean;
      setUser: (user: User | null) => void;
    }
    
    const SessionContext = createContext<SessionContextType | undefined>(undefined);

    export const SessionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
        const [user, setUser] = useState<User | null>(null);
        const [loading, setLoading] = useState(true);
      
        useEffect(() => {
          const loadSession = async () => {
            try {
              const session = await verifySession()
              if (session.isAuth) {
                setUser(session?.user);
              }
            } catch (error) {
              console.error("Erreur lors du chargement de la session :", error);
            } finally {
              setLoading(false);
            }
          };
          loadSession();
        }, []);
      
        return (
          <SessionContext.Provider value={{ user, loading, setUser }}>
            {children}
          </SessionContext.Provider>
        );
      };
      
      export const useSession = () => {
        const context = useContext(SessionContext);
        if (context === undefined) {
          throw new Error("useSession must be used within a SessionProvider");
        }
        return context;
      };

      export default {SessionProvider, useSession}