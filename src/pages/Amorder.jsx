import { useState } from "react";
import { Link } from "react-router-dom";
import Mnavbar from "../components/Admin/mnavbar";
import Aorder from "../components/Admin/Aorder";

const Amorder = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "./adminsidebar/dash.png", to: "/adash" },
    { title: "Books", src: "./adminsidebar/books.png", to: "/abooks" },
    { title: "Orders", src: "./adminsidebar/order.png", to: "/aorder" },
    {title: "Transactions",src: "./adminsidebar/transaction.png", to: "/atransaction",},
    { title: "Blog", src: "./adminsidebar/blog.png", to: "/ablog" },
    {title: "Feedback", src: "./adminsidebar/feedback.png", to: "/afeedback",},
    { title: "Setting", src: "./adminsidebar/setting.png", to: "/asettingmd" },
   
    // { title: "Log out", src: "./adminsidebar/log out.png", to: "/amlogout" },
  ];

  return (
    <div className="2xl:container mx-auto">
      <Mnavbar />
      <div
        className={`${
          open
            ? "  xl:w-64 w-10 h-[84vh]  ps-1 pe-1 top-24  fixed  text-white  bg-[#1f2937] rounded"
            : "w-10 max-h-full lg:w-10  ps-1 pe-1 h-[84vh] xl:w-12   top-24  sm:w-10 fixed  bg-[#1f2937] rounded"
        } `}
        id="main"
      >
        <img
          src="./sidebar/b.png"
          alt="control"
          className={`cursor-pointer w-12 border-dark-purple border-none ${
            !open && "w-12 rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <h1
            className={`text-white origin-left font-medium   duration-200 ${
              !open && "scale-0"
            }`}
          >
            <br />
          </h1>
        </div>
        <ul className="">
          {Menus.map((Menu, index) => (
            <Link
              to={Menu.to}
              key={index}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-[#2196f3] focus:bg-[#388e3c] hover:text-white text-sm items-center gap-x-4 ${
                Menu.gap ? "mt-9" : "mt-2"
              } ${index === 0 && "bg-light-white"}`}
            >
              <img src={Menu.src} className="w-6" alt="asset" />
              <span
                className={`${!open && "hidden"} origin-center text-[0px]  xl:text-lg  duration-200`}
              >
                {Menu.title}
              </span>
            </Link>
          ))}
        </ul>
      </div>
      <div
        className={`${
          open
            ? "xl:pl-64 pl-10 transition-all duration-200"
            : "pl-10 xl:pl-14 transition-all duration-200"
        }`}
      >
        <Aorder />
      </div>
    </div>
  );
};

export default Amorder;
