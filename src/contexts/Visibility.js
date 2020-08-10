import React, {useState, createContext} from 'react'

export const TabContext = createContext()

function TabContextProvider(props) {
    const [showTabs, setShowTabs] = useState(true)

    const TabVisible = (visible) =>{
        setShowTabs(visible)
    }

    return (
        <TabContext.Provider value={{showTabs, TabVisible}}>
            {props.children}
        </TabContext.Provider>
    )
}

export default TabContextProvider;