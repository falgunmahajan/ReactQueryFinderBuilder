import React, { useContext } from 'react'
import { AppContext } from '../ContextProvider'
import { ExpandMore, Search } from '@mui/icons-material'

const SearchIcons = () => {
    const {expand}=useContext(AppContext)
  return (
    <>
     {expand ? <Search className="text-zinc-400 ml-auto " fontSize='small' /> : <ExpandMore className="text-zinc-400 ml-auto" fontSize='small' />}
    </>
   
  )
}

export default SearchIcons
