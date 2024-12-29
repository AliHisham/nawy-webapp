"use client";
import { useEffect, useState } from "react";
import Loading from "./Loader";
import { Pagination, FlowbitePaginationTheme } from "flowbite-react";

import ApartmentCard from "./ApartmentCard";
import axios from "axios";
import { Apartment } from "@/types";

const Apartments = () => {
  const customTheme: FlowbitePaginationTheme = {
    base: "",
    layout: {
      table: {
        base: "text-sm text-gray-700 dark:text-gray-400",
        span: "font-semibold text-gray-900 dark:text-white",
      },
    },
    pages: {
      base: "xs:mt-0 mt-2 inline-flex items-center -space-x-px",
      showIcon: "inline-flex",
      previous: {
        base: "ml-0 rounded-l-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
        icon: "h-5 w-5",
      },
      next: {
        base: "rounded-r-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
        icon: "h-5 w-5",
      },
      selector: {
        base: "w-12 border border-gray-300 bg-white py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
        active:
          "bg-cyan-50 text-cyan-600 hover:bg-cyan-100 hover:text-cyan-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white",
        disabled: "cursor-not-allowed opacity-50",
      },
    },
  };
  const [apartmentsData, setApartments] = useState<Apartment[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const [numberOfApartments, setNumberOfAllApartments] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [locationKeyword, setLocationKeyword] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const numberOfApartmentsPerLoad = 5;

  const fetchApartments = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/apartments?skip=${offset}&take=${numberOfApartmentsPerLoad}&keyword=${locationKeyword}`
      );
      const { data } = response.data;

      setApartments(data.apartments);
      setNumberOfAllApartments(data.totalCount);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const getNumberOfPages = () => {
    let pages = 0;
    if (numberOfApartments)
      pages = Math.ceil(numberOfApartments / numberOfApartmentsPerLoad);
    return pages;
  };

  useEffect(() => {
    fetchApartments();
  }, [offset, debouncedValue]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(locationKeyword);
    }, 500);
    return () => clearTimeout(handler);
  }, [locationKeyword]);

  return (
    <div className="flex flex-col gap-3">
      <div className="text-center">
        <input
          className="rounded-md p-3"
          value={locationKeyword}
          onChange={(e) => {
            setLocationKeyword(e.target.value);
          }}
          placeholder="search by location"
        ></input>
      </div>
      {loading && <Loading />}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {apartmentsData.length &&
          apartmentsData.map((apartment) => (
            <ApartmentCard apartment={apartment} key={apartment.id} />
          ))}
      </div>
      <div className="flex flex-row overflow-x-auto sm:justify-center">
        <Pagination
          theme={customTheme}
          className="!flex !flex-row"
          currentPage={currentPage}
          totalPages={getNumberOfPages()}
          onPageChange={(e) => {
            setOffset((e - 1) * numberOfApartmentsPerLoad);
            setCurrentPage(e);
          }}
          showIcons
        />
      </div>
    </div>
  );
};

export default Apartments;
