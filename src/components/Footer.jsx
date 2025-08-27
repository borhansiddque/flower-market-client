import React from "react";
import { Link } from "react-router";

const Footer = () => {
  const shopLinks = [
    { to: "/bouquets", label: "Bouquets" },
    { to: "/plants", label: "Indoor Plants" },
    { to: "/occasions", label: "By Occasion" },
    { to: "/gifts", label: "Gifts & Add-ons" },
  ];
  const companyLinks = [
    { to: "/about", label: "About Us" },
    { to: "/contact", label: "Contact" },
    { to: "/careers", label: "Careers" },
    { to: "/blog", label: "Blog" },
  ];
  const supportLinks = [
    { to: "/terms", label: "Terms of Use" },
    { to: "/privacy", label: "Privacy Policy" },
    { to: "/faq", label: "FAQs" },
    { to: "/shipping", label: "Shipping Info" },
  ];
  return (
    <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
      <aside>
        <Link
          to="/"
          className="text-2xl font-semibold logo"
          aria-label="Homepage"
        >
          <span className="text-orange-500">Wildflower & Co.</span>
        </Link>
        <p className="mt-2 text-sm max-w-xs">
          Beautifully curated blooms to brighten your day — delivered fresh with
          love and passion.
        </p>
      </aside>

      <nav>
        <h6 className="footer-title">Shop</h6>
        {shopLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="link link-hover decoration-orange-500"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <nav>
        <h6 className="footer-title">Company</h6>
        {companyLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="link link-hover decoration-orange-500"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <nav>
        <h6 className="footer-title">Support</h6>
        {supportLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="link link-hover decoration-orange-500"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </footer>
  );
};

export default Footer;
