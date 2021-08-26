import React from "react";
import './Footer.css';
import logo from "../../images/Flex Perks Logo.png";


function Footer() {
  return (
    <footer className= "footer-back">
      <div className="footer-policy">
          <div className="footer-details" >
          <a href="#">Contact Us</a>
          <a href="#">Program Rules</a>
          <a href="#">FAQs</a>
          <a href="#">Privacy</a>
          </div>
          <div className="footer-logo">
              <img src={logo} alt={logo} />
          </div>
      </div>
      <div className="underline">--------------------------------------------------</div>

      <section className="copyright">
          <p>@ 2019 U.S Bank</p>
          <p>The Creater and issuer of your Card is U.S Bank National Association, persuent to a license from Visa U.S.A Inc. </p>
          {/* <i class="fas fa-plus-circle"></i> */}
      </section>

    </footer>
  );
}

export default Footer;
