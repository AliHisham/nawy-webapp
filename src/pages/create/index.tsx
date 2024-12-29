"use client";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const CreatePage = () => {
  const router = useRouter();
  const [location, setLocation] = useState("");
  const [bedroomsNumber, setBedRoomsNumber] = useState(0);
  const [bathroomsNumber, setBathRoomsNumber] = useState(0);
  const [description, setDescription] = useState("");
  const handleFromSubmit = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/apartments`,
        {
          body: {
            apartmentAddress: location,
            bedrooms: bedroomsNumber,
            bathrooms: bathroomsNumber,
            description: description,
            area: 899,
            isAvailable: true,
          },
        }
      );
      if (response.statusText === "Created") {
        router.push("/");
      } else {
        throw new Error("failed to create");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">
          Add Apartment
        </h1>

        <div>
          <label
            htmlFor="location"
            className="block text-gray-700 font-medium mb-2"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            placeholder="Enter the apartment location"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label
            htmlFor="bathroom"
            className="block text-gray-700 font-medium mb-2"
          >
            Bathroom number
          </label>
          <input
            type="number"
            id="bathroom"
            value={bathroomsNumber}
            onChange={(e) => {
              setBathRoomsNumber(+e.target.value);
            }}
            placeholder="Enter bathroom numbers"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            min={0}
          />
        </div>

        <div>
          <label
            htmlFor="bedroom"
            className="block text-gray-700 font-medium mb-2"
          >
            Bedroom number
          </label>
          <input
            type="number"
            id="bedroom"
            value={bedroomsNumber}
            onChange={(e) => {
              setBedRoomsNumber(+e.target.value);
            }}
            placeholder="Enter bathroom numbers"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            min={0}
          />
        </div>

        {/* description Input */}
        <div>
          <label
            htmlFor="message"
            className="block text-gray-700 font-medium mb-2"
          >
            Description
          </label>
          <textarea
            id="message"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            placeholder="Enter your message"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          disabled={!location || !description}
          onClick={handleFromSubmit}
          className="w-full bg-blue-600 text-white font-semibold rounded-lg py-3 hover:bg-blue-700 transition duration-300"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default CreatePage;
