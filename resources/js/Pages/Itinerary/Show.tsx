import React from 'react'
import Authenticated from "@/Layouts/Authenticated";
import {Head} from "@inertiajs/inertia-react";
import Container from "@/Components/Container";

const Index: React.FC = (props: React.PropsWithChildren<any>) => {
  const {itinerary} = props

  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
    >
      <Head title="Dashboard"/>

      <Container>
        <h3 className="font-semibold mb-6 text-xl">{itinerary.name}</h3>
        <p>Criado por: {itinerary.user.name}</p>

        <h4 className="font-semibold mt-4 mb-2 text-md">Descrição</h4>
        <p>{itinerary.description}</p>

        <h4 className="font-semibold mt-4 mb-2 text-md">Objetivos</h4>
        <p>{itinerary.objective}</p>

        <h4 className="font-semibold mt-4 mb-2 text-md">Importância</h4>
        <p>{itinerary.importance}</p>

        <h4 className="font-semibold mt-4 mb-2 text-md">Formação</h4>
        <p>{itinerary.formation}</p>

        <h4 className="font-semibold mt-4 mb-2 text-md">Referência</h4>
        <p>{itinerary.reference}</p>
      </Container>
    </Authenticated>
  )
}

export default Index
