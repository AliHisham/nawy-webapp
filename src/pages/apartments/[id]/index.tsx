"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { Apartment } from "@/types";
import Image from "next/image";

const ItemPage = () => {
  const [apartment, setApartment] = useState<Apartment | null>(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const getApartmentById = async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/apartments/${id}`
      );
      const { data } = response.data;
      setApartment(data);
    };
    if (id) getApartmentById();
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white py-6 text-center">
        <h1 className="text-3xl font-bold">Apartment Details</h1>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-10">
        {apartment ? (
          <div className="bg-white shadow-lg rounded-lg p-6">
            <Image
              src={`https://media.istockphoto.com/id/1492424940/photo/apartment-buidling.jpg?s=2048x2048&w=is&k=20&c=cyoQsPthGgrM0Xg4vpwGSVzlO4bAA32BPPetepL98Dk=`}
              alt={`Apartment ${""}`}
              className="w-full h-64 object-cover rounded-md mb-6"
              width={800}
              height={400}
            />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Apartment {""}
            </h2>
            <p className="text-gray-600 mb-4">
              {" "}
              {`location: ${apartment?.apartmentAddress}`}
            </p>
            <p className="text-gray-600 mb-4">{`bedrooms: ${apartment?.bedrooms}`}</p>
            <p className="text-gray-600 mb-4">{`bathrooms: ${apartment?.bathrooms}`}</p>
            <p className="text-gray-600 mb-4">{`availability: ${
              apartment?.isAvailable ? "Yes" : "No"
            }`}</p>
            <p className="text-gray-600 mb-4">
              {`Description:${apartment?.description}`}
            </p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Contact Us
            </button>
          </div>
        ) : (
          "Apartment is not found"
        )}
      </main>
    </div>
  );
};

export default ItemPage;
