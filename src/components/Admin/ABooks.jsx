import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Abooks() {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setSelectedCity(""); // Reset the selected city when the state changes
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  // Fetch book data from the API using useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
        const response = await axios.get("http://localhost:5000/products");
        setFilteredBooks(response.data);
      } catch (error) {
        console.error("Error fetching book data:", error);
      }
    };

    fetchData();
  }, []);

  // Filter books based on the selected state and city
  // useEffect(() => {
  //   if (selectedState && selectedCity) {
  //     const filteredBooks = books.filter(
  //       (book) => book.state === selectedState && book.city === selectedCity
  //     );
  //     setFilteredBooks(filteredBooks);
  //   } else {
  //     // If either the state or city is not selected, show all the books
  //     setFilteredBooks(books);
  //   }
  // }, [selectedState, selectedCity]);

  return (
    <div className=" ">
      <div className="row float-right w-50 mt-3 m-0">
        <div className="col-sm-10 col-md-4 col-lg-4 sm:text-">
          <select
            className="form-select sm:w-50"
            onChange={handleStateChange}
            value={selectedState}
          >
            <option disabled value="">
              Select State
            </option>
            <option value="Maharashtra">Maharashtra</option>
            {/* Add more states here */}
          </select>
        </div>{" "}
        &nbsp;&nbsp;
        <div className="col-sm-10 col-md-4 col-lg-4">
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={handleCityChange}
            value={selectedCity}
          >
            <option disabled value="">
              City
            </option>
            {selectedState === "Maharashtra" && (
              <>
                <option value="Nagpur">Nagpur</option>
                <option value="Amravati">Amravati</option>
                {/* Add more cities here */}
              </>
            )}
          </select>
        </div>
      </div>
      <div className="overflow-scroll relative flex w-full h-[70vh] sm:overflow-scroll justify-center">
        <div className="row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-around items-center gap-5 p-3 mt-2">
          {filteredBooks.map((book, i) => (
            <div
              key={i}
              className="relative flex w-full max-w-[20rem] p-2 rounded-md bg-white bg-clip-border text-gray-700 shadow-md"
            >
              <div className="w-2/6 overflow-hidden bg-white bg-clip-border text-gray-700">
                <img
                  src={book.src}
                  alt="image"
                  className="h-full w-full object-cover p-2"
                />
              </div>
              <div className="p-6">
                <p className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                  {book.title}
                </p>
                <p className="mb-2 block font-sans text-2md font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  {book.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}