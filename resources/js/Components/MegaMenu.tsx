import React from 'react';

interface Props {
    children?: React.ReactNode
}

const MegaMenu: React.FC<Props> = ({
  children
}) =>{
    return(
        
        <div className="hoverable hover:bg-gray-700 hover:text-white">

            <a
                className="flex items-center relative py-6 px-4 lg:p-6 text-sm font-medium hover:bg-gray-700 hover:text-white transition duration-100 cursor-pointer "
            >
                Show Menu

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
            
            <div className="mega-menu p-6 mb-16 sm:mb-0 shalow-xl bg-gray-700">
                <div className="container mx-auto w-full flex flex-wrap justify-between">
                    <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                        <h3 className="font-bold text-xl text-white text-bold mb-2">Áreas do Conhecimento</h3>
                        <li>
                        <a href="#" className="block p-3 hover:bg-gray-900 text-gray-300 hover:text-white">Lando Calrissian</a>
                        </li>
                        <li>
                        <a href="#" className="block p-3 hover:bg-gray-900 text-gray-300 hover:text-white">Nien Nunb</a>
                        </li>
                        <li>
                        <a href="#" className="block p-3 hover:bg-gray-900 text-gray-300 hover:text-white">Mon Mothma</a>
                        </li>
                        <li>
                        <a href="#" className="block p-3 hover:bg-gray-900 text-gray-300 hover:text-white">Wedge Antilles</a>
                        </li>
                        <li>
                        <a href="#" className="block p-3 hover:bg-gray-900 text-gray-300 hover:text-white">Admiral Gial Ackbar</a>
                        </li>
                    </ul>
                    <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                        <h3 className="font-bold text-xl text-white text-bold mb-2">Eixo Estruturantes</h3>
                        <li>
                        <a href="#" className="block p-3 hover:bg-gray-900 text-gray-300 hover:text-white">Obi-Wan Kenobi</a>
                        </li>
                    </ul>
                    <ul className="px-4 w-full sm:w-1/2 lg:w-1/4  pb-6 pt-6 lg:pt-3">
                        <h3 className="font-bold text-xl text-white text-bold mb-2">Objetivos de Desenvolvimento Sustentável</h3>
                        <li>
                        <a href="#" className="block p-3 hover:bg-gray-900 text-gray-300 hover:text-white">Obi-Wan Kenobi</a>
                        </li>
                    </ul>
                    

                </div>
            </div>


        </div>
        
    )
}

export default MegaMenu

