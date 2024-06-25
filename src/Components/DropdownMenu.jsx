import React, { useContext, useEffect, useState } from "react";
import { attributes, operations } from "../utils/Data";
import { AppContext } from "./ContextProvider";

const DropdownMenu = () => {
  const {
    searchValue,
    setSearchValue,
    options,
    setOptions,
    showContent,
    setContent,
    setExpand,
    ref,
  } = useContext(AppContext);
  const [hoveredIndex, setHoveredIndex] = useState(0);
  useEffect(() => {
    setContent("attributes");
    setOptions(attributes);
  }, []);

  const handleSearch = (e) => {
    setSearchValue(e.target.innerHTML);
    if (showContent === "attributes") {
      setContent("operations");
      setOptions(operations);
    } 
    
    else {
      setExpand(false);
      setContent("value");
      ref.current.focus();
    }
  };
  return (
    <div className="mt-1.5 p-1 bg-zinc-800 border border-zinc-800">
      {options.map((item, index) => (
        <div
          key={index}
          onClick={handleSearch}
          onMouseEnter={()=>setHoveredIndex(index)}
          className={`cursor-pointer text-white text-sm my-0.5 px-2 py-1.5 ${
            hoveredIndex == index ? "bg-zinc-700" : ""
          }  `}
        >
          {searchValue} {item}{" "}
        </div>
      ))}
    </div>
  );
};

export default DropdownMenu;
