import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
      <aside>
        <Link to="/" className="text-2xl font-semibold logo" aria-label="Homepage">
          <span className="text-orange-500">Wildflower & Co.</span>
        </Link>
        <p className="mt-2 text-sm max-w-xs">
          Hand-picked floral arrangements for every occasion — crafted with care and creativity.
        </p>
      </aside>

      <nav>
        <h6 className="footer-title">Shop</h6>
        <Link to="/bouquets" className="link link-hover">Bouquets</Link>
        <Link to="/plants" className="link link-hover">Indoor Plants</Link>
        <Link to="/occasions" className="link link-hover">By Occasion</Link>
        <Link to="/gifts" className="link link-hover">Gifts & Add-ons</Link>
      </nav>

      <nav>
        <h6 className="footer-title">Company</h6>
        <Link to="/about" className="link link-hover">About Us</Link>
        <Link to="/contact" className="link link-hover">Contact</Link>
        <Link to="/careers" className="link link-hover">Careers</Link>
        <Link to="/blog" className="link link-hover">Blog</Link>
      </nav>

      <nav>
        <h6 className="footer-title">Support</h6>
        <Link to="/terms" className="link link-hover">Terms of Use</Link>
        <Link to="/privacy" className="link link-hover">Privacy Policy</Link>
        <Link to="/faq" className="link link-hover">FAQs</Link>
        <Link to="/shipping" className="link link-hover">Shipping Info</Link>
      </nav>
    </footer>
  );
};

export default Footer;
