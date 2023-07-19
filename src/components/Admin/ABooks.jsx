import React from "react";
const books = [
  {
    id: "1",
    title: "Reasoning",
    src: "./bkimg/booksOne.png",
    desc: "Available 1500",
  },
  {
    id: "2",
    title: "Marathi",
    src: "./bkimg/booksTwo.png",
    desc: "Available 600",
  },
  {
    id: "3",
    title: "Hindi",
    src: "./bkimg/booksThree.png",
    desc: "Available 100",
  },
  {
    id: "4",
    title: "Physics",
    src: "./bkimg/booksFour.png",
    desc: "Available 1000",
  },
  {
    id: "5",
    title: "Gate",
    src: "./bkimg/booksFive.png",
    desc: "Available 400",
  },
  {
    id: "6",
    title: "General",
    src: "./bkimg/booksSix.png",
    desc: "Available 900",
  },
];
export default function Abooks() {
  return (
    <div className=" ">
      <div className="row float-right w-50 mt-3 m-0">
        <div className="col-sm-10 col-md-4 col-lg-4 sm:text-">
          <select className="form-select sm:w-50 ">
            <option selected>Select State</option>
            <option value="1">Maharashtra</option>
            <option value="2">Karnatak</option>
            <option value="3">Tamilnadu</option>
          </select>
        </div>{" "}
        &nbsp;&nbsp;
        <div className="col-sm-10 col-md-4 col-lg-4">
          <select className="form-select" aria-label="Default select example">
            <option selected>City</option>
            <option value="1">Amravati</option>
            <option value="1">Nagpur</option>
            <option value="2">Wardha</option>
            <option value="3">Gadchiroly</option>
          </select>
        </div>
      </div>
      <div className="overflow-scroll relative flex w-full h-[70vh] sm:overflow-scroll justify-center " >                                                
        <div className="row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-around items-center gap-5 p-3 mt-2">
          {books &&
            books.map((book, i) => (
              <div
                key={i}
                className=" relative flex w-full max-w-[20rem] p-2 rounded-md bg-white bg-clip-border text-gray-700 shadow-md"
              >
                <div className=" w-2/6 overflow-hidden bg-white bg-clip-border text-gray-700">
                  <img
                    src={book.src}
                    alt="image"
                    className="h-full w-full object-cover p-2"
                  />
                </div>
                <div className="p-6">
                  <p className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                    {book.title}{" "}
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


