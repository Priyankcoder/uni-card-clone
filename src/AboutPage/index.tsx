import React from "react";
import "./index.css";
import downArrow from "./down-arrow.svg";

export default function SecondPage() {
  return (
    <div className="second-page">
      <div className="second-page-content">
        Earn 1% assured cashback{" "}
        <span className="gray-color">on your spends. Get 5X</span> more value
        than cashback{" "}
        <span className="gray-color">
          at the Uni Store. Enjoy round the clock
        </span>{" "}
        Whatsapp support. <span className="gray-color"> And it's</span> lifetime
        free;{" "}
        <span className="gray-color">no joining fee, no annual charges.</span>
      </div>
      <div className="down-arrow">
        <img width="80px" height="60px" src={downArrow} />
      </div>
    </div>
  );
}
