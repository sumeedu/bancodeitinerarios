import React from "react";

const ReviewBox: React.FC = (props) => {
  return (
    <div className="mx-auto py-4 max-w-sm ">
      <div className="mb-1 tracking-wide py-4">
        <h2 className="text-gray-800 font-semibold mt-1">67 reviews</h2>
        <div className="border-b pb-3">
          <div className="flex items-center mt-1">
            <div className=" w-1/5 text-indigo-500 tracking-tighter">
              <span>5 stars</span>
            </div>
            <div className="w-3/5">
              <div className="bg-gray-300 w-full rounded-lg h-2">
                <div className=" w-7/12 bg-indigo-600 rounded-lg h-2"></div>
              </div>
            </div>
            <div className="w-1/5 text-gray-700 pl-3">
              <span className="text-sm">51%</span>
            </div>
          </div>
          <div className="flex items-center mt-1">
            <div className="w-1/5 text-indigo-500 tracking-tighter">
              <span>4 stars</span>
            </div>
            <div className="w-3/5">
              <div className="bg-gray-300 w-full rounded-lg h-2">
                <div className="w-1/5 bg-indigo-600 rounded-lg h-2"></div>
              </div>
            </div>
            <div className="w-1/5 text-gray-700 pl-3">
              <span className="text-sm">17%</span>
            </div>
          </div>
          <div className="flex items-center mt-1">
            <div className="w-1/5 text-indigo-500 tracking-tighter">
              <span>3 stars</span>
            </div>
            <div className="w-3/5">
              <div className="bg-gray-300 w-full rounded-lg h-2">
                <div className=" w-3/12 bg-indigo-600 rounded-lg h-2"></div>
              </div>
            </div>
            <div className="w-1/5 text-gray-700 pl-3">
              <span className="text-sm">19%</span>
            </div>
          </div>
          <div className="flex items-center mt-1">
            <div className=" w-1/5 text-indigo-500 tracking-tighter">
              <span>2 stars</span>
            </div>
            <div className="w-3/5">
              <div className="bg-gray-300 w-full rounded-lg h-2">
                <div className=" w-1/5 bg-indigo-600 rounded-lg h-2"></div>
              </div>
            </div>
            <div className="w-1/5 text-gray-700 pl-3">
              <span className="text-sm">8%</span>
            </div>
          </div>
          <div className="flex items-center mt-1">
            <div className="w-1/5 text-indigo-500 tracking-tighter">
              <span>1 stars</span>
            </div>
            <div className="w-3/5">
              <div className="bg-gray-300 w-full rounded-lg h-2">
                <div className=" w-2/12 bg-indigo-600 rounded-lg h-2"></div>
              </div>
            </div>
            <div className="w-1/5 text-gray-700 pl-3">
              <span className="text-sm">5%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <h3 className="font-medium tracking-tight">Faça um review</h3>
        <p className="text-gray-700 text-sm py-1">
          e dê seu feedback sobre esse itinerário.
        </p>
        <button className="bg-gray-100 border border-gray-400 px-3 py-1 rounded  text-gray-800 mt-2">
          Fazer um review
        </button>
      </div>
    </div>
  );
}

export default ReviewBox


