import React from "react";

function DatePicker(props) {
  const changeHandler = (e) => {
    console.log(e.target.value);
    props.dateChange(e.target.value);
  };

  return (
    <>
      <label htmlFor="start">APOD date:</label>
      <input
        name="start"
        type="date"
        value={props.value}
        onChange={(e) => changeHandler(e)}
      />
    </>
  );
}

export default DatePicker;
