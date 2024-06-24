import React from "react";
import { attributes } from "../utils/Data";

const DropdownMenu = () => {
  return (
    <div className="mt-1.5 p-1 bg-gray-800">
      {attributes.map((item) => (
        <div className="text-white text-base my-2 px-2 py-1.5  hover:bg-gray-700">{item}</div>
      ))}
    </div>
  );
};

export default DropdownMenu;
