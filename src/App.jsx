import "./App.css";
import Active from "./Components/Active/Active";
import Banner from "./Components/Banner/Banner";
import NavBar from "./Components/NaBar/NavBar";
import PremiumDigitalTools from "./Components/PremiumDigitalTools/PremiumDigitalTools";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Active></Active>
      <PremiumDigitalTools></PremiumDigitalTools>
    </>
  );
}

export default App;
