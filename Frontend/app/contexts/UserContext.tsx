import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

export type UserRole =
  | "Admin"
  | "Member"
  | "Volunteer"
  | "Partner"
  | "Caregiver"
  | "Donor";

interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

interface UserContextType {
  currentUser: User | null;
  isLoggedIn: boolean;
  login: (user: User) => void;
  logout: () => void;
  switchRole: (role: UserRole) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>({
    id: "1",
    name: "John Admin",
    email: "john.admin@merrymeals.com",
    role: "Admin",
  });

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const login = (user: User) => {
    setCurrentUser(user);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setCurrentUser(null);
    setIsLoggedIn(false);
  };

  const switchRole = (role: UserRole) => {
    if (currentUser) {
      // Mock user data for different roles
      const roleUsers: Record<UserRole, User> = {
        Admin: {
          id: "1",
          name: "John Admin",
          email: "john.admin@merrymeals.com",
          role: "Admin",
        },
        Member: {
          id: "2",
          name: "Mary Johnson",
          email: "mary.johnson@email.com",
          role: "Member",
        },
        Volunteer: {
          id: "3",
          name: "Sarah Volunteer",
          email: "sarah.volunteer@email.com",
          role: "Volunteer",
        },
        Partner: {
          id: "4",
          name: "City Kitchen",
          email: "contact@citykitchen.com",
          role: "Partner",
        },
        Caregiver: {
          id: "5",
          name: "Emma Caregiver",
          email: "emma.caregiver@email.com",
          role: "Caregiver",
        },
        Donor: {
          id: "6",
          name: "Tom Donor",
          email: "tom.donor@email.com",
          role: "Donor",
        },
      };

      setCurrentUser(roleUsers[role]);
    }
  };

  return (
    <UserContext.Provider
      value={{ currentUser, isLoggedIn, login, logout, switchRole }}
    >
      {children}
    </UserContext.Provider>
  );
};
