import React, { useContext } from 'react'
import SearchData from './SearchData'
import SearchInput from './SearchInput'
import SearchIcons from './SearchIcons'
import { AppContext } from '../ContextProvider'
const SearchDiv = () => {
    const {searchData}=useContext(AppContext);
    return (
        <div className={`flex ${searchData.length?"max-md:flex-wrap":"" } pl-2 py-1 border border-zinc-800  rounded-sm bg-zinc-900 `} >
            <SearchData />
            <SearchInput />
            <SearchIcons />
        </div>

    )
}

export default SearchDiv
