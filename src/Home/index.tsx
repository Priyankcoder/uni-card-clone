import { useContext, useState } from "react";
import InputForm from "../PhoneNumberInput";
import TermsCheckBox from "../TermsCheckBox";
import "./index.css";
import plusIcon from "./plus-icon.svg";
import { PhoneNumberInput } from "../App";

const MainPageContent = () => {
  return (
    <div className="main-page-content">
      <div className="main-page-left">
        <div className="first-line">
          <div className="title-content">
            <strong>NX Wave.</strong> The next-gen credit card for those who
            love rewards.
          </div>
          <div className="second-line">
            <div className="subtitle-content">
              1% Cashback <img src={plusIcon} /> 5x Rewards{" "}
              <img src={plusIcon} />
              Zero Forex Markup
            </div>
            <InputForm />
            <TermsCheckBox />
          </div>
        </div>
        <div>
          <img
            width="420px"
            height="420px"
            src="https://www.uni.cards/images/nx-wave/nx_wave_hero.png"
          />
        </div>
      </div>
    </div>
  );
};

export default MainPageContent;
