import React, { useContext } from 'react'
import { AppContext } from '../ContextProvider'
import { Close } from '@mui/icons-material'

const SearchData = () => {
  const { searchData,setSearchData } = useContext(AppContext)
  const handleDelete = (index) => {
    const newData = searchData.filter((item, id) => index !== id)
    setSearchData(newData)
  }
  return (
    <>
      {searchData.length ? searchData.map((item, index) => <div key={index} className='text-white border mr-1  mb-1 text-xs bg-zinc-700 border-zinc-700 p-1 flex'>{item}<Close onClick={() => handleDelete(index)} className="text-zinc-400 ml-1.5 my-auto" sx={{ fontSize: "14px" }} /></div>) : ""}
    </>

  )
}

export default SearchData
