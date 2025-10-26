import React, { useEffect } from "react";
import kmonh from "../../assets/kmonh.jpeg";
import gadmost from "../../assets/gadmost.jpeg";
import onehero from "../../assets/pizznour.jpg";
import twohero from "../../assets/lamadaa.jpg";
import threehero from "../../assets/mshwat.jpg";
import brazilian from "../../assets/brazilian.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import Nav from "../Nav/Nav";
import Contect from "./Contect";
import { MdWeb } from "react-icons/md";
import { IoLogoFacebook } from "react-icons/io5";
import { FaAppStoreIos } from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";

const Clients = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const images = [
    {
      src: gadmost,
      alt: "Mostafa Gad",
      ref: "https://mostafagad.food2go.online",
      fa: "https://www.facebook.com/MostafaGad.Restaurants/",
      app:true,
      ios:"https://apps.apple.com/eg/app/mostafa-gad-food/id6746445716",
      goo:"https://play.google.com/store/apps/details?id=com.app.mostafaGad"
    },
    {
      src: twohero,
      alt: "Lamada",
      ref: "https://lamadafood.food2go.online",
      fa: "https://www.facebook.com/Lamada.Miami/",
       app:true,
      ios:"https://play.google.com/store/apps/details?id=com.app.lmdawegodev",
      goo:"https://play.google.com/store/apps/details?id=com.app.lmdawegodev"
    },
    {
      src: kmonh,
      alt: "Kamona",
      ref: "https://kamona.food2go.online/",
      fa: "https://www.facebook.com/kamona.ag",
       app:false,
      ios:"https://apps.apple.com/eg/app/lamada/id6553989792",
      goo:"https://play.google.com/store/apps/details?id=com.app.lmdawegodev"
    },
    {
      src: onehero,
      alt: "Pizza Nour",
      ref: "https://PizzaNour.food2go.online",
      fa: "https://www.facebook.com/Pizzanour45elfath/",
       app:false,
      ios:"a",
      goo:"a"
    },
    {
      src: threehero,
      alt: "Toyor Essa",
      ref: "https://toyoressa.food2go.online",
      fa: "https://www.facebook.com/tuoressa/",
       app:false,
      ios:"a",
      goo:"a"
    },
    {
      src: brazilian,
      alt: "Brazilian coffee",
      ref: "https://braziliancoffe.food2go.online/",
      fa: "https://www.facebook.com/profile.php?id=61581720911981",
       app:false,
      ios:"a",
      goo:"a"
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Nav />

      <div className="mx-auto px-4 py-12">
        <h1
          data-aos="fade-down"
          className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10"
        >
          Our Clients
        </h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-70 hover:scale-110 transition duration-300"
              />
              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold text-gray-700 mb-3">
                  {item.alt}
                </h2>
                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mt-4">
                  <a
                    href={item.ref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-one text-white px-5 py-2 rounded-lg hover:bg-one/70 transition w-full sm:w-auto"
                  >
                    <MdWeb className="text-white text-xl sm:text-2xl" />
                    <p className="text-sm sm:text-base">Visit Website</p>
                  </a>

                  <a
                    href={item.fa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-white border border-one text-blue-600 px-5 py-2 rounded-lg hover:bg-one hover:text-white transition w-full sm:w-auto"
                  >
                    <IoLogoFacebook className="text-blue-600 text-xl sm:text-2xl group-hover:text-white" />
                    <p className="text-sm sm:text-base">Visit Facebook</p>
                  </a>
                </div>
              </div>

{item.app && (
  <div className="flex flex-col sm:flex-row gap-3 justify-center items-center my-2 px-2">
   {item.goo && (
      <a
        href={item.goo}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-one text-white px-5 py-2 rounded-lg hover:bg-one/80 transition w-full sm:w-auto"
      >
        <BiLogoPlayStore className="text-white text-xl sm:text-2xl" />
        <span className="font-medium">Google Play</span>
      </a>
    )}
    {item.ios && (
      <a
        href={item.ios}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-white border border-one text-blue-600 px-5 py-2 rounded-lg hover:bg-one hover:text-white transition w-full sm:w-auto"
      >
        <FaAppStoreIos className="text-blue-600 text-xl sm:text-2xl group-hover:text-white" />
        <span className="font-medium">App Store</span>
      </a>
    )}

  
  </div>
)}

            </div>
          ))}
        </div>
      </div>
      <Contect />
    </div>
  );
};

export default Clients;
