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

      <Container className="p-6">
        <div className="grid grid-cols-1 grid-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-8">
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
      </Container>
    </Authenticated>
  )
}

export default Index
