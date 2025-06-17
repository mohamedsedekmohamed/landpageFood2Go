import React, { useRef } from 'react'
import comtop from '../assets/comtop.png'
import combottom from '../assets/combottom.png'

const ClientsSay = () => {
   const scrollRef = useRef(null);

const scroll = (direction) => {
  if (!scrollRef.current) return;

  const container = scrollRef.current;
  const scrollAmount = 500

  if (direction === 'left') {
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  } else {
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
};
const products = [
    {
      title: '—Ahmed Fouad, Al Diwan Restaurant',
      description: "Menu updates became effortless! Our customers loved the modern experience",
    },
    {
      title: '— Lina Samir, Casa Tasty',
      description: "Thanks to the QR system, we reduced printing costs and improved service speed.",  
    },
    {
      title: '— Mohamed Adel, BurgerFuel Egypt',
      description: "Managing orders from both the website and app saved us a lot of time and confusion.",  
    },
  
  ];
  return (
    <div>
       <div className="w-full relative flex items-center justify-center mt-10  p-4 lg:p-8">
        <div className="w-full relative">
          {/* Cards Carousel */}
        <div
      ref={scrollRef}
      className="flex overflow-hidden scroll-smooth space-x-4 px-10 py-4 no-scrollbar pointer-events-auto"
    >
            {products.map((pro, idx) => (
              <div
                key={idx}
                className="relative flex flex-col  min-w-[320px] md:min-w-[500px] max-h-140  rounded-[12px] bg-nine   p-10 "
              >
                {/* Quote Mark */}
                <div className="absolute  -top-8 text-white">
    <img src={comtop}/>
                </div>
                <div className="absolute  -bottom-6 right-0 text-white">
    <img src={combottom}/>
                </div>
    
                {/* Testimonial Text */}
                <p className="text-[20px] text-start px-3 font-normal ">
                  {pro.description}
                </p>
    
    
                {/* Author Section */}
                <div className="flex items-center gap-4 w-[385px]">
                 
    
                  {/* Author Info */}
                  <div className="flex flex-col gap-1 my-2">
                    <h4 className="text-[16px]  leading-[30px] capitalize font-['Judson'] text-eight">
                      {pro.title}
                    </h4>
                    <p className="text-[16px] leading-[24px] text-[#E0CFEE] capitalize font-['Open Sans']">
                      {pro.sub}
                    </p>
    
                    <div className="flex gap-3">
                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z" fill="#FFA034"/>
    </svg>
    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z" fill="#FFA034"/>
    </svg>
    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z" fill="#FFA034"/>
    </svg>
    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z" fill="#FFA034"/>
    </svg>
    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z" fill="#FFA034"/>
    </svg>
     
    
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
    
          {/* Right Button */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 bottom-0-4 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 p-2 rounded-full z-10"
          >
            ›
          </button>
          {/* Left Button */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 bottom-0-4 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 p-2 rounded-full z-10"
          >
            ‹
          </button>
        </div>
      </div></div>
  )
}

export default ClientsSay