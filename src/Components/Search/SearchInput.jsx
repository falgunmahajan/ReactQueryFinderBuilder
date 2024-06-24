import React, { useContext } from 'react'

import { AppContext } from '../ContextProvider'
import { attributes } from '../../utils/Data'
const SearchInput = () => {
  const { setExpand, searchValue, setSearchValue, setOptions, ref, showContent, searchData, setSearchData } = useContext(AppContext);

  const toggleExpand = () => setExpand(true);

  const placeholder = searchData.length ? "" : 'Search Filter : select options from suggested values, for In/Not In operators - press "Enter" after selecting options';

  const handleSearchChange = (e) => {
    const { value } = e.target;
    const filteredOptions = attributes.filter(item => item.startsWith(value))
    setOptions(filteredOptions)
    if (showContent === "value") {
      setSearchValue(e.target.value)
      setSearchData([...searchData, value])
      setSearchValue("")
    }
  }

  return (

    <input value={searchValue} autoFocus ref={ref} type="text" placeholder={placeholder} className={`text-xs placeholder-zinc-600  text-white ${placeholder?"w-full":""}  outline-none bg-transparent` } onChange={handleSearchChange} onClick={toggleExpand} />



  )
}

export default SearchInput
