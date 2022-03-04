import React from 'react'
import Authenticated from "@/Layouts/Authenticated"
import Container from "@/Components/Container"
import {Head, Link} from "@inertiajs/inertia-react"
import route from "ziggy-js"

const Index: React.FC = (props: React.PropsWithChildren<any>) => {
  const {itineraries} = props

  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
    >
      <Head title="Itinerários Formativos"/>


      <Container className="bg-white shadow-sm rounded-t-lg">
        <div className="grid grid-cols-4 gap-4">

          <div className="bg-gray-50 p-6 rounded-tr-lg">
            <div>
              <div className="px-4 flex items-center justify-between">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
              </div>
              <form className="mt-4 border-t border-gray-200">
                <h3 className="sr-only">Categories</h3>
                <ul role="list" className="font-medium text-gray-900 px-2 py-3">
                  <li>
                    <a href="#" className="block px-2 py-3"> Totes </a>
                  </li>

                  <li>
                    <a href="#" className="block px-2 py-3"> Backpacks </a>
                  </li>

                  <li>
                    <a href="#" className="block px-2 py-3"> Travel Bags </a>
                  </li>

                  <li>
                    <a href="#" className="block px-2 py-3"> Hip Bags </a>
                  </li>

                  <li>
                    <a href="#" className="block px-2 py-3"> Laptop Sleeves </a>
                  </li>
                </ul>
                <div className="border-t border-gray-200 px-4 py-6">
                  <h3 className="-mx-2 -my-3 flow-root">
                    <button type="button" className="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-0" aria-expanded="false">
                      <span className="font-medium text-gray-900"> Color </span>
                      <span className="ml-6 flex items-center">

                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>

                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </button>
                  </h3>

                  <div className="pt-6" id="filter-section-mobile-0">
                    <div className="space-y-6">
                      <div className="flex items-center">
                        <input id="filter-mobile-color-0" name="color[]" value="white" type="checkbox" className="h-4 w-4 border-gray-300     rounded text-indigo-600 focus:ring-indigo-500"/>
                          <label htmlFor="filter-mobile-color-0" className="ml-3 min-w-0 flex-1 text-gray-500"> White </label>
                      </div>

                      <div className="flex items-center">
                        <input id="filter-mobile-color-1" name="color[]" value="beige" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                        <label htmlFor="filter-mobile-color-1" className="ml-3 min-w-0 flex-1 text-gray-500"> Beige </label>
                      </div>

                      <div className="flex items-center">
                        <input id="filter-mobile-color-2" name="color[]" value="blue" type="checkbox" defaultChecked className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                        <label htmlFor="filter-mobile-color-2" className="ml-3 min-w-0 flex-1 text-gray-500"> Blue </label>
                      </div>

                      <div className="flex items-center">
                        <input id="filter-mobile-color-3" name="color[]" value="brown" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                        <label htmlFor="filter-mobile-color-3" className="ml-3 min-w-0 flex-1 text-gray-500"> Brown </label>
                      </div>

                      <div className="flex items-center">
                        <input id="filter-mobile-color-4" name="color[]" value="green" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                        <label htmlFor="filter-mobile-color-4" className="ml-3 min-w-0 flex-1 text-gray-500"> Green </label>
                      </div>

                      <div className="flex items-center">
                        <input id="filter-mobile-color-5" name="color[]" value="purple" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                        <label htmlFor="filter-mobile-color-5" className="ml-3 min-w-0 flex-1 text-gray-500"> Purple </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6">
                  <h3 className="-mx-2 -my-3 flow-root">
                    {/* Expand/collapse section button */}
                    <button type="button" className="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-2" aria-expanded="false">
                      <span className="font-medium text-gray-900"> Size </span>
                      <span className="ml-6 flex items-center">
                        {/* Expand icon, show/hide based on section open state.*/}
                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                        {/*Collapse icon, show/hide based on section open state. */}
                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  <div className="pt-6" id="filter-section-mobile-2">
                    <div className="space-y-6">
                      <div className="flex items-center">
                        <input id="filter-mobile-size-0" name="size[]" value="2l" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                        <label htmlFor="filter-mobile-size-0" className="ml-3 min-w-0 flex-1 text-gray-500"> 2L </label>
                      </div>

                      <div className="flex items-center">
                        <input id="filter-mobile-size-1" name="size[]" value="6l" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                        <label htmlFor="filter-mobile-size-1" className="ml-3 min-w-0 flex-1 text-gray-500"> 6L </label>
                      </div>

                      <div className="flex items-center">
                        <input id="filter-mobile-size-2" name="size[]" value="12l" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                        <label htmlFor="filter-mobile-size-2" className="ml-3 min-w-0 flex-1 text-gray-500"> 12L </label>
                      </div>

                      <div className="flex items-center">
                        <input id="filter-mobile-size-3" name="size[]" value="18l" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                        <label htmlFor="filter-mobile-size-3" className="ml-3 min-w-0 flex-1 text-gray-500"> 18L </label>
                      </div>

                      <div className="flex items-center">
                        <input id="filter-mobile-size-4" name="size[]" value="20l" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                        <label htmlFor="filter-mobile-size-4" className="ml-3 min-w-0 flex-1 text-gray-500"> 20L </label>
                      </div>

                      <div className="flex items-center">
                        <input id="filter-mobile-size-5" name="size[]" value="40l" type="checkbox" defaultChecked className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"/>
                        <label htmlFor="filter-mobile-size-5" className="ml-3 min-w-0 flex-1 text-gray-500"> 40L </label>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="col-span-3 p-6">
            <div className="grid grid-cols-2 gap-4">
              {itineraries && itineraries.map((item: any) => (
                  <div key={item.id} className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg mb-10">

                    <img
                      className="w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                      src="https://placeimg.com/120/120/tech" alt=""/>
                    <div className="p-6 flex flex-col justify-start">
                      <div className="flex-1">
                        <h3 className="text-gray-900 text-xl font-medium mb-2">{item.name}</h3>
                        <p className="text-gray-700 mb-4 overflow-hidden">{item.description}</p>
                        <p className="text-gray-600 text-xs">Criado por: {item.user.name}</p>
                      </div>
                      <div className="text-right">
                        <Link className="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" href={route('itineraries.show', {itinerary: item})}>
                          Ver mais
                        </Link>
                      </div>
                    </div>

                  </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </Authenticated>
  )
}

export default Index
