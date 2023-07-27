import React from "react";
import DataChart from "../graphs/DataChart";
import { useEffect, useState } from "react";



 
function Adashboard() {
  const [dataSource, setDataSource] = useState([]);
    const [dataSource1, setDataSource1] = useState(null);


    useEffect(() => {
        const getData = async () => {
          try {
            const res = await fetch("http://localhost:5000/getdata");
            const result = await res.json();
            setDataSource(result);
          } catch (error) {
            console.log('Error fetching data:', error);
          }
        };
      
        getData();
      }, []);
    console.log(dataSource)

    const chartData = dataSource.map((dataPoint) => {
      return dataPoint.BuyBook + dataPoint.SellBook + dataPoint.DonateBook
     });
      console.log(chartData)
    
        //1 Book
      const totalBooksOfYear = dataSource.reduce(
        (total, dataPoint) => total + (dataPoint.BuyBook + dataPoint.SellBook + dataPoint.DonateBook),
        0
      );
      console.log(totalBooksOfYear)
            //2 Order
      const totalSellBooksOfYear = dataSource.reduce(
        (total, dataPoint) => total + dataPoint.SellBook,
        0
      );

      //3 Books Donate
      const totalDonateBooksOfYear = dataSource.reduce(
        (total, dataPoint) => total + dataPoint.DonateBook,
        0
      );

      //4 Donators
      
      const totalBuyBooksOfYear = dataSource.reduce(
        (total, dataPoint) => total + dataPoint.BuyBook,
        0
      );


    const books = [
      {
        id: "1",
        title: "Book",
        src: "./DashIcons/IconOne.png",
        desc: totalBooksOfYear,
    
      },
      {
        id: "2",
        title: "Order",
        src: "./DashIcons/IconTwo.png",
        desc: totalSellBooksOfYear,
      },
      {
        id: "3",
        title: "Buy Books",
        src: "./DashIcons/IconThree.png",
        desc: totalBuyBooksOfYear ,
      },
      {
        id: "4",
        title: "Donate Books",
        src: "./DashIcons/IconFour.png",
        desc: totalDonateBooksOfYear,
      },
     
    ];
    
    
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
                   {
       book.desc
      }
                </h6>
                <p className=" block font-sans text-md sm:text-md md:text-md lg:text-lg xl:text-xl font-normal truncate leading-relaxed text-gray-700 text-ellipsis overflow-hidden">
                     {book.title}
                </p>  
           </div>
         
       </div>
       ))}
    </div>
     
       
            <DataChart/>
         
       
    </div>
  );
}

export default Adashboard;
