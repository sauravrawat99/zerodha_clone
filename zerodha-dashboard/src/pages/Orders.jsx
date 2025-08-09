import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Backend se orders data fetch karne ka example
    fetch("http://localhost:5000/api/orders")
      .then(res => res.json())
      .then(data => setOrders(data))
      .catch(err => console.error(err));
  }, []);

  if (orders.length === 0) {
    return (
      <div className="orders">
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to={"/order"} className="btn">
            Get started
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="orders">
      <h3 className="title">Orders ({orders.length})</h3>

      <div className="order-table table-responsive">
        <table className="table table-striped table-bordered align-middle text-center">
          <thead className="table-dark">
            <tr>
              <th>Order ID</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{order.id}</td>
                <td>{order.product}</td>
                <td>{order.qty}</td>
                <td>{order.price.toFixed(2)}</td>
                <td>{order.status}</td>
                <td>{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
