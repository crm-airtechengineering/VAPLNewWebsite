import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import dakinAcBg from '../assets/Daikin-AC.jpg';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

interface TimelineItemProps {
  event: TimelineEvent;
  isActive: boolean;
  onClick: () => void;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  event,
  isActive,
  onClick,
}) => {
  return (
    <div className="flex flex-col items-center min-w-[280px] md:min-w-[320px] transition-all">
      {/* Year + Circle */}
      <div className="flex flex-col items-center mb-4">
        <p className="text-white mb-2 font-bold">{event.year}</p>

        <button
          onClick={onClick}
          className={`w-8 h-8 rounded-full border-4 transition-all duration-300 ${
            isActive
              ? 'bg-blue-500 border-blue-500 scale-110'
              : 'bg-white border-white hover:scale-105'
          }`}
        />
      </div>

      {/* Card */}
      <Card
        className={`w-full bg-white text-gray-800 transition-all duration-300 rounded-xl ${
          isActive ? 'shadow-2xl scale-105' : 'shadow-md'
        }`}
      >
        <CardContent className="p-6 min-h-[180px]">
          <h3 className="mb-3 text-red-400 font-semibold text-xl">
            {event.title}
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            {event.description}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export const HistorySection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  

 

  return (
    <section id="history" className="relative py-20 overflow-hidden">
      {/* BG */}
      <div
        className="absolute inset-0 bg-center"
        style={{
          backgroundImage:
            `url(${dakinAcBg})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10">
        {/* Heading */}
        <div className="text-center mb-12 px-4">
          <h2 className="text-white mb-4 text-3xl md:text-4xl font-bold">Our History</h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            A journey of innovation, progress, and excellence spanning decades.
          </p>
        </div>

        <div className="text-center mb-12 px-4 text-gray-300">
            <p>
            As we continue to drive value, we pride ourselves in being one of the top suppliers of HVAC products for one of the world's most respected Japanese brands - Daikin for over 20 years.
With over a decade of experience, we design, install & commission HVAC air-conditioning systems for a wide range of commercial and domestic sectors. Catering to a large segment, Vakharia Airtech focuses on inventing products that befit its area of use. Our endeavors are & will always be driven by customizing products for you, the ones that drive comfort and sustainability.
            </p>
        </div>
      </div>
    </section>
  );
};
