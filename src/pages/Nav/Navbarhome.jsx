import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import { CiMenuBurger, CiMenuFries } from "react-icons/ci";
import { GoArrowDownRight } from "react-icons/go";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from '../../assets/logohome.png'

const Navbarhome = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);

  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setActiveDropdown(null);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target)
      ) {
        setIsOpen(false);
        setMobileDropdownOpen(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: "Home ", path: "/" },
    { name: "Solutions", subLinks: "Solutions" },
    { name: "Pricing", subLinks: "Pricing" },
        { name: "Partners", subLinks: "Partners" },
    { name: "About Us", path: "/AboutUs" },
    { name: "Contact Us", path: "/ContactUs" },
  ];

  const subLinkGroups = {
    Solutions: [
      { name: "Menu Scan", path: "/MenuScan" },
      { name: "Admin App", path: "/AdminApp" },
      { name: "Admin Panel", path: "/AdminPanel" },
      { name: "User App", path: "/UserApp" },
      { name: "Delivery App", path: "/DeliveryApp" },
      { name: "Website order online", path: "/Websiteorderonline" },
      { name: "pos", path: "/pos" },
    ],
    Pricing: [
      { name: "Pricing", path: "/Pricing" },
      { name: "Packages", path: "/Plans" },
    ],
        Partners:[
       { name: "Demos", path: "/demos" },
      { name: "Clients", path: "/clients" },
    ]
  };

  const isActive = (path) => {
    const cleanPath = path.split("#")[0];
    return location.pathname === cleanPath;
  };

  return (
    <div className="open-sans-light relative h-fit z-50 w-full">
      <div className=" mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex justify-between md:gap-5 lg:gap-20 h-[88px] items-center">
          <div>
   <a href="/" className="relative inline-block px-3 py-4">
  
<div className="absolute inset-0 bg-white/10 backdrop-blur-2xl  rounded-2xl border-white/20 z-0"></div>

  <img src={logo} 
  className="w-30 relative z-10 mt-1"
   alt="logo" />

</a>

                 </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 relative" ref={dropdownRef}>
            {navLinks.map((link, i) => {
              if (link.subLinks) {
                const isOpenDropdown = activeDropdown === link.name;
                return (
                  <div
                    key={i}
                    className="relative"
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === link.name ? null : link.name
                      )
                    }
                  >
                    <button
                      className={`relative md:text-[12px] lg:text-[14px] xl:text-[20px] font-normal flex group px-1 py-2 ${
                        isActive ? "text-white" : "text-one"
                      } items-center`}
                    >
                      {link.name}
                      <i>
                        <GoArrowDownRight />
                      </i>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-one transition-all duration-300 group-hover:w-full"></span>
                    </button>

                    {isOpenDropdown && (
                      <div className="absolute left-0 mt-10 w-[230px] bg-two flex flex-col shadow-lg rounded-[24px] py-2 z-[9999] space-y-2">
                        {subLinkGroups[link.subLinks].map((item, idx) => (
                          <Link
                            to={item.path}
                            key={idx}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-center justify-between px-3 py-2 text-five hover:text-one transition"
                          >
                            {item.name}
                            <MdArrowOutward className="w-5 h-5" />
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={i}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`relative md:text-[12px] lg:text-[14px] xl:text-[20px] font-normal group px-2 py-2 ${
                    isActive(link.path) ? "text-one" : "text-white"
                  }`}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-one transition-all duration-300 group-hover:w-full"></span>
                </Link>
              );
            })}
          </div>

          {/* Login/Signup */}
          <div className="hidden md:flex gap-2">
            <a
              href="https://my.food2go.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white border border-white rounded-[12px] px-4 py-2"
            >
              Log in
            </a>
            <a
              href="https://my.food2go.online/signUp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-one border bg-white rounded-[12px] px-4 py-2"
            >
              Sign up
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <CiMenuFries className="text-white text-4xl" />
              ) : (
                <CiMenuBurger className="text-white text-4xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div
          ref={mobileMenuRef}
          className="absolute w-full md:hidden px-4 pt-4 pb-6 space-y-4 bg-white backdrop-blur"
        >
          {navLinks.map((link, i) => {
            if (link.subLinks) {
              const isDropdownOpen = mobileDropdownOpen === link.name;
              return (
                <div key={i}>
                  <button
                    onClick={() =>
                      setMobileDropdownOpen(isDropdownOpen ? null : link.name)
                    }
                    className="w-full flex justify-between items-center px-3 py-2 text-black hover:text-one"
                  >
                    {link.name}
                    <svg
                      className={`w-4 h-4 ml-2 transition-transform duration-300 ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {isDropdownOpen && (
                    <div className="pl-4 mt-2 space-y-2">
                      {subLinkGroups[link.subLinks].map((item, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setIsOpen(false);
                            setMobileDropdownOpen(null);
                            navigate(item.path);
                          }}
                          className="block w-full text-left px-3 py-2 text-black hover:text-one"
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={i}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 ${
                  isActive(link.path)
                    ? "text-black"
                    : "text-black hover:text-one"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Navbarhome;
