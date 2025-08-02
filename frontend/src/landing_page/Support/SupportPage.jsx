import React from "react";
import Hero from "./Hero";
import CreatTicket from "./CreatTicket";

const SupportPage = () => {
  return (
    <>
      <Hero />

      <div className="container mt-3">
        <div className="row">
          {/* Left Side - CreatTickets */}
          <div className="col-md-8">
            <CreatTicket
              logo={<i className="fa-brands fa-ello"></i>}
              title={"Account Opening"}
              links={[
                "Resident individual",
                "Non Resident Indian (NRI) Company",
                "Partnership",
                "HUF and LLP",
                "Glossary",
              ]}
            />

            <CreatTicket
              logo={<i className="fa-solid fa-user"></i>}
              title={"Your Zerodha Account"}
              links={[
                "Your Profile",
                "Account modification Client",
                "Master Report (CMR) and Depository Participant (DP)",
                "Nomination",
                "Transfer and conversion of securities",
              ]}
            />

            <CreatTicket
              logo={<i className="fa-regular fa-font-awesome"></i>}
              title={"Kite"}
              links={[
                "IPO",
                "Trading FAQs",
                "Margin Trading Facility (MTF) and Margins",
                "Charts and orders",
                "Alerts and Nudges",
                "General",
              ]}
            />

            <CreatTicket
              logo={"₹"}
              title={"Fund"}
              links={[
                "Add Funds",
                "Withdraw Funds",
                "UPI, IMPS, NEFT",
                "Fund Limits",
                "Fund Transfer Issues",
              ]}
            />

            <CreatTicket
              logo={<i className="fa-regular fa-life-ring"></i>}
              title={"Console"}
              links={[
                "Portfolio",
                "Corporate actions",
                "Funds statement",
                "Reports",
                "Profile",
                "Segments",
              ]}
            />

            <CreatTicket
              logo={"€"}
              title={"Coin"}
              links={[
                "Mutual funds",
                "National Pension Scheme (NPS)",
                "Fixed Deposit (FD)",
                "Features on Coin",
                "Payments and Orders",
                "General",
              ]}
            />
          </div>

          {/* Right Side - Alerts & Quick Links */}
          <div className="col-md-4 ">
            <div className="bg-warning bg-opacity-10 p-3 mb-3 border-start border-4 border-warning rounded">
              <ul className="list-unstyled m-0">
                <li>
                  <a href="#" className="text-decoration-none text-primary">
                    Exclusion of F&O contracts on 8 securities from August 29,
                    2025
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-primary">
                    Revision in expiry day of Index and Stock derivatives
                    contracts
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-light p-3 border rounded">
              <h6>Quick links</h6>
              <ol className="ps-3">
                <li>
                  <a href="#" className="text-decoration-none text-primary">
                    Track account opening
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-primary">
                    Track segment activation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-primary">
                    Intraday margins
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-primary">
                    Kite user manual
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportPage;
