import React from "react";
import DataChart from "../graphs/DataChart";

const books = [
  {
    id: "1",
    title: "Book",
    src: "./DashIcons/IconOne.png",
    desc: "6000+",
  },
  {
    id: "2",
    title: "Order",
    src: "./DashIcons/IconTwo.png",
    desc: "6975+",
  },
  {
    id: "3",
    title: "Donators",
    src: "./DashIcons/IconThree.png",
    desc: "5641+",
  },
  {
    id: "4",
    title: "Books Donate",
    src: "./DashIcons/IconFour.png",
    desc: "8265+",
  },
 
];
function Adashboard() {
  return (
 <div className="max-h-[70rem] min-h-[50rem] overflow-y-scroll overflow-x-scroll bg-[#F0ECEC]">
    <div className=" p-5 bg-[#F0ECEC] grid md:grid-cols-2 gap-5 sm:grid-cols-2">
        {books &&
        books.map((book, i) => (
            <div key={i} className="relative align-items-center  max-w-[28rem] max-h-[20rem] h-[20vmin] sm:h-[15vmin] md:h-[15vmin] lg:h-[15vmin] xl:h-[15vmin] flex flex-wrap  flex-row justify-around rounded-md bg-white shadow-md">
                <div className=" rounded-sm relative w-[10vmin] h-[10vmin] ">
                    <img
                    src={book.src}
                    alt="image"
                    className="object-cover w-full h-full "
                    />
                </div>
            <div className="relative block overflow-hidden justify-items-start ">
                <h6 className=" block font-sans text-md text-ellipsis overflow-hidden sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl truncate font-semibold uppercase leading-relaxed tracking-normal text-pink-500 ">
                   {book.desc}
                </h6>
                <p className=" block font-sans text-md sm:text-md md:text-md lg:text-lg xl:text-xl font-normal truncate leading-relaxed text-gray-700 text-ellipsis overflow-hidden">
                     {book.title}
                </p>  
           </div>
         
       </div>
       ))};
    </div>
     
       
            <DataChart/>
         
       
    </div>
  );
}

export default Adashboard;
