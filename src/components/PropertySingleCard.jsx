import { PropertySvg1, PropertySvg2 } from "./ui/Svg";

/* eslint-disable react/prop-types */
export default function PropertySingleCard({ property }) {
  const { title, monthlyPrice, bedrooms, bathrooms, image } = property || {};
  return (
    <>
      <div className="rounded-lg border border-gray-600/10 bg-white p-4">
        <img src={image} alt="property" />

        <div className="p-6">
          <h4 className="cursor-pointer text-2xl font-bold">{title}</h4>
          <div className="mt-2">
            <span className="text-xl font-extrabold text-blue-600">
              BDT {monthlyPrice}
            </span>{" "}
            /M
          </div>
        </div>

        <div className="flex justify-between border-t border-gray-300 p-4 text-gray-700">
          <div className="flex items-center">
            <PropertySvg1></PropertySvg1>
            <p>
              <span className="font-bold text-gray-900">{bedrooms}</span>{" "}
              Bedrooms
            </p>
          </div>
          <div className="flex items-center">
            <PropertySvg2></PropertySvg2>

            <p>
              <span className="font-bold text-gray-900">{bathrooms}</span>{" "}
              Bathrooms
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
