import logo from "../logo.svg";
import "./index.css";
function HomePageHeader() {
  return (
    <div className="homePage">
      <img src={logo} className="App-logo" alt="logo" />
      <button className="paycheck-button"> Uni Paycheck</button>
    </div>
  );
}

export default HomePageHeader;
