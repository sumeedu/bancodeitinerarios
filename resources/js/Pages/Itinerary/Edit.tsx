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
        <pre>
          {JSON.stringify(itinerary, undefined, 2)}
        </pre>
      </Container>
    </Authenticated>
  )
}

export default Index
