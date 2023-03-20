import { createContext, useState } from "react";

type AppContextProviderPropType = {
  children: React.ReactNode;
};

type UserType = {
  name: string;
  email: string;
};

type AppContextType = {
  user: UserType | null;
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
  userLogin: () => void;
};

export const AppContext = createContext<AppContextType | null>(null);

export const AppContextProvider = ({
  children,
}: AppContextProviderPropType) => {
  // States
  const [user, setUser] = useState<UserType | null>(null);

  const userLogin = () => {
    setUser({
      name: "Tobe",
      email: "tobe@example.com",
    });
  };

  return (
    <AppContext.Provider value={{ user, setUser, userLogin }}>
      {children}
    </AppContext.Provider>
  );
};
