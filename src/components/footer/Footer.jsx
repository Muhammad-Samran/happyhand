import React from "react";
import "./footer.css";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

function Footer() {
  return (
    <>
      <div className="footer-main d-flex flex-row flex-wrap justify-content-between px-5 py-3 pt-4">
        <div className="d-flex flex-column listFooter">
          <h4>| Help & Support</h4>
          <a href="https://happyhandsart.com.au/our-story/">Our Story</a>
          <a href="https://happyhandsart.com.au/store/">Store</a>
          <a href="https://happyhandsart.com.au/faq/">Faq's</a>
          <a href="https://happyhandsart.com.au/contact-us/">Contact Us</a>
        </div>
        <div className="d-flex flex-column listFooter">
          <h4>| My Account</h4>
          <a href="https://happyhandsart.com.au/my-account/orders/">
            My Orders
          </a>
          <a href="https://happyhandsart.com.au/my-account/">My Account</a>
          <a href="https://happyhandsart.com.au/cart/">Checkout </a>
        </div>
        <div className="d-flex flex-column listFooter">
          <h4>| Social Share</h4>
          <a
            href="https://www.facebook.com/happyhandsarttime"
            className="d-flex align-items-center"
          >
            <div className="d-flex align-items-center">
              <BsFacebook />
            </div>

            <div className="px-1">Facebook</div>
          </a>
          <a href="" className="d-flex align-items-center">
            <div className="d-flex align-items-center">
              <BsInstagram />
            </div>

            <div className="px-1">Instagram</div>
          </a>
        </div>
        <div className="d-flex flex-column listFooter">
          <h4>| More</h4>
          <a href="">Privacy Policy</a>
          <a>Email: carolin@happyhandsart.com.au</a>
        </div>
      </div>
      <div className="copyrights">
        <span>© Copyright - Happy Hands Art Time</span>
      </div>
    </>
  );
}

export default Footer;
