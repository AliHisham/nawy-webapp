import Link from "next/link";
import { Apartment } from "@/types";

type ApartmentProps = {
  apartment: Apartment;
};

const ApartmentCard = ({ apartment }: ApartmentProps) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">
          Apartment {apartment.id}
        </h3>
        <p className="text-gray-600 mt-2">
          {`location: ${apartment.apartmentAddress}`}{" "}
        </p>
        <p className="text-gray-600">{`bedrooms: ${apartment.bedrooms}`} </p>
        <p className="text-gray-600">{`bathrooms: ${apartment.bathrooms}`} </p>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Link href={`/apartments/${apartment.id}`}> view details</Link>
        </button>
      </div>
    </div>
  );
};

export default ApartmentCard;
