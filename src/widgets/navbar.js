import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion
import Page1 from "./page1";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinksLeft = [
    { title: "Home", href: "/" },
    { title: "Buy", href: "/buy" },
    { title: "Sell", href: "/sell" },
    { title: "Contact Us", href: "/contactUs" },
  ];

  const navLinksRight = [
    { title: "Properties", href: "/properties" },
    { title: "Resources", href: "/resources" },
  ];

  const location = useLocation();
  useEffect(() => {
    const activeLink = [...navLinksLeft, ...navLinksRight].find(
      (link) => link.href === location.pathname
    );
    if (activeLink) {
      setActiveLink(activeLink.title);
    }
  }, [location]);

  const logoUrl =
    "https://media-hosting.imagekit.io//432a35325f694451/logo.png?Expires=1834842381&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=bUTNXPHieLXZkZ1TVU8c7c0Sp1tM0ss5CmY5i799UOCbkGbACfxakQJSUnvyWWoNnA7ctpJyYauHziza2ox1Mf8WYsagLmr1EGDozBz6RRgT2siO2Fb8UDiUL0xUAdWHOwbWGkx-w6frrC8jyVW0oL6AO8WTmOc~yoK4K3Fkq3RXAW8FxwW4RbBJApNfppfroRExs3FahGxzNYtY6dqHm8P~X6gE~kK4P1Kfa2375FdAQlXoR347dhtKEc6qKUgnsvrz7c76hraZ0Fi3C1Kxlg3G2vqUzvAOWc2G1LKmcND-2X31I4gUVsM~jSchIssyj86h-dal5Ve3fFhwGBE2Ww__";

  return (
    <>
      {/* Navbar Animation */}
      <motion.nav
  initial={{ opacity: 0, y: -70 }} // Start higher for a more noticeable effect
  animate={{ opacity: 1, y: 0 }} // Smooth slide-down
  transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }} // Smooth and natural
  className="bg-backgroundColor font-inter border-gray-200 fixed top-0 left-0 w-full z-50 shadow-md"
>

        <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4 md:px-6">
          {/* Left Nav Links */}
          <ul className="hidden md:flex space-x-6">
            {navLinksLeft.map((link, index) => (
              <li key={index}>
                <Link to={link.href} className={`text-white hover:text-gray-300 ${activeLink === link.title ? "underline underline-offset-4":""}`}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Centered Logo */}
          <Link to="/" className="flex">
            <img src={logoUrl} className="h-12 lg:h-14 ml-4 md:ml-0" alt="Company Logo" />
          </Link>

          {/* Right Nav Links + CTA */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinksRight.map((link, index) => (
              <Link key={index} to={link.href} className={`text-white hover:text-gray-300 ${activeLink === link.title ? "underline underline-offset-4"  :''}`}>
                {link.title}
              </Link>
            ))}
            <button className="text-black bg-white hover:bg-gray-300 font-medium  text-sm px-4 py-2 rounded-md">
              Schedule a Call
            </button>
          </div>

          {/* Mobile CTA + Hamburger Menu */}
          <div className="flex items-center md:hidden space-x-2">
            {/* Schedule a Call - Left of Hamburger */}
            <button className="text-black bg-white hover:bg-gray-300 font-medium rounded-md text-sm px-4 py-2">
              Schedule a Call
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-white rounded-lg hover:bg-gray-700"
              onClick={toggleMenu}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu with Animation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -30 }} // Start hidden & above
              animate={{ opacity: 1, y: 0 }} // Slide down smoothly
              exit={{ opacity: 0, y: -30 }} // Slide up on exit
              transition={{ duration: 0.3, ease: "easeOut" }} // Smooth transition
              className="md:hidden bg-backgroundColor absolute w-full left-0 top-16 shadow-lg"
            >
              <ul className="font-medium p-4 space-y-4">
                {[...navLinksLeft, ...navLinksRight].map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block text-white hover:text-blue-300  ${activeLink === link.title ? "underline underline-offset-4"  :''}`}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Page Content */}
      <div className="pt-16">
  <Page1 page={activeLink} />
</div>
    </>
  );
};

export default Navbar;
