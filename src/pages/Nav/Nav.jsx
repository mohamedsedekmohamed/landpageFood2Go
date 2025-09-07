import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import { CiMenuBurger } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";
import { GoArrowDownRight } from "react-icons/go";
import AOS from "aos";
import "aos/dist/aos.css";
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
          <a href="/" className="open-sans-bold text-[20px] md:text-[20px]  lg:text-[40px] text-one font-bold flex items-center">
            <svg
              width="56"
              height="55"
              viewBox="0 0 56 55"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.1781 35.8688V35.8931H26.5565C26.7457 35.9012 26.9432 35.9012 27.1488 35.9012C27.3792 35.9012 27.6095 35.9012 27.8234 35.8931V35.8688C27.2805 35.885 26.7293 35.8769 26.1781 35.8688ZM22.4844 35.6257C22.4718 35.6192 22.4575 35.6164 22.4433 35.6176C22.0155 35.569 21.6042 35.5204 21.2422 35.4556V35.4961C21.744 35.5852 22.2952 35.6581 22.8875 35.7148V35.6662C22.7476 35.65 22.616 35.6419 22.4844 35.6257Z"
                fill="#9E090F"
              />
              <path
                d="M33.8787 18.0699C33.5868 18.071 33.2954 18.0927 33.0066 18.1347C32.44 17.0467 31.5796 16.1337 30.52 15.4963C29.4605 14.8588 28.2429 14.5215 27.0013 14.5215C25.7597 14.5215 24.5421 14.8588 23.4825 15.4963C22.423 16.1337 21.5626 17.0467 20.9959 18.1347C20.7072 18.0927 20.4158 18.071 20.1239 18.0699C18.6999 18.0695 17.3242 18.5786 16.253 19.5027C15.1818 20.4267 14.4881 21.7025 14.3009 23.0927C14.1138 24.4829 14.446 25.8927 15.2357 27.0597C16.0254 28.2266 17.2189 29.0712 18.5938 29.4362V32.9603C19.423 33.3827 20.3185 33.6648 21.2427 33.7948V29.9466C21.2427 29.7317 21.3294 29.5257 21.4837 29.3738C21.638 29.2218 21.8472 29.1365 22.0654 29.1365C22.2836 29.1365 22.4928 29.2218 22.6471 29.3738C22.8014 29.5257 22.888 29.7317 22.888 29.9466V34.054C23.8012 34.1594 24.8953 34.2404 26.1786 34.2647V29.9466C26.1786 29.7317 26.2653 29.5257 26.4196 29.3738C26.5739 29.2218 26.7831 29.1365 27.0013 29.1365C27.2195 29.1365 27.4287 29.2218 27.583 29.3738C27.7373 29.5257 27.8239 29.7317 27.8239 29.9466V34.2728C29.1155 34.2566 30.2014 34.1837 31.1145 34.0864V29.9466C31.1145 29.7317 31.2012 29.5257 31.3555 29.3738C31.5098 29.2218 31.719 29.1365 31.9372 29.1365C32.1554 29.1365 32.3646 29.2218 32.5189 29.3738C32.6732 29.5257 32.7599 29.7317 32.7599 29.9466V33.8353C33.693 33.7193 34.5934 33.4219 35.4088 32.9603V29.4362C36.7837 29.0712 37.9771 28.2266 38.7669 27.0597C39.5566 25.8927 39.8888 24.4829 39.7016 23.0927C39.5145 21.7025 38.8207 20.4267 37.7495 19.5027C36.6783 18.5786 35.3027 18.0695 33.8787 18.0699ZM35.8201 34.6616C35.6927 34.5993 35.5508 34.5713 35.4088 34.5806C34.5934 35.0422 33.693 35.3396 32.7599 35.4556V35.4799C32.2745 35.5771 31.7398 35.6419 31.1721 35.6986C31.1526 35.6973 31.133 35.7001 31.1145 35.7067C30.2014 35.804 29.1155 35.8769 27.8239 35.8931C27.6101 35.9012 27.3797 35.9012 27.1494 35.9012C26.9437 35.9012 26.7463 35.9012 26.5571 35.8931H26.1786V35.885C24.8953 35.8607 23.8012 35.7796 22.888 35.6743V35.7148C22.2957 35.6581 21.7445 35.5852 21.2427 35.4961V35.4151C20.3185 35.2851 19.423 35.003 18.5938 34.5806C18.4762 34.5633 18.3562 34.5711 18.2419 34.6033C18.1276 34.6356 18.0216 34.6916 17.9312 34.7676C17.8407 34.8437 17.7679 34.9379 17.7176 35.044C17.6673 35.1501 17.6406 35.2656 17.6395 35.3827V38.3721C17.6395 38.8906 17.6395 40.4785 27.4208 40.4785C29.3155 40.4978 31.2093 40.3895 33.0889 40.1544C34.6684 39.9357 36.2808 39.5468 36.2808 38.3721V35.3827C36.2809 35.2319 36.2377 35.0842 36.1562 34.9566C36.0747 34.8291 35.9582 34.7268 35.8201 34.6616Z"
                fill="#9E090F"
              />
              <path
                d="M31.6727 35.6338C31.6311 35.6352 31.5898 35.6407 31.5493 35.65C31.4094 35.6662 31.2614 35.6824 31.1133 35.6986V35.7067C31.1317 35.7001 31.1513 35.6973 31.1709 35.6986C31.7385 35.6419 32.2732 35.5771 32.7586 35.4799V35.4718C32.4213 35.5285 32.0593 35.5852 31.6727 35.6338Z"
                fill="#9E090F"
              />
              <path
                d="M27.825 35.8688V35.8935C27.6111 35.9017 27.3808 35.9017 27.1504 35.9017C26.9448 35.9017 26.7473 35.9017 26.5581 35.8935H26.1797V35.8688C26.7309 35.877 27.282 35.8852 27.825 35.8688Z"
                fill="#9E090F"
              />
              <path
                d="M32.7586 35.4718V35.4799C32.2732 35.5771 31.7385 35.6419 31.1709 35.6986C31.1513 35.6973 31.1317 35.7001 31.1133 35.7067V35.6986C31.2614 35.6824 31.4094 35.6662 31.5493 35.65C31.5898 35.6407 31.6311 35.6352 31.6727 35.6338C32.0593 35.5852 32.4213 35.5285 32.7586 35.4718Z"
                fill="#9E090F"
              />
              <path
                d="M22.8875 35.6662V35.7148C22.2952 35.6581 21.744 35.5852 21.2422 35.4961V35.4556C21.6042 35.5204 22.0155 35.569 22.4433 35.6176C22.4575 35.6164 22.4718 35.6192 22.4844 35.6257C22.616 35.6419 22.7476 35.65 22.8875 35.6662Z"
                fill="#9E090F"
              />
              <path
                d="M23.9809 44.8289C23.7914 44.8285 23.6038 44.8664 23.4297 44.9403C23.2557 45.0141 23.0989 45.1224 22.969 45.2583C20.5229 44.7172 18.2245 43.6615 16.2315 42.1636C16.1995 42.1322 16.1636 42.105 16.1245 42.0826C14.0201 40.4733 12.3164 38.4123 11.1431 36.0565C9.96981 33.7007 9.35795 31.1122 9.35413 28.4884V28.4803C9.35458 25.9053 9.94166 23.3632 11.0721 21.0414C12.2026 18.7195 13.8476 16.677 15.886 15.0643C16.0134 14.9953 16.137 14.9195 16.2562 14.8374L16.2644 14.8293C16.4289 14.724 16.684 14.5863 16.9966 14.4243C19.193 13.2496 24.3428 10.5113 23.9397 5.24533C23.9246 5.0428 23.8322 4.85341 23.6811 4.71517C23.5301 4.57693 23.3315 4.50006 23.1253 4.5C21.0083 4.57963 18.9969 5.43144 17.4819 6.88992C15.8613 8.51021 15.0222 10.811 14.9811 13.7113C14.9577 13.7256 14.9357 13.7418 14.9152 13.7599C13.9422 14.5175 13.0492 15.3697 12.2499 16.3038C12.2992 13.6951 11.7398 10.0738 8.78649 7.71627C8.69125 7.63957 8.57958 7.58514 8.45988 7.55707C8.34019 7.52901 8.2156 7.52804 8.09547 7.55424C7.97424 7.57937 7.86029 7.631 7.76204 7.70532C7.66379 7.77964 7.58375 7.87475 7.52784 7.98362C7.41267 8.21856 4.69792 13.7113 6.57356 17.3003C6.90806 17.9234 7.37035 18.4712 7.93114 18.9091C8.49192 19.347 9.13897 19.6654 9.83126 19.8441C9.02001 21.3766 8.43813 23.0165 8.10369 24.7131C6.99311 22.469 4.96939 19.9575 1.43199 19.6011C1.3173 19.5904 1.20163 19.6037 1.09249 19.64C0.983347 19.6762 0.883193 19.7348 0.798547 19.8117C0.712866 19.8853 0.644276 19.9763 0.597434 20.0783C0.550593 20.1804 0.526595 20.2911 0.527072 20.4031C0.527072 20.6705 0.535298 25.6042 3.44749 28.0509C4.51871 28.951 5.88973 29.4299 7.2975 29.3957C7.44302 29.3983 7.58858 29.3928 7.7335 29.3795C7.82132 31.2817 8.20703 33.159 8.87699 34.9452C6.12395 34.1639 3.18463 34.3122 0.527072 35.3665C0.412535 35.4103 0.309462 35.479 0.225457 35.5673C0.141451 35.6557 0.0786571 35.7614 0.0417073 35.8769C0.00219165 35.9926 -0.00946011 36.1158 0.00767251 36.2367C0.0248051 36.3576 0.0702528 36.4729 0.140426 36.5736C0.239144 36.7194 2.59193 40.1463 5.86608 40.1787H5.92367C6.77612 40.1391 7.60929 39.9153 8.36418 39.5233C9.11906 39.1313 9.77719 38.5807 10.2919 37.9103C11.1751 39.4221 12.2689 40.8047 13.5414 42.0177C11.0817 42.3904 7.38799 43.9054 6.57356 49.5764C6.55611 49.6958 6.56628 49.8176 6.60331 49.9327C6.64035 50.0477 6.7033 50.153 6.78745 50.2407C6.86319 50.3233 6.9559 50.3892 7.05943 50.4339C7.16296 50.4786 7.27495 50.5011 7.38799 50.5H7.44557C7.51138 50.4919 14.216 49.9734 16.1657 44.0998C18.1633 45.4331 20.4035 46.3738 22.7633 46.8705C22.8828 47.0824 23.057 47.2595 23.2683 47.3837C23.4797 47.5079 23.7206 47.5749 23.9667 47.5778C24.2128 47.5808 24.4553 47.5196 24.6697 47.4005C24.884 47.2813 25.0625 47.1085 25.1872 46.8995C25.3118 46.6905 25.3781 46.4528 25.3794 46.2104C25.3806 45.968 25.3168 45.7297 25.1943 45.5194C25.0718 45.3092 24.895 45.1346 24.6819 45.0133C24.4689 44.8921 24.227 44.8285 23.9809 44.8289Z"
                fill="#9E090F"
              />
              <path
                d="M53.9581 35.8769C53.9212 35.7614 53.8584 35.6557 53.7744 35.5673C53.6904 35.479 53.5873 35.4103 53.4727 35.3665C50.8152 34.3122 47.8759 34.1639 45.1228 34.9452C45.7928 33.159 46.1785 31.2817 46.2663 29.3795C46.4112 29.3928 46.5568 29.3983 46.7023 29.3957C48.1101 29.4299 49.4811 28.951 50.5523 28.0509C53.4645 25.6042 53.4727 20.6705 53.4727 20.4031C53.4732 20.2911 53.4492 20.1804 53.4024 20.0783C53.3555 19.9763 53.287 19.8853 53.2013 19.8117C53.1166 19.7348 53.0165 19.6762 52.9073 19.64C52.7982 19.6037 52.6825 19.5904 52.5678 19.6011C49.0304 19.9575 47.0067 22.469 45.8961 24.7131C45.5617 23.0165 44.9798 21.3766 44.1686 19.8441C44.8609 19.6654 45.5079 19.347 46.0687 18.9091C46.6295 18.4712 47.0918 17.9234 47.4263 17.3003C49.3019 13.7113 46.5872 8.21856 46.472 7.98362C46.4161 7.87475 46.336 7.77964 46.2378 7.70532C46.1395 7.631 46.0256 7.57937 45.9044 7.55424C45.7842 7.52804 45.6596 7.52901 45.5399 7.55707C45.4202 7.58514 45.3086 7.63957 45.2133 7.71627C42.26 10.0738 41.7006 13.6951 41.75 16.3038C40.9506 15.3697 40.0576 14.5175 39.0846 13.7599C39.0642 13.7418 39.0421 13.7256 39.0188 13.7113C38.9776 10.811 38.1385 8.51021 36.5179 6.88992C35.003 5.43144 32.9916 4.57963 30.8745 4.5C30.6683 4.50006 30.4697 4.57693 30.3187 4.71517C30.1676 4.85341 30.0752 5.0428 30.0601 5.24533C29.657 10.5113 34.8068 13.2496 37.0033 14.4243C37.3159 14.5944 37.5791 14.724 37.7272 14.8212C37.7272 14.8293 37.7354 14.8293 37.7436 14.8374C37.8628 14.9195 37.9864 14.9953 38.1138 15.0643C40.1522 16.677 41.7973 18.7195 42.9277 21.0414C44.0582 23.3632 44.6452 25.9053 44.6457 28.4803V28.4884C44.6416 31.1346 44.0191 33.7445 42.8265 36.1158C41.6339 38.4872 39.9032 40.5565 37.7683 42.1636C35.7387 43.6936 33.3899 44.7616 30.891 45.2907C30.6541 45.0837 30.3519 44.9635 30.0354 44.9505C29.6645 44.9354 29.3027 45.0661 29.0296 45.3138C28.7566 45.5614 28.5946 45.9057 28.5793 46.271C28.564 46.6363 28.6967 46.9926 28.9482 47.2615C29.1997 47.5304 29.5493 47.6899 29.9202 47.705C30.2047 47.718 30.4863 47.644 30.7264 47.4931C30.9665 47.3423 31.1533 47.122 31.2612 46.8624C33.6117 46.3649 35.8432 45.427 37.8341 44.0998C39.7838 49.9734 46.4884 50.4919 46.5542 50.5H46.6118C46.7249 50.5011 46.8369 50.4786 46.9404 50.4339C47.0439 50.3892 47.1366 50.3233 47.2124 50.2407C47.2965 50.153 47.3595 50.0477 47.3965 49.9327C47.4335 49.8176 47.4437 49.6958 47.4263 49.5764C46.6118 43.9054 42.9181 42.3904 40.4584 42.0177C41.7309 40.8047 42.8247 39.4221 43.7079 37.9103C44.2226 38.5807 44.8808 39.1313 45.6356 39.5233C46.3905 39.9153 47.2237 40.1391 48.0762 40.1787H48.1337C51.4079 40.1463 53.7607 36.7194 53.8594 36.5736C53.9296 36.4729 53.975 36.3576 53.9921 36.2367C54.0093 36.1158 53.9976 35.9926 53.9581 35.8769Z"
                fill="#9E090F"
              />
            </svg>

            <span>Food2go</span>
          </a>

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
