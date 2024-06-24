import React from 'react'

import { ExpandMore, Search } from "@mui/icons-material"
const SearchInput = ({expand,setExpand}) => {
    const toggleExpand=()=>setExpand(true)
  return (
    <div className="flex pl-2 rounded-sm bg-gray-700" onClick={toggleExpand}>
    <input type="text" placeholder='Search Filter : select options from suggested values, for In/Not In operators - press "Enter" after selecting options ' className="text-sm w-full outline-none bg-transparent"/>
    {expand?<Search className="text-gray-400"/>:<ExpandMore className="text-gray-400"/>}
    </div>
   
  )
}

export default SearchInput
