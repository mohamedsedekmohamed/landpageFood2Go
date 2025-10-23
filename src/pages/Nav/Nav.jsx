import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import { CiMenuBurger } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";
import { GoArrowDownRight } from "react-icons/go";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from '../../assets/logo.png'
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();
 const pathname = location.pathname.replace("/", "").toLowerCase();
  const excludedPaths = ["home", "aboutus", "contactus"];
  const showPathNameWithIcon = !excludedPaths.includes(pathname);
  
  const navLinks = [
    { name: "Home ", path: "/" },
    { name: "Solutions", subLinks: "Solutions" },
    { name: "Packages", subLinks: "Pricing" },
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
      { name: "Pos", path: "/Pos" },
    ],
    Pricing: [
      { name: "Pricing", path: "/Pricing" },
      { name: "Packages", path: "/Plans" },
    ],
  };

 
   const dropdownRef = useRef(null);
   const mobileMenuRef = useRef(null);
 
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
 
   useEffect(() => {
     AOS.init({ duration: 2000, once: true });
   }, []);
 

  const isActive = (path) => {
    return location.pathname === path;
  };
  return (
    <div className="open-sans-light  relative h-fit  z-50 w-full ">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex justify-between md:gap-5    lg:gap-20 h-[88px] items-center">
         
          <div>
<a href="/">
<img src={logo} className="w-30"/>
</a>
          </div>
          {/* Desktop Menu */} 
          <div className="hidden md:flex gap-6 relative"  ref={dropdownRef}>
    {navLinks.map((link, i) => {
  if (link.subLinks) {
    const isOpenDropdown = activeDropdown === link.name;

    const currentGroup = subLinkGroups[link.subLinks];
    const currentPage = currentGroup?.find(
      (p) => p.path.replace("/", "").toLowerCase() === pathname
    );
    const isCurrentGroupActive = currentGroup?.some(
      (p) => p.path.replace("/", "").toLowerCase() === pathname
    );

    return (
      <div
        key={i}
        className="relative"
        onMouseEnter={() => setActiveDropdown(link.name)}
        onClick={() => setActiveDropdown(null)}
      >
        <button
          className={`relative md:text-[12px] lg:text-[14px]
             xl:text-[20px] font-normal flex group px-1 py-2
              ${isCurrentGroupActive ? "text-one" : "text-black"}
               items-center`}
        >
          {(showPathNameWithIcon && currentPage) ? (
            <>
              <span>{currentPage.name}</span>{" "}
              <i>
                <GoArrowDownRight />
              </i>
            </>
          ) : (
            <>
              <span>{link.name}</span>
              <i>
                <GoArrowDownRight />
              </i>
            </>
          )}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-one transition-all duration-300 group-hover:w-full"></span>
        </button>

        {isOpenDropdown && (
          <div className="absolute left-0 mt-10 w-[230px] bg-two flex flex-col shadow-lg rounded-[24px] py-2 z-[9999] space-y-2">
            {subLinkGroups[link.subLinks].map((item, idx) => (
              <Link
                to={item.path}
                key={idx}
                onClick={() => setActiveDropdown(null)}
                className="flex items-center justify-between px-3 py-2 text-five md:text-[12px] lg:text-[14px] xl:text-[20px] hover:text-one transition w-full text-left"
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
        isActive(link.path) ? "text-one" : "text-black"
      }`}
    >
      {link.name}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-one transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
})}


          </div>

          <div className="flex gap-2">
            <a
            href="https://my.food2go.online/"
            className="text-one border border-one rounded-[12px] md:text-[12px] lg:text-[14px] xl:text-[20px] font-medium  px-2 md:px-4 py-2">
              Log in
            </a>
            <a
            href="https://my.food2go.online/signUp"
            className="bg-one  text-white rounded-[12px] md:text-[12px] lg:text-[14px] xl:text-[20px] font-medium px-2 md:px-4 py-2">
              Sign up
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <CiMenuFries className="text-black text-4xl" />
              ) : (
                <CiMenuBurger className="text-black text-4xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className=" absolute w-full md:hidden px-4 pt-4 pb-6 space-y-4 bg-white backdrop-blur">
          {navLinks.map((link, i) => {
            if (link.subLinks) {
              const isDropdownOpen = mobileDropdownOpen === link.name;

              return (
                <div key={i}>
                  <button
                    onClick={() =>
                      setMobileDropdownOpen(isDropdownOpen ? null : link.name)
                    }
                    className="w-full flex justify-between items-center px-3 py-2 font-normal rounded text-black  hover:text-one"
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
                    <div className= "pl-4 mt-2 space-y-2">
                      {subLinkGroups[link.subLinks].map((item, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setIsOpen(false);
                            setMobileDropdownOpen(null);
                            navigate(item.path);
                          }}
                          className="block w-full text-left px-3 py-2 text-black  hover:text-one rounded"
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
                className={`block px-3 py-2 rounded font-normal group relative ${
                  isActive(link.path)
                    ? " text-black "
                    : "text-black hover:bg-one hover:text-black"
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

export default Nav;
