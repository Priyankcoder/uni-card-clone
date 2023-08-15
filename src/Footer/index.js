import React from "react";
import "./index.css";

import InputForm from "../PhoneNumberInput";
import TermsCheckBox from "../TermsCheckBox";

export default function Footer() {
  return (
    <div className="footer-content">
      <InputForm />
      <TermsCheckBox />
    </div>
  );
}
