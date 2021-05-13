import { useState, useContext, createContext, useCallback } from "react";
import {
  initialInventory,
  initialDecks,
  initialCards,
} from "../mockdata/CardData";

export const AppContext = createContext();

export const useApp = () => useContext(AppContext);

export default function AppContextProvider({ children }) {
    const buyCardForPlayer = useCallback((cardId) => {
        const newApplicationState = {};
        newApplicationState.decks = applicationState.decks;
        newApplicationState.inventory = applicationState.inventory;
        if (newApplicationState.inventory[cardId] > 0) newApplicationState.inventory[cardId]--;
        setApplicationState(newApplicationState);

  }, [children]);
  const [applicationState, setApplicationState] = useState({
    decks: initialDecks,
    inventory: initialInventory,
  });

  return (
    <AppContext.Provider
      value={{
        applicationState,
        cards: initialCards,
        buyCard: buyCardForPlayer,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
