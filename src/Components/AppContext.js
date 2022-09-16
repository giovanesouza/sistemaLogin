import { createContext, useState } from "react";

export const AppContext = createContext()

const ContextProvider = ({ children }) => {
    const [login, setLogin] = useState(false)

    return (
        <AppContext.Provider value={{ login, setLogin }}>
            {children}
        </AppContext.Provider>
    )

}

export default ContextProvider;