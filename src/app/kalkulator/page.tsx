import React from "react";

export default function page() {
  return (
    <div className="  flex flex-col  items-center justify-center h-screen   bg-slate-200">
      <div className=" shadow-lg rounded-lg  m-9 p-5 w-1/3 bg-gradient-to-b bg-gray-300 from-gray-400 to-gray-500 shadow-gray-500/100 ">
        <div>
          <p className=" text-5xl p-3 text-shadow-3">Kalkulator</p>
        </div>
        <div className="">
          <input className="border-2 border-white rounded-lg p-5 w-full bg-white shadow-lg  "></input>
        </div>
        <div className="grid grid-cols-4 gap-10 p-3 text-2xl font-bold ">
          <button className="bg-gradient-to-b bg-gray-400  rounded-lg p-3 hover:bg-gray-500 shadow-lg">
            7
          </button>
          <button className="bg-gray-400 rounded-lg p-3 hover:bg-gray-500 shadow-lg ">
            8
          </button>
          <button className="bg-gray-400 rounded-lg p-3 hover:bg-gray-500 shadow-lg">
            9
          </button>
          <button className="bg-gray-400 rounded-lg p-3 hover:bg-gray-500 shadow-lg">
            /
          </button>
          <button className="bg-gray-400 rounded-lg p-3 hover:bg-gray-500 shadow-lg">
            4
          </button>
          <button className="bg-gray-400 rounded-lg p-3 hover:bg-gray-500 shadow-lg">
            5
          </button>
          <button className="bg-gray-400 rounded-lg p-3 hover:bg-gray-500 shadow-lg">
            6
          </button>
          <button className="bg-gray-400 rounded-lg p-3 hover:bg-gray-500 shadow-lg">
            *
          </button>
          <button className="bg-gray-400 rounded-lg p-3 hover:bg-gray-500 shadow-lg">
            1
          </button>
          <button className="bg-gray-400 rounded-lg p-3 hover:bg-gray-500 shadow-lg">
            2
          </button>
          <button className="bg-gray-400 rounded-lg p-3 hover:bg-gray-500 shadow-lg">
            3
          </button>
          <button className="bg-gray-400 rounded-lg p-3 hover:bg-gray-500 shadow-lg">
            -
          </button>
          <button className="bg-gray-400 rounded-lg p-3 hover:bg-gray-500 shadow-lg">
            0
          </button>
          <button className="bg-gray-400 rounded-lg p-3 hover:bg-gray-500 shadow-lg">
            .
          </button>
          <button className="bg-gray-400 rounded-lg p-3 hover:bg-gray-500 shadow-lg">
            =
          </button>
          <button className="bg-gray-400 rounded-lg p-3 hover:bg-gray-500 shadow-lg">
            +
          </button>
          
          <button className="col-span-4 bg-gray-400 rounded-lg p-3 hover:bg-gray-500 shadow-lg text-white">
            Clear
          </button>
        
        </div>
      </div>
    </div>
  );
}
