import { MdMoreVert } from "react-icons/md";
import { useState } from "react";
import React from 'react';
const CustomDropdown = () => {
  const [isListOpen, setisListOpen] = useState(false);
  const list = [
    { id: 0, action: "Complete" },
    { id: 1, action: "Edit" },
    { id: 2, action: "Delete" }
  ];
    const toggleList = () => {
      console.log('clicked')
    setisListOpen(!isListOpen);
  };

  return (
    <div className="relative">
      <MdMoreVert onClick={toggleList} className="drop-list cursor" />
      {isListOpen && (
        <ul className="drop-list-content" role="none">
          {list.map((data) => (
            <li
              key={data.id}
              className="drop-list-item"
              onClick={() => setisListOpen(false)}
            >
              {data.action}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default CustomDropdown;