import { Suspense } from "react";
import "./App.css";
import Active from "./Components/Active/Active";
import AllCard from "./Components/AllCard/AllCard";
import Banner from "./Components/Banner/Banner";
import NavBar from "./Components/NaBar/NavBar";
import PremiumDigitalTools from "./Components/PremiumDigitalTools/PremiumDigitalTools";
const loadData = async () => {
  const res = await fetch("/data.json");
  return res.json();
};
function App() {
  const allCards = loadData();
  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Active></Active>
      <PremiumDigitalTools></PremiumDigitalTools>
      <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        <AllCard allCards={allCards}></AllCard>
      </Suspense>
    </>
  );
}

export default App;
