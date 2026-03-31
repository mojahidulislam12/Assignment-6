import { Suspense, useState } from "react";
import "./App.css";
import Active from "./Components/Active/Active";
import AllCard from "./Components/AllCard/AllCard";
import Banner from "./Components/Banner/Banner";
import NavBar from "./Components/NaBar/NavBar";
import PremiumDigitalTools from "./Components/PremiumDigitalTools/PremiumDigitalTools";
import GetStared from "./Components/GetStared/GetStared";
import Pricing from "./Components/Pricing/Pricing";
import WorkFlow from "./Components/WorkFlow/WorkFlow";
const loadData = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const allCards = loadData();
  const [selectedCards, setSelectedCards] = useState([]);
  const [count, setCount] = useState(0);
  return (
    <>
      <NavBar selectedCards={selectedCards}></NavBar>
      <Banner count={count}></Banner>
      <Active></Active>

      <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        <PremiumDigitalTools
          allCards={allCards}
          selectedCards={selectedCards}
          setSelectedCards={setSelectedCards}
          count={count}
          setCount={setCount}
        ></PremiumDigitalTools>
      </Suspense>
      <GetStared></GetStared>
      <Pricing></Pricing>
      <WorkFlow></WorkFlow>
    </>
  );
}

export default App;
