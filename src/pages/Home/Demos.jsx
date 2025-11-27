import React, { useEffect, useState } from "react";
import Nav from "../Nav/Nav";
import AOS from "aos";
import "aos/dist/aos.css";
import Contect from "./Contect";
import { MdWeb } from "react-icons/md";
// import tyorelmothda from "../../assets/tyorelmothda.jpg";
// import trios from "../../assets/trios.jpg";
// import sultanayub from "../../assets/sultanayub.png";
// import ShawermaArabi from "../../assets/ShawermaArabi.jpg";
// import SetAziza from "../../assets/SetAziza.jpeg";
// import SandwichElnoby from "../../assets/SandwichElnoby.jpg";
// import Rayahen from "../../assets/Rayahen.jpg";
// import PizzaElrayek from "../../assets/PizzaElrayek.jpg";
// import NaanaaElsoury from "../../assets/NaanaaElsoury.jpg";
// import KoshriAlkahra from "../../assets/KoshriAlkahra.jpg";
// import KebdaFahmy from "../../assets/KebdaFahmy.jpg";
// import KbabjyAlwhsh from "../../assets/KbabjyAlwhsh.jpeg";
// import Hookies from "../../assets/Hookies.jpeg";
// import JambarySubit from "../../assets/Jambary&Subit.jpg";
// import HaramElhamam from "../../assets/HaramElhamam.jpg";
// import GADRestaurant from "../../assets/GADRestaurant.jpg";
// import Eltop from "../../assets/Eltop.jpg";
// import ELraay from "../../assets/ELraay.jpg";
// import DokkanSamak from "../../assets/DokkanSamak.jpg";
// import Dahab from "../../assets/Dahab.jpg";
// import Cheezo from "../../assets/Cheezo.jpg";
// import aburabie from "../../assets/aburabie.jpg";
// import AldewanElaraby from "../../assets/AldewanElaraby.jpg";
// import HadarmawtElsultan from "../../assets/HadarmawtElsultan.jpg";
// import BietElsham from "../../assets/BietElsham.jpg";
// import BeitFarouk from "../../assets/BeitFarouk.jpg";
// import BashayerElsham from "../../assets/BashayerElsham.jpg";
// import AboYounis from "../../assets/AboYounis.jpg";
// import AbouMazen from "../../assets/AbouMazen.jpg";
// import Farog from "../../assets/Farog.jpg";
// import AboufaresElsory from "../../assets/AboufaresElsory.jpg";
// import AbdelWahab from "../../assets/AbdelWahab.jpg";
// import ReghefShawerma from "../../assets/ReghefShawerma.jpeg";
// import PavanaFried from "../../assets/PavanaFried.jpg";
// import MzagngyBurger from "../../assets/MzagngyBurger.jpg";
import axios from "axios";

const Demos = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const [images, setImage] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://clientbcknd.food2go.online/user/domain"
        );
        setImage(response.data.domains);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);
 
  return (
    <div className="bg-gray-100 min-h-screen">
      <Nav />

      <div className=" mx-auto px-4 py-12">
        <h1
          data-aos="fade-down"
          className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10"
        >
          Our Demos
        </h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden"
            >
              <img
                src={item.img}
                alt={item.alt}
                className="w-full h-70 hover:scale-110 transition duration-300"
              />
              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold text-gray-700 mb-3">
                  {item.alt}
                </h2>
              </div>
              <a
                href={item.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-one text-white px-5 py-2 rounded-lg hover:bg-one/70 transition w-full sm:w-auto"
              >
                <p className="text-sm sm:text-base">Visit Demo</p>
                <MdWeb className="text-white text-xl sm:text-2xl" />
              </a>
            </div>
          ))}
        </div>
      </div>
      <Contect />
    </div>
  );
};

export default Demos;
