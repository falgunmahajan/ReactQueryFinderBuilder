
import React, { useState } from "react"
import SearchInput from "./Components/SearchInput"
import DropdownMenu from "./Components/DropdownMenu"
function App() {
  const [expand,setExpand]=useState(false)

  return (
    <div className=" m-5 bg-black p-1.5">
    <SearchInput expand={expand} setExpand={setExpand}/>
    {expand && <DropdownMenu/>}
    </div>
  )
}

export default App
