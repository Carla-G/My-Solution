import React, { useState } from "react";
import axios from "axios";
import "./index.css";

export default function StockData() {
  const [searchedData, setSearchedData] = useState("");
  const [data, setData] = useState("");

  const getStocksData = () => {
    axios
      .get(`https://jsonmock.hackerrank.com/api/stocks?date=${searchedData}`)
      .then((response) => setData(response.data))
  };

  return (
    <div className="layout-column align-items-center mt-50">
      <section className="layout-row align-items-center justify-content-center">
        <input type="text" className="large" placeholder="5-January-2000" id="app-input" data-testid="app-input" value={searchedData} onChange={e => setSearchedData(e.target.value)}/>
        <button className="" id="submit-button" data-testid="submit-button">Search</button>
      </section>
      <ul className="mt-50 slide-up-fade-in styled" id="stockData" data-testid="stock-data">
        <li className="py-10"></li>
      </ul>
      <div className="mt-50 slide-up-fade-in" id="no-result" data-testid="no-result"></div>
    </div>
  );
}
function App() {




  return (
    <div className="App">
      <DisplayEmployee employee={employee} />
      <button type="button" onClick={getEmployee}>Get employee</button>
    </div>
  );
}

export default App;