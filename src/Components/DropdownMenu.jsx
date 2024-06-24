import React, { useContext, useEffect, useState } from "react";
import { attributes, operations } from "../utils/Data";
import { AppContext } from "./ContextProvider";

const DropdownMenu = () => {

  const { searchValue, setSearchValue, options, setOptions, showContent, setContent, setExpand,ref } = useContext(AppContext)
  useEffect(() => {
    setContent("attributes")
    setOptions(attributes);
  }, []);

  const handleSearch = (e) => {
    setSearchValue(e.target.innerHTML)
    if(showContent==="attributes"){
      setContent("operations")
      setOptions(operations)
    }
    else{
      setExpand(false);
      setContent("value")
      ref.current.focus()
    }
  }
  return (
    <div className="mt-1.5 p-1 bg-zinc-900 border border-zinc-800">
      {options.map((item, index) => (
        <div key={index} onClick={handleSearch} className="cursor-pointer text-white text-sm my-0.5 px-2 py-1.5 first:bg-zinc-800 hover:bg-zinc-800 ">{searchValue}{" "}{item}{" "}</div>
      ))}
    </div>
  );
};

export default DropdownMenu;
