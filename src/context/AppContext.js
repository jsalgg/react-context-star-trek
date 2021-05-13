import { useState, useContext, createContext, useCallback } from "react";
import {
  initialInventory,
  initialDecks,
  initialCards,
} from "../mockdata/CardData";

export const AppContext = createContext();

export const useApp = () => useContext(AppContext);

export default function AppContextProvider({ children }) {
  const buyCardForPLayer = useCallback((cardId) => {});
  const [applicationState, setApplicationState] = useState({
    decks: initialDecks,
    inventory: initialInventory,
  });

  return (
    <AppContext.Provider
      value={{
        ...applicationState,
        cards: initialCards,
        buyCard: buyCardForPLayer,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
