import React from 'react';
// 1. All your imports stay at the very top
import abil from '../assets/clientimages/ABIL.jpg';
import aryaomnitalk from '../assets/clientimages/Arya-Omnitalk.jpg';
import bajajalianz from '../assets/clientimages/Bajaj-Allianz.jpg';
import bajaj from '../assets/clientimages/Bajaj.jpg';
import bosch from '../assets/clientimages/Bosch.jpg';
import calsoft from '../assets/clientimages/Calsoft.jpg';
import clarion from '../assets/clientimages/Clarion.jpg';
import csjewellers from '../assets/clientimages/CS-Jewellers.jpg'; 
import flameuni from '../assets/clientimages/Flame-University.jpg'; 
import kalyani from '../assets/clientimages/Kalyani.jpg'; 
import kasturi from '../assets/clientimages/Kasturi.jpg'; 
import mittalgroup from '../assets/clientimages/Mittal-Group.jpg'; 
import oyorooms from '../assets/clientimages/Oyo-Rooms.jpg'; 
import parakhagro from '../assets/clientimages/Parakh-Agro.jpg';
import pizzahut from '../assets/clientimages/Pizza-Hut.jpg'; 
import praj from '../assets/clientimages/Praj.jpg'; 
import quickheal from '../assets/clientimages/Quick-Heal.jpg'; 
import sandvik from '../assets/clientimages/Sandvik.jpg'; 
import skyinternational from '../assets/clientimages/Sky-International.jpg'; 
import talentica from '../assets/clientimages/Talentica.jpg'; 
import varroc from '../assets/clientimages/Varroc.jpg'; 
import venkys from '../assets/clientimages/Venkys.jpg'; 

// 2. Define the logos array outside the component so it doesn't re-create on every render
const logos = [
  { name: 'Abil', img: abil },
  { name: 'Arya-Omnitalk', img: aryaomnitalk },
  { name: 'Bajaj-Allianz', img: bajajalianz  },
  { name: 'Bajaj', img: bajaj },
  { name: 'Bosch', img: bosch },
  { name: 'Calsoft', img: calsoft },
  { name: 'Clarion', img: clarion },
  { name: 'CS-jewellers', img: csjewellers },
  { name: 'FlameUni', img: flameuni },
  { name: 'Kalyani', img: kalyani },
  { name: 'Kasturi', img: kasturi },
  { name: 'MittalGroup', img: mittalgroup },
  { name: 'Oyorooms', img: oyorooms },
  { name: 'ParakhAgro', img: parakhagro },
  { name: 'Pizzahut', img: pizzahut },
  { name: 'Praj', img: praj },
  { name: 'QuickHeal', img: quickheal },
  { name: 'Sandvik', img: sandvik },
  { name: 'Skyinternational', img: skyinternational },
  { name: 'Talentica', img: talentica },
  { name: 'Varroc', img: varroc },
  { name: 'Venkys', img: venkys },
];

export const LogoMarquee: React.FC = () => {
  return (
    <div className="py-10 bg-white overflow-hidden border-b border-gray-100">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); } 
        }
        .marquee-track {
          display: flex;
          width: max-content;
          gap: 2rem; 
          animation: marquee 45s linear infinite;
        }
        /* Hover pause is removed per your request */
        .marquee-fade {
          mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
        }
      `}</style>

      <div className="marquee-container marquee-fade relative flex overflow-hidden">
        <div className="marquee-track whitespace-nowrap flex items-center">
          {/* 3. logos is now accessible here */}
          {[...logos, ...logos].map((logo, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 flex items-center justify-center px-4"
            >
              <img 
                src={logo.img} 
                alt={logo.name} 
                className="h-20 md:h-24 w-auto object-contain transition-transform duration-300 hover:scale-105" 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};