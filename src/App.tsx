import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import Footer from "./Footer";
import HomePageHeader from "./Header";
import MainPageContent from "./Home";
import SecondPage from "./AboutPage";
import { addVisibilityAnimation, debounce } from "./utils/helperFunction";

const contextValue: {
  number: string;
  setNumber: any;
  termCheckbox: boolean;
  setTermCheckbox: any;
} = {
  number: "",
  setNumber: () => {},
  termCheckbox: false,
  setTermCheckbox: () => {},
};

export const PhoneNumberInput = createContext(contextValue);

function App() {
  const [number, setNumber] = useState("");
  const [termCheckbox, setTermCheckbox] = useState(false);

  useEffect(() => {
    const toggleNumberCTAVisibilty = addVisibilityAnimation(".footer-content");
    const toggleTextCTAVisibility = addVisibilityAnimation(
      ".second-page-content"
    );
    window.addEventListener("scroll", () => {
      debounce(() => {
        toggleNumberCTAVisibilty();
        toggleTextCTAVisibility();
      }, 100)();
    });
  }, []);

  return (
    <PhoneNumberInput.Provider
      value={{ number, setNumber, termCheckbox, setTermCheckbox }}
    >
      <div className="App">
        <header className="App-header">
          <video autoPlay muted loop playsInline className="videoTag">
            <source src="/videos/nxt_wave_bg.mp4" type="video/mp4"></source>
          </video>
          <HomePageHeader />
          <MainPageContent />
        </header>
        <SecondPage />
        <Footer />
      </div>
    </PhoneNumberInput.Provider>
  );
}

export default App;
