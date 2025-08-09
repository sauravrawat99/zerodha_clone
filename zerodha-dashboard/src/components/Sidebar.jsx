

import React from "react";
import "./Sidebar.css";

const Sidebar = () => {

  const stocks = [
    { name: "SENSEX", value: "61560.64", change: "-0.60%" },
    { name: "NIFTY 50", value: "18181.75", change: "-0.57%" },
    { name: "ASIANPAINT", value: "3092.45", change: "-1.45%" },
    { name: "RITES", value: "396.50", change: "+2.10%" },
    { name: "RELIANCE", value: "2439.30", change: "-0.59%" },
    { name: "BHEL", value: "82.30", change: "+0.91%" },
    { name: "WIPRO", value: "382.30", change: "-1.20%" },
    { name: "SENSEX", value: "61560.64", change: "-0.60%" },
    { name: "NIFTY 50", value: "18181.75", change: "-0.57%" },
    { name: "ASIANPAINT", value: "3092.45", change: "-1.45%" },
    { name: "RITES", value: "396.50", change: "+2.10%" },
    { name: "RELIANCE", value: "2439.30", change: "-0.59%" },
    { name: "BHEL", value: "82.30", change: "+0.91%" },
    { name: "WIPRO", value: "382.30", change: "-1.20%" },
  ];

  return (
    <div className="sidebar">
      {stocks.map((stock, i) => (
        <div key={i} className="stock-row">
          <span>{stock.name}</span>
          <span>{stock.value}</span>
          <span className={stock.change.startsWith("+") ? "green" : "red"}>
            {stock.change}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
