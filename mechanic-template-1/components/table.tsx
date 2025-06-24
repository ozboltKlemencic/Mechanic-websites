import React from "react";

interface Service {
  name: string;
  price: number;
}

interface Props {
  pricing: Service[];
}

const ServiceTable = ({ pricing }: Props) => {
  return (
    <div className="w-full overflow-x-auto md:w-[400px] md:min-w-[300px] lg:w-[600px] lg:min-w-[500px]">
      <table className="w-full border-collapse overflow-hidden rounded-md bg-gray-400/10 shadow-lg ">
        <thead>
          <tr className="table-gradient">
            <th
              className="px-6 py-4 text-left font-montserrat font-bold text-white"
              scope="col"
            >
              Delo
            </th>
            <th
              className="px-6 py-4 text-right font-montserrat font-bold text-white"
              scope="col"
            >
              Cena
            </th>
          </tr>
        </thead>
        <tbody>
          {pricing.map((service, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 transition-colors duration-200 hover:bg-black/5"
            >
              <td className="px-6 py-3 text-left font-Hind text-black">
                {service.name}
              </td>
              <td className="px-6 py-3 text-right font-Hind font-medium text-black">
                {service.price} €
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td
              className="bg-green-100 px-6 py-3 text-center text-xs italic text-gray-600"
              colSpan={2}
            >
              V CENE NI VKLJUČEN DDV
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ServiceTable;
