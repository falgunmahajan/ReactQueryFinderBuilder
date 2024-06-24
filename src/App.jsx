
import React, { useContext } from "react"
import DropdownMenu from "./Components/DropdownMenu"
import { AppContext } from "./Components/ContextProvider"
import SearchDiv from "./Components/Search/SearchDiv"
function App() {
  const {expand} = useContext(AppContext)
  return (
    <div className="mx-5 my-20 md:m-20 bg-black p-1.5">
    <SearchDiv />
    {expand && <DropdownMenu/>}
    </div>
  )
}

export default App
