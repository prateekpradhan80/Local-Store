import React from "react";

const Shimmer = () => {
  const ArrayData = new Array(8).fill("");
  
  return (
    <div className="flex flex-wrap justify-center gap-7 mt-10">
      {ArrayData.map((element, index) => (
        <div className="border shadow-2xl p-3 w-[20vw] bg-white" key={index}>
          <div className="h-36 w-full bg-gray-200 rounded"></div>
          <div className="bg-gray-200 h-6 mt-2 w-56 rounded"></div>
          <div className="flex">
            <p className="bg-gray-200 h-4 mt-2 w-24 rounded mr-8"></p>
            <p className="bg-gray-200 h-4 mt-2 w-24 rounded"></p>
          </div>
          <div className="bg-gray-200 h-4 mt-2 w-12 rounded mb-3"></div>
          <div className="ml-4 bg-gray-200 h-6 rounded-lg w-64"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
