import React from "react";
import { Link } from "react-router-dom";
import Teamcard from "./Teamcard";

const Team = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <h3 className="fw-normal">People</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-6 p-5 text-center">
          <img
            src="media/images/nithin-kamath.jpg"
            alt="nithin kamath"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h3 className="Text-center fw-normal pt-3">Nithin Kamath</h3>
          <p className="Text-center">Founder, CEO</p>
        </div>
        <div className="col-6 py-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>

          {/* ✅ Correct Link usage */}
          <span></span>
          <Link className="nav-link" to="/">
            <p>
              {" "}
              Connect on Zerodha’
              <sspan style={{ color: "blue" }}> home page </sspan>
            </p>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <Teamcard
            name={"Nikhil Kamath"}
            role={"Co-founder & CFO"}
            bio={
              "Nikhil is an astute and experienced investor, and he heads financial planning at Zerodha. An avid reader, he always appreciates a good game of chess."
            }
            image={"media/images/Nikhil.jpg"}
          />
        </div>
        <div className="col-4">
          <Teamcard
            name={"Dr. KailashNadh"}
            role={"Cto"}
            bio={
              "Kailash has a PhD in Artificial Intelligence & Computational Linguistics, and is the brain behind all our technology and products. He has been a developer from his adolescence and continues to write code every day."
            }
            image={"media/images/Kailash.jpg"}
          />
        </div>
        <div className="col-4">
          <Teamcard
            name={"Venu Madhav"}
            role={"Coo"}
            bio={
              "Venu is the backbone of Zerodha taking care of operations and ensuring that we are compliant to rules and regulations. He has over a dozen certifications in financial markets and is also proficient in technical analysis. Workouts, cycling, and adventuring is what he does outside of Zerodha."
            }
            image={"media/images/Venu.jpg"}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Teamcard
            name={"Austin Prakesh"}
            role={"Director Strategy"}
            bio={
              "Austin is a successful self-made entrepreneur from Singapore. His area of specialty revolves around helping organisations including grow by optimizing revenue streams and creating growth strategies. He is a boxing enthusiast and loves collecting exquisite watches."
            }
            image={"media/images/Austin.jpg"}
          />
        </div>
        <div className="col-4">
          <Teamcard
            name={"Seema Patil"}
            role={"Director"}
            bio={
              "Seema who has lead the quality team since the beginning of Zerodha, is now a director. She is an extremely disciplined fitness enthusiast."
            }
            image={"media/images/Seema.jpg"}
          />
        </div>
        <div className="col-4">
          <Teamcard
            name={"Karthik Rangappa"}
            role={"Chif of Education"}
            bio={
              "Karthik Rangappa single handledly wrote Varsity, Zerodha's massive educational program. He heads investor education initiatives at Zerodha and loves stock markets, classic rock, single malts, and photography."
            }
            image={"media/images/karthik.jpg"}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <Teamcard
            name={"Hanan Delvi"}
            role={"CCo"}
            bio={
              "We take pride in the way we support our clients, and Hanan is responsible for this with his never ending flow of energy. He is the man behind many of our support initiatives that have helped us stay ahead of the game. A free thinker, Hanan can be seen posing as one in his free time."
            }
            image={"media/images/Hanan.jpg"}
          />
        </div>
      </div>
    </div>
  );
};

export default Team;
