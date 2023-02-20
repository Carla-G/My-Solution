import React, { useState } from "react";
import axios from "axios";
import "./index.css";

export default function StockData() {
  const [searchedData, setSearchedData] = useState("");
  const [data, setData] = useState("");

  const getStocksData = () => {
    axios
      .get(`https://jsonmock.hackerrank.com/api/stocks?date=${searchedData}`)
      .then((response) => console.log(response.data.data))
  };

  const {open, high, low, close} = data;

  return (
    <div className="layout-column align-items-center mt-50">
      <section className="layout-row align-items-center justify-content-center">
        <input type="text" className="large" placeholder="5-January-2000" id="app-input" data-testid="app-input" value={searchedData} onChange={e => setSearchedData(e.target.value)}/>
        <button className="" id="submit-button" data-testid="submit-button" onClick={getStocksData}>Search</button>
      </section>
      <div>
      {data.length > 0 ?
      (<ul className="mt-50 slide-up-fade-in styled" id="stockData" data-testid="stock-data">
        <li className="py-10">Open: {open}</li>
        <li className="py-10">High: {high}</li>
        <li className="py-10">Low: {low}</li>
        <li className="py-10">Close: {close}</li>
      </ul>) :
      <div className="mt-50 slide-up-fade-in" id="no-result" data-testid="no-result">No results found</div>}
      </div>
    </div>
  );
}