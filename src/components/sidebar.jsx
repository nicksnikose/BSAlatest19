import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Select,
  Option,
  Button,
  Typography,
  Card,
} from "@material-tailwind/react";
import Example from "./Navbar";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "My Profile", src: "./sidebar/profile.png", to: "/userprofile" },
    { title: "My Donations", src: "./sidebar/donation.png", to: "/sidebar" },
    { title: "My Orders", src: "./sidebar/order.png", to: "" },
    { title: "My Wishlist", src: "./sidebar/wishlist.png", to: "" },
    { title: "My Address", src: "./sidebar/address.png", to: "" },
    { title: "Log out", src: "./sidebar/lo.png", to: "" },
  ];

  const placeholderStyle = {
    fontSize: "16px", // Change the font size
    // Add any other desired styles
  };

  return (
    <div className="flex justify-center items-center">
      <div className="2xl:container ">
        <Example /> <br />
        <br /> <br />
        <br />
        <br />
        <div className="flex">
          <div
            className={`${open ? "xl:w-72  fixed w-10 h-[78vmin]" : "w-24 fixed h-[78vmin] lg:w-10 xl:w-10 md:w-10 sm:w-10" } `}
            id="main"
          >
            <img
              src="./sidebar/b.png"
              alt="control"
              className={` cursor-pointer  w-12  float-right border-dark-purple
                          border-none  ${!open && "rotate-180"}`}
              onClick={() => setOpen(!open)}
            />
            <div className="flex gap-x-4 items-center">
              <h1
                className={`text-white origin-left font-medium text-xl duration-200 ${
                  !open && "scale-0"
                }`}
              >
                <br />
              </h1>
            </div>
            <ul className="pt-9 sm:mt-8 ">
              {Menus.map((Menu, index) => (
                <Link
                  to={Menu.to}
                  key={index}
                  className={`flex  rounded-md p-2 cursor-pointer hover:bg-green-700 hover:text-white text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                    index === 0 && "bg-light-white"
                  } `}
                >
                  <img src={Menu.src} className="" alt="asset" />
                  <span
                    className={`${!open && "hidden"} origin-center duration-200`}
                  >
                    {Menu.title}
                  </span>
                </Link>
              ))}
            </ul>
          </div>

          {/* USER */}
          <div className="  bg-[#F0ECEC] ">
            <div className="w-full h-12 bg-[#81A356] text-white  ">
              <p className="translate-y-1/2 ms-6"> </p>
              <img src="" alt="" />
            </div>

            <br />

            {/* <div className="lg:p-[60px] p-[30px]   bg-[#F0ECEC] h-[70vmax]  "> */}
            <div className=" grid grid-cols-1   bg-[#F0ECEC] h-full ">
              <div className="text-center">
                <Card className="p-6">
                  <Typography variant="h6" className='border-b border-black' >My Donations</Typography>
                
                  <Typography className="mt-12 xl:ps-40 xl:pe-40 mb-14" >
                     We are not able to find any Information . Books details will
                      be updated on priority basis once received to us For more
                     details kindly Write to us at 
                  </Typography>
                  <Button color="green"  
    className="bg-[#81A356]  font-normal py-1 px-5  sm:text-[18px] lg:text-[14px] text-[13px] mx-auto ">Donate</Button>
                  {/* <Button className="bg-[#81A356] w-24 h-6">Donate</Button> */}
                </Card>
              </div>
            </div>
            {/* </div> */}
          </div>
          
        </div>
        <div className="  bg-[#F0ECEC] ">
            <div className="w-full h-12 bg-[#81A356] text-white  ">
              <p className="translate-y-1/2 ms-6"> </p>
              <img src="" alt="" />
            </div>

            <br />

            {/* <div className="lg:p-[60px] p-[30px]   bg-[#F0ECEC] h-[70vmax]  "> */}
            <div className=" grid grid-cols-1   bg-[#F0ECEC] h-full ">
              <div className="text-center">
                <Card className="p-6">
                  <Typography variant="h6" className='border-b border-black' >My Donations</Typography>
                
                  <Typography className="mt-12 xl:ps-40 xl:pe-40 mb-14" >
                     We are not able to find any Information . Books details will
                      be updated on priority basis once received to us For more
                     details kindly Write to us at 
                  </Typography>
                  <Button color="green"  
    className="bg-[#81A356]  font-normal py-1 px-5  sm:text-[18px] lg:text-[14px] text-[13px] mx-auto ">Donate</Button>
                  {/* <Button className="bg-[#81A356] w-24 h-6">Donate</Button> */}
                </Card>
              </div>
            </div>
            {/* </div> */}
          </div>
      </div>
    </div>
  );
};
export default Sidebar;
