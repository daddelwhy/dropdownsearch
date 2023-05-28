import "./App.css";
import Mynavbar from "./components/Mynavbar";
import Detail from "./components/Detail";
import { useState } from "react";
import data from "./data/data";

function App() {
  const [foods, setFoods] = useState(data);
  const foodsdata = (e) => {
    const category = e.target.value;
    if (category === "เมนูทั้งหมด") {
      setFoods(data);
    } else {
      const results = data.filter((Element) => Element.menu === category);
      setFoods(results);
    }
  };
  return (
    <>
        <Mynavbar foodsdata={foodsdata} />
        <Detail foods={foods} />
    </>
  );
}

export default App;
