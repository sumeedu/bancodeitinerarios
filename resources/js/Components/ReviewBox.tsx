import React from "react";

const ReviewBox: React.FC = (props) => {
  return (
    <div className="mx-auto py-4 max-w-sm ">
      <div className="mb-1 tracking-wide py-4">
        <h2 className="text-gray-800 font-semibold mt-1">67 reviews</h2>
        <div className="border-b pb-3">
          <div className="flex items-center mt-1">
            <div className=" w-1/5 text-blue-600 tracking-tighter">
              <span>5 stars</span>
            </div>
            <div className="w-3/5">
              <div className="bg-gray-300 w-full rounded-lg h-2">
                <div className=" w-7/12 bg-blue-600 rounded-lg h-2"></div>
              </div>
            </div>
            <div className="w-1/5 text-gray-700 pl-3">
              <span className="text-sm">51%</span>
            </div>
          </div>
          <div className="flex items-center mt-1">
            <div className="w-1/5 text-blue-600 tracking-tighter">
              <span>4 stars</span>
            </div>
            <div className="w-3/5">
              <div className="bg-gray-300 w-full rounded-lg h-2">
                <div className="w-1/5 bg-blue-600 rounded-lg h-2"></div>
              </div>
            </div>
            <div className="w-1/5 text-gray-700 pl-3">
              <span className="text-sm">17%</span>
            </div>
          </div>
          <div className="flex items-center mt-1">
            <div className="w-1/5 text-blue-600 tracking-tighter">
              <span>3 stars</span>
            </div>
            <div className="w-3/5">
              <div className="bg-gray-300 w-full rounded-lg h-2">
                <div className=" w-3/12 bg-blue-600 rounded-lg h-2"></div>
              </div>
            </div>
            <div className="w-1/5 text-gray-700 pl-3">
              <span className="text-sm">19%</span>
            </div>
          </div>
          <div className="flex items-center mt-1">
            <div className=" w-1/5 text-blue-600 tracking-tighter">
              <span>2 stars</span>
            </div>
            <div className="w-3/5">
              <div className="bg-gray-300 w-full rounded-lg h-2">
                <div className=" w-1/5 bg-blue-600 rounded-lg h-2"></div>
              </div>
            </div>
            <div className="w-1/5 text-gray-700 pl-3">
              <span className="text-sm">8%</span>
            </div>
          </div>
          <div className="flex items-center mt-1">
            <div className="w-1/5 text-blue-600 tracking-tighter">
              <span>1 stars</span>
            </div>
            <div className="w-3/5">
              <div className="bg-gray-300 w-full rounded-lg h-2">
                <div className=" w-2/12 bg-blue-600 rounded-lg h-2"></div>
              </div>
            </div>
            <div className="w-1/5 text-gray-700 pl-3">
              <span className="text-sm">5%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <h3 className="font-semibold mt-4 mb-2 text-lg">Faça um review</h3>
        <p className="text-gray-700 text-sm py-1">
          e dê seu feedback sobre esse itinerário.
        </p>
        <button className="btn px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
          Fazer um review
        </button>
      </div>
    </div>
  );
}

export default ReviewBox


