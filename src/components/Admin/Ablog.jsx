import { Button } from "@material-tailwind/react";

export default function Ablog() {
  return (
    <div className="p-4  bg-[#F0ECEC] mt-3 h-98">
      <h1 className="font-bold flex justify-center mb-3">Updated Blog's</h1>
      {/* <div className="grid gap-6 lg:grid-cols-4  xl:grid-cols-5 grid-rows-1  md:grid-cols-2 sm:overflow-x-scroll sm:grid-cols-5  grid-cols-1  mx-9 mb-4	overflow-x-scroll	"> */}

      <div className="overflow-scroll  h-[50vmin] xl:h-[40vmin] md:h-[40vmin]	">
      <div className="flex gap-x-3">
        <div className="bg-[#d9d9d9] p-3 w-[70vmax]  rounded">
          <img src="./blogimage/news1.png" alt="" />
          <p className="text-sm">
            {" "}
            Foundation provides partial or full assistance to poor students{" "}
            <span
              className="text-red-700 "
              id="text"
              onClick={() => {
                (document.getElementById("text").style.color = "black"),
                  (document.getElementById("text").innerHTML =
                    "educational status of poor");
              }}
            >
              Read more...{" "}
            </span>
          </p>
        </div>
        <div className="bg-[#d9d9d9] p-3 w-[70vmax] rounded">
          <img src="./blogimage/news2.png" alt="" />
          <p className="text-sm ">
            The project is to improve the educational status of poor and
            un-educated{" "}
            <span
              className="text-red-700 "
              id="text1"
              onClick={() => {
                (document.getElementById("text1").style.color = "black"),
                  (document.getElementById("text1").innerHTML =
                    "educational status of poor");
              }}
            >
              Read more...
            </span>
          </p>
        </div>
        <div className="bg-[#d9d9d9] p-3 w-[70vmax] rounded">
          <img src="./blogimage/news3.png" alt="" />
          <p className="text-sm">
            Education is central to all and especially to women in the fight
            against{" "}
            <span
              className="text-red-700 "
              id="text2"
              onClick={() => {
                (document.getElementById("text2").style.color = "black"),
                  (document.getElementById("text2").innerHTML =
                    "educational status of poor");
              }}
            >
              Read more...
            </span>
          </p>
        </div>
        <div className="bg-[#d9d9d9] p-3 w-[70vmax] rounded">
          <img src="./blogimage/news4.png" alt="" />
          <p className="text-sm">
            Education is central to all and especially to women in the fight{" "}
            <span
              className="text-red-700 "
              id="text3"
              onClick={() => {
                (document.getElementById("text3").style.fontSize = "regular"),
                  (document.getElementById("text3").style.color = "black"),
                  (document.getElementById("text3").innerHTML =
                    "educational status of poor");
              }}
            >
              Read more...
            </span>
          </p>
        </div>
        <div className="bg-[#d9d9d9] p-3 w-[70vmax] rounded">
          <img src="./blogimage/news5.png" alt="" />
          <p className="text-sm">
            Education is central to all and especially to women in the fight{" "}
            <span
              className="text-red-700 "
              id="text4"
              onClick={() => {
                (document.getElementById("text4").style.color = "black"),
                  (document.getElementById("text4").innerHTML =
                    "educational status of poor");
              }}
            >
              Read more...
            </span>
          </p>
        </div>
        <div className="bg-[#d9d9d9] p-3 w-[70vmax] rounded">
          <img src="./blogimage/news5.png" alt="" />
          <p className="text-sm">
            Education is central to all and especially to women in the fight{" "}
            <span
              className="text-red-700 "
              id="text4"
              onClick={() => {
                (document.getElementById("text4").style.color = "black"),
                  (document.getElementById("text4").innerHTML =
                    "educational status of poor");
              }}
            >
              Read more...
            </span>
          </p>
        </div>
        
        {/* </div> */}
      </div>
      </div>
      <hr />
      <div className="grid gap-6   xl:grid-cols-2   md:grid-cols-2 sm:grid-cols-1  grid-cols-1  mx-9 mb-4	mt-2	">
        <div>
          <h1 className="font-bold flex justify-center mb-3">
            Upload Blog Image
          </h1>
          <div className="bg-[#b5c6a0] rounded pt-3 pb-3">
            <img
              src="./ablogimg/upload.png "
              alt=""
              className="mx-auto h-[5vmin] mb-2"
            />
            <h3 className="flex justify-center font-semibold mb-2">
              Upload a Thumbnail{" "}
            </h3>
            <p className="flex justify-center text-lg">
              Drag and drop file here{" "}
            </p>
          </div>
          <div className="mt-3">
            <h1 className="font-bold flex justify-center mb-3">Schedule</h1>
            <div className="bg-[#b5c6a0] rounded pt-3 pb-3">
              <h3 className="flex justify-center font-semibold mb-2">
                Select the date make your blog public{" "}
              </h3>
              {/* <div className="flex"> <input type="text" />     </div> */}
              <div class="sm:flex justify-around items-center  mb-2">
                <div class="   mb-6 md:mb-0">
                  <input
                    type="date"
                    className="appearance-none block  bg-gray-200 text-gray-700 border border-gray-200 rounded sm:py-3 py-2 sm:px-4 px-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-city"
                  />
                </div>
                <div class="  mb-6 md:mb-0">
                  <input
                    type="time"
                    className="appearance-none block  bg-gray-200 text-gray-700 border border-gray-200 rounded sm:py-3 py-2 sm:px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-city"
                  />
                </div>
              </div>

              <p className="flex justify-center text-lg font-semibold">
                Blog will be private before publishing
              </p>
            </div>
          </div>
        </div>

        <div>
          <h1 className="font-bold flex justify-center mb-3 ">
            Type Blog Here
          </h1>
            <textarea name="" id="" cols="28" rows="5" className="bg-[#b5c6a0] xl:w-[30vmax] rounded pt-3 pb-3"></textarea>
              
            <div className=" !flex justify-center  items-center mt-4" >
          <Button className="xl:w-32 me-3 mx-auto bg-[#6cb117]">Delete</Button>
          <Button className="xl:w-32   mx-auto bg-[#6cb117]">Enter</Button> 
          </div> 
        </div>


      </div>
    
    </div>
  );
}
