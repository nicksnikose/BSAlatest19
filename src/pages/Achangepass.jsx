import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useState , } from "react";
import { Link } from "react-router-dom";
import Mnavbar from "../components/Admin/mnavbar";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

 
  const Changepass = () => {
    const [open, setOpen] = useState(true);
    const Menus = [
      { title: "Dashboard", src: "./adminsidebar/dash.png", to: "/adash" },
      { title: "Books", src: "./adminsidebar/books.png", to: "/abooks" },
      { title: "Orders", src: "./adminsidebar/order.png", to: "/aorder" },
      {title: "Transactions",src: "./adminsidebar/transaction.png", to: "/atransaction",},
      { title: "Blog", src: "./adminsidebar/blog.png", to: "/ablog" },
      {title: "Feedback", src: "./adminsidebar/feedback.png", to: "/afeedback",},
      { title: "Setting", src: "./adminsidebar/setting.png", to: "/asettingmd" , bg: "#388e3c"},
      { title: "Log out", src: "./adminsidebar/log out.png", to: "/" },
    ];


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [otp, setOtp] = useState()
    const [write, setWrite] = useState(true)
    const [isSending, setIsSending] = useState(false);
    const [hasSentOnce, setHasSentOnce] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
  
    const navigate = useNavigate()
  
    // const otpSend = () => {
  
    //   if (!isSending) {
    //     setIsSending(true);
  
    //     axios
    //       .post("http://localhost:5000/send", {
    //         email: email,
    //       })
    //       .then((response) => {
    //         if (response.data.message === "OTP sent") {
    //           toast.success("OTP sent successfully");
    //           setWrite(false)
    //           setIsSending(false);
    //           setHasSentOnce(true);
    //           // Handle success case (e.g., display success message)
    //         } else {
    //           // Handle user not found case (e.g., display error message)
    //         }
    //         setIsSending(false);
    //       })
    //       .catch((error) => {
    //         toast.error("User not found");
    //         console.log("An error occurred while sending the OTP:", error);
    //         // Handle error case (e.g., display error message)
    //         setIsSending(false);
    //       });
    //   }
  
    // }
  
    // const handlePassChange = (e) => {
    //   setIsLoading(true);
  
    //   axios
    //     .post("http://localhost:5000/submitotp", {
    //       otp: otp,
    //       password: password,
    //     })
    //     .then((response) => {
    //       if (response.data.code === 200) {
    //         toast.success("Password updated successfully");
    //         navigate("/")
    //         // Handle success case (e.g., display success message)
    //       } else {
    //         toast.error("Invalid OTP");
    //         // Handle invalid OTP case (e.g., display error message)
    //       }
    //       setIsLoading(false);
    //     })
    //     .catch((error) => {
    //       console.log("An error occurred while submitting OTP:", error);
    //       setError("An error occurred while submitting OTP");
    //       // Handle error case (e.g., display error message)
    //       setIsLoading(false);
    //     });
    // }
  
  


  return (  
   
  <>
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
            className={`flex rounded-md p-2 cursor-pointer hover:bg-[#2196f3]  focus:bg-[#388e3c] hover:text-white text-sm items-center gap-x-4 ${
              Menu.gap ? "mt-9" : "mt-2"
            } ${index === 0 && "bg-light-white"}`}
          >
            <img src={Menu.src} className="w-6 " alt="asset" />
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
          ? "xl:pl-64 pl-10 transition-all duration-200 "
          : "pl-10 xl:pl-14 transition-all duration-200  "
      }`}
    >
       <div className="   bg-[#F0ECEC] pt-6 ps-5 2xl:space-x-72 sm:space-x-4 space-x-4">
          
          <Link to="/asettingmd" className="" >   <Button className="capitalize font-semibold bg-[#c5c5c5] hover:bg-[#2196f3]   text-black    " >My Details</Button></Link> 
          <Button  className="capitalize font-semibold bg-[#c5c5c5] hover:bg-[#2196f3]   text-black  ">Change Password</Button> 
    
          </div>
    <div className="  bg-[#F0ECEC]  h-[78vmin]  pt-20 ">
   
    <Card color="transparent " className="lg:w-[27vmax] sm:w-[47vmax]  mx-auto   shadow-blue-gray-700 border p-2" shadow={false}>
      <Typography variant="h4" color="blue-gray" className="text-center p-4">
        Change password
      </Typography>
      
      <form className=" pb-16 w-full grid  ">
        <div className="mb-4 flex flex-col-2 gap-6">
          <Input size="" label="Email" className="border border-1 "  value={email}
                          onChange={(e) => setEmail(e.target.value)}/>
          <Link
                          onClick={()=>{
                            if (!isSending) {
                              setIsSending(true);
                        
                              axios
                                .post("http://localhost:5000/send", {
                                  email: email,
                                })
                                .then((response) => {
                                  if (response.data.message === "OTP sent") {
                                    toast.success("OTP sent successfully");
                                    setWrite(false)
                                    setIsSending(false);
                                    setHasSentOnce(true);
                                    // Handle success case (e.g., display success message)
                                  } else {
                                    // Handle user not found case (e.g., display error message)
                                  }
                                  setIsSending(false);
                                })
                                .catch((error) => {
                                  toast.error("User not found");
                                  console.log("An error occurred while sending the OTP:", error);
                                  // Handle error case (e.g., display error message)
                                  setIsSending(false);
                                });
                            }
                        
                          }}

                          className={`inline-block rounded border-2 ${isSending ? "opacity-50 cursor-not-allowed" : "border-danger"
                            } px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10`}  >
                          {isSending ? "Sending..." : hasSentOnce ? "Send Again" : "Send"}
                        </Link>
                        </div>
          <Input size="" label="OTP" value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        readOnly={write}
                        type="number"
                        className={` ${write === true ? ("hover:cursor-not-allowed ") : ("hover:cursor-text")}  peer text-neutral-700 block min-h-[auto] w-full rounded border-1 bg-transparent px-3 py-[0.32rem] leading-[1.6] 
                          outline-0 transition-all duration-200 ease-linear focus:placeholder:opacity-100 
                          data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none 
                          dark:placeholder:text-neutral-200 
                          [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0`}
/> <br />
          <Input type="password" size="" label="New Password" value={password}
                        onChange={(e) => setPassword(e.target.value)}
                         />
        
        <div className="flex justify-around  "><Link to="/"><Button className="mt-6  bg-[#2196f3]"  onClick={(e) => {
      setIsLoading(true);
  
      axios
        .post("http://localhost:5000/submitotp", {
          otp: otp,
          password: password,
        })
        .then((response) => {
          if (response.data.code === 200) {
            toast.success("Password updated successfully");
            navigate("/")
            // Handle success case (e.g., display success message)
          } else {
            toast.error("Invalid OTP");
            // Handle invalid OTP case (e.g., display error message)
          }
          setIsLoading(false);
        })
        .catch((error) => {
          console.log("An error occurred while submitting OTP:", error);
          setError("An error occurred while submitting OTP");
          // Handle error case (e.g., display error message)
          setIsLoading(false);
        });
    }}>
          Submit
        </Button></Link>
        
        </div>

      </form>
    </Card>
    </div></div>
  </div>
    </>
 )
}
export default Changepass;