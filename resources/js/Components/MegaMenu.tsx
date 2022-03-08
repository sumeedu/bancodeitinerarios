import React from 'react';

interface Props {
  label: string
  children?: React.ReactNode
}

const MegaMenu: React.FC<Props> = ({
  label,
  children
}) =>{
    return(

        <div className="hoverable hover:bg-gray-700 hover:text-white static ">

            <a
                className="flex items-center relative py-6 px-4 lg:p-6 text-sm font-medium hover:bg-gray-700 hover:text-white transition duration-100 cursor-pointer "
            >
              {label}
            <svg
                className="ml-2 -mr-0.5 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                />
                </svg>
            </a>

            <div className="mega-menu p-6 mb-16 sm:mb-0 shalow-xl bg-gray-700 left-0">
                <div className="container m-auto w-full flex flex-wrap justify-center">
                  {children}
                </div>
            </div>

        </div>

    )
}

export default MegaMenu

