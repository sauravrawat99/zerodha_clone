import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top">
      <div className="container" style={{ width: "100%", margin: "0" }}>
        <Link className="navbar-brand fw-bold text-primary" to="/">
          Zerodha
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                <i className="fas fa-tachometer-alt me-1"></i> Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/orders">
                <i className="fas fa-receipt me-1"></i> Orders
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/holdings">
                <i className="fas fa-piggy-bank me-1"></i> Holdings
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/positions">
                <i className="fas fa-chart-line me-1"></i> Positions
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/funds">
                <i className="fas fa-wallet me-1"></i> Funds
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/bids">
                <i className="fas fa-gavel me-1"></i> Bids
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
