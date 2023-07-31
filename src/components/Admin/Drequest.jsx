


/* eslint-disable react/no-unescaped-entities */
import {
  Card,
  CardHeader,
  CardBody,
  Navbar,
  Button,
  Input,
  Typography,
  CardFooter,
} from "@material-tailwind/react";
import { BsSearch } from "react-icons/bs";
import { useForm } from "react-hook-form";
import axios from "axios"




import { TbShoppingCart } from "react-icons/tb";

import { useSelector } from "react-redux";
import { selectProduct } from "../../../../Front-end/src/features/product/productSlice";
import { useEffect, useState } from "react";
import { selectLoggedInUser } from "../../../../Front-end/src/features/auth/authSlice";


export default function Dequest() {
 
const[products,setProducts]=useState([])
const user = useSelector(selectLoggedInUser)


const [price,setPrice]=useState("")


  useEffect(()=>{

const getproduct = async ()=>{
  const product = await fetch(`http://localhost:5000/products/`)
  const data = await product.json()
  console.log(data)
  setProducts(data)
}
getproduct()

  },[]);


  const  filter = products.filter((item)=>{
    return item.type === "donate"  && item.status !== "accept"
  })
  console.log(filter)

  return (
      <div>
 
    <div>
      

      {/* card row 1 */}
      <div className="bg-[#DDDDDD] mt-4 p-5"> 
        <strong className=" text-[22px]  text-[#1f2937] ">Waiting  for updates</strong>

        <div className="  grid lg:grid-cols-4 md:grid-cols-2 mt-3 sm:grid-cols-1 ">
          {/* card one */}
     {
filter.map((item)=>(
    <form key={item._id}>
  <Card className="w-[95%] bg-[#FFFFFF] item-center   mb-5" >
  <CardHeader shadow={false} floated={false}>
    <center>
      <img src={`./books/${item.img}`} className="w-[120px] h-[188px] " alt="img" />
    </center>
  </CardHeader>
  <CardBody>
    <div className="flex items-center justify-between mb-2">
      <Typography  className="font-extrabold mx-auto">
       {item.title}
      </Typography>
    </div>

    <Typography className="font-medium text-center">
      
      <span className="text-black text-[15px] mb-2">User Value : ₹ {item.price}</span>
      <input type="text" className=" border border-spacing-2" placeholder="Enter Admin Value" onChange={(e)=>setPrice(e.target.value)}/>
    </Typography>
  </CardBody>

  <CardFooter className="flex pt-0 justify-between">
    <button
      ripple={false}
      fullWidth={true}
      className="bg-[red] p-2 rounded-lg text-white hover:shadow-none  "
    >
      <center>
      Cancel
      </center>
    </button>

    <button
  ripple={false}
  fullWidth={true}
  className="bg-[#08A459] p-2 rounded-lg text-white hover:shadow-none"
  onClick={async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:5000/products/${item._id}/bargain`, {
           price
      });
       console.log(response);



       const testy = await axios.put(`http://localhost:5000/products/${item._id}/done`)
    console.log(testy)
        console.log(testy);
     
    } catch (error) {
      console.error("Error fetching user data or sending the OTP:", error);
    }
  }}
>
  <center>Send and Update</center>
</button>
  </CardFooter>
</Card>
     </form>
))
     }

        </div>
      </div>

      {/* Footer */}

    </div>
    </div>

  );
}




