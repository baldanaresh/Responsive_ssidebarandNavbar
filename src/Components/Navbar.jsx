import { useState } from "react"

export default function Navbar(){
    const [click,setclick]=useState(true);
    return<>
    <div className="bg-transparent/5 backdrop-blur-md border-2 border-indigo-400 rounded-xl shadow-xl  text-xl w-full text-center p-5 flex justify-between  relative">
        <div className="text-white">Logo</div>
        <div className="flex gap-10">
            <input type="text" placeholder="search"
             className=" rounded-full p-2 pl-5 outline-none w-64 max-w-96 mr-16 focus:ring ring-pink-500 ring-offset-2 " 
             />
            <ul className="hidden duration-300 md:flex justify-between  gap-10 cursor-pointer">
            <li className="text-white hover:text-black">Home</li>
            <li className="text-white hover:text-black">About </li>
            <li className="text-white hover:text-black">Contact</li>
        </ul>
        </div>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
        className="size-10 absolute right-5 top-5 cursor-pointer md:hidden"
        onClick={()=>setclick(!click)}>
           <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
       </svg>
       <div className={`${!click?"hidden":""} absolute bg-transparent duration-300 backdrop-blur-md right-5 mt-5 top-20 border-2 border-t-1 border-indigo-400 rounded-xl shadow-x h-svh w-80 md:hidden`}>
       <ul className={`flex flex-col justify-between items-center duration-300 mt-20 gap-10 cursor-pointer`}>
            <li className="text-slate-100 hover:text-black bg-amber-300 w-60 p-2 rounded-lg">Home</li>
            <li className="text-slate-100 hover:text-black bg-amber-300 w-60 p-2 rounded-lg">About </li>
            <li className="text-slate-100 hover:text-black bg-amber-300 w-60 p-2 rounded-lg">Contact</li>
        </ul>
       </div>
    </div>
   
    </>
}