import React from "react";
import Nav from "../Nav/Nav";

const Demos = () => {
  const demoList = [
    {
      id: 1,
      name: "Demo 1 - Travel App",
      image: "https://via.placeholder.com/400x250?text=Demo+1",
      facebook: "https://facebook.com/demo1",
    },
    {
      id: 2,
      name: "Demo 2 - Booking Platform",
      image: "https://via.placeholder.com/400x250?text=Demo+2",
      facebook: "https://facebook.com/demo2",
    },
    {
      id: 3,
      name: "Demo 3 - Admin Dashboard",
      image: "https://via.placeholder.com/400x250?text=Demo+3",
      facebook: "https://facebook.com/demo3",
    },
  ];

  return (
    <div></div>
//  <div>

//             <Nav />
// <div className="min-h-screen bg-gray-100 p-6">

//       <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
//         Available Demos
//       </h1>

//       <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//         {demoList.map((demo) => (
//           <div
//             key={demo.id}
//             className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden"
//           >
//             <img
//               src={demo.image}
//               alt={demo.name}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-4">
//               <h2 className="text-xl font-semibold text-gray-700 mb-2">
//                 {demo.name}
//               </h2>
//               <a
//                 href={demo.facebook}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-block mt-2 text-blue-600 hover:text-blue-800 font-medium"
//               >
//                 Visit Facebook Page →
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//      </div>

  );
};

export default Demos;
