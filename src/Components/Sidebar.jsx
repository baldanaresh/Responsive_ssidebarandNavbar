import { useState } from "react";


const Sidebar=()=>{
  const [open,setopen]=useState(true);
  const items=[
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
  ];
  return<div className="flex mt-4 ml-2 ">
    <div className={`${open? "w-72":"w-24"} duration-300 relative h-screen bg-transparent backdrop-blur-md border-2 border-indigo-400 rounded-xl shadow-xl `}>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
 className={`absolute -right-5 top-16 size-10 bg-red-400 text-white cursor-pointer rounded-full border-2 border-black
  ${!open && "rotate-180"}`} 
 onClick={()=>setopen(!open)}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>
<div className={`p-4 flex items-center origin-left  bg-purple-700 text-white rounded-md `}>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 mr-3 text-white ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
</svg>
<h2 className={`${!open? "hidden":""} duration-400 text-3xl`}>Dashboard</h2>
</div>
      <ul className="  ">
          {items.map((item, index) => (
            <li key={index} className="text-slate-300 text-lg flex gap-8 origin-left mt-14 ml-5 mr-3 bg-indigo-500 hover:bg-indigo-700 hover:text-white rounded-md p-4">
             <h3 >{item.price}</h3>
             <p className={`${!open?"hidden":""} duration-400`}>  {item.name}</p>
            </li>
          ))}
        </ul>
    </div>
    <div className="p-5">
    Home
    </div>
  </div>
}

export default Sidebar;