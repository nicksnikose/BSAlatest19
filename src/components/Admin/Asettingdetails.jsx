import React, { useEffect, useState } from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import axios from "axios";
import { selectLoggedInUser } from "../../features/auth/authSlice";
import { useSelector } from "react-redux";

export default function Asettingdetails(props) {
  const {
    userId,
    userEmail,
    userFirstName,
    userLastName,
    userImg,
    userPhone,
    userVideo,
  } = props;


 
  const users = useSelector(selectLoggedInUser);
  const [user, setUser] = useState({});
  const dat = users.data.user;
  console.log(dat)

  // Update the 'data' state once the 'users' state is available
  useEffect(() => {
    if (dat) {
      setData({
        firstName: dat.firstName,
        lastName: dat.lastName,
        email: dat.email,
        phone: dat.phone,
        img:dat.img
      });
    }
    setUser(dat);
  }, [dat]);

  const [file, setFile] = useState(null);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [previousData, setPreviousData] = useState(
    JSON.parse(sessionStorage.getItem("data"))
  );

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(users.data.user);

    try {
      const formData = new FormData();
      formData.append('firstName', data.firstName);
      formData.append('lastName', data.lastName);
      formData.append('email', data.email);
      formData.append('phone', data.phone);
      if (file) {
        formData.append('img', file);
      }
  
      const response = await axios.put(
        `http://localhost:5000/admin/${user._id}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
  
    } catch (error) {
      console.log('An error occurred while uploading the data');
    }

  };

  return (
    <>
      
      <div className="bg-[#F0ECEC] pt-6 ps-5 2xl:space-x-72 sm:space-x-4 space-x-4">
        <Button className="capitalize font-semibold bg-[#1f2937] hover:bg-[#2196f3] text-white">
          My Details
        </Button>
        <Link to="/achangepass">
          <Button className="capitalize font-semibold bg-[#1f2937] hover:bg-[#2196f3] text-white">
            Change Password
          </Button>{" "}
        </Link>
      </div>
      <div className="bg-[#F0ECEC] w-full p-5">
        <Card
          color="transparent"
          className="mx-auto bg-[white] p-3"
          shadow={false}
        >
          <Typography
            variant="h4"
            color="blue-gray"
            className="text-center p-4"
          >
            Update Profile
          </Typography>

          <form className="pb-16 w-full grid md:grid-cols-2  sm:grid-cols-1 md:gap-10 gap-4 items-center">
            <input
              size=""
              className="border border-black rounded block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
              placeholder="Change profile"
              type="file"
              onChange={handleFileChange}
            />
            {data.img !== "default.jpg" ? (
              <img
                src={`./adminProfile/${data.img}`}
                alt="sdf"
                style={{ width: "100px", height: "100px" }}
              />
            ) : (
              <h1></h1>
            )}

            <input
              color="black"
              type="text"
              className="peer block min-h-[auto] w-full rounded border-2 border-black bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-100"
              placeholder="First Name"
              name="firstName"
              value={data.firstName}
              onChange={handleChange}
              autoComplete="firstname"
              required
            />
            <input
              type="text"
              color="black"
              className="peer block min-h-[auto] w-full rounded border-2 border-black bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-100"
              placeholder="Last Name"
              name="lastName"
              value={data.lastName}
              onChange={handleChange}
              autoComplete="lastname"
              required
            />

            <input
              size=""
              type="text"
              className="peer block min-h-[auto] w-full rounded border-2 border-black bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-100"
              color="black"
              name="email"
              placeholder="Change E-mail"
              value={data.email}
              onChange={handleChange}
            />

            <input
              size=""
              type="number"
              name="phone"
              className="peer block min-h-[auto] w-full rounded border-2 border-black bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-100"
              color="black"
              value={data.phone}
              onChange={handleChange}
              placeholder="Mob. no."
            />

            <div className="mx-auto">
              <Button className="w-32 me-3 mx-auto" onClick={handleSubmit}>
                Update
              </Button>
              <Link to="/">
                <Button className="w-32 mx-auto">Cancel</Button>
              </Link>
            </div>
          </form>
        </Card>
      </div>
    </>
    
  );
}
