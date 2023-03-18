import React from "react";
import Card from "../components/Card";
import Compose from "./Compose";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const Home = ({ tableData }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const info = [
    {
      title: " news1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, dolore.",
    },
    {
      title: " news1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, dolore.",
    },
  ];
   const [click, setClick] = useState("");
  const handleClick=(e)=>{setClick(e.target.value)}
  console.log(click);
  

  return (
    <>
    <nav className="flex m-10 items-center justify-center">
      <ul className="flex gap-20">
        <button className="hover:text-cyan-500" onClick={handleClick} value="General">General</button>
        <button className="hover:text-cyan-500" onClick={handleClick} value="Technical">Technical</button>
        <button className="hover:text-cyan-500" onClick={handleClick} value="Academic">Academic</button>
      </ul>
    </nav>
      <div className=""> {
        
        location.state.map((list) => (click===list.category && <div className=" rounded-xl mb-10 bg-[#191970] text-white p-7 m-10  ">
           <h1 className="mb-5 text-3xl font-semibold">{list.title}</h1>
           <hr />
           <p className="mt-5 text-2xl font-semibold">{list.content}</p>
          </div> ))}
          {/* //click===list.category && <div className=" rounded-lg mb-28 bg-blue-200  p-6 text-blue shadow-lg dark:bg-neutral-600 dark:text-neutral-200 dark:shadow-black/30">
          //   <h1 className="mb-5 text-3xl font-semibold">{list.title}</h1>
          //  </div> */}
            
          

      
      </div>
    </>
  );
};

export default Home;
