import React from "react";
import "../Assets/Css/contributions/contribution.css";
const Contributions = () => {
  return (
    <div className="contributions">
      <div className="description">
        <h2>Our Contribution</h2>
        <p>
          Our core offering extends beyond mere profit generation; we emphasize
          the growth and active involvement of our user community. Collaborating
          with us represents an investment, rather than a mere expenditure. Our
          dedication to providing distinctive digital interactions guarantees
          unparalleled benefits for our clientele.
        </p>
      </div>
      <div className="counts">
        <div className="itm">
          <h2 className="count">5M</h2>
          <p className="info">Daily User Engagements</p>
        </div>
        <div className="itm">
          <h2 className="count">$500K</h2>
          <p className="info">Revenue Surge for anPlatform</p>
        </div>
        <div className="itm">
          <h2 className="count">10x</h2>
          <p className="info">ROAS on all our marketing campaigns</p>
        </div>
      </div>
    </div>
  );
};
export default Contributions;
