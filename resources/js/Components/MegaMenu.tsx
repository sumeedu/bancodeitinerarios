import React from 'react';

interface Props {
    children?: React.ReactNode
}

const MegaMenu: React.FC<Props> = ({
  children
}) =>{
    return(
        <ul className='flex'>
            <li className='hoverable hover:bg-gray-700 hover:text-white'>
                <a href="" 
                className='Relative block py6 px4 lg:p-6 text-sm lg:text-base font-bold hover:bg-gray-700 hover:text-white'>Show Menu
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


            </li>
        </ul>
    )
}

export default MegaMenu

