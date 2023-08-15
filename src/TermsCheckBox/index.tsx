import React, { useContext } from "react";
import "./index.css";
import { PhoneNumberInput } from "../App";

export default function TermsCheckBox() {
  const { termCheckbox, setTermCheckbox } = useContext(PhoneNumberInput);

  const handleTick = (e) => {
    const check = e.target.checked;
    setTermCheckbox(check);
  };

  return (
    <div className="terms-checkbox">
      <input type="checkbox" onChange={handleTick} checked={termCheckbox} />
      <span className="checkbox">
        You agree to be contacted by Uni Cards over Call, SMS, Email <br /> or
        WhatsApp to guide you through your application.
      </span>
    </div>
  );
}
