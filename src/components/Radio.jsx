import React from 'react'

const Radio = (props) => {
    const { changed, id, isSelected,isChecked, label, value } = props;
  return (
    <div><div className="RadioButton m-4">
    <input
      id={id}
      onClick={changed}
      value={value}
      type="radio"
      name="category"
      checked={isChecked}
    />
    <label htmlFor={id} className="m-2">{label} </label>
  </div></div>
  )
}

export default Radio