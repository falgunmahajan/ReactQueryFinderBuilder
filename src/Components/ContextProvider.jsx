import React, { createContext, useRef, useState } from 'react'
export const AppContext = createContext();
const ContextProvider = ({children}) => {
    
    const [expand,setExpand]=useState(false)
    const [searchValue,setSearchValue]=useState()
    const [options,setOptions]=useState([])
    const [showContent,setContent]=useState()
    const [searchData,setSearchData] = useState([])
    const ref=useRef()
  return (
    <AppContext.Provider value={{expand,setExpand,searchValue,setSearchValue,options,setOptions,showContent,setContent,ref,searchData,setSearchData}}>
        {children}
    </AppContext.Provider>
  )
}

export default ContextProvider
