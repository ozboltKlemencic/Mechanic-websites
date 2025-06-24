import React, { useState } from "react";

const ServiceTable = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const services = [
    {
      delo: "Mehansko delo 1",
      cena: "30,00 €",
      description:
        "Detailed service description for mechanical work including parts and labor",
    },
    {
      delo: "Mehansko delo 2",
      cena: "45,00 €",
      description:
        "Comprehensive mechanical service with advanced diagnostics and repairs",
    },
    {
      delo: "Elektro delo 1",
      cena: "55,00 €",
      description:
        "Professional electrical work with modern equipment and expertise",
    },
  ];

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full space-y-4 p-4">
      {services.map((service, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-lg border border-gray-200"
        >
          <button
            className={`flex w-full items-center justify-between bg-white p-4 text-left transition-colors duration-200 hover:bg-gray-50 ${activeIndex === index ? "bg-green-50" : ""}`}
            onClick={() => handleClick(index)}
          >
            <div className="flex-1">
              <span className="font-medium text-gray-900">{service.delo}</span>
              <span className="ml-4 font-bold text-green-600">
                {service.cena}
              </span>
            </div>
            <svg
              className={`size-6 transition-transform duration-200${activeIndex === index ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {activeIndex === index && (
            <div className="border-t border-gray-200 bg-white p-4">
              <p className="text-gray-600">{service.description}</p>
            </div>
          )}
        </div>
      ))}
      <div className="mt-4 text-center text-sm italic text-gray-600">
        V CENE NI VKLJUČEN DDV
      </div>
    </div>
  );
};

export default ServiceTable;
