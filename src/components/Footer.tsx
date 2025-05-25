import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 bg-secondary/20 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Site Map */}
          <div>
            <h3 className="font-bold text-lg mb-4">Site Map</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-primary"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/packages"
                  className="text-muted-foreground hover:text-primary"
                >
                  Packages
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/resources"
                  className="text-muted-foreground hover:text-primary"
                >
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-bold text-lg mb-4">Help</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/terms"
                  className="text-muted-foreground hover:text-primary"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/child-protection"
                  className="text-muted-foreground hover:text-primary"
                >
                  Child Protection Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-muted-foreground hover:text-primary"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/cancellation"
                  className="text-muted-foreground hover:text-primary"
                >
                  Cancellation Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/success-stories"
                  className="text-muted-foreground hover:text-primary"
                >
                  Happy Stories
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-muted-foreground hover:text-primary"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-primary"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="text-muted-foreground hover:text-primary"
                >
                  Courses
                </Link>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">
              Syro Malabar Matrimony
            </h2>
            <p className="text-muted-foreground">
              The premier Catholic matrimonial site exclusively for Syro Malabar
              brides and grooms.
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Syro Malabar Matrimony. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
