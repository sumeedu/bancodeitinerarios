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

      <Container className="bg-white mx-4 shadow-sm rounded-t-lg">
        <div className="grid grid-cols-3 gap-4">

          <div className="col-span-2 p-6">

            <div className="mb-6 border-b pb-6">
              <h3 className="text-gray-900 text-xl font-medium mb-2 text-xl">{itinerary.name}</h3>
              <p className="text-gray-600 text-xs">Criado por: {itinerary.user.name}</p>
            </div>

            <h4 className="font-semibold mt-4 mb-2 text-lg">Descrição</h4>
            <p>{itinerary.description}</p>

            <h4 className="font-semibold mt-4 mb-2 text-lg">Objetivos</h4>
            <p>{itinerary.objective}</p>

            <h4 className="font-semibold mt-4 mb-2 text-lg">Importância</h4>
            <p>{itinerary.importance}</p>

            <h4 className="font-semibold mt-4 mb-2 text-lg">Formação</h4>
            <p>{itinerary.formation}</p>

            <h4 className="font-semibold mt-4 mb-2 text-lg">Referência</h4>
            <p>{itinerary.reference}</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-tr-lg">
            <h4 className="font-semibold mt-4 mb-2 text-lg">Áreas do Conhecimento</h4>
            <p>{areas.join(', ')}</p>

            <h4 className="font-semibold mt-4 mb-2 text-lg">Eixos Estruturantes</h4>
            <p>{axis.join(', ')}</p>

            <h4 className="font-semibold mt-4 mb-2 text-lg">Objetivos da ONU</h4>
            <div className="flex flex-wrap gap-1">
              {objectives.map((n, k) => (
                <ObjectiveIcon name={n} />
              ))}
            </div>
          </div>

        </div>
      </Container>
    </Authenticated>
  )
}

export default Index
