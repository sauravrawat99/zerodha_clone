import React, { useEffect, useState } from "react";
import axios from "axios";

const Holdings = () => {
  const [holdings, setHoldings] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/holdings")
      .then((res) => {
        setHoldings(res.data);
      })
      .catch((err) => {
        console.error("Error fetching holdings:", err);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h3 className="mb-3">Holdings</h3>
      <div className="table-responsive">
        <table className="table table-striped table-bordered align-middle text-center">
          <thead className="table-dark">
            <tr>
              <th>Stock</th>
              <th>Qty</th>
              <th>Avg Price</th>
              <th>Current Price</th>
              <th>Net P&L</th>
              <th>Day Change</th>
            </tr>
          </thead>
          <tbody>
            {holdings.length > 0 ? (
              holdings.map((stock, index) => (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>₹{stock.avg}</td>
                  <td>₹{stock.price}</td>
                  <td
                    className={stock.net.includes("-") ? "text-danger" : "text-success"}
                  >
                    {stock.net}
                  </td>
                  <td
                    className={stock.day.includes("-") ? "text-danger" : "text-success"}
                  >
                    {stock.day}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">Loading...</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Holdings;
