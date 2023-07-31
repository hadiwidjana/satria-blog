const { createContext, useState} = require("react")

export const TagContext = createContext({})

export function TagContextProvider({children}) {
    const [tags, setTags] = useState([])
    return (
        <TagContext.Provider value={{tags, setTags}}>
            {children}
        </TagContext.Provider>
    )
}