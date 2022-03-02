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
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
    >
      <Head title="Dashboard"/>

      <Container>
        <div className="grid grid-cols-1 grid-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {itineraries && itineraries.map((item: any) => (
              <div key={item.id} className="bg-white rounded-lg overflow-hidden mb-10">
                <h3 className="mb-4 font-semibold text-md">{item.name}</h3>
                <p>Criado por: {item.user.name}</p>
                <p>{item.description}</p>
                <Link href={route('itineraries.show', {itinerary: item})}>
                  Ver mais
                </Link>
              </div>
          ))}
        </div>
      </Container>
    </Authenticated>
  )
}

export default Index
