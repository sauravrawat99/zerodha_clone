import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col-3 ">
            <img
              className="mb-3"
              src="media/images/logo.svg"
              style={{ width: "50%" }}
            />
            <p>
              &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
            </p>
            <div className="mt-4">
              <a href="#" className="text-dark me-3">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="#" className="text-dark me-3">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a href="#" className="text-dark me-3">
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
              <a href="#" className="text-dark me-3">
                <i className="fab fa-github fa-lg"></i>
              </a>
              <a href="#" className="text-dark">
                <i className="fab fa-youtube fa-lg"></i>
              </a>
            </div>
          </div>

          {/* 🟢 Account */}
          <div className="col md-3 mb-4">
            <h6 className="fw-bold">Account</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  Open demat account
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  Minor demat account
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  NRI demat account
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  Commodity
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  Dematerialisation
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  Fund transfer
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  MTF
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  Referral program
                </a>
              </li>
            </ul>
          </div>

          {/* 🔵 Support */}
          <div className="col md-3 mb-4">
            <h6 className="fw-bold">Support</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  Support portal
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  How to file a complaint?
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  Status of your complaints
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  Bulletin
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  Circular
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  Z-Connect blog
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  Downloads
                </a>
              </li>
            </ul>
          </div>

          {/* 🟣 Company */}
          <div className="col md-3 mb-4">
            <h6 className="fw-bold">Company</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  Philosophy
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  Press & media
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  Zerodha Cares (CSR)
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  Zerodha.tech
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  Open source
                </a>
              </li>
            </ul>
          </div>

          {/* 🔶 Quick Links */}
          <div className="col md-3 mb-4">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  Upcoming IPOs
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  Brokerage charges
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  Market holidays
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  Economic calendar
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  Calculators
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  Markets
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  Sectors
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col"></div>
      </div>
      <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
        <p>
          Zerodha Broking Ltd.: Member of NSE BSE – SEBI Registration no.:
          INZ000031633 CDSL: Depository services through Zerodha Securities Pvt.
          Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading through
          Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration no.:
          INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th
          Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th
          Phase, Bengaluru - 560078, Karnataka, India. For any complaints
          pertaining to securities broking please write to
          complaints@zerodha.com, for DP related to dp@zerodha.com. Please
          ensure you carefully read the Risk Disclosure Document as prescribed
          by SEBI | ICF
        </p>

        <p>
          Procedure to file a complaint on SEBI SCORES: Register on SCORES
          portal. Mandatory details for filing complaints on SCORES: Name, PAN,
          Address, Mobile Number, E-mail ID. Benefits: Effective Communication,
          Speedy redressal of the grievances
        </p>

        <p>
          Investments in securities market are subject to market risks; read all
          the related documents carefully before investing.
        </p>

        <p>
          "Prevent unauthorised transactions in your account. Update your mobile
          numbers/email IDs with your stock brokers. Receive information of your
          transactions directly from Exchange on your mobile/email at the end of
          the day. Issued in the interest of investors. KYC is one time exercise
          while dealing in securities markets - once KYC is done through a SEBI
          registered intermediary (broker, DP, Mutual Fund etc.), you need not
          undergo the same process again when you approach another
          intermediary." Dear Investor, if you are subscribing to an IPO, there
          is no need to issue a cheque. Please write the Bank account number and
          sign the IPO application form to authorize your bank to make payment
          in case of allotment. In case of non allotment the funds will remain
          in your bank account. As a business we don't give stock tips, and have
          not authorized anyone to trade on behalf of others. If you find anyone
          claiming to be part of Zerodha and offering such services, please
          create a ticket here.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
