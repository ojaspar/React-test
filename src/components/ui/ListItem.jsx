import React from 'react';
const ListItem = ({ item, handleOptionClick, isChecked }) => {
  return (
    <li
      className="select-option"
      onClick={() =>
        handleOptionClick({
          defaultSelectText: item.item,
          showOptionList: false
        })
      }
    >
      <input
        readOnly
        checked={isChecked === item.item}
        type="radio"
        id="javascript"
        name={item.duration}
      />
      <label htmlFor="item.duration">{item.item}</label>
    </li>
  );
};
export default ListItem;