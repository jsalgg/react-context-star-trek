import { useContext, createContext } from "react";
import { initialCards } from "../mockdata/CardData";

export const AppContext = createContext();

export const useApp = () => useContext(AppContext);

export default function AppContextProvider({ children }) {

    return (
        <AppContext.Provider value={{
            cards: initialCards
        }}>
            { children }
        </AppContext.Provider>
    )
}
