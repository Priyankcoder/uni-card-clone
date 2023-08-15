import React, { useContext, useState } from "react";
import "./index.css";
import { PhoneNumberInput } from "../App";

export default function InputForm() {
  const { number, setNumber } = useContext(PhoneNumberInput);

  const handleChange = (e: any) => {
    const value = e.target.value;
    if (isNaN(Number(value))) return;
    if (value.length > 10) return;
    setNumber(e.target.value);
  };

  const handleSubmit = () => {};

  return (
    <div className="phone-number-form">
      <input
        type="text"
        value={number}
        placeholder="Enter Phone Number"
        onChange={handleChange}
      />
      <input
        className="submit-button"
        type="submit"
        name="Apply Now"
        value="Apply Now"
        onClick={handleSubmit}
      />
    </div>
  );
}
