import React from 'react'
import Authenticated from "@/Layouts/Authenticated";
import {Head} from "@inertiajs/inertia-react";
import Container from "@/Components/Container";
import ObjectiveIcon from "@/Components/ObjectiveIcon";

const Index: React.FC = (props: React.PropsWithChildren<any>) => {
  const {itinerary} = props

  function getCategoryByType(obj: any, type: string): any[] {
    let list : any[] = []
    obj.categories.filter((c: any) => c.type === type).map((c: any) => list.push(c.name))
    return list
  }

  let areas: any[] = getCategoryByType(itinerary, 'area')
  let axis : any[] = getCategoryByType(itinerary, 'axis')
  let objectives : any[] = getCategoryByType(itinerary, 'objective')

  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
    >
      <Head title={`Itinerários Formativos | ${itinerary.name}`}/>

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

        <h4 className="font-semibold mt-4 mb-2 text-md">Áreas do Conhecimento</h4>
        <p>{areas.join(', ')}</p>

        <h4 className="font-semibold mt-4 mb-2 text-md">Eixos Estruturantes</h4>
        <p>{axis.join(', ')}</p>

        <h4 className="font-semibold mt-4 mb-2 text-md">Objetivos da ONU</h4>
        <div className="flex flex-wrap gap-1">
          {objectives.map((n, k) => (
            <ObjectiveIcon name={n} />
          ))}
        </div>

      </Container>
    </Authenticated>
  )
}

export default Index
