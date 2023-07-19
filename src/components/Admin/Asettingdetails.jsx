import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
 
export default function Adetails() {
  //  const navigate = useNavigate()
  //        function Changepass(){navigate(" /Changepass") }
  return (  
   
  <>
  <div className="   bg-[#F0ECEC] pt-6 ps-5 2xl:space-x-72 sm:space-x-4 space-x-4">
            
             <Button className="capitalize font-semibold  bg-[#1f2937] hover:bg-[#2196f3]  text-white    " >My Details</Button>
             <Link to="/achangepass" className="" >     <Button  className="capitalize font-semibold  bg-[#1f2937] hover:bg-[#2196f3]  text-white  ">Change Password</Button> </Link> 
      
            </div>
    <div className="  bg-[#F0ECEC] w-full    p-3    ">
      
   

    <Card color="transparent " className="  mx-auto  p-2" shadow={false}>
      <Typography variant="h4" color="blue-gray" className="text-center p-4">
        
      </Typography>
      {/* <Typography color="gray" className="mt-1 font-normal">
        Enter your details to register.
      </Typography> */}
       {/* <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ms-12 me-12 "></div> */}
      <form className=" pb-16 w-full grid md:grid-cols-2 sm:grid-cols-1  md:gap-10 gap-4 items-center">
        
          <Input size="" className="w-32" label="Change Name" />
          <div className="mx-auto" >
          <Button className="w-32 me-3 mx-auto">Delete</Button>
          <Button className="w-32 mx-auto">Enter</Button> 
          </div>
          
          <div className="flex">         <p> Change profile Picture</p>
          <input type="file" className="   me-3 mx-auto"/></div>

          <div className="mx-auto" >
          <Button className="w-32 me-3 mx-auto">Delete</Button>
          <Button className="w-32 mx-auto">Upload</Button>
          </div>

          <Input type="email" size="" label="Change E-mail" />
          <div className="mx-auto" >
          <Button className="w-32 me-3 mx-auto">Delete</Button>
          <Button className="w-32 mx-auto">Enter</Button>
          </div>

          <Input type="number" size="" label="Mob. no." />
          <div className="mx-auto" >
          <Button className="w-32 me-3 mx-auto">Delete</Button>
          <Button className="w-32 mx-auto">Enter</Button>
          </div>

          <Input type="text" size="" label="Address" />
          <div className="mx-auto" >

          <Button className="w-32 me-3 mx-auto">Delete</Button>
          <Button className="w-32 mx-auto">Enter</Button>
          </div>
        
       

      </form>
    </Card>
    </div>
    </>
 )
}