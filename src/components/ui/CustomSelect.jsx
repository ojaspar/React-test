import { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import React from 'react'
import ListItem from "./ListItem";
const CustomSelect = () => {
  const list = [
    { id: 0, item: "Last Day", name: "duration" },
    { id: 1, item: "Last 7 Day", name: "duration" },
    { id: 2, item: "Last 30 Day", name: "duration" },
    { id: 3, item: "Last Quater", name: "duration" },
    { id: 4, item: "Last year", name: "duration" }
  ];

  const [isListOpen, setisListOpen] = useState(false);
  const [defaultText, setdefaultText] = useState("Select...");
  const toggleList = () => {
    setisListOpen(!isListOpen);
  };
  const getSelected = (data) => {
    setisListOpen(data.showOptionList);
    setdefaultText(data.defaultSelectText);
  };
  return (
    <div className="container">
      <div className="custom-select-container" onClick={toggleList}>
        {defaultText}
        {isListOpen ? (
          <RiArrowDropDownLine name="angle-up" size={20} />
        ) : (
          <RiArrowDropUpLine name="angle-down" size={20} />
        )}
      </div>
      {isListOpen && (
        <ul className="dd-list">
          {list.map((data) => (
            <ListItem
              key={data.id}
              item={data}
              handleOptionClick={getSelected}
              isChecked={defaultText}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
export default CustomSelect;